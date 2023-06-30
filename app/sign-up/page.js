"use client";
import { useAppContext } from "../context";

export default function Home() {
  const {isLoggedIn, setIsLoggedIn} = useAppContext()

  const clickHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn((l) => !l)
  }

  return (
      <div className="page">
        <form className="page">
          <button className="in" onClick={(e) => {clickHandler(e)}}>sign { isLoggedIn ? "out" : "up" }</button>
        </form>
        <div className={ isLoggedIn ? "none" : "page" }>
          <span>Already have an account?</span>
          <a className="toLog" href="/log-in">Log In</a> 
        </div>
      </div>
  );
};
