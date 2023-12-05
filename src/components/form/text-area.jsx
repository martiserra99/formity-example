import styles from "./text-area.module.css";

import { Text, TextArea as RadixTextArea } from "@radix-ui/themes";

export default function TextArea({ label, defaultValue }) {
  return (
    <Text as="label" className={styles.label}>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <RadixTextArea size="2" variant="surface" defaultValue={defaultValue} />
    </Text>
  );
}
