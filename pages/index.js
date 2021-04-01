import Head from "next/head"
import styles from "../styles/Home.module.css"
import MockupFilterView from "../components/specificComponents/MockupFilterView"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Mockups challenge </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MockupFilterView />
      </main>
    </div>
  )
}
