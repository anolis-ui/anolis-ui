import { FC } from "react";
import { x } from "@xstyled/emotion";
import { Button, Icon } from "anolis-ui";
import DiscordIcon from "components/icons/48/discord.svg";

const Discord: FC = () => {
  return (
    <x.div borderRadius="8" p="6" bg="discord" display="flex" justifyContent="space-between">
      <x.div fontWeight={500} color="#fff">
        <Icon svg={<DiscordIcon />} mr="6" />

        Need help or just wanna chat a bit?
      </x.div>

      <x.div>
        <Button
          href="https://discord.gg/3QSxbtfmUb"
          as="a"
          target="_blank"
          v="outline"
          bg="#fff"
          color="discord"
          hoverColor="#fff"
          hoverBg="discord"
          focusColor="#fff"
          focusBg="discord"
        >
          Join Anolis on Discord
        </Button>
      </x.div>
    </x.div>
  );
};

export default Discord;
