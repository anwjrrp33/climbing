import { Card } from 'components/crag/Card';
import { cragList } from 'utils/mock/cragList';

const CragListPage = () => {
  return (
    <div className='min-h-screen flex justify-center bg-slate-300'>
      <div className='flex flex-wrap mt-20 mx-20 gap-4'>
        {cragList.success &&
          cragList.data.map((crag) => <Card key={crag.id} cragInfo={crag} />)}
      </div>
    </div>
  );
};

export default CragListPage;
