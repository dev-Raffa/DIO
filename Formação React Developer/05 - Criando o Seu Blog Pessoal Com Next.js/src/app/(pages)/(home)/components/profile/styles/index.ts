import { containerProps } from "@/app/components/container/types";
import { textProps } from "@/app/components/typography/types";

const wrapProfile: containerProps = {
  as: "section",
  direction: "column",
  alignx: "center",
  aligny: "center",
  gap: "1.5rem",
};

const pictureProfile: containerProps = {
  as: "figure",
  position: "relative",
  width: "20rem",
  height: "20rem",
  borderradius: "50%",
  overflow: "hidden",
  margin: "auto",
};

const textProfile: textProps = {
  color: "black",
  size: "1.4rem",
  weight: "300",
};

export const styles = {
  wrap: wrapProfile,
  picture: pictureProfile,
  text: textProfile,
};
