import Grid from "./grid/Grid"
import styles from "./filter.module.css"
import Tooltip from "./tooltip/Tooltip"
import cn from "classnames"

export default function Filter({ items, click, columns, tooltip, chosen, children, className }) {
  return (
    <div className={className}>
      <Grid classes={{ grid: styles.container, column: styles.column }} columns={4}>
        {items.map((item, key) => (
          <Tooltip key={key} message={item.tooltip} classes={{ tooltip: styles.tooltip }}>
            <div
              className={cn(styles.filterItem, { [styles.focusedItem]: chosen === item.id })}
              onClick={() => click(item.id)}
            >
              {item.title}
            </div>
          </Tooltip>
        ))}
      </Grid>
      {children}
    </div>
  )
}

module.exports = Filter
