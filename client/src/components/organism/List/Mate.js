import { SubHeader } from 'components/atoms/common/SubHeader';

export const MateList = () => {
  return (
    <>
      <SubHeader
        title='트라이캐치를 함께 할 클루를 모집해보세요'
        description='지역별 검색 / 댓글로 지원'
      />

      <section>
        <div name='category'>
          <div name='status'>
            <ul>
              <li>전체</li>
              <li>모집중</li>
              <li>모집완료</li>
            </ul>
            <div name='divider' />
          </div>

          <div name='search'>
            <label for='search'>지역별/키워드로 검색해보세요</label>
            <input
              id='search'
              placeholder='예) 서울시 용산구, 홀드, 스피드 등'
            />
          </div>
        </div>

        <div name='post-list'>
          <div name='action'>
            <ul name='filter'>
              <li>
                <span>•</span>
                최신순
              </li>
              <li>
                <span>•</span>
                댓글많은순
              </li>
            </ul>

            <div name='create'>
              <button>글쓰기</button>
            </div>
          </div>

          <div name='post'></div>
        </div>
      </section>
    </>
  );
};
