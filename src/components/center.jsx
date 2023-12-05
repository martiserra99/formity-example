import styles from "./center.module.css";

import { Box } from "@radix-ui/themes";

export default function Center({ children }) {
  return <Box className={styles.center}>{children}</Box>;
}
