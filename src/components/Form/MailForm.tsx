export function MailForm() {
  return (
    <div className='rounded-[30px] bg-[#F4F8FF]'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-row'>
          <span className='flex-none gradient-text text-[48px] font-[800]'>
            Liên hệ với ITMC
          </span>
          <input
            className='flex-none bg-[#1C74A6] rounded-[30px] w-[100px]'
            type='submit'
            value='Gửi'
          />
        </div>
        <div>
          <input
            className='bg-[#1C74A6] rounded-11px'
            type='text'
            placeholder='Họ tên của bạn'
          />
        </div>
        <div>
          <input
            className='bg-[#1C74A6] rounded-11px'
            type='text'
            placeholder='Email của bạn'
          />
        </div>
        <div>
          <input
            className='bg-[#1C74A6] rounded-11px'
            type='text'
            placeholder='Lời nhắn của bạn'
          />
        </div>
      </div>
    </div>
  );
}
