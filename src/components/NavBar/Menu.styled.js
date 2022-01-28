import styled from 'styled-components';

export const StyledMenu = styled.nav`
  transform: translateX(100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: purple;
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 500px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 500px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: red;
    }
  
  }
`;