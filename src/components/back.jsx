import { useFormityForm } from "formity";

import { Button } from "@radix-ui/themes";

export default function Back({ children }) {
  const { onBack } = useFormityForm();
  return (
    <Button type="button" variant="outline" onClick={onBack}>
      {children}
    </Button>
  );
}
