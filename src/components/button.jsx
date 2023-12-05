import { Button as RadixButton } from "@radix-ui/themes";

export default function Button({ children, ...props }) {
  return <RadixButton {...props}>{children}</RadixButton>;
}
