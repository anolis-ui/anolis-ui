import { x } from "@xstyled/emotion";
import { AnolisProvider, Button, Card } from "anolis-ui";
import { FC } from "react";

const Index: FC = () => {
  return (
    <AnolisProvider>
      <x.div fontSize="8xl">Hello</x.div>
      <Card title="Hello">World</Card>
    </AnolisProvider>
  );
};

export default Index;
