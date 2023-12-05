import { Heading as RadixHeading } from "@radix-ui/themes";

export default function Heading({ children, ...props }) {
  return (
    <RadixHeading size="3" trim="both" {...props}>
      {children}
    </RadixHeading>
  );
}
