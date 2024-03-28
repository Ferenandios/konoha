import { FC } from "react";
import Text from "./BlogPage/Text/Text";
import Posts from "./BlogPage/Posts/Posts";
import Search from "./BlogPage/Search/Search";

const BlogPage: FC = (): JSX.Element => {
  return (
    <>
      <Text />
      <Search />
      <Posts />
    </>
  );
};

export default BlogPage;
