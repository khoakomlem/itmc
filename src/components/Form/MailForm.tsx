export function MailForm() {
  return (
    <div className='rounded-[30px] bg-[#F4F8FF] p-12'>
      <div className='flex flex-col'>
        <div className='relative flex flex-row'>
          <span className='gradient-text text-5xl font-[800] w-[70%]'>
            Liên hệ với ITMC
          </span>
          <input
            className='absolute right-[1rem] flex-none bg-[#1C74A6] rounded-[3rem] w-[30%] max-w-[10rem] h-[3rem] text-white'
            type='submit'
            value='Gửi'
          />
        </div>
        <div>
          <input
            className='w-[100%] rounded-xl bg-white my-3'
            type='text'
            placeholder='Họ tên của bạn'
          />
        </div>
        <div>
          <input
            className='w-[100%] rounded-xl bg-white my-3'
            type='text'
            placeholder='Email của bạn'
          />
        </div>
        <div>
          <textarea
            className='w-[100%] rounded-xl bg-white my-3 h-[10rem] min-h-[3rem] max-h-[20rem]'
            placeholder='Lời nhắc của bạn'
          />
        </div>
      </div>
    </div>
  );
}
