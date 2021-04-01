import styles from "./filteredData.module.css"
import DescribedImage from "../basicElements/DescribedImage"
import { useState, useEffect } from "react"
import cn from "classnames"
import Loading from "../basicElements/Loading"

export default function FilterData({ items, click, columns }) {
  const [loadedImgs, setLoadedImgs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const isLoaded = items.some((item) => !loadedImgs.includes(item.imageUrl))
    setIsLoading(isLoaded)
  }, [loadedImgs])

  return (
    <div className={styles.main}>
      <Loading className={cn(styles.loading, isLoading ? styles.loadingVisible : "")} />
      <div className={cn(styles.container, isLoading ? styles.hidden : "")}>
        {items.map((item, key) => (
          <DescribedImage
            onDestroy={() => {
              setLoadedImgs((imgs) => imgs.filter((i) => i !== item.imageUrl))
            }}
            onLoad={() => {
              setLoadedImgs((imgs) => [...imgs, item.imageUrl])
            }}
            classes={{ container: styles.describedImg, image: styles.image }}
            key={key}
            onClick={() => click?.(item.id)}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

module.exports = FilterData
