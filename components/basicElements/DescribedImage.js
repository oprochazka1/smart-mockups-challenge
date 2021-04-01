import styles from "./describedImage.module.css"
import cn from "classnames"
import { useEffect, useState } from "react"
import Loading from "./Loading"

const getImageSizeFromUrl = (imageUrl) => {
  const imageQuery = imageUrl.match("\\?.*")
  const params = new URLSearchParams(imageQuery[0])
  return { width: params.get("w"), height: params.get("h") }
}

export default function DescribedImage({ imageUrl, title, classes }) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  }, [imageUrl])

  return (
    <div className={cn(styles.container, classes?.container)}>
      {isLoading && <Loading className={cn(styles.loading)} />}
      <img
        width={getImageSizeFromUrl(imageUrl).width}
        height={getImageSizeFromUrl(imageUrl).height}
        onError={() => setLoading(false)}
        onLoad={() => setLoading(false)}
        className={cn(styles.image, classes?.image, isLoading ? styles.invisible : "")}
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
