import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Post } from 'components/crag/Post';

const CragDetailPage = () => {
  // const { cragId } = useParams();
  const location = useLocation();
  const [post, setPost] = useState();

  const { id, cragInfo } = location.state;

  useEffect(() => {
    axios
      .get() // 백엔드 url
      .then(({ success, data }) => {
        console.log(data);

        if (success) {
          console.log(data.list.filter(({ selectedId }) => selectedId === id));

          setPost(data.list.filter(({ selectedId }) => selectedId === id)[0]);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <Post post={cragInfo} />;
};

export default CragDetailPage;
