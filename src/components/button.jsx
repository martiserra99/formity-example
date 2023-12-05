import { Button as RadixButton } from "@radix-ui/themes";

export default function Button({ children, ...props }) {
  return (
    <RadixButton type="submit" {...props}>
      {children}
    </RadixButton>
  );
}
