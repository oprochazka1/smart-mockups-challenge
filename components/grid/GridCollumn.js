import styles from "./gridCollumn.module.css"
import cn from "classnames"

export default function GridColumn({ children, classes }) {
  return <div className={cn(styles.container, classes?.container)}>{children}</div>
}

module.exports = GridColumn
