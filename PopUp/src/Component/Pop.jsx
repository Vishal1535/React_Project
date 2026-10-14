export const Pop = ({ func1, title }) => {
  return (
    <div className='fixed inset-0 bg-black/50 flex justify-center items-center'>
      <div className='bg-black text-white w-1/2 h-1/2 flex flex-col justify-center items-center gap-5 relative'>
        
        <button
          className='absolute top-2 right-2'
          onClick={() => func1(false)}
        >
          ❌
        </button>

        <div>Are you sure to {title}</div>

        <div className='flex gap-5'>
          <button className='bg-green-500 px-3 py-2'>Yes</button>
          <button
            className='bg-red-500 px-3 py-2'
            onClick={() => func1(false)}
          >
            No
          </button>
        </div>

      </div>
    </div>
  )
}