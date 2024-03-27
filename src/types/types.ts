export interface IRates {
  likes: number;
  dislikes: number;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  rates: IRates;
}

export interface IState {
  posts: IPost[];
}

export interface IContentProps {
  title: string;
  body: string;
  rates: IRates;
}
