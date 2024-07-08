// "use client";

// import { useState, useEffect } from "react";
// import styles from "./buy.module.css";

// const buynotes = () => {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     year: "",
//     sem: "",
//     course: "",
//     subject: "",
//   });

//   // Simulated data - replace with actual API call
//   useEffect(() => {
//     const dummyNotes = Array(20)
//       .fill()
//       .map((_, i) => ({
//         id: i + 1,
//         subject: "Maths 2",
//         sem: "2",
//         course: "Btech",
//         description: "Unit1 Assignment Questions",
//         price: 30,
//         year: "2024",
//       }));
//     setNotes(dummyNotes);
//     setFilteredNotes(dummyNotes);
//   }, []);

//   const handleSearch = () => {
//     filterNotes(searchTerm, filters);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const filterNotes = (search, filters) => {
//     let filtered = notes.filter(
//       (note) =>
//         note.subject.toLowerCase().includes(search.toLowerCase()) ||
//         note.course.toLowerCase().includes(search.toLowerCase())
//     );

//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         filtered = filtered.filter((note) => note[key] === filters[key]);
//       }
//     });

//     setFilteredNotes(filtered);
//   };

//   useEffect(() => {
//     filterNotes(searchTerm, filters);
//   }, [searchTerm, filters, notes]);

//   return (
//     <>
//       {/* <h1 className='text-center text-[5rem] font-bold m-[10rem]'>Buy Notes under construction</h1> */}
//       <div className={styles.container}>
//         <div className="text-[#05070f] w-[80%]  p-4 md:p-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
//             Buy Quality Notes
//           </h1>
//           <p className="text-center mb-6">
//             Find notes from your peers to help you prepare better.
//           </p>

//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             <input
//               type="text"
//               placeholder="Search by Course/Subject"
//               className="flex-grow p-2 border-black border-2 border-solid rounded"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-blue-600 text-white p-2 rounded"
//             >
//               Search
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-4 mb-6">
//             {["year", "sem", "course", "subject"].map((filter) => (
//               <select
//                 key={filter}
//                 name={filter}
//                 onChange={handleFilterChange}
//                 className="bg-white border-black border-2 border-solid  p-[4px] rounded"
//               >
//                 <option value="">
//                   {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                 </option>
//                 {/* Add options dynamically based on your data */}
//                 <option value="2024">2024</option>
//                 <option value="2">2</option>
//                 <option value="Btech">Btech</option>
//                 <option value="Maths 2">Maths 2</option>
//               </select>
//             ))}
//             <button
//               onClick={() => filterNotes(searchTerm, filters)}
//               className="bg-green-600 text-white p-2 rounded"
//             >
//               Filter
//             </button>
//           </div>

//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]"> */}
//           <div className="flex items-center justify-around flex-wrap gap-[18px]">
//             {filteredNotes.map((note) => (
//               <div
//                 key={note.id}
//                 className="w-[20rem] bg-white shadow-md border-black border-[1px] border-solid  p-4 rounded-[15px]"
//               >
//                 <img
//                   src={"./assets/emma.jpg"}
//                   alt="Note"
//                   width={100}
//                   height={100}
//                   className="w-full h-32 object-cover mb-4 rounded"
//                 />
//                 <p>
//                   <strong>Subject:</strong> {note.subject}
//                 </p>
//                 <p>
//                   <strong>Sem:</strong> {note.sem}
//                 </p>
//                 <p>
//                   <strong>Course:</strong> {note.course}
//                 </p>
//                 <p>
//                   <strong>Description:</strong> {note.description}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> {note.price}₹
//                 </p>
//                 <button className="mt-4 bg-blue-600 text-white p-2 rounded w-full">
//                   Buy Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default buynotes;

// "use client";

// import { useState, useEffect } from "react";
// import styles from "./buy.module.css";

// const buynotes = () => {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     year: "",
//     sem: "",
//     course: "",
//     subject: "",
//   });

