import { FC } from "react";
import { SystemProps, x } from "@xstyled/emotion";

const Logo: FC<SystemProps> = ({ ...props }) => {
  return (
    <x.div
      fontSize="4rem"
      lineHeight="6rem"
      background="-webkit-linear-gradient(#eee, #333)"
      backgroundClip="text"
      display="inline-flex"
      fontWeight="500"
      color="#45C264"
      transition="font-size 300ms"
      fontFamily="heading-sans"
      style={{
        "-webkitTextFillColor": "transparent",
        "background": "linear-gradient(to right, #45C264 0%, #0171B6 100%)",
        "-webkitBackgroundClip": "text"
      } as any}
      {...props as any}
    >
      Anolis
    </x.div>
  );
};

export default Logo;
