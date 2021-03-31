import Grid from "./grid/Grid"
import styles from "./filter.module.css"
import Tooltip from "./tooltip/Tooltip"
import cn from "classnames"

export default function Filter({ items, click, columns, tooltip, chosen }) {
  return (
    <Grid className={styles.container} columns={columns}>
      {items.map((item, key) => (
        <Tooltip key={key} message={item.tooltip}>
          <div
            className={cn(styles.filterItem, { [styles.focusedItem]: chosen === item.id })}
            onClick={() => click(item.id)}
          >
            {item.title}
          </div>
        </Tooltip>
      ))}
    </Grid>
  )
}

module.exports = Filter
