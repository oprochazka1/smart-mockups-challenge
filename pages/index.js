import Head from "next/head"
import styles from "../styles/Home.module.css"
import MockupCategoriesFilter from "../components/MockupCategoriesFilter"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Mockups challenge </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MockupCategoriesFilter />
      </main>
    </div>
  )
}
