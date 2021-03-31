import Grid from "./grid/Grid"
import styles from "./filteredData.module.css"
import DescribedImage from "./basicElements/DescribedImage"

export default function Filter({ items, click, columns }) {
  return (
    <Grid classes={{ grid: styles.container, column: styles.column }} columns={columns}>
      {items.map((item, key) => (
        <DescribedImage key={key} onClick={() => click(item.id)} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </Grid>
  )
}

module.exports = Filter
