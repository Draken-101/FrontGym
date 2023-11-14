import '../../index.css';
import HeaderDiv from '../atoms/HeaderDiv'
import Logo from '../atoms/Logo';

export default function HeaderHome() {
    return (
        <HeaderDiv>
            <Logo/>
            <ul className="C">
                <li >
                    Clientes
                </li>
                <li>
                    Ver Clientes
                </li>
                <li>
                    Coaching
                </li>
                <li className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                    Iniciar Secion
                </li>
            </ul>
        </HeaderDiv>


    );
}