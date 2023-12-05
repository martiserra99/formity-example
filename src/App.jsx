import { FormProvider, useForm } from "react-hook-form";

import { Flex, Grid } from "@radix-ui/themes";

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
import Range from "./components/form/range";
import Button from "./components/button";
import LayoutForm from "./components/layout-form";

function App() {
  const form = useForm({
    defaultValues: {
      name: "John Doe",
      message: "Hello, world!",
      sport: "option-1",
      gender: "man",
      hobbies: ["reading", "coding"],
      rating: 30,
      ages: [30, 40],
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
            <LayoutForm
              heading="Hello"
              text="Goodbye"
              fields={[<TextField key={0} name="name" label="Name" />]}
              buttons={[<Button key={0}>Next</Button>]}
            />
          </form>
        </FormProvider>
      </Card>
    </Center>
  );
}

export default App;
