import { x } from "@xstyled/emotion";
import { FC } from "react";
import SketchLayout from "sketch/SketchLayout";
import { DropMenu } from ".";
import { sketch } from "sketch/index";
import { DropMenuButton } from "components/DropMenu/DropdownMenuButton";
import { DropMenuItem } from "components/DropMenu/DropdownMenuItem";
import { DropMenuList } from "components/DropMenu/DropdownMenuList";

const Normal: FC = sketch(() => {
  return (
    <SketchLayout title="Card">
      <x.div display="flex" justifyContent="space-around" spaceX="2" flexWrap="wrap">
        <DropMenu>
          {({ isExpanded }: { isExpanded: boolean }) => (
            <>
              <DropMenuButton w="15rem">
                {isExpanded ? "custom expanded" : "right closed"}
              </DropMenuButton>

              <DropMenuList>
                <DropMenuItem onSelect={() => console.log("aa")}>
                  aaa
                </DropMenuItem>
              </DropMenuList>
            </>
          )}
        </DropMenu>

        <DropMenu>
          {({ isExpanded }: { isExpanded: boolean }) => (
            <>
              <DropMenuButton customButton={<div>{isExpanded ? "custom expanded" : "left closed"}</div>} />

              <DropMenuList position="right">
                <DropMenuItem onSelect={() => console.log("selected")}>
                  aaa
                </DropMenuItem>
              </DropMenuList>
            </>
          )}
        </DropMenu>

        <DropMenu>
          {({ isExpanded }: { isExpanded: boolean }) => (
            <>
              <DropMenuButton customButton={<div>{isExpanded ? "custom expanded" : "exact width closed"}</div>} />

              <DropMenuList position="exactWidth">
                <DropMenuItem onSelect={() => console.log("selected")}>
                  aaa
                </DropMenuItem>
              </DropMenuList>
            </>
          )}
        </DropMenu>
      </x.div>
    </SketchLayout>
  );
});

export default Normal;
