// "use client";
// import { useState, useEffect } from "react";
// import styles from "./buy.module.css";

// const buynotes = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filters, setFilters] = useState({
//     year: "",
//     sem: "",
//     course: "",
//     subject: "",
//   });

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
//     subject: [
//       "Maths 1",
//       "Maths 2",
//       "Physics",
//       "DLCD",
//       "Communication Skills",
//       "Data Comm",
//     ],
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     const imageUrls = [
//       "./assets/f1.png",
//       "./assets/emma.jpg",
//       "./assets/jane.jpg",
//       "./assets/john.jpg",
//       "./assets/note5.jpg",
//     ];

//     const notesData = [
//       {
//         id: 1,
//         subject: "Maths 2",
//         sem: "2",
//         course: "BTech",
//         description: "Calculus and Linear Algebra",
//         price: 25,
//         year: "1",
//         imageUrl: imageUrls[0],
//       },
//       {
//         id: 2,
//         subject: "Physics",
//         sem: "1",
//         course: "BSc",
//         description: "Mechanics and Thermodynamics",
//         price: 30,
//         year: "1",
//         imageUrl: imageUrls[1],
//       },
//       {
//         id: 3,
//         subject: "DLCD",
//         sem: "3",
//         course: "BTech",
//         description: "Digital Logic Circuit Design",
//         price: 35,
//         year: "2",
//         imageUrl: imageUrls[2],
//       },
//       {
//         id: 4,
//         subject: "Communication Skills",
//         sem: "1",
//         course: "BBA",
//         description: "Effective Business Communication",
//         price: 20,
//         year: "1",
//         imageUrl: imageUrls[3],
//       },
//       {
//         id: 5,
//         subject: "Data Comm",
//         sem: "4",
//         course: "MCA",
//         description: "Data Communication and Networking",
//         price: 40,
//         year: "2",
//         imageUrl: imageUrls[4],
//       },
//       {
//         id: 6,
//         subject: "Operating Systems",
//         sem: "5",
//         course: "BTech",
//         description: "Principles of OS Design",
//         price: 35,
//         year: "3",
//         imageUrl: imageUrls[0],
//       },
//       {
//         id: 7,
//         subject: "Database Management",
//         sem: "3",
//         course: "BCA",
//         description: "SQL and RDBMS Concepts",
//         price: 30,
//         year: "2",
//         imageUrl: imageUrls[1],
//       },
//       {
//         id: 8,
//         subject: "Marketing Management",
//         sem: "2",
//         course: "MBA",
//         description: "Strategic Marketing Principles",
//         price: 45,
//         year: "1",
//         imageUrl: imageUrls[2],
//       },
//     ];
//     setNotes(notesData);
//     setFilteredNotes(notesData);
//     setIsLoading(false);
//   }, []);

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
//           <div className="secon flex items-center justify-between mb-[20px] max-[1410px]:flex-col max-[1410px]:items-start">
//             <div className="flex flex-col md:flex-row gap-4 mb-6">
//               <input
//                 type="text"
//                 placeholder="Search by Course/Subject"
//                 className="flex p-2 w-[20rem] max-[1410px]:w-[29rem] max-[628px]:w-[73vw] border-black border-2 border-solid rounded focus:outline-none focus:ring-2 focus:ring-[#4636FC]-300"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button
//                 onClick={handleSearch}
//                 className="relative text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden
//         hover:text-[#05070f] cursor-pointer"
//               >
//                 Search
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-4 mb-6">
//               {Object.keys(filterOptions).map((filter) => (
//                 <select
//                   key={filter}
//                   name={filter}
//                   onChange={handleFilterChange}
//                   className="bg-white border-black border-2 border-solid p-[4px] rounded"
//                 >
//                   <option value="">
//                     {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                   </option>
//                   {filterOptions[filter].map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//           {isLoading ? (
//             <div className={styles.dotspinner}>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//             </div>
//           ) : filteredNotes.length > 0 ? (
//             <div className="flex items-center justify-around flex-wrap gap-[18px]">
//               {filteredNotes.map((note) => (
//                 <div
//                   key={note.id}
//                   className="w-[20rem] bg-white shadow-md border-black border-[1px] border-solid  p-4 rounded-[15px]"
//                 >
//                   <img
//                     src={note.imageUrl}
//                     alt={`Demo Image Of Notes ${note.subject}`}
//                     width={100}
//                     height={100}
//                     className="w-full h-32 object-cover mb-4 rounded"
//                   />
//                   <p>
//                     <strong>Subject:</strong> {note.subject}
//                   </p>
//                   <p>
//                     <strong>Year:</strong> {note.year}
//                   </p>
//                   <p>
//                     <strong>Sem:</strong> {note.sem}
//                   </p>
//                   <p>
//                     <strong>Course:</strong> {note.course}
//                   </p>
//                   <p>
//                     <strong>Description:</strong> {note.description}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {note.price}₹
//                   </p>
//                   <button
//                     className="relative w-[100%] mt-[2px] text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden
//         hover:text-[#05070f] cursor-pointer"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//             ) : (
//               <div className="text-center py-8">
//                 <p className="text-xl font-semibold text-gray-600">No buying notes available</p>
//                 <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
//               </div>
//           )}
// </div>

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
//   const [isLoading, setIsLoading] = useState(true);

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
//     subject: [
//       "Maths 1",
//       "Maths 2",
//       "Physics",
//       "DLCD",
//       "Communication Skills",
//       "Data Comm",
//     ],
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     // const imageUrls = [
//     //   // "https://images.ctfassets.net/lzny33ho1g45/66zDmwVz2N4aN4k589RRjB/36f5339cd45ed61b6560292a696e91d5/notes?w=1400",
//     // ];

//     const notesData = [
//       {
//         id: 1,
//         subject: "Maths 2",
//         sem: "2",
//         course: "BTech",
//         description: "Calculus and Linear Algebra",
//         price: 25,
//         year: "1",
//         imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/66zDmwVz2N4aN4k589RRjB/36f5339cd45ed61b6560292a696e91d5/notes?w=1400',
//       },
//     ];

//     setNotes(notesData);
//     setFilteredNotes(notesData);
//     setIsLoading(false);
//   }, []);

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
//           <div className="secon flex items-center justify-between mb-[20px] max-[1410px]:flex-col max-[1410px]:items-start">
//             <div className="flex flex-col md:flex-row gap-4 mb-6">
//               <input
//                 type="text"
//                 placeholder="Search by Course/Subject"
//                 className="flex p-2 w-[20rem] max-[1410px]:w-[29rem] max-[628px]:w-[73vw] border-black border-2 border-solid rounded focus:outline-none focus:ring-2 focus:ring-[#4636FC]-300"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button
//                 onClick={handleSearch}
//                 className="relative text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer"
//               >
//                 Search
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-4 mb-6">
//               {Object.keys(filterOptions).map((filter) => (
//                 <select
//                   key={filter}
//                   name={filter}
//                   onChange={handleFilterChange}
//                   className="bg-white border-black border-2 border-solid p-[4px] rounded"
//                 >
//                   <option value="">
//                     {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                   </option>
//                   {filterOptions[filter].map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//           {isLoading ? (
//             <div className={styles.dotspinner}>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//               <div className={styles.dotspinnerdot}></div>
//             </div>
//           ) : filteredNotes.length > 0 ? (
//             <div className="flex items-center justify-around flex-wrap gap-[18px]">
//               {filteredNotes.map((note) => (
//                 <div
//                   key={note.id}
//                   className="w-[20rem] bg-white shadow-md border-black border-[1px] border-solid  p-4 rounded-[15px]"
//                 >
//                   <img
//                     src={note.imageUrl}
//                     alt={`Demo Image Of Notes ${note.subject}`}
//                     width={100}
//                     height={100}
//                     className="w-full h-32 object-cover mb-4 rounded"
//                   />
//                   <p>
//                     <strong>Subject:</strong> {note.subject}
//                   </p>
//                   <p>
//                     <strong>Year:</strong> {note.year}
//                   </p>
//                   <p>
//                     <strong>Sem:</strong> {note.sem}
//                   </p>
//                   <p>
//                     <strong>Course:</strong> {note.course}
//                   </p>
//                   <p>
//                     <strong>Description:</strong> {note.description}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {note.price}₹
//                   </p>
//                   <button
//                     className="relative w-[100%] mt-[2px] text-[20px] px-5 py-1 rounded-[12px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9] transition-[0.5s] before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-8">
//               <p className="text-2xl font-semibold text-gray-600">
//               Currently, there are no notes available for selling.
//               </p>
//             </div>
//           )}
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

const BuyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    year: "",
    sem: "",
    course: "",
    subject: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    const notesData = [
      // {
      //   id: 1,
      //   subject: "Maths 2",
      //   sem: "2",
      //   course: "BTech",
      //   description: "Calculus and Linear Algebra",
      //   price: 25,
      //   year: "1",
      //   imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/66zDmwVz2N4aN4k589RRjB/36f5339cd45ed61b6560292a696e91d5/notes?w=1400',
      //   pdfUrl: 'https://drive.google.com/file/d/17CLTCE4GPu-4RBuIK7PZwOBy2fcrfP6I/view', // Add a sample PDF URL
      // },
      // {
      //   id: 2,
      //   subject: "Maths 5",
      //   sem: "2",
      //   course: "Bca",
      //   description: "Calculus",
      //   price: 50,
      //   year: "2",
      //   imageUrl: 'https://images.ctfassets.net/lzny33ho1g45/66zDmwVz2N4aN4k589RRjB/36f5339cd45ed61b6560292a696e91d5/notes?w=1400',
      //   pdfUrl: 'https://drive.google.com/file/d/17CLTCE4GPu-4RBuIK7PZwOBy2fcrfP6I/view', // Add a sample PDF URL
      // },
    ];

    setNotes(notesData);
    setFilteredNotes(notesData);
    setIsLoading(false);
  }, []);

  const handleBuyNow = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <>
      <div className={styles.container}>
        <div className="text-[#05070f] w-[80%] mt-[3rem] p-4 md:p-8">
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
            </div>
          </div>
          <div className="flex items-center justify-center">
            {isLoading ? (
              <div className={styles.dotspinner}>
                <div className={styles.dotspinnerdot}></div>
                <div className={styles.dotspinnerdot}></div>
                <div className={styles.dotspinnerdot}></div>
                <div className={styles.dotspinnerdot}></div>
                <div className={styles.dotspinnerdot}></div>
                <div className={styles.dotspinnerdot}></div>
                <div className={styles.dotspinnerdot}></div>
                <div className={styles.dotspinnerdot}></div>
              </div>
            ) : filteredNotes.length > 0 ? (
              <div className="flex items-center justify-around flex-wrap gap-[18px]">
                {filteredNotes.map((note) => (
                  <div
                    key={note.id}
                    className="w-[20rem] bg-white shadow-md border-black border-[1px] border-solid p-4 rounded-[15px]"
                  >
                    <img
                      src={note.imageUrl}
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
                      onClick={() => handleBuyNow(note)}
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
            ) : (
              <div className="text-center py-8">
                <p className="text-2xl font-semibold text-gray-600">
                  Currently, there are no notes available for selling.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && selectedNote && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-[#1a1a1a] rounded-lg w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-gray-600">
      <div className="p-4 border-b border-gray-600">
        {/* Header if needed */}
      </div>
      <div className="flex-grow flex p-6 space-x-6">
        <div className="w-1/2 bg-[#2a2a2a] rounded-lg overflow-hidden">
          <iframe src={selectedNote.pdfUrl} className="w-full h-full border-none"></iframe>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div className="space-y-4 text-white">
            <p><span className="font-semibold">Subject:</span> {selectedNote.subject}</p>
            <p><span className="font-semibold">Notes Description:</span> {selectedNote.description}</p>
            <p><span className="font-semibold">Course:</span> {selectedNote.course}</p>
            <p><span className="font-semibold">Year:</span> {selectedNote.year}</p>
            <p><span className="font-semibold">Sem:</span> {selectedNote.sem}</p>
            <p><span className="font-semibold">Price:</span> ₹{selectedNote.price}</p>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log('Buying note:', selectedNote);
                closeModal();
              }}
              className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default BuyNotes;
