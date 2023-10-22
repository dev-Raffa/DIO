import { DescriptionPost } from "./pieces/description";
import { LinkPost } from "./pieces/link";
import { TitlePost } from "./pieces/title";
import { WrapPosts } from "./pieces/wrap";

export const Post = {
  wrap: WrapPosts,
  title: TitlePost,
  description: DescriptionPost,
  link: LinkPost,
};
