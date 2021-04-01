import Filter from "../filter/Filter"
import FilteredData from "../filter/FilteredData"
import { useCategories, useFilteredMockups } from "../../actions/mockups"
import { useRouter } from "next/router"
import styles from "./mockupCategoriesFIlter.module.css"

const MockupCategoriesFilter = ({ isMobileInvisibleFilter }) => {
  const router = useRouter()
  const filteredCategories = useCategories()
  const mockups = useFilteredMockups(router.query.id)

  const handleClick = (id) => {
    router.push({
      query: { id },
    })
  }

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
      <FilteredData items={mockups.map((o) => ({ id: o.id, title: o.title, imageUrl: o.thumb }))} />
    </div>
  )
}

module.exports = MockupCategoriesFilter
