export interface IRates {
  liked: number;
  disliked: number;
}

export type userRateType = "liked" | "disliked" | null;

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  image?: string;
  rates?: IRates;
  userRate?: userRateType;
}

export interface IState {
  posts: IPost[];
  showedPage: "blog" | "post";
}

export interface IContentProps {
  title: string;
  body: string;
  rates: IRates;
  userRate: userRateType;
}

export interface IRateProps {
  type: "likes" | "dislikes";
  count: number;
  userRate: userRateType;
}

export interface IPostTitleProps {
  title: string;
  rates: IRates;
  userRate: userRateType;
}
