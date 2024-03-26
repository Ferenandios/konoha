export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
}

export interface IState {
  posts: IPost[];
}
