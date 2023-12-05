import { Formity } from "formity";

import Center from "./components/center";
import Card from "./components/card";

const form = [
  {
    form: {
      defaultValues: {
        name: "",
        surname: "",
      },
      resolver: {
        name: [[{ _$ne: ["_$name", ""] }, "Required"]],
        surname: [[{ _$ne: ["_$surname", ""] }, "Required"]],
      },
      render: [
        {
          LayoutForm: {
            heading: "Formity",
            text: "A React form library",
            fields: [
              {
                TextField: {
                  name: "name",
                  label: "Name",
                  placeholder: "Enter your name",
                },
              },
              {
                TextField: {
                  name: "surname",
                  label: "Surname",
                  placeholder: "Enter your surname",
                },
              },
            ],
            buttons: [
              {
                Button: {
                  type: "submit",
                  children: "Submit",
                },
              },
            ],
          },
        },
      ],
    },
  },
  { return: { name: { $concat: ["$name", " ", "$surname"] } } },
];

function App() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Center>
      <Card>
        <Formity json={form} onSubmit={handleSubmit} />
      </Card>
    </Center>
  );
}

export default App;
