import { useForm, ValidationError } from '@formspree/react';

export function MailForm() {
  const [state, handleSubmit] = useForm('xbjvkjpv');
  if (state.succeeded) {
    return (
      <div className='rounded-[30px] bg-[#F4F8FF] px-8 pt-8 pb-7 text-lg'>
        Thanks for joining!
      </div>
    );
  }

  return (
    <div className='rounded-[30px] bg-[#F4F8FF] px-8 pt-12 pb-7'>
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit}>
          <div className='relative flex flex-row'>
            <span className='gradient-text text-5xl font-[800] w-[70%] py-1'>
              Liên hệ với ITMC
            </span>
            <div className='flex items-center'>
              <input
                className='absolute right-[0rem] flex-none bg-[#1C74A6] rounded-[3rem] w-[30%] max-w-[10rem] h-[3rem] text-white cursor-pointer active:scale-90 duration-150'
                type='submit'
                value='Gửi'
              />
            </div>
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
              placeholder='Lời nhắc của bạn'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