//   // Simulated data - replace with actual API call
//   useEffect(() => {
//     const dummyNotes = Array(20)
//       .fill()
//       .map((_, i) => ({
//         id: i + 1,
//         subject: ["Maths 2", "Physics", "DLCD", "Communication Skills", "Data Comm"][Math.floor(Math.random() * 5)],
//         sem: String(Math.floor(Math.random() * 8) + 1),
//         course: ["BTech", "BBA", "MBA", "BCA", "MCA", "LLB"][Math.floor(Math.random() * 6)],
//         description: "Unit1 Assignment Questions",
//         price: 30,
//         year: String(Math.floor(Math.random() * 4) + 1),
//       }));
//     setNotes(dummyNotes);
//     setFilteredNotes(dummyNotes);
//   }, []);

//   const handleSearch = () => {
//     filterNotes(searchTerm, filters);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const filterNotes = (search, filters) => {
//     let filtered = notes.filter(
//       (note) =>
//         note.subject.toLowerCase().includes(search.toLowerCase()) ||
//         note.course.toLowerCase().includes(search.toLowerCase())
//     );

//     Object.keys(filters).forEach((key) => {
//       if (filters[key]) {
//         filtered = filtered.filter((note) => note[key] === filters[key]);
//       }
//     });

//     setFilteredNotes(filtered);
//   };

//   useEffect(() => {
//     filterNotes(searchTerm, filters);
//   }, [searchTerm, filters, notes]);

//   const filterOptions = {
//     year: ["1", "2", "3", "4"],
//     sem: ["1", "2", "3", "4", "5", "6", "7", "8"],
//     course: ["BTech", "BBA", "MBA", "BCA", "MCA", "LLB"],
//     subject: ["Maths 1", "Maths 2", "Physics", "DLCD", "Communication Skills", "Data Comm"]
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className="text-[#05070f] w-[80%] mt-[3rem]  p-4 md:p-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
//             Buy Quality Notes
//           </h1>
//           <p className="text-center mb-6">
//             Find notes from your peers to help you prepare better.
//           </p>

//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             <input
//               type="text"
//               placeholder="Search by Course/Subject"
//               className="flex-grow p-2 border-black border-2 border-solid rounded"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button
//               onClick={handleSearch}
//               className="relative text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden
//         hover:text-[#05070f] cursor-pointer"
//             >
//               Search
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-4 mb-6">
//             {Object.keys(filterOptions).map((filter) => (
//               <select
//                 key={filter}
//                 name={filter}
//                 onChange={handleFilterChange}
//                 className="bg-white border-black border-2 border-solid p-[4px] rounded"
//               >
//                 <option value="">
//                   {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                 </option>
//                 {filterOptions[filter].map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             ))}
//             <button
//               onClick={() => filterNotes(searchTerm, filters)}
//               className="relative text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden
//         hover:text-[#05070f] cursor-pointer"
//             >
//               Filter
//             </button>
//           </div>

//           <div className="flex items-center justify-around flex-wrap gap-[18px]">
//             {filteredNotes.map((note) => (
//               <div
//                 key={note.id}
//                 className="w-[20rem] bg-white shadow-md border-black border-[1px] border-solid  p-4 rounded-[15px]"
//               >
//                 <img
//                   src={"./assets/emma.jpg"}
//                   alt="Note"
//                   width={100}
//                   height={100}
//                   className="w-full h-32 object-cover mb-4 rounded"
//                 />
//                 <p>
//                   <strong>Subject:</strong> {note.subject}
//                 </p>
//                 <p>
//                   <strong>Year:</strong> {note.year}
//                 </p>
//                 <p>
//                   <strong>Sem:</strong> {note.sem}
//                 </p>
//                 <p>
//                   <strong>Course:</strong> {note.course}
//                 </p>
//                 <p>
//                   <strong>Description:</strong> {note.description}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> {note.price}₹
//                 </p>
//                 <button className="mt-4 bg-blue-600 text-white p-2 rounded w-full">
//                   Buy Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default buynotes;

"use client";

import { useState, useEffect } from "react";
import styles from "./buy.module.css";

