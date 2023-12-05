import styles from "./radio-group.module.css";

import { Controller, useFormContext } from "react-hook-form";
import { Flex, Text, Checkbox as RadixCheckbox } from "@radix-ui/themes";

export default function CheckboxGroup({ label, name, list }) {
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
          <Flex direction="column" gap="1">
            {list.map((item) => {
              return (
                <Text as="label" key={item.value} size="2">
                  <Flex gap="2">
                    <RadixCheckbox
                      size="2"
                      variant="surface"
                      value={item.value}
                      checked={field.value.includes(item.value)}
                      onCheckedChange={() => {
                        if (field.value.includes(item.value)) {
                          const v = field.value.filter((v) => v !== item.value);
                          field.onChange(v);
                        } else {
                          const v = [...field.value, item.value];
                          field.onChange(v);
                        }
                      }}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                    {item.label}
                  </Flex>
                </Text>
              );
            })}
          </Flex>
        </Text>
      )}
    />
  );
}
