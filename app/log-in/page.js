"use client";
import { useAppContext } from "../context";
import { useRouter } from "next/navigation";

export default function Home() {
  const {isLoggedIn, setIsLoggedIn} = useAppContext()
  const router = useRouter()

  const clickHandler = (e) => {
    router.push("/profile")
    e.preventDefault();
    setIsLoggedIn((l) => !l)
  }

  return (
      <div className="page">
        <form className="page">
          <button className="in" onClick={(e) => {clickHandler(e)}}>sign { isLoggedIn ? "out" : "in" }</button>
        </form>
        <div className={ isLoggedIn ? "none" : "page" }>
          <span>Already have an account?</span>
          <a className="toLog" href="/sign-up">Sign Up</a> 
        </div>
      </div>
  );
};
