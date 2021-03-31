import Filter from "./Filter"
import FilteredData from "./FilteredData"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchMockupFilter, useCategories, useFilteredMockups } from "../actions/mockups"
import { useRouter } from "next/router"
import styles from "./mockupCategoriesFIlter.module.css"

const MockupCategoriesFilter = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const filteredCategories = useCategories()
  const mockups = useFilteredMockups(router.query.id)

  useEffect(() => {
    dispatch(fetchMockupFilter())
  }, [])

  const handleClick = (id) => {
    router.push({
      query: { id },
    })
  }

  return (
    <div className={styles.container}>
      <Filter
        chosen={router.query.id || ""}
        click={handleClick}
        items={[
          { id: "", title: "Show All" },
          ...filteredCategories.map((o) => ({ id: o.slug, title: o.title, tooltip: o.title })),
        ]}
        columns={4}
      />

      <FilteredData
        click={() => true}
        items={mockups.map((o) => ({ id: o.id, title: o.title, imageUrl: o.thumb }))}
        columns={4}
      />
    </div>
  )
}

module.exports = MockupCategoriesFilter
