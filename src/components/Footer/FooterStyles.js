import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 10px;
  background: #282c34;
  left:0;
  bottom:0;
  right:0;
  width: 100%;
  position:fixed;


  @media (max-width: 1000px) {
    padding: 20px 10px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 750px;
    margin: 0 auto;
    bottom: 0;
    
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 83px;
`;

export const Row = styled.div`
  display: grid;
  
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: gray;
      transition: 200ms ease-in;
  }
`;
