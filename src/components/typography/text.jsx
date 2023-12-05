import { Text as RadixText } from "@radix-ui/themes";

export default function Text({ children, ...props }) {
  return (
    <RadixText as="p" size="3" {...props}>
      {children}
    </RadixText>
  );
}
