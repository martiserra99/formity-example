import styles from "./text-field.module.css";

import { useFormContext } from "react-hook-form";

import { Text, TextField as RadixTextField } from "@radix-ui/themes";

export default function TextField({ label, name, placeholder }) {
  const { register, formState } = useFormContext();
  const error = formState.errors[name];
  return (
    <Text as="label" className={styles.label}>
      <Text
        as="div"
        size="2"
        mb="1"
        weight="bold"
        {...(error && { color: "red" })}
      >
        {label}
      </Text>
      <RadixTextField.Input
        size="2"
        variant="surface"
        placeholder={placeholder}
        {...register(name)}
        {...(error && { color: "red" })}
      />
      {error && (
        <Text as="p" size="2" color="red" mt="1">
          {error.message}
        </Text>
      )}
    </Text>
  );
}
