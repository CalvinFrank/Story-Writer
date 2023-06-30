"use client"
import styles from "./header.module.css"
import { useAppContext } from "./context"
import { useRouter } from "next/navigation"

export default function Header(props) {  
  const router = useRouter()
  const {isLoggedIn, setIsLoggedIn} = useAppContext()
  function clickedPerson() {
    switch (isLoggedIn) {
      case true:
        router.push("/profile")
        break;
      case false:
        router.push("/sign-up")
        break;
    }
  }
  return (
    <header className={styles.header}>
          <button className={styles.profile}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/administration/person-16.png" onClick={clickedPerson} className={styles.profileP}/>  
            John Doe
          </button>
          <button className={styles.logoB}>
            <img src="http://localhost:3000/favicon.png" className={styles.logo} onClick={() => {router.push("/")}}/>
          </button>
        </header>
  )
}