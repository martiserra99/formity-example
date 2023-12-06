import styles from "./text-area.module.css";

import { useFormContext } from "react-hook-form";

import { Text, TextArea as RadixTextArea } from "@radix-ui/themes";

import Label from "../label";
import ErrorMessage from "../error-message";

export default function TextArea({ label, name, placeholder }) {
  const { register, formState } = useFormContext();
  const error = formState.errors[name];
  return (
    <Text as="label" className={styles.label}>
      <Label as="div" mb="1" error={error}>
        {label}
      </Label>
      <RadixTextArea
        placeholder={placeholder}
        {...register(name)}
        {...(error && { color: "red" })}
      />
      {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
    </Text>
  );
}
