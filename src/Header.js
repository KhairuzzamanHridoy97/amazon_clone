import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
        <Link to='/'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>

        <div className="header_search">
            <input type="text" className='header_searchInput' />
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header_nav">

            <div className="header_option">
                <span className="header_optionLineOne">
                    Hello User
                </span>
                <span className="header_optionLineTwo">
                    Sign In
                </span>
            </div>

            <div className="header_option">
                 <span className="header_optionLineOne">
                    Return 
                </span>
                <span className="header_optionLineTwo">
                    & Order
                </span>
            </div>

            <div className="header_option">
            <span className="header_optionLineOne">
                    Your 
                </span>
                <span className="header_optionLineTwo">
                    Prime
                </span>
            </div>

            <Link to='/checkout'>

            <div className="header_optionBasket">
                <ShoppingBasketIcon/>
                <span className="header_optionLineTwo_basket_Counter">
                    0
                </span>
            </div>
            </Link>
        </div>
    </div>

  )
}

export default Header ;

