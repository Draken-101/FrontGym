import styled from 'styled-components'

const B = styled.button`
    background-color: ${props => props.bgC ? props.bgC : "Red"};
    border-radius: 1rem .5rem 1rem .5rem;
    color: ${props => props.C ? props.C : "white"};
    overflow: hidden;
    transition: .5s;
    display: flex;
    white-space: nowrap;
    font-size: 1rem;
    justify-content: center;
    border: transparent;
    align-items: center;
    padding: 0  .5% .5% .5%;
    width: ${props => props.W ? props.W+"px" : "150px"};
    height: ${props => props.H ? props.H+"px" : "25px"};

    &:hover{
        background-color: ${props => props.Hov ? props.Hov : "rgb(200,0,0)"};
        border-radius: .5rem 1rem .5rem 1rem;
        border: 1px solid black;
    }
    @media(max-width : 620px){
        width: ${props => props.W ? props.W/2+"px" : "75px"};
        height: ${props => props.H ? props.H/2+"px" : "20px"};
        font-size: 10px;
    }
`;

export default function Boton({wi, he, onCl, text, bgColor, bgColorHover, color}){
    return(
        <>
            <B onClick={onCl} C={color} Hov={bgColorHover} bgC={bgColor} W={wi} H={he} className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
            {text ? text : "Ingresa Texto"}
            </B>
        </>
    );
}