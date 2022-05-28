import styled from 'styled-components';

const StyledHero = styled.div`
  margin: 1rem;

  section{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  img{
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  h3{
    color: #BD7AB3;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  button:hover{
    background-color: #BD7AB3;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  a{
    text-decoration:none;
  }

  a:hover{
    background-color: #BD7AB3;
  }

  p{
    margin-bottom: 2rem;
  }

  span{
    margin-bottom: 1rem;
  }


  @media screen and (min-width:768px){
    margin-top: 7rem;

    img{
      margin-top: 7rem;
    }
  }

  @media screen and (min-width:992px){
    max-width: 1200px;
    margin: 3rem auto;

    section{
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    img{
      max-width: 100%;
      height: auto;
      border-radius: 25px;
    }

    .hero__left {
      margin-top:4rem;
      flex-basis: 40%;
      //warning
      margin-right:1.5rem;
    }

    .hero__right {
      flex-basis: 60%;
    }
  }
`;

export default StyledHero;
