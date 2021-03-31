import styles from "./grid.module.css"
import cn from "classnames"

const getPositiveNumber = (num) => {
  if (num < 0) {
    return 0
  }
  return num
}

export default function Grid({ children, classes }) {
  return <div className={cn(styles.container, classes?.grid)}>{children}</div>
}

module.exports = Grid
