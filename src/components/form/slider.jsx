import styles from "./slider.module.css";

import { Controller, useFormContext } from "react-hook-form";
import { Flex, Text, Slider as RadixSlider } from "@radix-ui/themes";

export default function Slider({ label, name, min = 0, max = 100, step = 1 }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" className={styles.label}>
          <Flex justify="between">
            <Text as="div" size="2" mb="1" weight="bold">
              {label}
            </Text>
            <Text size="2">{field.value}</Text>
          </Flex>
          <RadixSlider
            size="2"
            variant="surface"
            value={[field.value]}
            onValueChange={([value]) => field.onChange(value)}
            onBlur={field.onBlur}
            ref={field.ref}
            min={min}
            max={max}
            step={step}
          />
        </Text>
      )}
    />
  );
}
