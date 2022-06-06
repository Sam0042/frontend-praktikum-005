import styled from 'styled-components';

const StyledMovie= styled.div`
    margin: 5rem 0;
    text-align: center;

    img{
        border-radius: 25px;
        max-width: 80%;
        height: 26rem;
        margin-bottom: 1rem;
    }
    h3{
        color: #1DB954;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
        margin-top: -1rem;
    }
    p{
        color: #64748b;
        margin-bottom: 0.5rem; 
    }

    a{
      text-decoration:none;
      color:white;
    }
    
    @media screen and (min-width: 768px){
        flex-basis: 50%;
    }

    @media screen and (min-width:992px){
        flex-basis: 25%;
        padding: 1rem;

        img{
            height: 300px;
            width: 200px;
        }
        h3{
            font-size: 1.30rem;
            margin-bottom: 0.1rem;
            margin-top: -1rem;
        }
    }
`;

export default StyledMovie; 