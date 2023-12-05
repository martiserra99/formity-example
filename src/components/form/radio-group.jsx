import styles from "./radio-group.module.css";

import { Flex, Text, RadioGroup as RadixRadioGroup } from "@radix-ui/themes";

export default function RadioGroup({ label, list, defaultValue }) {
  return (
    <Text as="label" className={styles.label}>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <RadixRadioGroup.Root defaultValue={defaultValue}>
        <Flex direction="column" gap="1">
          {list.map((item, index) => {
            return (
              <Text as="label" key={index} size="2">
                <Flex gap="2">
                  <RadixRadioGroup.Item value={item.value} />
                  {item.label}
                </Flex>
              </Text>
            );
          })}
        </Flex>
      </RadixRadioGroup.Root>
    </Text>
  );
}
