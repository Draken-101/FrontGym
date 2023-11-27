import styled from "styled-components";
import Form from "./Form";
import Boton from "../atoms/Button";
import LogoButon from "./LogoButtton";

const D = styled.div`
    position: fixed;
    display: ${props => props.D ? props.D : "block"};
    width: 100vw;
    height: 100vh;
    z-index: 11;
    left: 0vw;
    top: 0vh;
    background-color: #000000e4;
`;
const Div = styled.div`
    position: relative;
    display:flex;
    width:100%;
    flex-direction: column;
    gap: 5%;
    flex-wrap: wrap;
    height:100%;
    align-items: center;
    justify-content:center;
`;

export default function AddEmployees({ d, oc }) {
    const inp = ["Nombre", "Apellido", "Edad", "Peso", "Contraseña", "Confirmar contraseña"]
    return (
        <D D={d}>
            <Div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    width: "100%"
                }}>
                    <Form wi={"40%"} c={"white"} inputs={inp} titulo={"Agregar empleado"} nameButon={"Agregar"} />
                    <LogoButon subirImg={"y"} />
                </div>
                <Boton text={"Cancelar"} color={"black"} bgColor={"white"} onCl={oc} />
            </Div>
        </D>
    );
}