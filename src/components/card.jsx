import styles from "./card.module.css";

import { Card as RadixCard } from "@radix-ui/themes";

export default function Card({ children }) {
  return (
    <RadixCard size="2" className={styles.card}>
      {children}
    </RadixCard>
  );
}
