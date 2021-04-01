import styles from "./describedImage.module.css"
import cn from "classnames"
import { useEffect, useRef } from "react"

export default function DescribedImage({ imageUrl, title, classes, onLoad, onDestroy }) {
  const image = useRef(null)
  useEffect(() => {
    if (image.complete) {
      onLoad()
    }
    return onDestroy
  }, [imageUrl])

  return (
    <div className={cn(styles.container, classes?.container)}>
      <img
        ref={image}
        onError={onLoad}
        onLoad={onLoad}
        className={cn(styles.image, classes?.image)}
        src={imageUrl}
        alt={title}
      />
      <div className={styles.middle}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
}

module.exports = DescribedImage
