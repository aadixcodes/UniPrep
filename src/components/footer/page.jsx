import styles from './footer.module.css'; 

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>
        &copy;UniPrep
        </div>
        <div className={styles.links}>
            <a href="/feedback" className='hover:text-[#4636FC] duration-[500]'>Feedback</a>
            <a href="/earnmoney/sellnotes" className='hover:text-[#4636FC] duration-[500]'>Sell Notes</a>
            <a href="/notification" className='hover:text-[#4636FC] duration-[500]'>Notification</a>
            <a href="/signup" className='hover:text-[#4636FC] duration-[500]'>Signup</a>
        </div>
        <div className={styles.coffee}>
            <img src={"./assets/coffesvg.png"} alt="" width={40} height={40} />
            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbizcolumnist.com%2Fthe-benefits-of-using-buy-me-a-coffee%2F&psig=AOvVaw2lm6sP4qwHgSAQj05QtQT8&ust=1719129436734000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD0m7u874YDFQAAAAAdAAAAABAK" alt="" width={40} height={40} /> */}
            <a href="" className='font-algerian'>Buy me a coffee</a>
        </div>
      </div>
    </>
  )
}

export default Footer   
