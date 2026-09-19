import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Something went wrong: {message}</p>
      {onRetry && (
        <button className={styles.button} onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}