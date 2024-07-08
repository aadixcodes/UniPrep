"use client";

// import styles from "./testimonials.module.css";

// const Testimonials = () => {
//   return (
//     <>
//       <div className={styles.testiwrapper}>
//         <div className={styles.testicontainer}>
//           <h2 className="text-[20px] text-center mb-[3px]">Testimonials</h2>
//           <h1 className="text-[64px] text-center font-bold">
//             Hear from Our Users
//           </h1>
//           <p className="text-[22px] text-center">
//             UniPrep makes exam preparation straightforward and effective. Our
//             users have shared their experiences and how UniPrep has transformed
//             their study habits.
//           </p>
//           <div className={styles.carouselwrapper}>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect, useRef } from "react";
import styles from "./testimonials.module.css";

const TestimonialCard = ({ testimonial, isCenter }) => (
  <div
    className={`${styles.testimonialCard} ${isCenter ? styles.centerCard : ""}`}
  >
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className={styles.profileImage}
    />
    <p className={styles.quoteText}>"{testimonial.quote}"</p>
    <p className={styles.authorName}>{testimonial.name}</p>
    <p className={styles.authorTitle}>{testimonial.title}</p>
    <div className={styles.starRating}>{"★".repeat(testimonial.rating)}</div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      image: "./assets/aron.jpg",
      name: "Aron Loeb",
      title: "CEO, Company",
      quote:
        "UniPrep is a game-changer! The curated important questions helped me focus on what’s truly important for my exams.",
      rating: 5,
    },
    {
      id: 2,
      image: "./assets/jane.jpg",
      name: "Jane Doe",
      title: "CTO, Tech Corp",
      quote:
        "Accessing previous years' questions (PYQs) was a huge help. It gave me a clear idea of what to expect and how to prepare.",
      rating: 4,
    },
    {
      id: 3,
      image: "./assets/john.jpg",
      name: "John Smith",
      title: "Manager, StartUp",
      quote:
        "Selling my handwritten notes through UniPrep was easy and rewarding. I could help my peers while earning extra money.",
      rating: 5,
    },
    {
      id: 4,
      image: "./assets/emma.jpg",
      name: "Emma Wilson",
      title: "Designer, Creative Inc",
      quote:
        "The unit-wise important topics broke down the material into manageable chunks, making my study sessions more productive.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const getVisibleTestimonials = () => {
    const length = testimonials.length;
    return [
      testimonials[(currentIndex - 1 + length) % length],
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % length],
    ];
  };

  return (
    <div className={styles.testiwrapper}>
      <div className={styles.testicontainer}>
        <h2 className={styles.subtitle}>Testimonials</h2>
        <h1 className={styles.title}>Hear from Our Users</h1>
        <p className={styles.description}>
          UniPrep makes exam preparation straightforward and effective. Our
          users have shared their experiences and how UniPrep has transformed
          their study habits.
        </p>
        <div
          className={styles.carouselwrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.carouselItem} ${styles[`slide${index}`]}`}
            >
              <TestimonialCard
                testimonial={testimonial}
                isCenter={index === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
