import styles from "./select.module.css";

import { Controller, useFormContext } from "react-hook-form";
import { Text, Select as RadixSelect } from "@radix-ui/themes";

export default function Select({ label, name, list }) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name];
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" className={styles.select}>
          <Text
            as="div"
            size="2"
            mb="1"
            weight="bold"
            {...(error && { color: "red" })}
          >
            {label}
          </Text>
          <RadixSelect.Root
            value={field.value}
            onValueChange={(value) => field.onChange(value)}
          >
            <RadixSelect.Trigger
              variant="surface"
              className={styles.trigger}
              onBlur={field.onBlur}
              ref={field.ref}
              {...(error && { color: "red" })}
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
          {error && (
            <Text as="p" size="2" color="red" mt="1">
              {error.message}
            </Text>
          )}
        </Text>
      )}
    />
  );
}
