import { FormProvider, useForm } from "react-hook-form";

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
import Slider from "./components/form/slider";
import Button from "./components/button";

function App() {
  const form = useForm({
    defaultValues: {
      name: "John Doe",
      message: "Hello, world!",
      sport: "option-1",
      gender: "man",
      hobbies: ["reading", "coding"],
      rating: 30,
    },
  });

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Center>
      <Card>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Box mb="4">
              <Heading>Hello, world!</Heading>
              <Text>This is a card.</Text>
            </Box>
            <Flex direction="column" gap="4">
              <TextField label="Name" name="name" placeholder="Enter a name" />
              <TextArea
                label="Message"
                name="message"
                placeholder="Enter a message"
              />
              <Select
                label="Sport"
                name="sport"
                placeholder="Select a sport"
                list={[
                  { label: "Option 1", value: "option-1" },
                  { label: "Option 2", value: "option-2" },
                  { label: "Option 3", value: "option-3", disabled: true },
                ]}
              />
              <RadioGroup
                label="Gender"
                name="gender"
                list={[
                  { label: "Man", value: "man" },
                  { label: "Woman", value: "woman" },
                ]}
              />
              <CheckboxGroup
                label="Hobbies"
                name="hobbies"
                list={[
                  { label: "Reading", value: "reading" },
                  { label: "Writing", value: "writing" },
                  { label: "Coding", value: "coding" },
                ]}
              />
              <Slider label="Rating" name="rating" min={25} max={50} step={5} />
              <Button>Click me</Button>
            </Flex>
          </form>
        </FormProvider>
      </Card>
    </Center>
  );
}

export default App;
