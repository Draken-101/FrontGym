import styled from "styled-components";

const D = styled.div`
    position: relative;
    display: flex;
    width: 72vw;
    border-radius: 0 15px 15px 0;
    left: 24vw;
    margin-top: 2vh;
    height: 96vh;
    background-color: white;
`;

export default function AdminProducts(){
    return(
        <D>
            Products
        </D>
    );
}