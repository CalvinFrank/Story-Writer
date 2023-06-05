import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <h1 className={styles.welcome}>Welcome to Story Writer!</h1>
    </div>
  )
}
