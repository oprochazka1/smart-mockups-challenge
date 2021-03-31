import styles from "./tooltip.module.css"

export default function Tooltip({ children, message }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerChildren}>{children}</div>
      {message && <span>{message}</span>}
    </div>
  )
}

module.exports = Tooltip
