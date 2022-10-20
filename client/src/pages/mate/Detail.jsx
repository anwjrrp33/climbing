import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Post } from 'components/mate/Post';

const MateDetailPage = () => {
  // const { cragId } = useParams();
  const location = useLocation();
  const [post, setPost] = useState();

  const { id, mateInfo } = location.state;

  // useEffect(() => {
  //   axios
  //     .get() // 백엔드 url
  //     .then(({ success, data }) => {
  //       console.log(data);
  //       if (success === true) {
  //         console.log(data.list.filter(({ selectedId }) => selectedId === id));

  //         setPost(data.list.filter(({ selectedId }) => selectedId === id)[0]);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  return <Post post={mateInfo} />;
};

export default MateDetailPage;
