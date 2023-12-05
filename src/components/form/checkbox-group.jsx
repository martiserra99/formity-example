import styles from "./radio-group.module.css";

import { Flex, Text, Checkbox as RadixCheckbox } from "@radix-ui/themes";

export default function CheckboxGroup({ label, list }) {
  return (
    <Text as="label" className={styles.label}>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <Flex direction="column" gap="1">
        {list.map((item) => {
          return (
            <Text as="label" key={item.value} size="2">
              <Flex gap="2">
                <RadixCheckbox value={item.value} />
                {item.label}
              </Flex>
            </Text>
          );
        })}
      </Flex>
    </Text>
  );
}
