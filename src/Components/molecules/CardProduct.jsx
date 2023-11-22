import styled from "styled-components";
import ImgProduct from "../atoms/imgProduct";
import Text from "../atoms/Text";
import '../../assets/Styles/Stars.css'

const D = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    border: none;
    align-items: center;
    width: 150px;
    height: 250px;
    padding: 10px;
    gap: 5px;
    flex-direction: column;
    justify-content:space-around;
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    width: 100%;
`;

export default function CardProtuct() {
    return (
        <D>
            <ImgProduct  etiqueta={"Rebaja"} />
            <Text size={"11px"} color={"rgb(13, 212, 199)"} bold={"600"} text={"Nombre Empresa"} />
            <Text size={"15px"} bold={"600"} text={"Nombre Producto"} />
            <div className="valoracion">

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

            </div>
            <Price className=" flex items-center justify-between">
                <Text text={"$1500" } size={"10px"} color={"rgb(72, 72, 72)"} tachado={true} bold={"600"}/>
                <Text text={"$1000"} size={"15px"} bold={"600"}/>
            </Price>
        </D>
    );
}