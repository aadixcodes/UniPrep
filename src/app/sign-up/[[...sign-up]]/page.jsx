"use client";
import { useState, useEffect } from "react";
import styles from "./signup.module.css";
import { SignUp } from "@clerk/nextjs";
// import Loader from "@/components/loader/page";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate form loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-[100%] py-[5rem] flex items-center justify-center">
        {isLoading ? (
          <div className={styles.dotspinner}>
            <div class={styles.dotspinnerdot}></div>
            <div class={styles.dotspinnerdot}></div>
            <div class={styles.dotspinnerdot}></div>
            <div class={styles.dotspinnerdot}></div>
            <div class={styles.dotspinnerdot}></div>
            <div class={styles.dotspinnerdot}></div>
            <div class={styles.dotspinnerdot}></div>
            <div class={styles.dotspinnerdot}></div>
          </div>
        ) : (
          <SignUp />
        )}
      </div>
    </>
  );
};

export default Signup;
