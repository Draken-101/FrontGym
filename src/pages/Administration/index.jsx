import ControllAdmin from "../../Components/organisms/ControllAdmin";


export default function Administration({onClick, v}){
    return(
        <>
            <ControllAdmin oC={onClick} V={v}/>
        </>
    );
}