"use client";

import styles from "./feedback.module.css";
import { useState } from "react";
import Swal from 'sweetalert2';

const Feedback = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    OverallRating: "",
    NavigationRating: "",
    MaterialsRating: "",
    UsageFrequency: "",
    MostUsedFeature: "",
    Likes: "",
    Improvements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    // data.append('OverallRating', formData.OverallRating);
    data.append("NavigationRating", formData.NavigationRating);
    data.append("UsageFrequency", formData.UsageFrequency);
    data.append("OverallRating", formData.OverallRating);
    data.append("MaterialsRating", formData.MaterialsRating);
    data.append("MostUsedFeature", formData.MostUsedFeature);
    data.append("Likes", formData.Likes);
    data.append("Improvements", formData.Improvements);

    const Sheet_Url =
      "https://script.google.com/macros/s/AKfycbzDCPnB4K7qpl9lgDMf4lsnoOQug_jUYubqcfOLEXthTHicZiLKdKcYkQFYU_z87UIZUg/exec";
    try {
      await fetch(Sheet_Url, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });

      setFormData({
        Name: "",
        Email: "",
        OverallRating: "",
        NavigationRating: "",
        MaterialsRating: "",
        UsageFrequency: "",
        MostUsedFeature: "",
        Likes: "",
        Improvements: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.feedback}>
      <div className={styles.fdform}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          We Value Your Feedback!
        </h2>
        {/* onSubmit={(e) => Submit(e)} */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* <input
            type="hidden"
            name="access_key"
            value="e1abcbd6-15e8-43b0-b1b9-c8ef353ca6bf"
          /> */}

          {/* Name input */}
          <label className="mb-2" htmlFor="name">
            Enter your name:
          </label>
          <input
            id="name"
            name="Name"
            placeholder="Full Name"
            required
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={formData.Name}
            onChange={handleChange}
          />

          {/* Email input */}
          <label className="mb-2" htmlFor="email">
            Enter your email:
          </label>
          <input
            id="email"
            name="Email"
            placeholder="Email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            required
            value={formData.Email}
            onChange={handleChange}
          />

          {/* Overall experience rating */}
          <label className="mb-2" htmlFor="overall-rating">
            Rate your overall experience with UniPrep:
          </label>
          <select
            id="overall-rating"
            name="OverallRating"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            required
            value={formData.OverallRating}
            onChange={handleChange}
          >
            <option value="">Choose Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>

          {/* Navigation rating */}
          <label className="mb-2" htmlFor="navigation-rating">
            Rate the ease of navigating the website:
          </label>
          <select
            id="navigation-rating"
            name="NavigationRating"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            value={formData.NavigationRating}
            onChange={handleChange}
          >
            <option value="">Choose Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>

          {/* Study materials rating */}
          <label className="mb-2" htmlFor="materials-rating">
            Rate the quality of the study materials and important topics:
          </label>
          <select
            id="materials-rating"
            name="MaterialsRating"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            value={formData.MaterialsRating}
            onChange={handleChange}
          >
            <option value="">Choose Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>

          {/* Usage frequency */}
          <label className="mb-2" htmlFor="usage-frequency">
            How often do you use UniPrep?
          </label>
          <select
            id="usage-frequency"
            name="UsageFrequency"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            value={formData.UsageFrequency}
            onChange={handleChange}
          >
            <option value="">Choose Option</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>

          {/* Most used feature */}
          <label className="mb-2" htmlFor="most-used-feature">
            Which feature do you use the most?
          </label>
          <select
            id="most-used-feature"
            name="MostUsedFeature"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            value={formData.MostUsedFeature}
            onChange={handleChange}
          >
            <option value="">Choose Option</option>
            <option value="important-questions">Important Questions</option>
            <option value="pyqs">Previous Years' Questions (PYQs)</option>
            <option value="notes">Selling/Buying Notes</option>
            <option value="important-topics">Unit-wise Important Topics</option>
          </select>

          {/* Likes */}
          <label className="mb-2" htmlFor="likes">
            What do you like most about UniPrep?
          </label>
          <textarea
            id="likes"
            name="Likes"
            placeholder="Your feedback"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            required
            value={formData.Likes}
            onChange={handleChange}
          ></textarea>

          {/* Improvements */}
          <label className="mb-2" htmlFor="improvements">
            What do you think could be improved?
          </label>
          <textarea
            id="improvements"
            name="Improvements"
            placeholder="Your feedback"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            required
            value={formData.Improvements}
            onChange={handleChange}
          ></textarea>

          <button
            className="relative text-lg px-6 py-2 rounded-[10px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] transition-all duration-300 
            hover:bg-[#e8f0f9] hover:text-[#05070f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

// "use client";

// import styles from "./feedback.module.css";
// import { useState } from "react";

// const Feedback = () => {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Email: '',
//     OverallRating: '',
//     NavigationRating: '',
//     MaterialsRating: '',
//     UsageFrequency: '',
//     MostUsedFeature: '',
//     Likes: '',
//     Improvements: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     const data = new FormData();
//     Object.keys(formData).forEach(key => {
//       data.append(key, formData[key]);
//     });

//     const Sheet_Url = "https://script.google.com/macros/s/AKfycbzDCPnB4K7qpl9lgDMf4lsnoOQug_jUYubqcfOLEXthTHicZiLKdKcYkQFYU_z87UIZUg/exec"
//     try {
//       await fetch(Sheet_Url, {
//         method: 'POST',
//         body: data,
//         muteHttpExceptions: true,
//       });

//       setFormData({
//         Name: '',
//         Email: '',
//         OverallRating: '',
//         NavigationRating: '',
//         MaterialsRating: '',
//         UsageFrequency: '',
//         MostUsedFeature: '',
//         Likes: '',
//         Improvements: '',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className={styles.feedback}>
//       <div className={styles.fdform}>
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">
//           We Value Your Feedback!
//         </h2>
//         <form className="flex flex-col" onSubmit={handleSubmit}>
//           <input type="hidden" name="access_key" value="e1abcbd6-15e8-43b0-b1b9-c8ef353ca6bf"/>

//           <label className="mb-2" htmlFor="name">Enter your name:</label>
//           <input
//             id="name"
//             name="Name"
//             placeholder="Full Name"
//             required
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             type="text"
//             value={formData.Name}
//             onChange={handleChange}
//           />

//           <label className="mb-2" htmlFor="email">Enter your email:</label>
//           <input
//             id="email"
//             name="Email"
//             placeholder="Email"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             type="email"
//             required
//             value={formData.Email}
//             onChange={handleChange}
//           />

//           <label className="mb-2" htmlFor="overall-rating">
//             Rate your overall experience with UniPrep:
//           </label>
//           <select
//             id="overall-rating"
//             name="OverallRating"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             required
//             value={formData.OverallRating}
//             onChange={handleChange}
//           >
//             <option value="">Choose Rating</option>
//             <option value="1">⭐</option>
//             <option value="2">⭐⭐</option>
//             <option value="3">⭐⭐⭐</option>
//             <option value="4">⭐⭐⭐⭐</option>
//             <option value="5">⭐⭐⭐⭐⭐</option>
//           </select>

//           <label className="mb-2" htmlFor="navigation-rating">
//             Rate the ease of navigating the website:
//           </label>
//           <select
//             id="navigation-rating"
//             name="NavigationRating"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             value={formData.NavigationRating}
//             onChange={handleChange}
//           >
//             <option value="">Choose Rating</option>
//             <option value="1">⭐</option>
//             <option value="2">⭐⭐</option>
//             <option value="3">⭐⭐⭐</option>
//             <option value="4">⭐⭐⭐⭐</option>
//             <option value="5">⭐⭐⭐⭐⭐</option>
//           </select>

//           <label className="mb-2" htmlFor="materials-rating">
//             Rate the quality of the study materials and important topics:
//           </label>
//           <select
//             id="materials-rating"
//             name="MaterialsRating"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             value={formData.MaterialsRating}
//             onChange={handleChange}
//           >
//             <option value="">Choose Rating</option>
//             <option value="1">⭐</option>
//             <option value="2">⭐⭐</option>
//             <option value="3">⭐⭐⭐</option>
//             <option value="4">⭐⭐⭐⭐</option>
//             <option value="5">⭐⭐⭐⭐⭐</option>
//           </select>

//           <label className="mb-2" htmlFor="usage-frequency">How often do you use UniPrep?</label>
//           <select
//             id="usage-frequency"
//             name="UsageFrequency"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             value={formData.UsageFrequency}
//             onChange={handleChange}
//           >
//             <option value="">Choose Option</option>
//             <option value="daily">Daily</option>
//             <option value="weekly">Weekly</option>
//             <option value="monthly">Monthly</option>
//             <option value="yearly">Yearly</option>
//           </select>

//           <label className="mb-2" htmlFor="most-used-feature">Which feature do you use the most?</label>
//           <select
//             id="most-used-feature"
//             name="MostUsedFeature"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             value={formData.MostUsedFeature}
//             onChange={handleChange}
//           >
//             <option value="">Choose Option</option>
//             <option value="important-questions">Important Questions</option>
//             <option value="pyqs">Previous Years' Questions (PYQs)</option>
//             <option value="notes">Selling/Buying Notes</option>
//             <option value="important-topics">Unit-wise Important Topics</option>
//           </select>

//           <label className="mb-2" htmlFor="likes">What do you like most about UniPrep?</label>
//           <textarea
//             id="likes"
//             name="Likes"
//             placeholder="Your feedback"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             required
//             value={formData.Likes}
//             onChange={handleChange}
//           ></textarea>

//           <label className="mb-2" htmlFor="improvements">What do you think could be improved?</label>
//           <textarea
//             id="improvements"
//             name="Improvements"
//             placeholder="Your feedback"
//             className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             required
//             value={formData.Improvements}
//             onChange={handleChange}
//           ></textarea>

//           <button
//             className="relative text-lg px-6 py-2 rounded-[10px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] transition-all duration-300
//             hover:bg-[#e8f0f9] hover:text-[#05070f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       {showPopup && renderPopup()}
//     </div>
//   );
// };

// export default Feedback;
