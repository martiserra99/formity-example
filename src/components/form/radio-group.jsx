import styles from "./radio-group.module.css";

import { Controller, useFormContext } from "react-hook-form";

import { Flex, Text, RadioGroup as RadixRadioGroup } from "@radix-ui/themes";

export default function RadioGroup({ label, name, list }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" className={styles.label}>
          <Text as="div" size="2" mb="1" weight="bold">
            {label}
          </Text>
          <RadixRadioGroup.Root
            size="2"
            variant="surface"
            value={field.value}
            onBlur={field.onBlur}
            onValueChange={(value) => field.onChange(value)}
            ref={field.ref}
          >
            <Flex direction="column" gap="1">
              {list.map((item, index) => (
                <Text as="label" key={index} size="2">
                  <Flex gap="2">
                    <RadixRadioGroup.Item value={item.value} />
                    {item.label}
                  </Flex>
                </Text>
              ))}
            </Flex>
          </RadixRadioGroup.Root>
        </Text>
      )}
    />
  );
}
