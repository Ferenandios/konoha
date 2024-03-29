import { FC } from "react";
import Text from "./Text/Text";
import Posts from "./Posts/Posts";
import Search from "./Search/Search";

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
