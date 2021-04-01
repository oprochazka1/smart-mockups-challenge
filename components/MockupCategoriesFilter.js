import Filter from "./Filter"
import FilteredData from "./FilteredData"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { fetchMockupFilter, useCategories, useFilteredMockups, useIsMockupDataLoading } from "../actions/mockups"
import { useRouter } from "next/router"
import Loading from "./basicElements/Loading"
import styles from "./mockupCategoriesFIlter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

const MockupCategoriesFilter = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const filteredCategories = useCategories()
  const mockups = useFilteredMockups(router.query.id)
  const isLoading = useIsMockupDataLoading()
  const [isFilter, setFilter] = useState(true)

  useEffect(() => {
    dispatch(fetchMockupFilter())
  }, [])

  useEffect(() => {
    if (isFilter) {
      window.scrollTo(0, 0)
    }
  }, [isFilter])

  const handleClick = (id) => {
    router.push({
      query: { id },
    })
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.filterBar}>
            <FontAwesomeIcon
              onClick={() => setFilter((isFilter) => !isFilter)}
              className={styles.filterIcon}
              icon={faFilter}
            />
          </div>

          <Filter
            className={!isFilter ? styles.filterMobileInvisible : ""}
            chosen={router.query.id || ""}
            click={handleClick}
            items={[
              { id: "", title: "Show All" },
              ...filteredCategories.map((o) => ({ id: o.slug, title: o.title, tooltip: o.title })),
            ]}
          />

          <FilteredData items={mockups.map((o) => ({ id: o.id, title: o.title, imageUrl: o.thumb }))} />
        </div>
      )}
    </>
  )
}

module.exports = MockupCategoriesFilter
