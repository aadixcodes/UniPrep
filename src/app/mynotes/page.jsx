'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from "./mynotes.module.css";

const notesData = [
  { hashtag: '#DLCD', title: 'Get DLCD Upcoming Exam IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#DLCD', title: 'Get DLCD MST 1 IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#DLCD', title: 'Get DLCD MST 2 IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#DLCD', title: 'Get DLCD End Sem IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#DLCD', title: 'Get DLCD MST PYQs Papers', link: './assets/uniprepletter.pdf' },
  { hashtag: '#DLCD', title: 'Get DLCD End Sem PYQs Paper', link: './assets/uniprepletter.pdf' },
  { hashtag: '#DLCD', title: 'Get DLCD UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#ICSE', title: 'Get ICSE Upcoming Exam IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#ICSE', title: 'Get ICSE MST 1 IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#ICSE', title: 'Get ICSE MST 2 IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#ICSE', title: 'Get ICSE End Sem IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#ICSE', title: 'Get ICSE MST PYQs Papers', link: './assets/uniprepletter.pdf' },
  { hashtag: '#ICSE', title: 'Get ICSE End Sem PYQs Paper', link: './assets/uniprepletter.pdf' },
  { hashtag: '#ICSE', title: 'Get ICSE UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#IDT', title: 'Get IDT Upcoming Exam IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#IDT', title: 'Get IDT MST 2 IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#IDT', title: 'Get IDT MST 1 IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#IDT', title: 'Get IDT End Sem IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#IDT', title: 'Get IDT MST PYQs Papers', link: './assets/uniprepletter.pdf' },
  { hashtag: '#IDT', title: 'Get IDT End Sem PYQs Paper', link: './assets/uniprepletter.pdf' },
  { hashtag: '#IDT', title: 'Get IDT UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#CSO', title: 'Get CSO Upcoming Exam IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CSO', title: 'Get CSO MST 1 IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CSO', title: 'Get CSO MST 2 IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CSO', title: 'Get CSO End Sem IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CSO', title: 'Get CSO MST PYQs Papers', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CSO', title: 'Get CSO End Sem PYQs Paper', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CSO', title: 'Get CSO UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#Maths 1', title: 'Get Maths 1 Upcoming Exam IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 MST 1 IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 MST 2 IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 End Sem IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 MST PYQs Papers', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 End Sem PYQs Paper', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#Physics', title: 'Get Physics Upcoming Exam IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Physics', title: 'Get Physics MST 1 IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Physics', title: 'Get Physics MST 2 IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Physics', title: 'Get Physics End Sem IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Physics', title: 'Get Physics MST PYQs Papers', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Physics', title: 'Get Physics End Sem PYQs Paper', link: './assets/uniprepletter.pdf' },
  { hashtag: '#Physics', title: 'Get Physics UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#CS', title: 'Get CS Upcoming Exam IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CS', title: 'Get CS MST 1 IMP Question', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CS', title: 'Get CS MST 2 IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CS', title: 'Get CS End Sem IMP Questions', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CS', title: 'Get CS MST PYQs Papers', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CS', title: 'Get CS End Sem PYQs Paper', link: './assets/uniprepletter.pdf' },
  { hashtag: '#CS', title: 'Get CS UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },
];

const Mynotes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeHash, setActiveHash] = useState('#All');

  const filteredNotes = notesData.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHash = activeHash === '#All' || note.hashtag === activeHash;
    return matchesSearch && matchesHash;
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="text-[4rem] leading-[1] font-[500]">
            My <br /> Notes
          </h1>
          <div className="relative">
            <input
              placeholder="Find Notes....."
              className="input w-[30rem] shadow-lg focus:border-1 border-gray-300 px-5 py-3 rounded-xl transition-all focus:w-[31rem] outline-none"
              name="search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="size-6 absolute top-3 right-3 text-gray-500"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.hashline}>
          {['#All', '#DLCD', '#Maths 1', '#IDT', '#Physics', '#CSO', '#ICSE'].map((hash) => (
            <span 
              key={hash}
              className={`${styles.hash} ${activeHash === hash ? styles.activeHash : ''}`}
              onClick={() => setActiveHash(hash)}
            >
              {hash}
            </span>
          ))}
        </div>
        <div className={styles.wrapper}>
          {filteredNotes.map((note, index) => (
            <div key={index} className={styles.notesitem}>
              <div className={styles.lside}>
                <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
                  {note.hashtag}
                </span>
                <h1 className="text-[1.4rem]">{note.title}</h1>
              </div>
              <div className={styles.rside}>
                <Link href={note.link} target='_blank'>
                  <i className="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mynotes;




















// import styles from "./mynotes.module.css";

// const Mynotes = () => {
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <h1 className="text-[4rem] leading-[1] font-[500]">
//             My <br /> Notes
//           </h1>
//           <div className="relative">
//             <input
//               placeholder="Find Notes....."
//               className="input w-[30rem] shadow-lg focus:border-1 border-gray-300 px-5 py-3 rounded-xl  transition-all focus:w-[31rem] outline-none"
//               name="search"
//               type="search"
//             />
//             <svg
//               class="size-6 absolute top-3 right-3 text-gray-500"
//               stroke="currentColor"
//               stroke-width="1.5"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//               ></path>
//             </svg>
//           </div>
//         </div>
//         <div className={styles.hashline}>
//           <span className={styles.hash}>#All</span>
//           <span className={styles.hash}>#DLCD</span>
//           <span className={styles.hash}>#Maths 1</span>
//           <span className={styles.hash}>#IDT</span>
//           <span className={styles.hash}>#Physics</span>
//           <span className={styles.hash}>#CSO</span>
//           <span className={styles.hash}>#ICSE</span>
//         </div>
//         <div className={styles.wrapper}>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #DLCD
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get DLCD Upcoming Exam IMP Question
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #DLCD
//               </span>
//               <h1 className="text-[1.4rem]">Get DLCD MST 1 IMP Question</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx  bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #DLCD
//               </span>
//               <h1 className="text-[1.4rem]">Get DLCD MST 2 IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #DLCD
//               </span>
//               <h1 className="text-[1.4rem]">Get DLCD End Sem IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #DLCD
//               </span>
//               <h1 className="text-[1.4rem]">Get DLCD MST PYQs Papers</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #DLCD
//               </span>
//               <h1 className="text-[1.4rem]">Get DLCD End Sem PYQs Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #DLCD
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get DLCD UniPrep Predicted Paper
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>

//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #ICSE
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get ICSE Upcoming Exam IMP Question
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #ICSE
//               </span>
//               <h1 className="text-[1.4rem]">Get ICSE MST 1 IMP Question</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx  bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #ICSE
//               </span>
//               <h1 className="text-[1.4rem]">Get ICSE MST 2 IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #ICSE
//               </span>
//               <h1 className="text-[1.4rem]">Get ICSE End Sem IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #ICSE
//               </span>
//               <h1 className="text-[1.4rem]">Get ICSE MST PYQs Papers</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #ICSE
//               </span>
//               <h1 className="text-[1.4rem]">Get ICSE End Sem PYQs Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #ICSE
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get ICSE UniPrep Predicted Paper
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>

//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #IDT
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get IDT Upcoming Exam IMP Question
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #IDT
//               </span>
//               <h1 className="text-[1.4rem]">Get IDT MST 1 IMP Question</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx  bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #IDT
//               </span>
//               <h1 className="text-[1.4rem]">Get IDT MST 2 IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #IDT
//               </span>
//               <h1 className="text-[1.4rem]">Get IDT End Sem IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #IDT
//               </span>
//               <h1 className="text-[1.4rem]">Get IDT MST PYQs Papers</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #IDT
//               </span>
//               <h1 className="text-[1.4rem]">Get IDT End Sem PYQs Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #IDT
//               </span>
//               <h1 className="text-[1.4rem]">Get IDT UniPrep Predicted Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>

//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Maths 1
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get Maths 1 Upcoming Exam IMP Question
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Maths 1
//               </span>
//               <h1 className="text-[1.4rem]">Get Maths 1 MST 1 IMP Question</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx  bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Maths 1
//               </span>
//               <h1 className="text-[1.4rem]">Get Maths 1 MST 2 IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Maths 1
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get Maths 1 End Sem IMP Questions
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Maths 1
//               </span>
//               <h1 className="text-[1.4rem]">Get Maths 1 MST PYQs Papers</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Maths 1
//               </span>
//               <h1 className="text-[1.4rem]">Get Maths 1 End Sem PYQs Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Maths 1
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get Maths 1 UniPrep Predicted Paper
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>

//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Physics
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get Physics Upcoming Exam IMP Question
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Physics
//               </span>
//               <h1 className="text-[1.4rem]">Get Physics MST 1 IMP Question</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx  bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Physics
//               </span>
//               <h1 className="text-[1.4rem]">Get Physics MST 2 IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Physics
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get Physics End Sem IMP Questions
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Physics
//               </span>
//               <h1 className="text-[1.4rem]">Get Physics MST PYQs Papers</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Physics
//               </span>
//               <h1 className="text-[1.4rem]">Get Physics End Sem PYQs Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #Physics
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get Physics UniPrep Predicted Paper
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>

//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CSO
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get CSO Upcoming Exam IMP Question
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CSO
//               </span>
//               <h1 className="text-[1.4rem]">Get CSO MST 1 IMP Question</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx  bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CSO
//               </span>
//               <h1 className="text-[1.4rem]">Get CSO MST 2 IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CSO
//               </span>
//               <h1 className="text-[1.4rem]">Get CSO End Sem IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CSO
//               </span>
//               <h1 className="text-[1.4rem]">Get CSO MST PYQs Papers</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CSO
//               </span>
//               <h1 className="text-[1.4rem]">Get CSO End Sem PYQs Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CSO
//               </span>
//               <h1 className="text-[1.4rem]">Get CSO UniPrep Predicted Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>

//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CS
//               </span>
//               <h1 className="text-[1.4rem]">
//                 Get CS Upcoming Exam IMP Question
//               </h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CS
//               </span>
//               <h1 className="text-[1.4rem]">Get CS MST 1 IMP Question</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx  bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CS
//               </span>
//               <h1 className="text-[1.4rem]">Get CS MST 2 IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CS
//               </span>
//               <h1 className="text-[1.4rem]">Get CS End Sem IMP Questions</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CS
//               </span>
//               <h1 className="text-[1.4rem]">Get CS MST PYQs Papers</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CS
//               </span>
//               <h1 className="text-[1.4rem]">Get CS End Sem PYQs Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//           <div className={styles.notesitem}>
//             <div className={styles.lside}>
//               <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                 #CS
//               </span>
//               <h1 className="text-[1.4rem]">Get CS UniPrep Predicted Paper</h1>
//             </div>
//             <div className={styles.rside}>
//               <a href="/">
//                 <i class="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Mynotes;





// 'use client';
// import { useState, useEffect } from 'react';
// import styles from "./mynotes.module.css";

// const subjects = ["ICSE", "DLCD", "IDT", "Maths 1", "Physics", "CSO", "CS"];
// const topics = [
//   "Upcoming Exam IMP Question",
//   "MST 1 IMP Question",
//   "MST 2 IMP Questions",
//   "End Sem IMP Questions",
//   "MST PYQs Papers",
//   "End Sem PYQs Paper",
//   "UniPrep Predicted Paper"
// ];

// const linkMap = {
//   ICSE: {
//     "Upcoming Exam IMP Question": "./assets/NotesMaterial/ICSE/unit 1.pdf",
//     "MST 1 IMP Question": "./assets/NotesMaterial/ICSE/unit 2.pdf",
//     "MST 2 IMP Questions": "./assets/NotesMaterial/ICSE/unit 3.pdf",
//     "End Sem IMP Questions": "./assets/NotesMaterial/ICSE/unit 4.pdf",
//     "MST PYQs Papers": "./assets/NotesMaterial/ICSE/unit 5.pdf",
//     "End Sem PYQs Paper": "./assets/NotesMaterial/ICSE/unit 1.pdf",
//     "UniPrep Predicted Paper": "./assets/NotesMaterial/ICSE/unit 1.pdf"
//   },
//   DLCD: {
//     "Upcoming Exam IMP Question": "./assets/uniprepletter.pdf",
//     "MST 1 IMP Question": "./assets/NotesMaterial/DLCD/unit 2.pdf",
//     "MST 2 IMP Questions": "./assets/NotesMaterial/DLCD/unit 3.pdf",
//     "End Sem IMP Questions": "./assets/NotesMaterial/DLCD/unit 4.pdf",
//     "MST PYQs Papers": "./assets/NotesMaterial/DLCD/unit 5.pdf",
//     "End Sem PYQs Paper": "./assets/uniprepletter.pdf",
//     "UniPrep Predicted Paper": "./assets/uniprepletter.pdf"
//   },

// }

// const generateNotes = () => {
//   let id = 1;
//   const notes = [];
//   subjects.forEach(subject => {
//     topics.forEach(topic => {
//       notes.push({
//         id: id++,
//         subject,
//         title: `Get ${subject} ${topic}`,
//         link: linkMap[subject][topic] || `/notes/${subject.toLowerCase().replace(' ', '-')}/${id}`
//       });
//     });
//   });
//   return notes;
// };

// const Mynotes = () => {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);
//   const [activeHashtag, setActiveHashtag] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const generatedNotes = generateNotes();
//     setNotes(generatedNotes);
//     setFilteredNotes(generatedNotes);
//   }, []);

//   const handleHashtagClick = (hashtag) => {
//     setActiveHashtag(hashtag);
//     if (hashtag === 'All') {
//       setFilteredNotes(notes);
//     } else {
//       setFilteredNotes(notes.filter(note => note.subject === hashtag));
//     }
//   };

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     const filtered = notes.filter(note =>
//       note.title.toLowerCase().includes(term) ||
//       note.subject.toLowerCase().includes(term)
//     );
//     setFilteredNotes(filtered);
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <h1 className="text-[4rem] leading-[1] font-[500]">
//             My <br /> Notes
//           </h1>
//           <div className="relative">
//             <input
//               placeholder="Find Notes....."
//               className="input w-[30rem] shadow-lg focus:border-1 border-gray-300 px-5 py-3 rounded-xl transition-all focus:w-[31rem] outline-none"
//               name="search"
//               type="search"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//             <svg
//               className="size-6 absolute top-3 right-3 text-gray-500"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//               ></path>
//             </svg>
//           </div>
//         </div>
//         <div className={styles.hashline}>
//           <span
//             className={`${styles.hash} ${activeHashtag === 'All' ? styles.active : ''}`}
//             onClick={() => handleHashtagClick('All')}
//           >
//             #All
//           </span>
//           {subjects.map(subject => (
//             <span
//               key={subject}
//               className={`${styles.hash} ${activeHashtag === subject ? styles.active : ''}`}
//               onClick={() => handleHashtagClick(subject)}
//             >
//               #{subject}
//             </span>
//           ))}
//         </div>
//         <div className={styles.wrapper}>
//           {filteredNotes.map(note => (
//             <div key={note.id} className={styles.notesitem}>
//               <div className={styles.lside}>
//                 <span className="px-[1.2rem] py-[5px] rounded-[20px] text-[16px]">
//                   #{note.subject}
//                 </span>
//                 <h1 className="text-[1.4rem]">{note.title}</h1>
//               </div>
//               <div className={styles.rside}>
//                 <a href={note.link}>
//                   <i className="bx bx-chevron-right-circle text-[3.5rem] cursor-pointer"></i>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Mynotes;






