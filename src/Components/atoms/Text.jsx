import styled from "styled-components";

const T = styled.p`
    color: ${props => props.C ? props.C : "black"};
    font-size: ${props => props.S ? props.S : "20px"};
    font-weight: ${props => props.B ? props.B : "500"};
    transition: .5s;
    margin: 0;
    text-decoration: ${props => props.T ? "line-through": "none"};
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1));
`;

export default function Text({tachado, text, size, bold, color }) {
    return (
        <T T={tachado} C={color} S={size} B={bold}>{text ? text : "Ingresar Texto"}</T>
    );
}