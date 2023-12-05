import Center from "./components/center";
import Card from "./components/card";
import Heading from "./components/typography/heading";
import Text from "./components/typography/text";
import TextField from "./components/form/text-field";
import Button from "./components/button";

function App() {
  return (
    <Center>
      <Card>
        <Heading>Hello, world!</Heading>
        <Text>This is a card.</Text>
        <TextField label="Name" defaultValue="Marti" />
        <Button>Click me</Button>
      </Card>
    </Center>
  );
}

export default App;
