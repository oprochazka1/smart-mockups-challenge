import styles from "./grid.module.css"
import cn from "classnames"

const getColumn = (children, column, columns) => {
  const rows = Math.floor(children.length / columns)
  const residue = children.length % columns
  return children.slice(
    column * rows + (residue > column ? column : residue),
    column * rows + rows + (residue > column ? column + 1 : residue)
  )
}

const getFlexStyle = (columns) => {
  return { flexBasis: 100 / columns + "%" }
}

export default function Grid({ children, columns, classes }) {
  const columnsArray = [...Array(columns)].map((_, i) => i)
  columns = columns || 1

  return (
    <div className={cn(styles.container, classes?.grid)}>
      {columnsArray.map((i) => (
        <div key={i} style={getFlexStyle(columns)} className={cn(styles.column, classes?.column)}>
          {getColumn(children, i, columns)}
        </div>
      ))}
    </div>
  )
}

module.exports = Grid
