import styles from "./text-field.module.css";

import { Controller, useFormContext } from "react-hook-form";

import { Text, Grid, Button } from "@radix-ui/themes";

export default function Select({ label, name }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <Text as="label" className={styles.label}>
          <Text as="div" size="2" mb="1" weight="bold">
            {label}
          </Text>
          <Grid columns="2" gap="1">
            <Button size="2" variant="outline">
              Man
            </Button>
            <Button size="2" variant="solid">
              Woman
            </Button>
          </Grid>
        </Text>
      )}
    />
  );
}
