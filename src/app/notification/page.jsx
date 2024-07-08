// "use client";

// // import { useState, useEffect } from 'react';
// import styles from "./notify.module.css";

// const Notification = () => {

//   return (
//     <>
//       {/* --------- NO NOTIFICATIONS CODE --------- */}

//       {/* <div className={styles.notifi}>
//         <div className={styles.notifiwrapper}>
//           <i class=bx bxs-bell-ring></i>
//           <h1>No Notification Yet</h1>
//           <br />
//           <a
//             href=/
//             className=relative text-[18px] px-6 py-1 rounded-[8px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500 
//         before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
//         before:bg-[#e8f0f9] hover:bg-[#e8f0f9]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//         hover:text-[#05070f] cursor-pointer
//           >
//             Go to Home Page
//           </a>
//         </div>
//       </div> */}

//       {/* --------- NOTIFICATIONS CODE --------- */}

//       <div className={styles.nwrapper}>
//         <div className={styles.notificontainer}>
//           <h1>
//             <i class="bx bxs-bell-ring"></i>Notifications
//           </h1>
//           <div className={styles.notification}>
//             <div className={styles.date}>
//               <p>Today</p>
//             </div>
//             <div className={styles.name}>
//               <p>Aditya Patel</p>
//             </div>
//             <div className={styles.content}>
//               <p>Dear Students, <br />
//                Welcome to UniPrep! We're thrilled to have you as part of our growing community. Our mission is to make exam preparation simpler and more efficient for university students like you. We're constantly working to improve the platform and bring you the best resources possible. Your feedback is invaluable to us, so please don't hesitate to share your thoughts.
//                <br />
//                Wishing you the best in your academic journey!
// <br />
//                 Warm regards, <br />
//                 <b> - Aditya Patel </b> <br />
//                 Founder, UniPrep</p>
//             </div>
//           </div>
//           <div className={styles.notification}>
//             <div className={styles.date}>
//               <p>22/june/2024</p>
//             </div>
//             <div className={styles.name}>
//               <p>Priyanshu Prajapati</p>
//             </div>
//             <div className={styles.content}>
//               <p>Hey, you have a new message from Priyanshu Prajapati</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notification;

"use client";

