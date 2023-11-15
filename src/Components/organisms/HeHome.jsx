import styled from "styled-components";
import background from '../../assets/Images/bg-Image.jpg'
import '../../index.css';
import HeaderHome from "../molecules/HeaderHome";
import ContentHome from "../molecules/ContentHome";


const D = styled.div`
    width: 100%;
`;

const I = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
`;

export default function HeHome() {
    return (
        <>
            <D className="  z-10 relative shadow-[0px_5px_rgba(225,_0,_0,_0.4),_0px_10px_rgba(225,_0,_0,_0.3),_0px_15px_rgba(225,_0,_0,_0.2),_0px_20px_rgba(225,_0,_0,_0.1),_0px_25px_rgba(225,_0,_0,_0.05)]">
                <Header/>
            </D>
            <div className=" relative z-0">
                <I src={background} />
            </div>
            <D className="Content relative z-10 top-40">
                <ContentHome/>
            </D>
        </>
    );
}