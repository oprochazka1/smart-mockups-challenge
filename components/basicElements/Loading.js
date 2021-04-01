import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSync } from "@fortawesome/free-solid-svg-icons"
import styles from "./loading.module.css"
import cn from "classnames"

export default function Loading({ className }) {
  return <FontAwesomeIcon className={cn(styles.container, className)} icon={faSync} />
}

module.exports = Loading
