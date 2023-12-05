import Center from "./components/center";
import Card from "./components/card";
import Heading from "./components/typography/heading";
import Text from "./components/typography/text";

function App() {
  return (
    <Center>
      <Card>
        <Heading>Hello, world!</Heading>
        <Text>This is a card.</Text>
      </Card>
    </Center>
  );
}

export default App;
