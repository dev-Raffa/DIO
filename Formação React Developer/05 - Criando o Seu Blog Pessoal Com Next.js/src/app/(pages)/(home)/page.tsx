import { Container } from "@/app/components/container";
import { supabase } from "@/services/supabase";
import { postProps } from "@/services/supabase/types";
import { styles } from "./styles";
import { Profile } from "./components/profile";
import { Post } from "./components/post";

export default async function HomePage() {
  let { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, description")
    .range(0, 9);

  return (
    <Container {...styles.container}>
      <Profile.wrap>
        <Profile.pictutre />
        <Profile.text />
      </Profile.wrap>
      <Container {...styles.sectionPost}>
        {posts &&
          //@ts-ignore
          posts.map((post: postProps, index) => {
            return (
              <Post.wrap key={index}>
                <Post.title>{post.title}</Post.title>
                <Post.description>{post.description}</Post.description>
                <Post.link href={`/post/${post.id}`}>continuar lendo</Post.link>
              </Post.wrap>
            );
          })}
      </Container>
    </Container>
  );
}
