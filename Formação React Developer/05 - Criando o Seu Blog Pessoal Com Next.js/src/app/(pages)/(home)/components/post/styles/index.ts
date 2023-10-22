import { containerProps } from "@/app/components/container/types";
import { textProps, titleProps } from "@/app/components/typography/types";

const wrapPost: containerProps = {
  as: "article",
  width: "30rem",
  height: "20rem ",
  borderradius: "1rem",
  boxshadow: "1px 1px 4px 0px #595959",
  direction: "column",
  padding: "1rem",
};

const titlePost: titleProps = {
  color: "black",
  level: "3",
};

const descriptionPost: textProps = {
  color: "black",
  size: "1.4rem",
};

const linkPost: textProps = {
  color: "blue",
  size: "1.2rem",
  align: "right",
};

export const styles = {
  wrap: wrapPost,
  title: titlePost,
  descripton: descriptionPost,
  link: linkPost,
};
