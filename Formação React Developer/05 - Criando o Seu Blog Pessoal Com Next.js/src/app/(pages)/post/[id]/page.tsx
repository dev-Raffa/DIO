import { supabase } from "@/services/supabase";
import { postProps } from "@/services/supabase/types";
import { Post } from "./components/post";
import { Container } from "@/app/components/container";
import { styles } from "./styles";

export default async function PostPage({ params }: { params: { id: string } }) {
  let { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", params.id);

  return (
    //@ts-ignore
    posts?.map((post: postProps, index) => {
      const paragrafos = post.text.split("\n");

      return (
        <Container key={index} {...styles.container}>
          <Container {...styles.article}>
            <Post.title>{post.title}</Post.title>
            {paragrafos.map((paragrafo, index) => {
              return <Post.text key={index}>{paragrafo}</Post.text>;
            })}
            <Post.date>
              {post.update_at
                ? new Date(post.update_at).toLocaleString("pt-br")
                : new Date(post.created_at).toLocaleString("pt-br")}
            </Post.date>
          </Container>
        </Container>
      );
    })
  );
}
