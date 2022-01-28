import React from "react";
import { bool, func } from 'prop-types';
import { StyledNavBar } from "./NavBar.styled";
import './nav.css';

const NavBar = ({ open, setOpen }) => {
    return (
        <div className="nav-header">
            <h1>ProNoun</h1>
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