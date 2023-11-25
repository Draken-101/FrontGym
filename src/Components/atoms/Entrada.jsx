import styled from "styled-components";

const E = styled.input`
    outline: none;
    text-decoration: none;
    background-color: ${props => props.bgC ? props.bgC : "transparent"};
    padding: 0 0 0 5px;
    margin: 10px;
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
        font-size: 20px;
        font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    }

    &:focus{
        border-radius: 1.5rem .5rem 1.5rem .5rem;
        border-left: 1px solid black;
        border-right: 1px solid black; 
        border-top: 0px solid transparent;
        border-bottom: 1px solid black;
    }
    @media(max-width : 620px){
        width: ${props => props.W ? props.W/2+"px" : "125px"};
        height: ${props => props.H ? props.H/2+"px" : "20px"};
        &::placeholder{
            font-size: 10px;
        }
    }
    @media(max-width : 320px){
        &::placeholder{
            font-size: 5px;
        }
    }
`;

export default function Entrada({ text, bgColor , color, wi, he, tipo, change}) {
    return (
        <E onChange={change} className=" focus:outline-none ring-0 appearance-none outline-none" W={wi} H={he} C={color} bgC={bgColor} type={tipo} placeholder={text ? text : "Ingresa placeHolder"}></E>
    );
}