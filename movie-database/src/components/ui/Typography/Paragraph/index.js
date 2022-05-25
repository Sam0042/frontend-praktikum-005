import styled from "styled-components";


const Paragraph =styled.p`
    margin-bottom: 1rem;

    color: ${({variant,theme})=> theme.colors[variant] || theme.colors.gray};

    font-size: ${({size,theme})=> theme.size[size] || theme.size['lg']};
`;

export default Paragraph;