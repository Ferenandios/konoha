import { FC } from "react";
import { useAppSelector } from "../../hooks";

const Posts: FC = (): JSX.Element => {
  const { posts } = useAppSelector((state) => state.posts);
  return (
    <>
      <div>
        {posts.map((post) => (
          <>
            <p>{post.id}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default Posts;
