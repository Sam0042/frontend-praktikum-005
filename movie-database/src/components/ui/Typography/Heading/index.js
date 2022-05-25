import styled, { css } from "styled-components";

const Heading = styled.h2`
    color: black;
    margin-bottom: 1rem;
    font-size: 2.44rem;

    color: ${({variant,theme})=> theme.colors[variant] || theme.colors.primary};

    font-size: ${({size,theme})=> theme.size[size] || theme.size['xl']};


`;

export default Heading;