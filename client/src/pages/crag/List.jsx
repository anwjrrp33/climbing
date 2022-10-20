import { Card } from 'components/crag/Card';
import { cragList } from 'utils/mock/cragList';

const CragListPage = () => {
  const { success, data } = cragList;

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='flex flex-wrap mt-20 mx-12 gap-4'>
        {success && data.map((crag) => <Card key={crag.id} cragInfo={crag} />)}
      </div>
    </div>
  );
};

export default CragListPage;
