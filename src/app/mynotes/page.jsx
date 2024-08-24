'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from "./mynotes.module.css";

const notesData = [
  { hashtag: '#DLCD', title: 'Get DLCD Lecture Notes', link: 'https://sites.google.com/view/dlcdnotes/home?authuser=8' },
  { hashtag: '#DLCD', title: 'Get DLCD MST PYQs Papers', link: 'https://sites.google.com/view/dlcdnotes/home?authuser=8' },
  { hashtag: '#DLCD', title: 'Get DLCD End Sem PYQs Paper', link: 'https://sites.google.com/view/dlcdnotes/home?authuser=8' },
  { hashtag: '#DLCD', title: 'Get DLCD Upcoming Exam IMP Question', link: 'https://sites.google.com/view/dlcdimpquestions/home?authuser=8' },
  { hashtag: '#DLCD', title: 'Get DLCD MST 1 IMP Question', link: 'https://sites.google.com/view/dlcdimpquestions/home?authuser=8' },
  { hashtag: '#DLCD', title: 'Get DLCD MST 2 IMP Questions', link: 'https://sites.google.com/view/dlcdimpquestions/home?authuser=8' },
  { hashtag: '#DLCD', title: 'Get DLCD End Sem IMP Questions', link: 'https://sites.google.com/view/dlcdimpquestions/home?authuser=8' },
  // { hashtag: '#DLCD', title: 'Get DLCD UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#ICSE', title: 'Get ICSE Lecture Notes', link: 'https://sites.google.com/view/icsenotes/home?authuser=8' },
  { hashtag: '#ICSE', title: 'Get ICSE MST PYQs Papers', link: 'https://sites.google.com/view/icsenotes/home?authuser=8' },
  { hashtag: '#ICSE', title: 'Get ICSE End Sem PYQs Paper', link: 'https://sites.google.com/view/icsenotes/home?authuser=8' },
  { hashtag: '#ICSE', title: 'Get ICSE Upcoming Exam IMP Question', link: 'https://sites.google.com/view/icseimpquestions/home?authuser=8' },
  { hashtag: '#ICSE', title: 'Get ICSE MST 1 IMP Question', link: 'https://sites.google.com/view/icseimpquestions/home?authuser=8' },
  { hashtag: '#ICSE', title: 'Get ICSE MST 2 IMP Questions', link: 'https://sites.google.com/view/icseimpquestions/home?authuser=8' },
  { hashtag: '#ICSE', title: 'Get ICSE End Sem IMP Questions', link: 'https://sites.google.com/view/icseimpquestions/home?authuser=8' },
  // { hashtag: '#ICSE', title: 'Get ICSE UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#IDT', title: 'Get IDT Lecture Notes', link: 'https://sites.google.com/view/idtnotes/home?authuser=8' },
  { hashtag: '#IDT', title: 'Get IDT MST PYQs Papers', link: 'https://sites.google.com/view/idtnotes/home?authuser=8' },
  { hashtag: '#IDT', title: 'Get IDT End Sem PYQs Paper', link: 'https://sites.google.com/view/idtnotes/home?authuser=8' },
  { hashtag: '#IDT', title: 'Get IDT Upcoming Exam IMP Question', link: 'https://sites.google.com/view/idtimpquestions/home?authuser=8' },
  { hashtag: '#IDT', title: 'Get IDT MST 2 IMP Questions', link: 'https://sites.google.com/view/idtimpquestions/home?authuser=8' },
  { hashtag: '#IDT', title: 'Get IDT MST 1 IMP Question', link: 'https://sites.google.com/view/idtimpquestions/home?authuser=8' },
  { hashtag: '#IDT', title: 'Get IDT End Sem IMP Questions', link: 'https://sites.google.com/view/idtimpquestions/home?authuser=8' },
  // { hashtag: '#IDT', title: 'Get IDT UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#CSO', title: 'Get CSO Lecture Notes', link: 'https://sites.google.com/view/csonotes/home?authuser=8' },
  { hashtag: '#CSO', title: 'Get CSO MST PYQs Papers', link: 'https://sites.google.com/view/csonotes/home?authuser=8' },
  { hashtag: '#CSO', title: 'Get CSO End Sem PYQs Paper', link: 'https://sites.google.com/view/csonotes/home?authuser=8' },
  { hashtag: '#CSO', title: 'Get CSO Upcoming Exam IMP Question', link: 'https://sites.google.com/view/csoimpquestions/home?authuser=8' },
  { hashtag: '#CSO', title: 'Get CSO MST 1 IMP Question', link: 'https://sites.google.com/view/csoimpquestions/home?authuser=8' },
  { hashtag: '#CSO', title: 'Get CSO MST 2 IMP Questions', link: 'https://sites.google.com/view/csoimpquestions/home?authuser=8' },
  { hashtag: '#CSO', title: 'Get CSO End Sem IMP Questions', link: 'https://sites.google.com/view/csoimpquestions/home?authuser=8' },
  // { hashtag: '#CSO', title: 'Get CSO UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#Maths 1', title: 'Get Maths 1 Lecture Notes', link: 'https://sites.google.com/view/maths1notes/home?authuser=8' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 MST PYQs Papers', link: 'https://sites.google.com/view/maths1notes/home?authuser=8' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 End Sem PYQs Paper', link: 'https://sites.google.com/view/maths1notes/home?authuser=8' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 Upcoming Exam IMP Question', link: 'https://sites.google.com/view/maths1impquestions/home?authuser=8' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 MST 1 IMP Question', link: 'https://sites.google.com/view/maths1impquestions/home?authuser=8' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 MST 2 IMP Questions', link: 'https://sites.google.com/view/maths1impquestions/home?authuser=8' },
  { hashtag: '#Maths 1', title: 'Get Maths 1 End Sem IMP Questions', link: 'https://sites.google.com/view/maths1impquestions/home?authuser=8' },
  // { hashtag: '#Maths 1', title: 'Get Maths 1 UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#Physics', title: 'Get Physics Lecture Notes', link: 'https://sites.google.com/view/physicsbtphnotes/home?authuser=8' },
  { hashtag: '#Physics', title: 'Get Physics MST PYQs Papers', link: 'https://sites.google.com/view/physicsbtphnotes/home?authuser=8' },
  { hashtag: '#Physics', title: 'Get Physics End Sem PYQs Paper', link: 'https://sites.google.com/view/physicsbtphnotes/home?authuser=8' },
  { hashtag: '#Physics', title: 'Get Physics Upcoming Exam IMP Question', link: 'https://sites.google.com/view/physicsimpquestions/home?authuser=8' },
  { hashtag: '#Physics', title: 'Get Physics MST 1 IMP Question', link: 'https://sites.google.com/view/physicsimpquestions/home?authuser=8' },
  { hashtag: '#Physics', title: 'Get Physics MST 2 IMP Questions', link: 'https://sites.google.com/view/physicsimpquestions/home?authuser=8' },
  { hashtag: '#Physics', title: 'Get Physics End Sem IMP Questions', link: 'https://sites.google.com/view/physicsimpquestions/home?authuser=8' },
  // { hashtag: '#Physics', title: 'Get Physics UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },

  { hashtag: '#CS', title: 'Get CS Lecture Notes', link: 'https://sites.google.com/view/communicationskillnotes/home?authuser=8' },
  { hashtag: '#CS', title: 'Get CS MST PYQs Papers', link: 'https://sites.google.com/view/communicationskillnotes/home?authuser=8' },
  { hashtag: '#CS', title: 'Get CS End Sem PYQs Paper', link: 'https://sites.google.com/view/communicationskillnotes/home?authuser=8' },
  { hashtag: '#CS', title: 'Get CS Upcoming Exam IMP Question', link: 'https://sites.google.com/view/csimpquestions/home?authuser=8' },
  { hashtag: '#CS', title: 'Get CS MST 1 IMP Question', link: 'https://sites.google.com/view/csimpquestions/home?authuser=8' },
  { hashtag: '#CS', title: 'Get CS MST 2 IMP Questions', link: 'https://sites.google.com/view/csimpquestions/home?authuser=8' },
  { hashtag: '#CS', title: 'Get CS End Sem IMP Questions', link: 'https://sites.google.com/view/csimpquestions/home?authuser=8' },
  // { hashtag: '#CS', title: 'Get CS UniPrep Predicted Paper', link: './assets/uniprepletter.pdf' },
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
                <Link href={note.link} target='_parent'>
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