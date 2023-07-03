"use client"
import { useAppContext } from "./context";
import { useEffect } from "react";

export default function Footer() {
  const isLoggedIn = useAppContext().isLoggedIn
  // useEffect(() => {
  //   console.log(isLoggedIn)
  // },[isLoggedIn])
  return (
    <footer className="footer">You are {isLoggedIn ? "" : "not"} logged in.</footer>
  )
}
