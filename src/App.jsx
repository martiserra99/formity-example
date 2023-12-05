import { FormProvider, useForm } from "react-hook-form";

import { Box, Flex } from "@radix-ui/themes";

import Center from "./components/center";
import Card from "./components/card";
import Heading from "./components/typography/heading";
import Text from "./components/typography/text";
import TextField from "./components/form/text-field";
import Button from "./components/button";

function App() {
  const form = useForm({
    defaultValues: {
      name: "John Doe",
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
              <TextField label="Name" name="name" />
              <Button>Click me</Button>
            </Flex>
          </form>
        </FormProvider>
      </Card>
    </Center>
  );
}

export default App;
