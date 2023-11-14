import styled from "styled-components";

const E = styled.input`
    text-decoration: none;
    background-color: ${props => props.bgC ? props.bgC : "white"};
    padding: 0 0 0 2%;
    margin: 10px;
    outline: none;
    width: ${props => props.W ? props.W : "250px"};
    height: ${props => props.H ? props.H : "28px"};
    transition: 1s;
    border-bottom: 1px solid black;
    border-left: 1px solid white;
    border-top: 0px solid white;
    border-right: 1px solid white;

    &::placeholder{
        color: ${props => props.C ? props.C : "rgb(110,110,110)"};
        font-size: 2vw;
    }

    &:focus{
        border-radius: 1.5rem .5rem 1.5rem .5rem;
        border-left: 1px solid black;
        border-right: 1px solid black; 
        border-top: 0px solid white;
    }
    @media(max-width : 620px){
        width: ${props => props.W ? props.W/2+"px" : "125px"};
        height: ${props => props.H ? props.H/2+"px" : "20px"};
        &::placeholder{
        font-size: 2.5vw;
    }
    }
    @media(max-width : 320px){
        &::placeholder{
        font-size: 2%.5;
    }
    }
`;

export default function Entrada({ text, bgColor , color, wi, he}) {
    return (
        <E W={wi} H={he} C={color} bgC={bgColor} placeholder={text ? text : "Ingresa placeHolder"}></E>
    );
}