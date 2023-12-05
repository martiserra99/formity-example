import styles from "./text-area.module.css";

import { useFormContext } from "react-hook-form";

import { Text, TextArea as RadixTextArea } from "@radix-ui/themes";

export default function TextArea({ label, name, placeholder }) {
  const { register } = useFormContext();
  return (
    <Text as="label" className={styles.label}>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <RadixTextArea
        size="2"
        variant="surface"
        placeholder={placeholder}
        {...register(name)}
      />
    </Text>
  );
}
