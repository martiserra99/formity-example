import styles from "./button.module.css";

import { Button as RadixButton } from "@radix-ui/themes";

export default function Button({ children, ...props }) {
  return (
    <RadixButton type="submit" className={styles.button} {...props}>
      {children}
    </RadixButton>
  );
}
