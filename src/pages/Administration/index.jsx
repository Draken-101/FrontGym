import { useContext } from "react";
import ControllAdmin from "../../Components/organisms/ControllAdmin";
import { AuthContext } from "../../context/AuthContext";


export default function Administration({ onClick, v }) {
    const { contextValue, setContextValue } = useContext(AuthContext)
    if (!contextValue.token) {
        return (<></>)
    }

    return (
        <>
            <ControllAdmin oC={onClick} V={v} />
        </>
    );
}