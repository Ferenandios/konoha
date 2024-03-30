import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks";
import Button from "./Button/Button";
import TextInput, { StyledDiv } from "./Input.styles";

const Input: FC = (): JSX.Element => {
  const { posts } = useAppSelector((state) => state.posts);
  const [search, setSearch] = useState("");

  const [filteredPosts, setFilterPosts] = useState(posts);

  useEffect(() => {
    setFilterPosts(posts.filter((post) => post.title === search));
  }, [search, posts]);
  return (
    <>
      <StyledDiv>
        <TextInput
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div>
          {!filteredPosts.length
            ? posts.map((post) => <h3>{post.title}</h3>)
            : filteredPosts.map((post) => <h3>{post.title}</h3>)}
        </div>
        <Button />
      </StyledDiv>
    </>
  );
};

export default Input;
