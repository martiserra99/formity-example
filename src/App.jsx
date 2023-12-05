import { Box, Flex } from "@radix-ui/themes";

import Center from "./components/center";
import Card from "./components/card";
import Heading from "./components/typography/heading";
import Text from "./components/typography/text";
import TextField from "./components/form/text-field";
import TextArea from "./components/form/text-area";
import Select from "./components/form/select";
import RadioGroup from "./components/form/radio-group";
import CheckboxGroup from "./components/form/checkbox-group";
import Button from "./components/button";

function App() {
  return (
    <Center>
      <Card>
        <Box mb="4">
          <Heading>Hello, world!</Heading>
          <Text>This is a card.</Text>
        </Box>
        <Flex direction="column" gap="4">
          <TextField label="Name" defaultValue="Marti" />
          <TextArea label="Message" defaultValue="Hello, world!" />
          <Select
            label="Fruit"
            type="items"
            list={[
              { value: "apple", label: "Apple" },
              { value: "orange", label: "Orange", disabled: true },
            ]}
            defaultValue="apple"
          />
          <Select
            label="Fruit"
            type="groups"
            list={[
              {
                label: "Fruits",
                items: [
                  { value: "apple", label: "Apple", disabled: true },
                  { value: "orange", label: "Orange" },
                ],
              },
              {
                label: "Vegetables",
                items: [
                  { value: "carrot", label: "Carrot", disabled: true },
                  { value: "celery", label: "Celery" },
                ],
              },
            ]}
            defaultValue="orange"
          />
          <RadioGroup
            label="Toggle"
            list={[
              { value: "man", label: "Man" },
              { value: "woman", label: "Woman" },
            ]}
            defaultValue="man"
          />
          <CheckboxGroup
            label="Fruits"
            list={[
              { value: "apple", label: "Apple" },
              { value: "orange", label: "Orange" },
            ]}
          />
          <Button>Click me</Button>
        </Flex>
      </Card>
    </Center>
  );
}

export default App;
