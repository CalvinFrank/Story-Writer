"use client"
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useAppContext } from './context';

export default function Home() {
  const router = useRouter();
  const {isLoggedIn} = useAppContext()
  
  function handleClick () {
    if (isLoggedIn) {
      router.push("/action")
    }
    if (!isLoggedIn) {
      router.push("/sign-up")
    }
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.welcome}>Welcome to Story Writer!</h1>
      <p className={styles.text}>Story Writer is a website that will create a story for you. It will make sure the story is easy to read. 
        It can also give you inspiration for stories. Story Writer can even fix and rate your story.</p>
      <button className={styles.action} onClick={handleClick}>Lets see it in action!</button>
    </div> 
  )
}
