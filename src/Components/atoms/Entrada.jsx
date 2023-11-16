import styled from "styled-components";

const E = styled.input`
    text-decoration: none;
    background-color: ${props => props.bgC ? props.bgC : "transparent"};
    padding: 0 0 0 5px;
    margin: 10px;
    outline: none;
    width: ${props => props.W ? props.W : "250px"};
    height: ${props => props.H ? props.H : "28px"};
    transition: 1s;
    color: ${props => props.C ? props.C : "rgb(110,110,110)"};
    border-bottom: 1px solid black;
    border-left: 1px solid transparent;
    border-top: 0px solid transparent;
    border-right: 1px solid transparent;
    font-size: 10px;

    &::placeholder{
        color: ${props => props.C ? props.C : "rgb(110,110,110)"};
        font-size: 2vw;
    }

    &:focus{
        border-radius: 1.5rem .5rem 1.5rem .5rem;
        border-left: 1px solid black;
        border-right: 1px solid black; 
        border-top: 0px solid transparent;
    }
    @media(max-width : 620px){
        width: ${props => props.W ? props.W/2+"px" : "125px"};
        height: ${props => props.H ? props.H/2+"px" : "20px"};
        &::placeholder{
        font-size: 15px;
    }
    }
    @media(max-width : 320px){
        &::placeholder{
        font-size: 10px;
    }
    }
`;

export default function Entrada({ text, bgColor , color, wi, he}) {
    return (
        <E W={wi} H={he} C={color} bgC={bgColor} placeholder={text ? text : "Ingresa placeHolder"}></E>
    );
}