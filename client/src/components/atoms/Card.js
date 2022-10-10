export const Card = ({ cragInfo }) => {
  const { id, location, title, pricing } = cragInfo;

  return (
    <div className='w-60 h-60 bg-yellow-100 rounded-md overflow-hidden drop-shadow-lg hover: cursor-pointer'>
      <img className='w-60 h-40' src={`/images/image${id}.jpg`} alt='crag' />
      <div className='mt-2 mx-3'>
        <div>
          <div className='text-xs text-slate-600 uppercase font-bold tracking-wider'>
            {location}
          </div>
          <div className='font-bold text-slate-700 leading-snug'>
            <a href='url' className='hover:underline'>
              {title}
            </a>
          </div>
          <div className='mt-2 text-sm text-slate-600'>{pricing}</div>
        </div>
      </div>
    </div>
  );
};
