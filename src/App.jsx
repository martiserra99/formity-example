import { Formity } from "formity";

import Center from "./components/center";
import Card from "./components/card";
import { Box } from "@radix-ui/themes";

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
            heading: "What is your name?",
            text: "Fill in your name and surname",
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
                  children: "Next",
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    form: {
      defaultValues: {
        age: 25,
      },
      resolver: {},
      render: [
        {
          LayoutForm: {
            heading: "What is your age?",
            text: "Select your age",
            fields: [
              {
                Slider: {
                  name: "age",
                  label: "Age",
                  min: 1,
                  max: 100,
                  step: 1,
                },
              },
            ],
            buttons: [
              {
                Button: {
                  type: "submit",
                  children: "Next",
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    cond: {
      if: { $gte: ["$age", 18] },
      then: [
        {
          form: {
            defaultValues: {
              drivingLicense: false,
            },
            resolver: {},
            render: [
              {
                LayoutForm: {
                  heading: "Do you have a driving license?",
                  text: "Select your answer",
                  fields: [
                    {
                      RadioGroup: {
                        name: "drivingLicense",
                        label: "Driving license",
                        list: [
                          { value: false, label: "No" },
                          { value: true, label: "Yes" },
                        ],
                      },
                    },
                  ],
                  buttons: [
                    {
                      Button: {
                        type: "submit",
                        children: "Next",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      else: [{ variables: { drivingLicense: false } }],
    },
  },
  {
    variables: {
      sportsList: [
        { value: "football", label: "Football" },
        { value: "basketball", label: "Basketball" },
        { value: "tennis", label: "Tennis" },
      ],
    },
  },
  {
    return: {
      name: { $concat: ["$name", " ", "$surname"] },
      age: "$age",
      drivingLicense: "$drivingLicense",
    },
  },
];

function App() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Box>
      <Center>
        <Card>
          <Formity json={form} onSubmit={handleSubmit} />
        </Card>
      </Center>
    </Box>
  );
}

export default App;
