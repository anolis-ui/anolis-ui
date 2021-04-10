import { FC } from "react";
import styled, { SystemProps, x } from "@xstyled/emotion";

const Logo: FC<SystemProps> = ({ ...props }) => {
  return (
    <LogoStyle
      position="relative"
      fontSize="4rem"
      lineHeight="6rem"
      display="inline-flex"
      fontWeight="500"
      color="transparent"
      transition="font-size 300ms"
      fontFamily="heading-sans"
      {...props as any}
    >
      <div>Anolis</div>
    </LogoStyle>

  );
};

export default Logo;

const LogoStyle = styled.divBox`
  div {
    background: linear-gradient(to right, #45C264 0%, #0171B6 50%, #45C264 100%);
    background-size: 200% auto;
    color: #45C264;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 6s linear infinite;

    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }
`;
