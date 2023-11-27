import styled from "styled-components";
import ImgProduct from "../atoms/imgProduct";
import Text from "../atoms/Text";
import '../../assets/Styles/Stars.css'

const D = styled.div`
    position: relative;
    text-align: center;
    display: flex;
    border: none;
    width: 20%;
    margin: 2.5%;
    height: fit-content;
    gap: .5vh;
    flex-wrap: wrap;
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15%;
    width: 100%;
`;

export default function CardProtuct({src,name, price}) {
    return (
        <D>
            <ImgProduct  etiqueta={"Rebaja"} src={src} />
            {/* <Text size={"1.5vw"} color={"rgb(167, 0, 0)"} bold={"600"} text={"Nombre Empresa"} /> */}
            <Text size={"2.5vw"} bold={"600"} text={name} />
            {/* <div className="valoracion">

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

                <button className="b">
                    <i className="fas fa-star"></i>
                </button>

            </div> */}
            <Price>
                {/* <Text text={"$1500" } size={"1.5vw"} color={"rgb(72, 72, 72)"} tachado={true} bold={"600"}/> */}
                <Text text={price} size={"2vw"} bold={"600"}/>
            </Price>
        </D>
    );
}