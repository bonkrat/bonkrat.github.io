import styles from "./marquee.module.css";

function times(length, cb) {
  return Array.from({ length }).reduce((acc, _curr, index) => {
    acc.push(cb(index));
    return acc;
  }, []);
}

export default function Marquee({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content} aria-hidden="true">
        {times(10, () => {
          return <>{children}</>;
        })}
      </div>
    </div>
  );
}
