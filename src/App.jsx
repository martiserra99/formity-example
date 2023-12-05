import { Formity } from "formity";

import Center from "./components/center";
import Card from "./components/card";
import { useState } from "react";

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
      questions: {
        football: "What days do you play football?",
        basketball: "What days do you play basketball?",
        tennis: "What days do you play tennis?",
      },
    },
  },
  {
    form: {
      defaultValues: {
        sports: [],
      },
      resolver: {
        sports: [[{ _$ne: [{ _$size: "_$sports" }, 0] }, "At least one sport"]],
      },
      render: [
        {
          LayoutForm: {
            heading: "What sports do you like?",
            text: "Select your sports",
            fields: [
              {
                CheckboxGroup: {
                  name: "sports",
                  label: "Sports",
                  list: "$sportsList",
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
  { variables: { i: 0 } },
  {
    loop: {
      while: { $lt: ["$i", { $size: "$sports" }] },
      do: [
        { variables: { sport: { $arrayElemAt: ["$sports", "$i"] } } },
        {
          variables: {
            question: { $getField: { field: "$sport", input: "$questions" } },
          },
        },
        {
          form: {
            defaultValues: { days: [] },
            resolver: {
              days: [[{ _$ne: [{ _$size: "_$days" }, 0] }, "At least one day"]],
            },
            render: [
              {
                LayoutForm: {
                  heading: "$question",
                  text: "Select the days",
                  fields: [
                    {
                      CheckboxGroup: {
                        name: "days",
                        label: "Days",
                        list: [
                          { value: "monday", label: "Monday" },
                          { value: "tuesday", label: "Tuesday" },
                          { value: "wednesday", label: "Wednesday" },
                          { value: "thursday", label: "Thursday" },
                          { value: "friday", label: "Friday" },
                          { value: "saturday", label: "Saturday" },
                          { value: "sunday", label: "Sunday" },
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
        {
          variables: {
            sports: {
              $map: {
                input: "$sports",
                as: "sport",
                in: {
                  $cond: {
                    if: { $eq: ["$$sport", "$sport"] },
                    then: { sport: "$$sport", days: "$days" },
                    else: "$$sport",
                  },
                },
              },
            },
            i: { $add: ["$i", 1] },
          },
        },
      ],
    },
  },
  {
    return: {
      name: { $concat: ["$name", " ", "$surname"] },
      age: "$age",
      drivingLicense: "$drivingLicense",
      sports: "$sports",
    },
  },
];

function App() {
  const [data, setData] = useState(null);

  function handleSubmit(data) {
    setData(data);
  }

  return (
    <Center>
      <Card>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <Formity json={form} onSubmit={handleSubmit} />
        )}
      </Card>
    </Center>
  );
}

export default App;