const buynotes = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate form loading delay
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // Adjust this time as needed

  //   return () => clearTimeout(timer);
  // }, []);

  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    year: "",
    sem: "",
    course: "",
    subject: "",
  });

  // Simulated data - replace with actual API call
  useEffect(() => {
    const imageUrls = [
      "./assets/f1.png",
      "./assets/emma.jpg",
      "./assets/jane.jpg",
      "./assets/john.jpg",
      "./assets/note5.jpg",
    ];

    const dummyNotes = Array(8)
      .fill()
      .map((_, i) => ({
        id: i + 1,
        subject: [
          "Maths 2",
          "Physics",
          "DLCD",
          "Communication Skills",
          "Data Comm",
        ][Math.floor(Math.random() * 5)],
        sem: String(Math.floor(Math.random() * 8) + 1),
        course: ["BTech", "BBA", "MBA", "BCA", "MCA", "LLB"][
          Math.floor(Math.random() * 6)
        ],
        description: "Unit1 Assignment Questions",
        price: 30,
        year: String(Math.floor(Math.random() * 4) + 1),
        imageUrl: imageUrls[Math.floor(Math.random() * imageUrls.length)],
      }));
    setNotes(dummyNotes);
    setFilteredNotes(dummyNotes);
  }, []);

  const handleSearch = () => {
    filterNotes(searchTerm, filters);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filterNotes = (search, filters) => {
    let filtered = notes.filter(
      (note) =>
        note.subject.toLowerCase().includes(search.toLowerCase()) ||
        note.course.toLowerCase().includes(search.toLowerCase())
    );

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        filtered = filtered.filter((note) => note[key] === filters[key]);
      }
    });

    setFilteredNotes(filtered);
  };

  useEffect(() => {
    filterNotes(searchTerm, filters);
  }, [searchTerm, filters, notes]);

  const filterOptions = {
    year: ["1", "2", "3", "4"],
    sem: ["1", "2", "3", "4", "5", "6", "7", "8"],
    course: ["BTech", "BBA", "MBA", "BCA", "MCA", "LLB"],
    subject: [
      "Maths 1",
      "Maths 2",
      "Physics",
      "DLCD",
      "Communication Skills",
      "Data Comm",
    ],
  };
  return (
    <>
      <div className={styles.container}>
        <div className="text-[#05070f] w-[80%] mt-[3rem]  p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Buy Quality Notes
          </h1>
          <p className="text-center mb-6">
            Find notes from your peers to help you prepare better.
          </p>
          <div className="secon flex items-center justify-between mb-[20px] max-[1410px]:flex-col max-[1410px]:items-start">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Search by Course/Subject"
                className="flex p-2 w-[20rem] max-[1410px]:w-[29rem] max-[628px]:w-[73vw] border-black border-2 border-solid rounded focus:outline-none focus:ring-2 focus:ring-[#4636FC]-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="relative text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer"
              >
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              {Object.keys(filterOptions).map((filter) => (
                <select
                  key={filter}
                  name={filter}
                  onChange={handleFilterChange}
                  className="bg-white border-black border-2 border-solid p-[4px] rounded"
                >
                  <option value="">
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </option>
                  {filterOptions[filter].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
              {/* <button
                onClick={() => filterNotes(searchTerm, filters)}
                className="relative text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
          before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
          before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
          hover:text-[#05070f] cursor-pointer"
              >
                Filter
              </button> */}
            </div>
          </div>

          {/* {isLoading ? (
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
        ) : ( */}

          <div className="flex items-center justify-around flex-wrap gap-[18px]">
           
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="w-[20rem] bg-white shadow-md border-black border-[1px] border-solid  p-4 rounded-[15px]"
              >
                <img
                  src={note.imageUrls}
                  alt={`Demo Image Of Notes ${note.subject}`}
                  width={100}
                  height={100}
                  className="w-full h-32 object-cover mb-4 rounded"
                />
                <p>
                  <strong>Subject:</strong> {note.subject}
                </p>
                <p>
                  <strong>Year:</strong> {note.year}
                </p>
                <p>
                  <strong>Sem:</strong> {note.sem}
                </p>
                <p>
                  <strong>Course:</strong> {note.course}
                </p>
                <p>
                  <strong>Description:</strong> {note.description}
                </p>
                <p>
                  <strong>Price:</strong> {note.price}₹
                </p>
                <button
                  className="relative w-[100%] mt-[2px] text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
        before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
        before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
        hover:text-[#05070f] cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        {/* )} */}
        </div>
      </div>
    </>
  );
};

export default buynotes;
