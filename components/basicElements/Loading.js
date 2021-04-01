import cn from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSync } from "@fortawesome/free-solid-svg-icons"
import styles from "./loading.module.css"

export default function Loading() {
  return <FontAwesomeIcon className={styles.container} icon={faSync} />
}

module.exports = Loading
