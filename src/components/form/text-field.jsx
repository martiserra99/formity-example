import { Text, TextField as RadixTextField } from "@radix-ui/themes";

export default function TextField({ label, ...props }) {
  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <RadixTextField.Input size="2" variant="surface" {...props} />
    </label>
  );
}
