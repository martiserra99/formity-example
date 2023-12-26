import styles from "./center.module.css";

import { Box } from "@radix-ui/themes";

export default function Center({ children }) {
  return (
    <Box className={styles.center} p="4">
      {children}
    </Box>
  );
}
