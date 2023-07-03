"use client";
import { useAppContext } from "../context";
import { useRouter } from "next/navigation";

export default function Home() {
  const {isLoggedIn, setIsLoggedIn} = useAppContext()
  const router = useRouter()

  const clickHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn((l) => !l)
    router.push("/")
  }

  return (
      <div className="page">
        <form className="page">
          <button className="in" onClick={(e) => {clickHandler(e)}}>sign { isLoggedIn ? "out" : "up" }</button>
        </form>
        <div className={ isLoggedIn ? "none" : "page" }>
          <span>Already have an account?</span>
          <a className="toLog" href="/sign-in">Sign In</a> 
        </div>
      </div>
  );
};
