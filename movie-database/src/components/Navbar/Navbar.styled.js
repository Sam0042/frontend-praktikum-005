import styled from 'styled-components';
 
const StyledNavbar = styled.div`
   background-color: #1DB954;
   padding: 1rem;
   color: #fff;
 
   nav{
     display: flex;
     flex-direction: column;
    }
 
   h1{
     font-size: 2.4rem;
     margin-bottom: 1rem;
     font-family: 'Staatliches', cursive;
    }
 
   ul{
     display: flex;
     flex-direction: column;
     list-style: none;
    }
 
   li{
     margin-bottom: 1rem;
    }

    a{
      text-decoration:none;
      color:white;
    }

    a:hover{
      color:gray;
    }
 
   @media screen and (min-width: 768px){
      position: fixed;
      width: 100%;
      top: 0;
 
      nav{
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
      }
 
      h1{
        margin-bottom: 0;
      }
 
      ul{
        flex-direction: row;
      }
 
      li{
         margin: 0 1rem;
      }
      
   }
 `;
 
 export default StyledNavbar;