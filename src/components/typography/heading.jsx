import { Heading as RadixHeading } from "@radix-ui/themes";

export default function Heading({ children, ...props }) {
  return (
    <RadixHeading size="5" {...props}>
      {children}
    </RadixHeading>
  );
}
