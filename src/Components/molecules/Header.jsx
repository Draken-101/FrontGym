import '../../index.css';
import Header from '../atoms/HeaderDiv'
import Logo from '../atoms/Logo';
import Text from "../atoms/Text";

export default function Options() {
    return (
        <Header>
            <Logo/>
            <ul className="C">
                <li >
                    <Text text={"Clientes"} size={"15px"} color={"white"} />
                </li>
                <li>
                    <Text text={"Ver"} size={"15px"} color={"white"} />
                </li>
                <li>
                    <Text text={"Buscar"} size={"15px"} color={"white"} />
                </li>
                <li>
                    <Text text={"Coaches"} size={"15px"} color={"white"} />
                </li>
                <li className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                    <Text text={"Registrarse"} size={"15px"} color={"white"} />
                </li>
            </ul>
        </Header>


    );
}