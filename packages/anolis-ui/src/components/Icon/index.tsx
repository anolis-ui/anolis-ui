import styled, { SystemProps } from "@xstyled/emotion";
import renderComponent, { Renderable } from "utils/renderComponent";
import { anolisComponent } from "utils/anolisComponent";

export type IconProps = {
  svg?: Renderable;
  fill?: string;
  fillHover?: string;
  stroke?: string;
  strokeHover?: string;
} & SystemProps;

export const Icon = anolisComponent<"span", IconProps>("span", ({ svg, fill, fillHover, stroke, strokeHover, children, ...props }, ref) => {
  return (
    <IconStyle
      ref={ref as any}
      display="inline-block"
      verticalAlign="middle"
      maxHeight="100%"
      fill={fill}
      fillHover={fillHover}
      stroke={stroke}
      strokeHover={strokeHover}
      {...props as any}
    >
      {renderComponent(svg)}
      {children}
    </IconStyle>
  );
});

const IconStyle = styled.div<IconProps>`
  & > svg {
    path {
      fill: ${props => props.fill};
      stroke: ${props => props.stroke};
      transition: fill 300ms, stroke 300ms;
    }
  }

  &:hover {
    & > svg {
      path {
        fill: ${props => props.fillHover};
        stroke: ${props => props.strokeHover};
      }
    }
  }
`;
