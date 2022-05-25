import styled, { css } from 'styled-components';



const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #1DB954;
    color: #fff;
    cursor:pointer;

    background-color: ${({variant,theme})=> theme.colors[variant] || theme.colors.primary};
    //jika props variant ada isinya, maka mengembalikan colors[isi dari props variant yang sesuai dengan isi di colors]
    ${(props)=> props.full && css`
        display:block;
        width: 100%;
    `}

    //menambah props size
    font-size: ${({size,theme})=> theme.size[size] || theme.size['md']};

    //menambah props padding
    padding: ${({size,theme})=> theme.padding[size] || theme.padding['md']};



    //cara lain untuk padding
    /* ${({theme,size})=> size && css`padding: ${theme.padding[size]};`}; */

    //props lebar (coba-coba)
    /* ${({theme,size})=> size && css`width: ${theme.lebar[size]}`}; */

`;

export default Button;