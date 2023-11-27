import styled from "styled-components";
import Logo from "../atoms/Logo";
import Text from "../atoms/Text";

const D = styled.div`
    position: relative;
    height: 9%;
    display: flex;
    gap: 2%;
    margin-top: 5%;
    text-align: center;
    align-items: center;
`;

export default function HeadAdmin({ nombre }) {
    return (
        <D>
            <div style={{
                position:"relative",
                height:"fit-content",
                height:"90%"
            }}>
                <Logo wxh={"100%"} />
            </div>
            <Text text={nombre} size={"2vh"} />
        </D>
    );
}