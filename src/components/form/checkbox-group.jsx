import styles from "./radio-group.module.css";

import { Controller, useFormContext } from "react-hook-form";
import { Flex, Text, Checkbox as RadixCheckbox, Box } from "@radix-ui/themes";

export default function CheckboxGroup({ label, name, list }) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name];
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          <Text
            as="label"
            size="2"
            mb="1"
            weight="bold"
            className={styles.label}
            {...(error && { color: "red" })}
          >
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
                      {...(error && { color: "red" })}
                    />
                    {item.label}
                  </Flex>
                </Text>
              );
            })}
          </Flex>
          {error && (
            <Text as="p" size="2" color="red" mt="1">
              {error.message}
            </Text>
          )}
        </Box>
      )}
    />
  );
}
