import styles from "./about.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutuswrapper}>
        <div className={styles.aboutcontainer}>
          <h2 className="abt-msg text-[20px] text-center">About Us</h2>
          <h1 className="wlcm-msg text-[64px] text-center font-bold">
            Welcome to UniPrep
          </h1>
          <p className="content text-[22px] text-center">
            your go-to platform for academic success. and we
            are here to make that journey easier and more efficient. UniPrep
            isn't just a tool for studying; it's a community.
            <br />
            At UniPrep, we believe in empowering students by giving them the
            resources and support they need to excel academically. Join us today
            and take the first step towards a successful academic journey.
          </p>
          <div className={styles.imgwrapper}>
            <img src={"./assets/aboutus.png"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
