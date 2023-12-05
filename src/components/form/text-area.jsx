import { Text, TextArea as RadixTextArea } from "@radix-ui/themes";

export default function TextArea({ label, ...props }) {
  return (
    <label>
      <Text as="div" size="2" mb="1" weight="bold">
        {label}
      </Text>
      <RadixTextArea size="2" variant="surface" {...props} />
    </label>
  );
}
