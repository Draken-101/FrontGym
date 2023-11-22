import styled from "styled-components";

const D = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    flex-wrap:wrap;
    flex-direction:column;
    gap:5px;
    transition:.5s;
    height:fit-content;
`;

const Ul = styled.ul`
    background-color: red;
    width: ;
`;

export default function List(){
    return(
        <D>
            <Ul>
                
            </Ul>
        </D>
    );
}