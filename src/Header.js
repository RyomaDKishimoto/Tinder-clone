import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__" />
            </IconButton>
            ): (
            <IconButton>
                <PersonIcon className="header_icon" fontSize="large"/>
            </IconButton>
            )}
           
            <Link to="/">
                <img
                className="header__logo"
                src="https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png"
                alt="tinder logo"
                />
            </Link>
            
            <Link to="/chats">
                <IconButton>
                    <ForumIcon className="header_icon" fontSize="large"/>
                </IconButton>
            </Link>
            
            
        </div>
    )
}

export default Header
