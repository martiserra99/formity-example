import "@radix-ui/themes/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";

import { Theme } from "@radix-ui/themes";

import { FormityProvider } from "formity";

import LayoutForm from "./components/layout-form";
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

const components = {
  LayoutForm,
  Heading,
  Text,
  TextField,
  TextArea,
  Select,
  RadioGroup,
  CheckboxGroup,
  Slider,
  Range,
  Button,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <FormityProvider components={components}>
        <App />
      </FormityProvider>
    </Theme>
  </React.StrictMode>
);
