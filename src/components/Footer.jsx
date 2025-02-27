import styles from "./footer.module.css";
export default function Footer({ completed, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed todo : {completed}</span>
      <span className={styles.item}>Total todos : {totalTodos} </span>
    </div>
  );
}
