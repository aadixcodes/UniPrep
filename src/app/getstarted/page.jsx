"use client";

import { useState } from 'react';
import styles from './started.module.css';
import Link from 'next/link';
// import Image from 'next/image';

const features = [
  { title: "Exam Preparation", description: "Easily find the most important questions for your upcoming exams.", image: "./assets/exprepimg.png" },
  { title: "Past Exam Insights", description: "Get an idea of what to expect by looking at past exam questions.", image: "./assets/pasteximg.png" },
  { title: "Note Exchange", description: "Earn money by selling your handwritten notes or buy notes to supplement your study material.", image: "./assets/sharenotesimg.gif" },
  { title: "Subject Breakdown", description: "Break down your subjects into manageable units and focus on what's crucial.", image: "./assets/subjbreakimg.png" },
];

const notes = [
  "Currently, our website only has study materials of 1st semester. We are working hard to bring you study materials for all years.",
  "Currently our website only has study materials for B. Tech. If you want study materials for your course, please fill out the feedback form and let us know your subject and course name."
];

const questions = [
  {
    question: "Choose your year of study:",
    options: ["1"],
    image: "./assets/uniimg.webp"
  },
  {
    question: "Choose your semester:",
    options: ["1"],
    image: "./assets/semimg.jpeg"
  },
  {
    question: "Choose your field of study:",
    options: ["BTech"],
    image: "./assets/courseimg.webp"
  },
];

const GetStarted = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));

  const handleGetStarted = () => {
    setShowPopup(true);
  };

  const handleNext = () => {
    if (!showNotes && !showQuestions) {
      if (currentStep < features.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowNotes(true);
        setCurrentStep(0);
      }
    } else if (showNotes) {
      setShowNotes(false);
      setShowQuestions(true);
      setCurrentStep(0);
    } else if (showQuestions) {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowPopup(false);
        setShowQuestions(false);
        setCurrentStep(0);
      }
    }
  };

  const handleBack = () => {
    if (showQuestions) {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      } else {
        setShowQuestions(false);
        setShowNotes(true);
      }
    } else if (showNotes) {
      setShowNotes(false);
      setCurrentStep(features.length - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setShowPopup(false);
    }
  };

  const handleOptionChange = (e) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentStep] = e.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className={styles.container}>
      <div className={styles.centerDiv}>
        <h1 className={styles.mainHeading}>Hello !</h1>
        <h2 className={styles.subHeading}>Welcome To UniPrep</h2>
        <p className={styles.paragraph}>Your ultimate platform for academic success</p>
        <button onClick={handleGetStarted} className="relative ml-[40%] text-[20px] px-2 py-1 rounded-[20px] w-[20%] max-[970px]:w-[30%] max-[970px]:ml-[35%] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500  max-[570px]:w-[50%] max-[570px]:ml-[25%]
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer">Get Started</button>
        <div className={styles.imageDiv}>
          <img src={"/assets/welimg.gif"} alt="" />
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            {!showNotes && !showQuestions ? (
              <>
                <h2 className={styles.popupHeading}>UniPrep Features</h2>
                <div className={styles.imageDiv}>
                  <img src={features[currentStep].image} alt={features[currentStep].title} />
                </div>
                <h3 className={styles.featureTitle}>{features[currentStep].title}</h3>
                <p className={styles.featureDescription}>{features[currentStep].description}</p>
              </>
            ) : showNotes ? (
              <>
                <h2 className={styles.popupHeading}>Important Notes</h2>
                {/* <div className={styles.imageDiv}>
                  <img src="/images/important-notes.jpg" alt="Important Notes" />
                </div> */}
                {notes.map((note, index) => (
                  <p key={index} className={styles.note}>
                    <strong>Note {index + 1} :</strong> {note}
                  </p>
                ))}
              </>
            ) : (
              <>
                <h2 className={styles.popupHeading}>Educational Questions</h2>
                <div className={styles.imageDiv}>
                  <img src={questions[currentStep].image} alt={questions[currentStep].question} />
                </div>
                <div className={styles.question}>
                  <p className={styles.questionText}>{questions[currentStep].question}</p>
                  {questions[currentStep].options.map((option, optionIndex) => (
                    <label key={optionIndex} className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name={`question-${currentStep}`} 
                        value={option} 
                        checked={selectedOptions[currentStep] === option}
                        onChange={handleOptionChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </>
            )}
            <div className={styles.buttonContainer}>
              <button onClick={handleBack} className="relative text-[20px] px-6 py-1 rounded-[13px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer">Back</button>
              {(showQuestions && currentStep === questions.length - 1) ? (
                <Link href="/mynotes" passHref>
                  <button className="relative text-[20px] px-6 py-1 rounded-[13px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
                  before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
                  before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
                  hover:text-[#05070f] cursor-pointer">
                    Finish
                  </button>
                </Link>
              ) : (
                <button onClick={handleNext} className="relative text-[20px] px-6 py-1 rounded-[13px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
                before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
                before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
                hover:text-[#05070f] cursor-pointer">
                  {(!showQuestions && !showNotes && currentStep === features.length - 1) ? "Last Step" : "Next"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetStarted;