import Grid from "./grid/Grid"
import styles from "./filteredData.module.css"
import DescribedImage from "./basicElements/DescribedImage"

export default function Filter({ items, click, columns }) {
  return (
    <div className={styles.container}>
      {items.map((item, key) => (
        <DescribedImage
          classes={{ container: styles.describedImg, image: styles.image }}
          key={key}
          onClick={() => click(item.id)}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  )
}

module.exports = Filter
