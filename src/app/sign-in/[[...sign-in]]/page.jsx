"use client";
import { useState, useEffect } from "react";

import { SignIn } from "@clerk/nextjs";
import styles from "./signin.module.css";

const Signin = () => {
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
      <div className="w-[100%] py-[8rem] max-[800px]:py-[5rem] flex items-center justify-center">
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
          <SignIn />
        )}
      </div>
    </>
  );
};

export default Signin;
