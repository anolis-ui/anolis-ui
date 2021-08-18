import styled, { x } from "@xstyled/emotion";
import { system } from "@xstyled/system";
import { anolisComponent, AnolisComponentProps } from "utils/anolisComponent";
import renderComponent, { Renderable } from "utils/renderComponent";

export type IconProps = AnolisComponentProps<"span", {
  svg?: Renderable;
  fill?: string;
  fillHover?: string;
  stroke?: string;
  strokeHover?: string;
}>;

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
      {...props}
    >
      {renderComponent(svg)}
      {children}
    </IconStyle>
  );
});

const IconStyle = styled(x.div)<IconProps>`
  ${system};

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
