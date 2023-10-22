import { containerProps } from "@/app/components/container/types";

const containerPage: containerProps = {
  as: "main",
  margin: "auto",
  aligny: "center",
  width: "90%",
  minwidth: "28rem",
};

const articlePage: containerProps = {
  as: "article",
  direction: "column",
};

export const styles = {
  container: containerPage,
  article: articlePage,
};
