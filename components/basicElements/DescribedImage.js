import styles from "./describedImage.module.css"
import Image from "next/image"

export default function DescribedImage({ imageUrl, title }) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="title" className={styles.image} />
    </div>
  )
}

module.exports = DescribedImage
