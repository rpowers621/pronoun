import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    return (
        <div className>
            <StyledMenu open={open}>
                <a href="/">
                    About us
                </a >
                <a href="/">
                    Sign In
                </a >
                <a href="/File_Upload">
                    Upload
                </a >
                <a href="/">
                    Contact
                </a>
            </StyledMenu>
        </div>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;