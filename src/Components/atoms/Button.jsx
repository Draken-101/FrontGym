import styled from 'styled-components'

const B = styled.button`
    background-color: ${props => props.C ? props.C : "Red"};
    border-radius: 1rem .5rem 1rem .5rem;
    color: white;
    overflow: hidden;
    transition: .5s;
    display: flex;
    white-space: nowrap;
    font-size: 1rem;
    justify-content: center;
    border: transparent;
    align-items: center;
    padding: 0  .5% .5% .5%;
    width: ${props => props.W ? props.W : "150px"};
    height: ${props => props.H ? props.H : "25px"};
    &:hover{
        background-color: rgb(200,0,0);
        border-radius: .5rem 1rem .5rem 1rem;
        border: 1px solid black;
    }
`;

export default function Boton({wi, he, onCl, text, bgColor}){
    return(
        <>
            <B onClick={onCl} C={bgColor} W={wi} H={he} className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
            {text ? text : "Ingresa Texto"}
            </B>
        </>
    );
}