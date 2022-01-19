import styled, { x, css, SystemProp, DefaultTheme, ThemeSize } from "@xstyled/emotion";
import { ReactElement } from "react";
import { AnolisBaseProps, anolisComp } from "utils/anolisComponent";
import renderComponent, { Renderable } from "utils/renderComponent";

export type IconProps = AnolisBaseProps<"span"> & {
  svg?: Renderable;
  disableCurrentColor?: boolean;

  size?: SystemProp<ThemeSize, DefaultTheme>;
};

type IconComponent = (props: IconProps) => ReactElement | null;

export const Icon: IconComponent = anolisComp("Icon", ({ svg, children, size, ...props }, ref) => {
  return (
    <IconStyle ref={ref} {...props} {...size && { w: size, h: size }}>
      {renderComponent(svg)}
      {children}
    </IconStyle>
  );
});

const IconStyle = styled(x.span)<{ disableCurrentColor?: boolean }>`
  & > svg {
    width: ${p => p.h || p.w ? "100%" : "initial"};
    height: ${p => p.h || p.w ? "100%" : "initial"};

    ${p => !p.disableCurrentColor && css`
      path {
        fill: currentColor;
        stroke: currentColor;
      }
    `}
  }

  &:hover {
    & > svg {
      ${p => !p.disableCurrentColor && css`
        path {
          fill: currentColor;
          stroke: currentColor;
        }
      `}
    }
  }
`;