import { useState, useEffect } from 'react';
import styles from "./notify.module.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating fetching notifications from an API
    // Replace this with your actual data fetching logic
    const fetchNotifications = async () => {
      // Simulated API call
      const response = await new Promise(resolve => setTimeout(() => resolve([
        {
          date: 'Today',
          name: 'Aditya Patel',
          content: `Dear Students, 
            Welcome to UniPrep! We're thrilled to have you as part of our growing community. Our mission is to make exam preparation simpler and more efficient for university students like you. We're constantly working to improve the platform and bring you the best resources possible. Your feedback is invaluable to us, so please don't hesitate to share your thoughts.
            Wishing you the best in your academic journey!
            Warm regards, 
            - Aditya Patel 
            Founder, UniPrep`
        },
        {
          date: '22/june/2024',
          name: 'Priyanshu Prajapati',
          content: 'Hey, you have a new message from Priyanshu Prajapati'
        }
      ]), 1000));
      setNotifications(response);
    };

    fetchNotifications();
  }, []);

  if (notifications.length === 0) {
    return (
      <div className={styles.notifi}>
        <div className={styles.notifiwrapper}>
          <i className="bx bxs-bell-ring"></i>
          <h1>No Notification Yet</h1>
          <br />
          <a
            href="/"
            className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500 
            before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
            before:bg-[#e8f0f9] hover:bg-[#e8f0f9]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
            hover:text-[#05070f] cursor-pointer"
          >
            Go to Home Page
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.nwrapper}>
      <div className={styles.notificontainer}>
        <h1>
          <i className="bx bxs-bell-ring"></i>Notifications
        </h1>
        {notifications.map((notification, index) => (
          <div key={index} className={styles.notification}>
            <div className={styles.date}>
              <p>{notification.date}</p>
            </div>
            <div className={styles.name}>
              <p>{notification.name}</p>
            </div>
            <div className={styles.content}>
              <p>{notification.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;



// "use client";

// import { useState, useEffect } from 'react';
// import styles from "./notify.module.css";

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await fetch('https://script.google.com/macros/s/AKfycbzF5vduxYpHychik9r9Si4gd5gXNI0GANYdvBrj9rGhdGhWW0A-Es5bUX0vRqijEx5GtA/exec');
//         if (!response.ok) {
//           throw new Error('Failed to fetch notifications');
//         }
//         const data = await response.json();
//         setNotifications(data);
//       } catch (error) {
//         console.error('Error fetching notifications:', error);
//         setNotifications([]);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   if (notifications.length === 0) {
//     return (
//       <div className={styles.notifi}>
//         <div className={styles.notifiwrapper}>
//           <i className="bx bxs-bell-ring"></i>
//           <h1>No Notification Yet</h1>
//           <br />
//           <a
//             href="/"
//             className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500 
//             before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
//             before:bg-[#e8f0f9] hover:bg-[#e8f0f9]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//             hover:text-[#05070f] cursor-pointer"
//           >
//             Go to Home Page
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.nwrapper}>
//       <div className={styles.notificontainer}>
//         <h1>
//           <i className="bx bxs-bell-ring"></i>Notifications
//         </h1>
//         {notifications.map((notification, index) => (
//           <div key={index} className={styles.notification}>
//             <div className={styles.date}>
//               <p>{notification.Date}</p>
//             </div>
//             <div className={styles.name}>
//               <p>{notification.Name}</p>
//             </div>
//             <div className={styles.content}>
//               <p>{notification.Notification}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notification;




// "use client";

// import { useState, useEffect } from 'react';
// import styles from "./notify.module.css";

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch('https://script.google.com/macros/s/AKfycbxcnfKgtmJfSrsx7Xmc3tFRwS7nWYeYodSOIRmgwBFyS-jY667zpgnWEl1ZSdrF8eMLaw/exec');
//         if (!response.ok) {
//           throw new Error('Failed to fetch notifications');
//         }
//         const data = await response.json();
//         setNotifications(data);
//         setError(null);
//       } catch (error) {
//         console.error('Error fetching notifications:', error);
//         setError('Failed to load notifications. Please try again later.');
//         setNotifications([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   if (isLoading) {
//     return <div className={styles.loading}>Loading notifications...</div>;
//   }

//   if (error) {
//     return <div className={styles.error}>{error}</div>;
//   }

//   if (notifications.length === 0) {
//     return (
//       <div className={styles.notifi}>
//         <div className={styles.notifiwrapper}>
//           <i className="bx bxs-bell-ring"></i>
//           <h1>No Notification Yet</h1>
//           <br />
//           <a
//             href="/"
//             className="relative text-[18px] px-6 py-1 rounded-[8px] border-2 border-[#05070f] bg-[#05070f] text-[#e8f0f9] duration-500 
//             before:absolute before:w-full before:h-full before:transition-all before:duration-700 before:rounded-md 
//             before:bg-[#e8f0f9] hover:bg-[#e8f0f9]  before:-z-10 before:scale-0 hover:before:scale-100 before:origin-center overflow-hidden 
//             hover:text-[#05070f] cursor-pointer"
//           >
//             Go to Home Page
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.nwrapper}>
//       <div className={styles.notificontainer}>
//         <h1>
//           <i className="bx bxs-bell-ring"></i>Notifications
//         </h1>
//         {notifications.map((notification, index) => (
//           <div key={index} className={styles.notification}>
//             <div className={styles.date}>
//               <p>{notification.Date}</p>
//             </div>
//             <div className={styles.name}>
//               <p>{notification.Name}</p>
//             </div>
//             <div className={styles.content}>
//               <p>{notification.Notification}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notification;