import styled from "styled-components";
import Text from "../atoms/Text";
import Entrada from "../atoms/Entrada";
import Boton from "../atoms/Button";
import { useState } from "react";


const D = styled.form`
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    width:50%;
    height: fit-content;
    gap: 5px;
    padding: 10px;
    flex-direction: column;
    justify-content:space-around;
    @media(max-width : 620px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: ${props => props.w ? props.w : "100%"};
    }
`;

const Div = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
`;

const T = styled.span`
    width:65%;
    position: relative;
    display: ${props => props.D ? "block" : "none"};
    color: ${props => props.C ? props.C : "#410000"};
    font-size: 1.5vw;
    padding:.25vh;
    background-color: #ff0000d1;
    border-left: 5px solid rgb(255, 130, 130);
    border-right: 5px solid rgb(255, 130, 130);
`;

const V = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default function Form({ titulo, inputs, nameButon, c, wi, bC, onChange, onSubmit, }) {

    const [validarUser, setValidarUser] = useState('');
    const [validarPassword1, setValidarPassword1] = useState('');
    const [validarPassword2, setValidarPassword2] = useState('');
    const [validarEdad, setValidarEdad] = useState(0);
    const [validarPeso, setValidarPeso] = useState(0);
    const [validarEmail, setValidarEmail] = useState('');
    const [validarNombre, setValidarNombre] = useState('');
    const [validarApellidos, setValidarApellidos] = useState('');
    const [validarPrecio, setValidarPrecio] = useState(0);
    const [validarTiempo, setValidarTiempo] = useState(0);
    const [validarCantidad, setValidarCantidad] = useState(0);
    const [validarDescripcion, setValidarDescripcion] = useState('');

    return (
        <D w={wi} onSubmit={onSubmit}>
            <Div>
                <Text color={c} text={titulo ? titulo : "Ingresa Titulo"} size={"5vw"} bold={"600"} />
            </Div>

            {inputs.map((input, index) => {
                switch (input) {
                    case "Usuario":
                        const [errorValidarUser, setErrorValidarUser] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarUser}>{errorValidarUser}</T>
                                <Entrada
                                    id={"email"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"email"}
                                    change={(user) => {
                                        const v = /^[a-zA-Z]+$/;

                                        if (v.test(user.target.value) || user.target.value === "") {
                                            setErrorValidarUser("");
                                            setValidarUser(user.target.value);
                                        } else {
                                            setErrorValidarUser("block");
                                            setValidarUser("");
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Contraseña":
                        const [errorValidarPassword1, setErrorValidarPassword1] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarPassword1}>{errorValidarPassword1}</T>
                                <Entrada
                                    id={"password"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"password"}
                                    change={(password) => {
                                        const v = /^.{1,8}$/;

                                        if (v.test(password.target.value) || password.target.value === "") {
                                            setErrorValidarPassword1("");
                                            setValidarPassword1(password.target.value);
                                        } else {
                                            setErrorValidarPassword1("La contraseña solo puede tener min 8 caracteres");
                                            setValidarPassword1("");
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Confirmar contraseña":
                        const [errorValidarPassword2, setErrorValidarPassword2] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarPassword2}>{errorValidarPassword2}</T>
                                <Entrada
                                    id={"repassword"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"password"}
                                    change={(password) => {
                                        setValidarPassword2(password.target.value);
                                        onChange()
                                    }}
                                    blur={() => {
                                        if (validarPassword1 === validarPassword2) {
                                            console.log("a" + errorValidarPassword2);
                                            setErrorValidarPassword2("");
                                        } else {
                                            console.log(validarPassword1 + " s" + validarPassword2);
                                            setErrorValidarPassword2("Ingrese la misma contraseña");
                                        }
                                    }}
                                />
                            </V>)
                    case "Edad":
                        const [errorValidarEdad, setErrorValidarEdad] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarEdad}>{errorValidarEdad}</T>
                                <Entrada
                                    id={"age"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"number"}
                                    change={(edad) => {
                                        const v = /^[1-9]\d*$/;

                                        if (v.test(edad.target.value) && edad.target.value >= 12 && edad.target.value <= 100 || edad.target.value === "") {
                                            setErrorValidarEdad("");
                                            setValidarEdad(edad.target.value);
                                        } else {
                                            setErrorValidarEdad("Edad no admitida");
                                            setValidarEdad(0);
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Peso":
                        const [errorValidarPeso, setErrorValidarPeso] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarPeso}>{errorValidarPeso}</T>
                                <Entrada
                                    id={"weight"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"number"}
                                    change={(peso) => {
                                        const v = /^[1-9]\d*$/;

                                        // if (v.test(peso.target.value) && peso.target.value >= 50 && peso.target.value <= 150 || peso.target.value === "") {
                                        //     setErrorValidarPeso("");
                                        //     setValidarPeso(peso.target.value);
                                        // } else {
                                        //     setErrorValidarPeso("Peso no admitido");
                                        //     setValidarPeso(0);
                                        // }
                                        onChange()
                                    }} />
                            </V>)
                    case "Nombre":
                        const [errorValidarNombre, setErrorValidarNombre] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarNombre}>{errorValidarNombre}</T>
                                <Entrada
                                    id={"name"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"text"}
                                    change={(nombre) => {
                                        const v = /^[a-zA-Z]+$/;

                                        if (v.test(nombre.target.value) || nombre.target.value === "") {
                                            setErrorValidarNombre("");
                                            setValidarNombre(nombre.target.value);
                                        } else {
                                            setErrorValidarNombre("No se permiten numeros");
                                            setValidarNombre("");
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Apellido":
                        const [errorValidarApellidos, setErrorValidarApellidos] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarApellidos}>{errorValidarApellidos}</T>
                                <Entrada
                                    id={"lastname"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"text"}
                                    change={(apellidos) => {
                                        const v = /^[a-zA-Z]+$/;

                                        if (v.test(apellidos.target.value) || apellidos.target.value === "") {
                                            setErrorValidarApellidos("");
                                            setValidarApellidos(apellidos.target.value);
                                        } else {
                                            setErrorValidarApellidos("No se permiten numeros");
                                            setValidarApellidos("");
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Precio":
                        const [errorValidarPrecio, setErrorValidarPrecio] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarPrecio}>{errorValidarPrecio}</T>
                                <Entrada
                                    id="price"
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"number"}
                                    change={(precio) => {
                                        const v = /^[1-9]\d*$/;

                                        if (v.test(precio.target.value) && precio.target.value >= 1 || precio.target.value === "") {
                                            setErrorValidarPrecio("");
                                            setValidarPrecio(precio.target.value);
                                        } else {
                                            setErrorValidarPrecio("Precio no admitido");
                                            setValidarPrecio(0);
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Cantidad":
                        const [errorValidarCantidad, setErrorValidarCantidad] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarCantidad}>{errorValidarCantidad}</T>
                                <Entrada
                                    id={"amount"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"number"}
                                    change={(cantidad) => {
                                        const v = /^[1-9]\d*$/;

                                        if (v.test(cantidad.target.value) && cantidad.target.value >= 1 || cantidad.target.value === "") {
                                            setErrorValidarCantidad("");
                                            setValidarCantidad(cantidad.target.value);
                                        } else {
                                            setErrorValidarCantidad("Cantidad no admitida");
                                            setValidarCantidad(0);
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Tiempo":
                        const [errorValidarTiempo, setErrorValidarTiempo] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarTiempo}>{errorValidarTiempo}</T>
                                <Entrada
                                    id={"time"}
                                    bColor={bC}
                                    colorFont={c}
                                    text={input}
                                    tipo={"number"}
                                    change={(tiempo) => {
                                        const v = /^[1-9]\d*$/;

                                        if (v.test(cantidad.target.value) && cantidad.target.value >= 1 || cantidad.target.value === "") {
                                            setErrorValidarTiempo("");
                                            setValidarTiempo(cantidad.target.value);
                                        } else {
                                            setErrorValidarTiempo("Tiempo no admitida");
                                            setValidarTiempo(0);
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    case "Descripcion":
                        const [errorValidarDescripcion, setErrorValidarDescripcion] = useState('');
                        return (
                            <V>
                                <T C={c} D={errorValidarDescripcion}>{errorValidarDescripcion}</T>
                                <Entrada
                                    id={"description"}
                                    bColor={bC}
                                    Des={"a"}
                                    he={"200px"}
                                    colorFont={c}
                                    text={input}
                                    tipo={"text"}
                                    change={(descripcion) => {

                                        if (descripcion.target.value.length >= 20 || descripcion.target.value.length <= 255) {
                                            setErrorValidarDescripcion("");
                                            setValidarDescripcion(descripcion.target.value);
                                        } else {
                                            if (descripcion.target.value.length < 20) {
                                                setErrorValidarDescripcion("Debe almenos haber 20 caracteres");
                                                setValidarDescripcion("");
                                            } else if (descripcion.target.value.length > 255) {
                                                setErrorValidarDescripcion("Debe haber menos de 256 caracteres");
                                                setValidarDescripcion("");
                                            } else {
                                                setErrorValidarDescripcion("No se permiten numeros");
                                                setValidarDescripcion("");
                                            }
                                        }
                                        onChange()
                                    }} />
                            </V>)
                    default:
                }
            })}
            <Div>
                <Boton tipo={"submit"} clasName=" top-10" text={nameButon} wi={150} color={"black"} bgColor={"white"} />
            </Div>
        </D>
    );
}