import { textProps, titleProps } from "@/app/components/typography/types";

const titlePost: titleProps = {
  level: "1",
  color: "black",
  align: "center",
  margin: "8rem 0 4rem 0",
};

const textPost: textProps = {
  color: "black",
  size: "1.8rem",
  align: "justify",
  margin: "0.5rem 0",
};

const datePost: textProps = {
  color: "gray",
  size: "1.4rem",
  align: "right",
  margin: "0.5rem 0 ",
};

export const styles = {
  title: titlePost,
  text: textPost,
  date: datePost,
};
