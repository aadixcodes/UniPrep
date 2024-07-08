import styles from './features.module.css'

const Features = () => {
  return (
    <>
    <div className={styles.fwrapper}>
        <div className={styles.features}>
            <h2 className='text-center text-[64px] leading-[1.2] font-bold text-[#05070fe2]'>Designed for Students, <br /> <span className='text-[#4636FC]'> by Student.</span></h2>
            <div className={styles.fcon}>
                <div className={styles.feature}>
                <i class='bx bx-check-circle text-[45px]'></i>
                <p className='text-[24px]'>Get detailed <span className='text-[#4636FC] '> important </span> topics for each unit to streamline your study sessions.</p>
                </div>
                <div className={styles.feature}>
                <i class='bx bx-check-circle text-[45px]'></i>
                <p className='text-[24px]'>Browse key questions for <span className='text-[#4636FC]'> mid-term</span> and <span className='text-[#4636FC]'> end-semester exams.</span></p>
                </div>
                <div className={styles.feature}>
                <i class='bx bx-check-circle text-[45px]'></i>
                <p className='text-[24px]'>Access a repository of <span className='text-[#4636FC]'> past exam</span> questions to practice effectively.</p>
                </div>
                <div className={styles.feature}>
                <i class='bx bx-check-circle text-[45px]'></i>
                <p className='text-[24px]'>Sell your handwritten notes to fellow university students and <span className='text-[#4636FC]'> earn extra cash.</span></p>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Features
