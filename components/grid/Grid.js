import styles from "./grid.module.css"
import cn from "classnames"

const getPositiveNumber = (num) => {
  if (num < 0) {
    return 0
  }
  return num
}

export default function Grid({ children, columns, classes }) {
  const rows = Math.floor(children.length / columns)
  const residium = children.length % columns
  const columnsArray = [...Array(columns)].map((_, i) => i)

  console.log(columnsArray)

  return (
    <div className={cn(styles.container, classes?.grid)}>
      {columnsArray.map((i) => (
        <div key={i} className={cn(styles.column, { container: classes?.column })}>
          {children.slice(
            i * rows + (residium > i ? i : residium),
            i * rows + rows + (residium > i ? i + 1 : residium)
          )}
        </div>
      ))}
    </div>
  )
}

module.exports = Grid
