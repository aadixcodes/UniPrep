// 'use client';

// import styles from "./sell.module.css";
// import { useState } from "react";

// const Sellnotes = () => {
//   const [currentStep, setCurrentStep] = useState("personal");
//   const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     collegeName: "",
//     yearOfStudy: "",
//     fieldOfStudy: "",
//     upiid: "",
//     upiqr: null,
//     courseSubject: "",
//     notesDescription: "",
//     notesFile: null,
//     price: "",
//     additionalComments: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "file" ? files[0] : value,
//     }));
//   };

//   const handleBack = () => {
//     setCurrentStep("personal");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currentStep === "personal") {
//       setCurrentStep("notes");
//     } else {
//       console.log(formData);
//       setShowPopup(true);
//     }
//   };

//   const renderPersonalInfoForm = () => (
//     <>
//       <h2 className={styles.formTitle}>Personal Information</h2>
//       <p className={styles.formSubtitle}>
//         Enter your Personal Information to get closer to Buyer
//       </p>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="firstName">First Name</label>
//             <input
//             required
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="Enter Your First Name"
//               onChange={handleInputChange}
//               value={formData.firstName}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="lastName">Last Name</label>
//             <input
//             required
//               type="text"
//               id="lastName"
//               name="lastName"
//               placeholder="Enter Your Last Name"
//               onChange={handleInputChange}
//               value={formData.lastName}
//             />
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">E-Mail</label>
//             <input
//             required
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Your E-mail Address"
//               onChange={handleInputChange}
//               value={formData.email}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="collegeName">University/College Name</label>
//             <input
//             required
//               type="text"
//               id="collegeName"
//               name="collegeName"
//               placeholder="Enter your university/college name"
//               onChange={handleInputChange}
//               value={formData.collegeName}
//             />
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="yearOfStudy">Year of study</label>
//             <select
//             required
//               id="yearOfStudy"
//               name="yearOfStudy"
//               onChange={handleInputChange}
//               value={formData.yearOfStudy}
//             >
//               <option value="">Select year</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//             </select>
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="fieldOfStudy">Field of study</label>
//             <input
//             required
//               type="text"
//               id="fieldOfStudy"
//               name="fieldOfStudy"
//               placeholder="Enter Your Field Of Study"
//               onChange={handleInputChange}
//               value={formData.fieldOfStudy}
//             />
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="upiid">Enter your UPI ID</label>
//             <input
//             required
//             type="text"
//               id="upiid"
//               name="upiid"
//               onChange={handleInputChange}
//               value={formData.upiid}
//               placeholder="Enter Your UPI ID"
//             />
//           </div>
//           <div className={styles.formGroup}>
//           <label htmlFor="upiqr">Upload UPI QR Code</label>
//             <input
//             className="flex h-[3.2rem] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
//               type="file"
//               id="upiqr"
//               name="upiqr"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>
//         <button type="submit" className="relative self-end  text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer">
//           Next
//         </button>
//       </form>
//     </>
//   );

//   const renderNotesDetailsForm = () => (
//     <>
//       <h2 className={styles.formTitle}>Notes Details</h2>
//       <p className={styles.formSubtitle}>Enter the details of your notes</p>
//       <form onSubmit={handleSubmit} className={styles.form} action="https://api.web3forms.com/submit" method="POST">
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//           <input type="hidden" name="access_key" value="e1abcbd6-15e8-43b0-b1b9-c8ef353ca6bf"/>
//             <label htmlFor="courseSubject">Course/Subject</label>
//             <input
//               type="text"
//               id="courseSubject"
//               name="courseSubject"
//               placeholder="Enter the course or subject"
//               onChange={handleInputChange}
//               value={formData.courseSubject}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="notesDescription">Description of Notes</label>
//             <textarea
//               rows={1}
//               id="notesDescription"
//               name="notesDescription"
//               placeholder="Describe your notes"
//               onChange={handleInputChange}
//               value={formData.notesDescription}
//               required
//             ></textarea>
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="notesFile">Upload Notes</label>
//             <input
//             className="flex h-[3.2rem] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
//               type="file"
//               id="notesFile"
//               name="notesFile"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="price">
//               Price ( *Price should be between ₹10 and ₹50. )
//             </label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               placeholder="Enter the price"
//               onChange={handleInputChange}
//               value={formData.price}
//               min={10}
//               max={50}
//               required
//             />
//           </div>
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="additionalComments">
//             Additional Comments (Optional)
//           </label>
//           <textarea
//             id="additionalComments"
//             name="additionalComments"
//             placeholder="Any additional comments"
//             onChange={handleInputChange}
//             value={formData.additionalComments}
//           ></textarea>
//         </div>
//         <div className={styles.buttonGroup}>
//           <button
//             type="button"
//             onClick={handleBack}
//             className="relative text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer"
//           >
//             Back
//           </button>
//           <button type="submit" className="relative self-end  text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer">
//             Submit
//           </button>
//         </div>
//       </form>
//     </>
//   );

