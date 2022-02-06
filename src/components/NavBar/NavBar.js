import React from "react";
import { bool, func } from 'prop-types';
import { StyledNavBar } from "./NavBar.styled";
import { Link } from "react-router-dom";
import './nav.css';

const NavBar = ({ open, setOpen }) => {
    return (
        <div className="nav-header">
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}> <p>Shhhh</p></Link>
            <div className="nav-box">
                <StyledNavBar open={open} onClick={() => setOpen(!open)} >
                    <div />
                    <div />
                    <div />
                </StyledNavBar>
            </div>
        </div>
    )
}
NavBar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default NavBar;