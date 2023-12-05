import styles from "./radio-group.module.css";

import { Controller, useFormContext } from "react-hook-form";

import {
  Box,
  Flex,
  Text,
  RadioGroup as RadixRadioGroup,
} from "@radix-ui/themes";

export default function RadioGroup({ label, name, list }) {
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
                <Text
                  as="label"
                  key={index}
                  size="2"
                  {...(error && { color: "red" })}
                >
                  <Flex gap="2">
                    <RadixRadioGroup.Item value={item.value} />
                    {item.label}
                  </Flex>
                </Text>
              ))}
            </Flex>
          </RadixRadioGroup.Root>
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
