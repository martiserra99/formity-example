import styles from "./select.module.css";

import { Fragment } from "react";
import { Text, Select as RadixSelect } from "@radix-ui/themes";

export default function Select({ label, type, list }) {
  return (
    <Text as="label" className={styles.select}>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <RadixSelect.Root defaultValue="apple">
        <RadixSelect.Trigger variant="surface" className={styles.trigger} />
        <RadixSelect.Content position="popper">
          {type === "groups" ? renderGroups(list) : renderItems(list)}
        </RadixSelect.Content>
      </RadixSelect.Root>
    </Text>
  );
}

function renderGroups(items) {
  return items.map((item, index) => {
    return (
      <Fragment key={index}>
        <RadixSelect.Group>
          <RadixSelect.Label>{item.label}</RadixSelect.Label>
          {renderItems(item.items)}
        </RadixSelect.Group>
        {index < items.length - 1 && <RadixSelect.Separator />}
      </Fragment>
    );
  });
}

function renderItems(items) {
  return items.map((item, index) => {
    return (
      <RadixSelect.Item key={index} value={item.value} disabled={item.disabled}>
        {item.label}
      </RadixSelect.Item>
    );
  });
}
