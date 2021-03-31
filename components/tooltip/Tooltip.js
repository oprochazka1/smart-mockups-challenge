import styles from "./tooltip.module.css"
import cn from "classnames"

export default function Tooltip({ children, message, classes }) {
  return (
    <div className={cn(styles.container, classes?.tooltip)}>
      <div className={styles.containerChildren}>{children}</div>
      {message && <span>{message}</span>}
    </div>
  )
}

module.exports = Tooltip
