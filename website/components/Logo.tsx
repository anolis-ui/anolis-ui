import { FC } from "react";
import { SystemProps, x } from "@xstyled/emotion";

const Logo: FC<SystemProps> = ({ ...props }) => {
  return (
    <x.div
      fontSize="4rem"
      lineHeight="6rem"
      backgroundImage="gradient-to-r"
      gradientTo="#0171B6"
      gradientFrom="#45C264"
      backgroundClip="text"
      display="inline-flex"
      fontWeight="500"
      color="transparent"
      transition="font-size 300ms"
      fontFamily="heading-sans"
      {...props as any}
    >
      Anolis
    </x.div>
  );
};

export default Logo;
