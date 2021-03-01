import { x } from "@xstyled/styled-components";
import { FC } from "react";
import StoryLayout from "stories/StoryLayout";
import CloseSvg from "../icons/close.svg";
import { Icon } from ".";

export default {
  title: "Unthemed/Icon"
};

export const Normal: FC = () => {
  return (
    <StoryLayout>
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <Icon><CloseSvg /></Icon>
      </x.div>
    </StoryLayout>
  );
};
