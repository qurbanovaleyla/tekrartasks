import React from 'react'
import styles from './header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlBasket } from "react-icons/sl";



function Header() {
  return (
    <div>
<header>

    <div className={styles.imgInp}>
        <img src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" alt="" />
        <input className={styles.searchInp} type="text" placeholder='Search book by author or publisher' />
    </div>
    <div className={styles.faq}>
        <ul className={styles.ul}>
            <li className={styles.hov}>FAQ</li>
            <li className={styles.hov}>Track Order</li>
        </ul>
        <SlBasket className={styles.basket} />
        <button className='btn btn-danger'>Sign in</button>
        
    </div>
</header>
<nav>
    <ul>
     <li><a href="#">Home</a></li>
     <li><a href="#">Categories</a></li>
     <li><a href="#">About</a></li>
     <li><a href="#">Pages</a></li>
     <li><a href="#">Contect</a></li>
    </ul>
</nav>

        
      
    </div>
  )
}

export default Header
