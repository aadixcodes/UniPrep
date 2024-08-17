// 'use client';
// import React, { useState, useEffect } from 'react';
// import styles from './contact.module.css'
// import { IoHomeSharp } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";
// import { IoIosMail } from "react-icons/io";

// const ContactUs = () => {
//   const [contactInfo, setContactInfo] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchContactInfo = async () => {
//       setIsLoading(true);
//       try {
//         // Simulated API call
//         const response = await new Promise(resolve => setTimeout(() => resolve({
//           address: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
//           Campus : "Indore – Ujjain Road, Indore – 453111",
//           phone: "+91 62660-61914",
//           email: "abhyudaya@svvv.edu.in"
//         }), 1500)); // Simulating a 1.5 second delay
//         setContactInfo(response);
//       } catch (error) {
//         console.error('Error fetching contact info:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchContactInfo();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className={styles.loader}>
//         <div className={styles.spinner}></div>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (!contactInfo) {
//     return (
//       <div className={styles.errorMessage}>
//         Failed to load contact information. Please try again later.
//       </div>
//     );
//   }

//   return (
//     <>
//      <section className={styles.Section}>
    
//     <div className={styles.sectionheader}>
//       <div className={styles.container}>
//         <h2>Contact Us</h2>
//         <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team at UniPrep is here to help. Please fill out the form below, and we'll get back to you as soon as possible. Your input is invaluable in helping us improve our UniPrep web app for university and college students. Thank you for reaching out!</p>
//       </div>
//     </div>
    
//     <div className={styles.container}>
//       <div className={styles.row}>
        
//         <div className={styles.contactinfo}>
//           <div className={styles.contactinfoitem}>
//             <div className={styles.contactinfoicon}>
//               <IoHomeSharp />
//             </div>
            
//             <div className={styles.contactinfocontent}>
//               <h4>Address</h4>
//               <p>{contactInfo.address}</p>
//               <p>{contactInfo.Campus}</p>
//             </div>
//           </div>
          
//           <div className={styles.contactinfoitem}>
//             <div className={styles.contactinfoicon}>
//               <FaPhone />
//             </div>
            
//             <div className={styles.contactinfocontent}>
//               <h4>Phone</h4>
//               <p>{contactInfo.phone}</p>
//             </div>
//           </div>
          
//           <div className={styles.contactinfoitem}>
//             <div className={styles.contactinfoicon}>
//               <IoIosMail className='text-[50px]' />
//             </div>
            
//             <div className={styles.contactinfocontent}>
//               <h4>Email</h4>
//              <p>{contactInfo.email}</p>
//             </div>
//           </div>
//         </div>
        
//         <div className={styles.contactform}>
//           <form id={styles.contactForm}>
//             <h2>Get in touch</h2>
//             <div className={styles.inputbox}>
//               <input type="text" required="true" name="" placeholder="Full Name"/>
//             </div>
            
//             <div className={styles.inputbox}>
//               <input type="email" required="true" name="" placeholder="Email"/>
//             </div>
            
//             <div className={styles.inputbox}>
//               <textarea required="true" name="" placeholder="Type Your Message Here...."></textarea>
//             </div>
            
//             <div className={styles.inputbox}>
//                 <input type="submit" value="send" name=""/>
//             </div>
//           </form>
//         </div>
        
//       </div>
//     </div>
//   </section>
//     </>
//   )
// }

// export default ContactUs;



"use client";

import styles from "./contact.module.css";
import { useState } from "react";
import Swal from 'sweetalert2';

const Contactus = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Form submitted successfully!',
    });

    console.log("Form submitted:", formData);
    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    data.append("Message", formData.Message);

    const Sheet_Url =
      "https://script.google.com/macros/s/AKfycbwD-2lRTZMxjq4xBKNZKA8C1GOJdeTl9I585jWbP4I7XNzs7g_RYUazbMYMtV74CBg_2Q/exec";
    try {
      await fetch(Sheet_Url, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });

      setFormData({
        Name: "",
        Email: "",
        Message: "",
      });
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.contactuswrapper}>
        <div className={styles.contactcontainer}>
          <h2 className="text-[20px] text-center">Contact Us</h2>
          <h1 className="text-[64px] text-center font-bold">
            Get in Touch with UniPrep
          </h1>
          <p className="text-[22px] text-center">
            If you have any questions, feedback, or need assistance, feel free
            to reach out to us. We are here to support you on your academic
            journey.
          </p>
          <div className={styles.contactform}>
            <div className="w-full max-w-[100%] bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
              {showSuccessMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline"> Your message has been sent successfully.</span>
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col"
              >
                <input
                  onChange={handleChange}
                  type="text"
                  name="Name"
                  value={formData.Name}
                  className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Full Name"
                  required
                />
                <input
                  onChange={handleChange}
                  type="email"
                  name="Email"
                  value={formData.Email}
                  className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Email"
                  required
                />
                <textarea
                  onChange={handleChange}
                  name="Message"
                  value={formData.Message}
                  className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
                    before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md text-center
                    before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
                    hover:text-[#05070f] cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
