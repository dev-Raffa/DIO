import { styles } from "../../styles";
import Image from "next/image";
import picture from "../../../../../../../../public/me_2.jpg";
import { Container } from "@/app/components/container";

export const PictureProfile = () => {
  return (
    <Container {...styles.picture}>
      <Image
        src={picture}
        alt="Picture of the autor"
        priority
        fill
        quality={90}
      />
    </Container>
  );
};
