// "use client";

// import { useState, useEffect } from 'react';
// import styles from "./notify.module.css";

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Simulating fetching notifications from an API
//     // Replace this with your actual data fetching logic
//     const fetchNotifications = async () => {
//       // Simulated API call
//       const response = await new Promise(resolve => setTimeout(() => resolve([
//         {
//           date: '17/Aug/20',
//           name: 'Aditya',
//           content: `Dear Students, 
//             Welcome to UniPrep! We're thrilled to have you as part of our growing community. Our mission is to make exam preparation simpler and more efficient for university students like you. We're constantly working to improve the platform and bring you the best resources possible. Your feedback is invaluable to us, so please don't hesitate to share your thoughts.
//             Wishing you the best in your academic journey!`,
//             regards : 'Warm regards', 
//             by :'- Aditya', 
//             company: 'Founder of UniPrep'
//         },
//       ]), 1000));
//       setNotifications(response);
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
//               <p>{notification.date}</p>
//             </div>
//             <div className={styles.name}>
//               <p>{notification.name}</p>
//             </div>
//             <div className={styles.content}>
//               <p>{notification.content}</p>
//             </div>
//             <div className={styles.regards}>
//               <p>{notification.regards}</p>
//             </div>
//             <div className={styles.by}>
//               <p>{notification.by}</p>
//             </div>
//             <div className={styles.company}>
//               <p>{notification.company}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notification;



"use client";

import { useState, useEffect } from 'react';
import styles from "./notify.module.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      try {
        // Simulating API call with a delay
        const response = await new Promise(resolve => setTimeout(() => resolve([
          {
            date: '17/Aug/20',
            name: 'Aditya',
            content: `Dear Students, 
              Welcome to UniPrep! We're thrilled to have you as part of our growing community. Our mission is to make exam preparation simpler and more efficient for university students like you. We're constantly working to improve the platform and bring you the best resources possible. Your feedback is invaluable to us, so please don't hesitate to share your thoughts.
              Wishing you the best in your academic journey!`,
              regards : 'Warm regards', 
              by :'- Aditya', 
              company: 'Founder of UniPrep'
          },
        ]), 2000)); // 2 second delay to simulate loading

        setNotifications(response);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setNotifications([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
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
      </div>
    );
  }

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
            <div className={styles.regards}>
              <p>{notification.regards}</p>
            </div>
            <div className={styles.by}>
              <p>{notification.by}</p>
            </div>
            <div className={styles.company}>
              <p>{notification.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;

