import styles from "./describedImage.module.css"
import Image from "next/image"
import cn from "classnames"

export default function DescribedImage({ imageUrl, title, classes }) {
  return (
    <div className={cn(styles.container, classes?.container)}>
      <img className={cn(styles.container, classes?.image)} src={imageUrl} alt="title" className={styles.image} />
      <div className={styles.middle}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
}

module.exports = DescribedImage
