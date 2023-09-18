import { useForm, ValidationError } from '@formspree/react';

export function MailForm() {
  const [state, handleSubmit] = useForm('xbjvkjpv');
  if (state.succeeded) {
    return (
      <div className='flex items-center justify-center h-[66vh]'>
        <div className='rounded-[30px] bg-[#F4F8FF] px-8 pt-8 pb-7 text-lg'>
          Cám ơn bạn đã gửi form! Câu lạc bộ sẽ liên hệ với bạn trong thời gian
          sớm nhất
        </div>
      </div>
    );
  }

  return (
    <div className='rounded-[30px] bg-[#F4F8FF] px-8 pt-12 pb-7 mt-8'>
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit}>
          <div className='relative flex flex-row'>
            <span className='gradient-text title font-[800] w-[100%] py-1'>
              Liên hệ với ITMC
            </span>
          </div>
          <div>
            <ValidationError
              className='text-red-500 mt-2'
              prefix='Name'
              field='name'
              errors={state.errors}
            />
            <input
              required
              id='name'
              name='name'
              className='w-[100%] rounded-xl bg-white my-3'
              type='text'
              placeholder='Họ tên của bạn'
            />
          </div>
          <div>
            <ValidationError
              className='text-red-500 mt-2'
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <input
              required
              id='email'
              name='email'
              className='w-[100%] rounded-xl bg-white my-3'
              type='email'
              placeholder='Email của bạn'
            />
          </div>

          <div>
            <ValidationError
              className='text-red-500 mt-2'
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <textarea
              required
              id='message'
              name='message'
              className='w-[100%] rounded-xl bg-white my-3 h-[10rem] min-h-[3rem] max-h-[20rem] p-3'
              placeholder='Lời nhắn của bạn'
            />
          </div>
          <div className='flex items-center align-center'>
            <input
              className=' bg-[#1C74A6] rounded-[3rem] w-[30%] max-w-[10rem] h-[3rem] text-white cursor-pointer active:scale-90 duration-150'
              type='submit'
              value='Gửi'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
