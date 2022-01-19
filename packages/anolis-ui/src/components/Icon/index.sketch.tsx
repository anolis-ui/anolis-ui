import { x } from "@xstyled/emotion";
import { FC } from "react";
import { sketch, SketchLayout } from "sketch";

import { Icon } from ".";

const Normal: FC = sketch(() => {
  return (
    <SketchLayout title="Icon">
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <Icon svg={DownIcon} />

        <Icon svg={DownIcon} color="red" size={16} />
        <Icon svg={DownIcon} color={{ hover: "green" }} size={16} />

        <Icon svg={DownIcon} mt="1rem" />
      </x.div>
    </SketchLayout>
  );
});

export default Normal;

const DownIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    {/* eslint-disable-next-line max-len */}
    <path fill="#888AA5" d="M2.29289322,4.29289322 C2.65337718,3.93240926 3.22060824,3.90467972 3.61289944,4.20970461 L3.70710678,4.29289322 L8,8.585 L12.2928932,4.29289322 C12.6533772,3.93240926 13.2206082,3.90467972 13.6128994,4.20970461 L13.7071068,4.29289322 C14.0675907,4.65337718 14.0953203,5.22060824 13.7902954,5.61289944 L13.7071068,5.70710678 L8.70710678,10.7071068 C8.34662282,11.0675907 7.77939176,11.0953203 7.38710056,10.7902954 L7.29289322,10.7071068 L2.29289322,5.70710678 C1.90236893,5.31658249 1.90236893,4.68341751 2.29289322,4.29289322 Z" />
  </svg>
);