//   const renderPopup = () => (
//     <div className={styles.popupOverlay}>
//       <div className={styles.popup}>
//       <i class='bx bx-check-circle'></i>
//         <h2 className="text-[22px] mb-[1.7rem]">Your notes details submitted successfully</h2>
//         <p className="mb-[20px] text-[17px]">Your notes and details will be shown in the buy notes section after verification. If someone purchases your notes, you will receive the payment after deducting 10% as UniPrep's fee.</p>
//         <a href="/earnmoney" onClick={() => setShowPopup(false)} className="relative self-end  text-[20px] px-7 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer">
//           Back
//         </a>
//       </div>
//     </div>
//   );

//   return (
//     <div className={styles.sellnotes}>
//       <h1 className="text-center text-[3rem] leading-[0.8] font-bold">
//         Sell Notes <br />
//         <span className="text-[1.2rem] font-normal">
//           Share your knowledge and earn money by selling your notes to fellow
//           students.
//         </span>
//       </h1>
//       <div className={styles.sellnotescontainer}>
//         {currentStep === "personal"
//           ? renderPersonalInfoForm()
//           : renderNotesDetailsForm()}
//       </div>
//       {showPopup && renderPopup()}
//     </div>
//   );
// };

// export default Sellnotes;




// 'use client';

// import styles from "./sell.module.css";
// import { useState } from "react";

// const Sellnotes = () => {
//   const [currentStep, setCurrentStep] = useState("personal");
//   const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     collegeName: "",
//     yearOfStudy: "",
//     fieldOfStudy: "",
//     upiid: "",
//     upiqr: null,
//     courseSubject: "",
//     notesDescription: "",
//     notesFile: null,
//     price: "",
//     additionalComments: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     const data = new FormData();
//     data.append('firstName', formData.firstName);
//     data.append('lastName', formData.lastName);
//     data.append('email', formData.email);
//     data.append('collegeName', formData.collegeName);
//     data.append('yearOfStudy', formData.yearOfStudy);
//     data.append('fieldOfStudy', formData.fieldOfStudy);
//     data.append('upiid', formData.upiid);
//     data.append('upiqr', formData.upiqr);
//     data.append('courseSubject', formData.courseSubject);
//     data.append('notesDescription', formData.notesDescription);
//     data.append('notesFile', formData.notesFile);
//     data.append('price', formData.price);
//     data.append('additionalComments', formData.additionalComments);

//     const Sheet_Url="https://script.google.com/macros/s/AKfycbzWGEPsfjAZMOvN7juVz6Ya3iUB-CljmZWROdNVxQyD8XWFsMBffrCyis98ziwSeJhyaw/exec"
//     try {
//       await fetch(Sheet_Url, {
//         method: 'POST',
//         body: data,
//         muteHttpExceptions: true,
//       });

