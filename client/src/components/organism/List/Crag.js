import { Card } from 'components/atoms/Card';
import { cragList } from 'utils/mockData';

export const CragList = () => {
  return (
    <div className='min-h-screen flex justify-center bg-slate-300'>
      <div className='flex flex-wrap mt-20 mx-20 gap-4'>
        {cragList.success &&
          cragList.data.map((crag) => (
            // <Link key={crag.id} to={`${crag.id}`}>
            <Card key={crag.id} cragInfo={crag} />
            // </Link>
          ))}
      </div>
    </div>
  );
};
