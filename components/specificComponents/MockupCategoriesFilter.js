import Filter from "../filter/Filter"
import FilteredData from "../filter/FilteredData"
import { useCategories, useFilteredMockups } from "../../actions/mockups"
import { useRouter } from "next/router"
import styles from "./mockupCategoriesFIlter.module.css"
import { useEffect, useState } from "react"

const MockupCategoriesFilter = ({ isMobileInvisibleFilter, onChooseFilter }) => {
  const router = useRouter()
  const filteredCategories = useCategories()
  const mockups = useFilteredMockups(router.query.id)
  const [isHiddenData, setIsHiddenData] = useState(false)

  const handleClick = (id) => {
    router.push({
      query: { id },
    })
    setIsHiddenData(true)
    onChooseFilter?.(id)
  }

  useEffect(() => {
    setIsHiddenData(false)
  }, [mockups])

  return (
    <div className={styles.container}>
      <Filter
        className={isMobileInvisibleFilter ? styles.filterMobileInvisible : ""}
        chosen={router.query.id || ""}
        click={handleClick}
        items={[
          { id: "", title: "Show All" },
          ...filteredCategories.map((o) => ({ id: o.slug, title: o.title, tooltip: o.title })),
        ]}
      />
      {!isHiddenData && <FilteredData items={mockups.map((o) => ({ id: o.id, title: o.title, imageUrl: o.thumb }))} />}
    </div>
  )
}

module.exports = MockupCategoriesFilter