//       setFormData({
//         firstName: '',
//   lastName: '',
//   email: '',
//   collegeName: '',
//   yearOfStudy: '',
//   fieldOfStudy: '',
//   upiid: '',
//   upiqr: '',
//   courseSubject: '',
//   notesDescription: '',
//   notesFile: '',
//   price: '',
//   additionalComments: '',
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleBack = () => {
//     setCurrentStep("personal");
//   };


//   const renderPersonalInfoForm = () => (
//     <>
//       <h2 className={styles.formTitle}>Personal Information</h2>
//       <p className={styles.formSubtitle}>
//         Enter your Personal Information to get closer to Buyer
//       </p>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="firstName">First Name</label>
//             <input
//             required
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="Enter Your First Name"
//               onChange={handleInputChange}
//               value={formData.firstName}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="lastName">Last Name</label>
//             <input
//             required
//               type="text"
//               id="lastName"
//               name="lastName"
//               placeholder="Enter Your Last Name"
//               onChange={handleInputChange}
//               value={formData.lastName}
//             />
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">E-Mail</label>
//             <input
//             required
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Your E-mail Address"
//               onChange={handleInputChange}
//               value={formData.email}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="collegeName">University/College Name</label>
//             <input
//             required
//               type="text"
//               id="collegeName"
//               name="collegeName"
//               placeholder="Enter your university/college name"
//               onChange={handleInputChange}
//               value={formData.collegeName}
//             />
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="yearOfStudy">Year of study</label>
//             <select
//             required
//               id="yearOfStudy"
//               name="yearOfStudy"
//               onChange={handleInputChange}
//               value={formData.yearOfStudy}
//             >
//               <option value="">Select year</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//             </select>
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="fieldOfStudy">Field of study</label>
//             <input
//             required
//               type="text"
//               id="fieldOfStudy"
//               name="fieldOfStudy"
//               placeholder="Enter Your Field Of Study"
//               onChange={handleInputChange}
//               value={formData.fieldOfStudy}
//             />
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="upiid">Enter your UPI ID</label>
//             <input
//             required
//             type="text"
//               id="upiid"
//               name="upiid"
//               onChange={handleInputChange}
//               value={formData.upiid}
//               placeholder="Enter Your UPI ID"
//             />
//           </div>
//           <div className={styles.formGroup}>
//           <label htmlFor="upiqr">Upload UPI QR Code</label>
//             <input
//             className="flex h-[3.2rem] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
//               type="file"
//               id="upiqr"
//               name="upiqr"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>
//         <button type="submit" className="relative self-end  text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer">
//           Next
//         </button>
//       </form>
//     </>
//   );

//   const renderNotesDetailsForm = () => (
//     <>
//       <h2 className={styles.formTitle}>Notes Details</h2>
//       <p className={styles.formSubtitle}>Enter the details of your notes</p>
//       <form onSubmit={handleSubmit} className={styles.form} action="https://api.web3forms.com/submit" method="POST">
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//           <input type="hidden" name="access_key" value="e1abcbd6-15e8-43b0-b1b9-c8ef353ca6bf"/>
//             <label htmlFor="courseSubject">Course/Subject</label>
//             <input
//               type="text"
//               id="courseSubject"
//               name="courseSubject"
//               placeholder="Enter the course or subject"
//               onChange={handleInputChange}
//               value={formData.courseSubject}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="notesDescription">Description of Notes</label>
//             <textarea
//               rows={1}
//               id="notesDescription"
//               name="notesDescription"
//               placeholder="Describe your notes"
//               onChange={handleInputChange}
//               value={formData.notesDescription}
//               required
//             ></textarea>
//           </div>
//         </div>
//         <div className={styles.formRow}>
//           <div className={styles.formGroup}>
//             <label htmlFor="notesFile">Upload Notes</label>
//             <input
//             className="flex h-[3.2rem] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
//               type="file"
//               id="notesFile"
//               name="notesFile"
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="price">
//               Price ( *Price should be between ₹10 and ₹50. )
//             </label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               placeholder="Enter the price"
//               onChange={handleInputChange}
//               value={formData.price}
//               min={10}
//               max={50}
//               required
//             />
//           </div>
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="additionalComments">
//             Additional Comments (Optional)
//           </label>
//           <textarea
//             id="additionalComments"
//             name="additionalComments"
//             placeholder="Any additional comments"
//             onChange={handleInputChange}
//             value={formData.additionalComments}
//           ></textarea>
//         </div>
//         <div className={styles.buttonGroup}>
//           <button
//             type="button"
//             onClick={handleBack}
//             className="relative text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer"
//           >
//             Back
//           </button>
//           <button type="submit" className="relative self-end  text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer">
//             Submit
//           </button>
//         </div>
//       </form>
//     </>
//   );

//   const renderPopup = () => (
//     <div className={styles.popupOverlay}>
//       <div className={styles.popup}>
//       <i class='bx bx-check-circle'></i>
//         <h2 className="text-[22px] mb-[1.7rem]">Your notes details submitted successfully</h2>
//         <p className="mb-[20px] text-[17px]">Your notes and details will be shown in the buy notes section after verification. If someone purchases your notes, you will receive the payment after deducting 10% as UniPrep's fee.</p>
//         <a href="/earnmoney" onClick={() => setShowPopup(false)} className="relative self-end  text-[20px] px-7 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer">
//           Back
//         </a>
//       </div>
//     </div>
//   );

//   return (
//     <div className={styles.sellnotes}>
//       <h1 className="text-center text-[3rem] leading-[0.8] font-bold">
//         Sell Notes <br />
//         <span className="text-[1.2rem] font-normal">
//           Share your knowledge and earn money by selling your notes to fellow
//           students.
//         </span>
//       </h1>
//       <div className={styles.sellnotescontainer}>
//         {currentStep === "personal"
//           ? renderPersonalInfoForm()
//           : renderNotesDetailsForm()}
//       </div>
//       {showPopup && renderPopup()}
//     </div>
//   );
// };

// export default Sellnotes;



'use client';

import styles from "./sell.module.css";
import { useState } from "react";
import Swal from 'sweetalert2';

const Sellnotes = () => {
  const [currentStep, setCurrentStep] = useState("personal");
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    collegeName: "",
    yearOfStudy: "",
    fieldOfStudy: "",
    upiid: "",
    upiqr: null,
    courseSubject: "",
    notesDescription: "",
    notesFile: null,
    price: "",
    additionalComments: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleBack = () => {
    setCurrentStep("personal");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (currentStep === "personal") {
  //     setCurrentStep("notes");
  //   } else {
  //     console.log(formData);
  //     const data = new FormData();
  //     // Object.keys(formData).forEach(key => {
  //     //   if (formData[key] instanceof File) {
  //     //     data.append(key, formData[key]);
  //     //   } else {
  //     //     data.append(key, formData[key].toString());
  //     //   }
  //     Object.keys(formData).forEach(key => {
  //       if (key === 'upiqr' || key === 'notesFile') {
  //         if (formData[key]) {
  //           data.append(key, formData[key], formData[key].name);
  //         }
  //       } else {
  //         data.append(key, formData[key].toString());
  //       }
  //     });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep === "personal") {
      setCurrentStep("notes");
    } else {

      
    
    Swal.fire({
      icon: 'success',
      title: 'Form Submitted Successfully',
      text: 'Your notes and details will be shown in the buy notes section after verification. If someone purchases your notes, you will receive the payment after deducting 10% as UniPrep`s fee.',
    });
      const data = new FormData();
      
      for (const key in formData) {
        if (key === 'upiqr' || key === 'notesFile') {
          if (formData[key]) {
            const base64 = await toBase64(formData[key]);
            data.append(key, base64);
            data.append(`${key}Name`, formData[key].name);
          data.append(`${key}Type`, formData[key].type);
          }
        } else {
          data.append(key, formData[key].toString());
        }
      }
        
      const Sheet_Url = "https://script.google.com/macros/s/AKfycbx6rQkN0w9Q64MsAQ1fa8jlYIXLyjkvI9fRtddefbRm_9fjHCMzQ9SslkYRgvxSqXQ2Tg/exec";
      try {
        const response = await fetch(Sheet_Url, {
          method: 'POST',
          body: data,
        });
          setShowPopup(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            collegeName: "",
            yearOfStudy: "",
            fieldOfStudy: "",
            upiid: "",
            upiqr: null,
            courseSubject: "",
            notesDescription: "",
            notesFile: null,
            price: "",
            additionalComments: "",
          });
          setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds

      } catch (error) {
        console.log(error);
      }
    }
  };
  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });

  const renderPersonalInfoForm = () => (
    <>
      <h2 className={styles.formTitle}>Personal Information</h2>
      <p className={styles.formSubtitle}>
        Enter your Personal Information to get closer to Buyer
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
            required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter Your First Name"
              onChange={handleInputChange}
              value={formData.firstName}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
            required
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Your Last Name"
              onChange={handleInputChange}
              value={formData.lastName}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-Mail</label>
            <input
            required
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your E-mail Address"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="collegeName">University/College Name</label>
            <input
            required
              type="text"
              id="collegeName"
              name="collegeName"
              placeholder="Enter your university/college name"
              onChange={handleInputChange}
              value={formData.collegeName}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="yearOfStudy">Year of study</label>
            <select
            required
              id="yearOfStudy"
              name="yearOfStudy"
              onChange={handleInputChange}
              value={formData.yearOfStudy}
            >
              <option value="">Select year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="fieldOfStudy">Field of study</label>
            <input
            required
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              placeholder="Enter Your Field Of Study"
              onChange={handleInputChange}
              value={formData.fieldOfStudy}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="upiid">Enter your UPI ID</label>
            <input
            required
            type="text"
              id="upiid"
              name="upiid"
              onChange={handleInputChange}
              value={formData.upiid}
              placeholder="Enter Your UPI ID"
            />
          </div>
          <div className={styles.formGroup}>
          <label htmlFor="upiqr">Upload UPI QR Code</label>
            <input
            className="flex h-[3.2rem] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              type="file"
              id="upiqr"
              name="upiqr"
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="relative self-end  text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer">
          Next
        </button>
      </form>
    </>
  );

  const renderNotesDetailsForm = () => (
    <>
      <h2 className={styles.formTitle}>Notes Details</h2>
      <p className={styles.formSubtitle}>Enter the details of your notes</p>
      <form onSubmit={handleSubmit} className={styles.form} action="https://api.web3forms.com/submit" method="POST">
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
          <input type="hidden" name="access_key" value="e1abcbd6-15e8-43b0-b1b9-c8ef353ca6bf"/>
            <label htmlFor="courseSubject">Course/Subject</label>
            <input
              type="text"
              id="courseSubject"
              name="courseSubject"
              placeholder="Enter the course or subject"
              onChange={handleInputChange}
              value={formData.courseSubject}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="notesDescription">Description of Notes</label>
            <textarea
              rows={1}
              id="notesDescription"
              name="notesDescription"
              placeholder="Describe your notes"
              onChange={handleInputChange}
              value={formData.notesDescription}
              required
            ></textarea>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="notesFile">Upload Notes</label>
            <input
            className="flex h-[3.2rem] w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              type="file"
              id="notesFile"
              name="notesFile"
              accept=".pdf"  // Add this line to accept PDF files
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="price">
              Price ( *Price should be between ₹10 and ₹50. )
            </label>
              <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter the price"
              onChange={handleInputChange}
              value={formData.price}
              min={10}
              max={50}
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="additionalComments">
            Additional Comments (Optional)
          </label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            placeholder="Any additional comments"
            onChange={handleInputChange}
            value={formData.additionalComments}
          ></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <button
            type="button"
            onClick={handleBack}
            className="relative text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer"
          >
            Back
          </button>
          <button type="submit" className="relative self-end  text-[20px] px-7 py-1 rounded-[15px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </>
  );

  const renderPopup = () => (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
      <i class='bx bx-check-circle'></i>
        <h2 className="text-[22px] mb-[1.7rem]">Your notes details submitted successfully</h2>
        <p className="mb-[20px] text-[17px]">Your notes and details will be shown in the buy notes section after verification. If someone purchases your notes, you will receive the payment after deducting 10% as UniPrep's fee.</p>
        <a href="/earnmoney" onClick={() => setShowPopup(false)} className="relative self-end  text-[20px] px-7 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute  before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer">
          Back
        </a>
      </div>
    </div>
  );

  return (
    <div className={styles.sellnotes}>
      <h1 className="text-center text-[3rem] leading-[0.8] font-bold">
        Sell Notes <br />
        <span className="text-[1.2rem] font-normal">
          Share your knowledge and earn money by selling your notes to fellow
          students.
        </span>
      </h1>
      <div className={styles.sellnotescontainer}>
        {currentStep === "personal"
          ? renderPersonalInfoForm()
          : renderNotesDetailsForm()}
      </div>
      {showPopup && renderPopup()}
    </div>
  );
};

export default Sellnotes;
