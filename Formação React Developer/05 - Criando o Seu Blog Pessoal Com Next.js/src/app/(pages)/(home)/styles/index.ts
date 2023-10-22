import { containerProps } from "@/app/components/container/types";

const container: containerProps = {
  as: "main",
  direction: "column",
  aligny: "center",
  alignx: "center",
  margin: "5rem 0 0 0 ",
  gap: "4rem",
};

const posts: containerProps = {
  as: "section",
  direction: "column",
  alignx: "center",
  aligny: "center",
  gap: "2rem",
};

export const styles = {
  container: container,
  sectionPost: posts,
};
