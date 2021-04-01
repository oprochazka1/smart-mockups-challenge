import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { fetchMockupFilter, useIsMockupDataError, useIsMockupDataLoading } from "../../actions/mockups"
import MockupCategoriesFilter from "./MockupCategoriesFilter"
import Loading from "../basicElements/Loading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import styles from "./mockupFilterView.module.css"
import Error from "../basicElements/Error"

const MockupFilterView = () => {
  const dispatch = useDispatch()
  const isLoading = useIsMockupDataLoading()
  const isError = useIsMockupDataError()
  const [isMobileInvisibleFilter, setMobileInvisibleFilter] = useState(false)

  useEffect(() => {
    dispatch(fetchMockupFilter())
  }, [])

  useEffect(() => {
    if (!isMobileInvisibleFilter) {
      window.scrollTo(0, 0)
    }
  }, [isMobileInvisibleFilter])

  if (isError) {
    return <Error>Unable to fetch data from server.</Error>
  }

  return (
    <>
      <div className={styles.filterBar}>
        <FontAwesomeIcon
          onClick={() => setMobileInvisibleFilter((isFilter) => !isFilter)}
          className={styles.filterIcon}
          icon={faFilter}
        />
      </div>
      {isLoading ? <Loading /> : <MockupCategoriesFilter isMobileInvisibleFilter={isMobileInvisibleFilter} />}
    </>
  )
}

module.exports = MockupFilterView
