import styles from "./listbox.module.css";

import { Controller, useFormContext } from "react-hook-form";
import { Text, Select } from "@radix-ui/themes";

export default function Listbox({ label, name, list }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" className={styles.select}>
          <Text as="div" size="2" mb="1" weight="bold">
            {label}
          </Text>
          <Select.Root
            value={field.value}
            onValueChange={(value) => field.onChange(value)}
          >
            <Select.Trigger
              variant="surface"
              className={styles.trigger}
              onBlur={field.onBlur}
              ref={field.ref}
            />
            <Select.Content position="popper">
              {list.map((item) => (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Text>
      )}
    />
  );
}
