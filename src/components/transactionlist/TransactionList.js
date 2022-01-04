// styles
import styles from "./TransactionList.module.css";

export default function TransactionList({ transactions }) {
  return (
    <div className={styles.transactions}>
      {transactions.map((transaction) => {
        return (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
          </li>
        );
      })}
    </div>
  );
}
