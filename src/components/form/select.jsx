import styles from "./select.module.css";

import { Controller, useFormContext } from "react-hook-form";
import { Text, Select as RadixSelect } from "@radix-ui/themes";

import Label from "../label";
import ErrorMessage from "../error-message";

export default function Select({ label, name, list }) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name];
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" className={styles.select}>
          <Label as="div" mb="1" error={error}>
            {label}
          </Label>
          <RadixSelect.Root
            value={field.value}
            onValueChange={(value) => field.onChange(value)}
          >
            <RadixSelect.Trigger
              className={styles.trigger}
              onBlur={field.onBlur}
              ref={field.ref}
            />
            <RadixSelect.Content position="popper">
              {list.map((item) => (
                <RadixSelect.Item
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </RadixSelect.Item>
              ))}
            </RadixSelect.Content>
          </RadixSelect.Root>
          {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
        </Text>
      )}
    />
  );
}
