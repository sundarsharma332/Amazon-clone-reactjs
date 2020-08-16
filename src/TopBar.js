import React from 'react';
import "./TopBar.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function TopBar() {
    const [{ basket }] = useStateValue();

    return (
        <nav className="header">
            <Link to="/"><img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" /></Link>
            {/* <a href ="#"><img className = "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img></a> */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Sundar</span>
                        <span className="header__optionLineTwo">Sign IN</span>
                    </div>


                </Link>
                <Link to="/Order" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo"> & Orders</span>
                    </div>


                </Link>
                <Link to="/Prime" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Try</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>


                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="icon__basket" />
                        <span className="header__optionLineTwo header__basketcount icon__basket">{basket?.length}</span>

                    </div>
                </Link>



            </div>
        </nav >

    )
}

export default TopBar;
