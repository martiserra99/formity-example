import styles from "./text-field.module.css";

import { useFormContext } from "react-hook-form";

import { Text, TextField as RadixTextField } from "@radix-ui/themes";

export default function TextField({ label, name, placeholder }) {
  const { register } = useFormContext();
  return (
    <Text as="label" className={styles.label}>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <RadixTextField.Input
        size="2"
        variant="surface"
        placeholder={placeholder}
        {...register(name)}
      />
    </Text>
  );
}
