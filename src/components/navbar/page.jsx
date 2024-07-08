"use client";

// import 'boxicons/css/boxicons.min.css';
// import styles from "./navbar.module.css"

// const Navbar = () => {
//   return (
//     <>
//       <div className={styles.navbar}>
//         <div className={styles.navlinks}>
//           <ul className="flex justify-evenly w-full">
//             <li>
//               <a href="/earnmoney" className="text-[20px] duration-300 hover:text-[#4636FC]">Earn Money</a>
//             </li>
//             <li>
//               <a href="/feedback" className="text-[20px] duration-300 hover:text-[#4636FC]">Feedback</a>
//             </li>
//             <li>
//               <a href="/notification" className="text-[20px] duration-300 hover:text-[#4636FC]">Notification</a>
//             </li>
//           </ul>
//         </div>
//         <div className={styles.logo}>
//         <i className='bx bx-menu text-[2.5rem] hidden'></i>
//           {/* <img
//             className="w-[50px] h-[50px] rounded-[50%]"
//             src={"./assets/logo.png"}
//             alt=""
//           /> */}
//           <a href='/' className="text-[2rem] cursor-pointer font-bold">UniPrep</a>
//         </div>
//         <div className={styles.signinupbtn}>

//           <a href="/login" className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 border-[#05070f] bg-[#e8f0f9] text-[#05070f] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-1000 before:rounded-md
//         before:bg-[#e8f0f9] hover:bg-[#05070f19]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden
//         hover:text-[#05070f] cursor-pointer">Sign In</a>

//           <a href='/signup' className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden
//         hover:text-[#05070f] cursor-pointer">Sign Up</a>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
// import Link from 'next/link';
import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import { UserButton, useAuth } from "@clerk/nextjs";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { userId } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1070);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div
          className={`${styles.navlinks} ${
            isMenuOpen && isMobile ? styles.show : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/earnmoney">Earn Money</a>
            </li>
            <li>
              <a href="/feedback">Feedback</a>
            </li>
            <li>
              <a href="/notification">Notification</a>
            </li>
            {isMobile && (
              <>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className={styles.logo}>
          <i className="bx bx-menu text-[2.5rem]" onClick={toggleMenu}></i>
          <a href="/" className="text-[2rem] cursor-pointer font-bold">
            UniPrep
          </a>
        </div>
        <div className={styles.signinupbtn}>
          {!userId && (
            <>
              <a href="/sign-in">Sign In</a>
              <a href="/sign-up">Sign Up</a>
            </>
          )}
          {userId && (
          // <a href='profile' className='text-gray-300 hover:text-white bg-black mr-4'>
          //   Profile
          // </a>
          <div>
          <UserButton afterSignOutUrl='/' />
        </div>
        )}
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
