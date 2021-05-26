import { FC } from "react";
import { x } from "@xstyled/emotion";
import { Button, Icon } from "anolis-ui";
import DiscordIcon from "components/icons/48/discord.svg";

const Discord: FC = () => {
  return (
    <x.div borderRadius="8" p="6" bg="discord" display="flex" justifyContent="space-between" alignItems="center">
      <x.div fontWeight={500} color="#fff">
        <Icon svg={<DiscordIcon />} mr="6" />

        Need help or just wanna chat a bit?
      </x.div>

      <Button
        href="https://discord.gg/3QSxbtfmUb"
        as="a"
        target="_blank"
        v="outline"
        bg={{ _: "#fff", hover: "discord", focus: "discord" }}
        color={{ _: "discord", hover: "#fff", focus: "#fff" } as any}
      >
        Join Anolis on Discord
      </Button>
    </x.div>
  );
};

export default Discord;
