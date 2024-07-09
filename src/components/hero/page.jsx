import styles from "./hero.module.css";
// import { useAuth } from "@clerk/nextjs";

const hero = () => {
  // const { userId } = useAuth();

  return (
    <>
      <div className={styles.herosection}>
        <div className={styles.lefttools}>
          <img
            src={"./assets/f1.png"}
            width="192"
            height="172"
            alt="support"
            className="hover:scale-103 rounded-[40px] transform duration-200 cursor-pointer rotate-[7deg]"
            data-v-d0b4d2d9=""
          />
          <img
            src={"./assets/f2.png"}
            width="192"
            height="172"
            alt="support"
            className="hover:scale-103 rounded-[40px] transform duration-200 cursor-pointer rotate-[-12deg] ml-[3rem]"
            data-v-d0b4d2d9=""
          />
          <img
            src={"./assets/f3.png"}
            width="192"
            height="172"
            alt="support"
            className="hover:scale-103 rounded-[40px] transform duration-200 cursor-pointer rotate-[15deg] mt-[1.5rem]"
            data-v-d0b4d2d9=""
          />
        </div>
        <div className={styles.centertools}>
          <h4 className="text-[18px] text-center">
            Introducing UniPrep, your ultimate exam preparation tool
          </h4>
          <h1 className="text-[75px] font-bold text-center leading-[5rem]">
            Achieve Academic Success <br /> with Aditya
          </h1>
          <p className="text-[22px] relative top-[-1rem] text-center">
            Prepare for your exams with ease. Access important topics, start a
            study plan, and get the resources you need. It's simpler than you
            think.
          </p>
          {/* {!userId && (
            <> */}
            <a
            href="/sign-up"
            className="relative text-[20px] px-7 py-4 rounded-[20px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer"
          >
            Start your study
          </a>
            {/* </>
          )} */}


          {/* {userId && (
            <a
            href="/mynotes"
            className="relative text-[20px] px-7 py-4 rounded-[20px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer"
          ></a>
          )} */}
          
          <h3 className="text-[18px] text-center">
            It's free, and you'll get important questions without any charges!
          </h3>
        </div>
        <div className={styles.righttools}>
          <img
            src={"./assets/f4.png"}
            width="192"
            height="172"
            alt="support"
            className="hover:scale-103 rounded-[40px] transform duration-200 cursor-pointer rotate-[7deg]"
            data-v-d0b4d2d9=""
          />
          <img
            src={"./assets/f5.png"}
            width="192"
            height="172"
            alt="support"
            className="hover:scale-103 rounded-[40px] transform duration-200 cursor-pointer rotate-[12deg] ml-[8rem]"
            data-v-d0b4d2d9=""
          />
          <img
            src={"./assets/f6.png"}
            width="192"
            height="172"
            alt="support"
            className="hover:scale-103 rounded-[40px] transform duration-200 cursor-pointer rotate-[-10deg] mt-[1.5rem]"
            data-v-d0b4d2d9=""
          />
        </div>
      </div>
    </>
  );
};

export default hero;
