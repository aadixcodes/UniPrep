import styles from "./earn.module.css";

const EarnMoney = () => {
  return (
    <>
      <div className={styles.earnmoney}>
        <h2 className="text-center text-[35px] leading-[1] font-bold">
          Earn Money with UniPrep
          <br />
          <span className="text-[20px] font-normal">
            Buy and sell notes effortlessly and earn extra income.
          </span>
        </h2>
        <div className={styles.options}>
          <div className={styles.opt}>
            <h1 className="text-center leading-[1.1] text-[25px] font-bold">
              {" "}
              Sell Notes <br />{" "}
              <span className="font-normal text-[18px]">
                Earn money by selling your handwritten notes to other students.
              </span>{" "}
            </h1>
            <img src={"./assets/sellnotes.svg"} alt="" />
            <a
              href="/earnmoney/sellnotes"
              className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 text-center border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500 
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer"
            >
              Start Selling
            </a>
          </div>
          <div className={styles.opt}>
            <h1 className="text-center leading-[1.1] text-[25px] font-bold">
              {" "}
              Buy Notes <br />{" "}
              <span className="font-normal text-[18px]">
              Access quality notes from other students to aid your study.
              </span>{" "}
            </h1>
            <img src={"./assets/buynotes.svg"} alt="" />
            <a
              href="/earnmoney/buynotes"
              className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 text-center border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500 
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer"
            >
              Start Buying
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarnMoney;
