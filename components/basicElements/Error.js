import styles from "./error.module.css"
import cn from "classnames"

export default function Error({ children, className }) {
  return <div className={cn(styles.container, className)}>{children}</div>
}

module.exports = Error
