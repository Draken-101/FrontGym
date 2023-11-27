import styled from "styled-components";
import CardProtuct from "../molecules/CardProduct";
import HeaderShop from "../molecules/HeaderShop";
import ControllerShop from "../molecules/ControllerShop";
import '../../assets/Styles/ContentShop.css'
import { useContext, useEffect, useState } from "react";
import RequestsContext from "../../context/RequestContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


const D = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
`;

export default function ContentShop() {
    const info = useContext(RequestsContext)
    const { contextValue, setContextValue } = useContext(AuthContext)
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(info.server_uri + "/product/", { headers: { Authorization: `Bearer ${contextValue.token}` } }).then((res) => {
            console.log(res.data.content)
            setProduct(res.data.content)
        }).catch((e) => {
            console.error(e)
            alert(e.response.data.message)
        })
    }, [])
    return (
        <D>
            <div className="HeadShop" style={{
                position: "relative",
                width: "100%",
                height: "10vh",
                zIndex: "10",
                boxShadow: "rgba(50, 50, 93, 0.25), 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }}>
                <HeaderShop />
            </div>
            <div style={{
                display: "flex",
                backgroundColor: "red",
                position: "relative",
                flexWrap: "wrap",
                width: "30%",
                borderRight: "2px solid rgb(141, 2, 2)",
                height: "90%",
                flexDirection: "column",
                boxShadow: "0px 0px 66px 6px rgba(0,0,0,0.89) inset,#5e0000 0px 30px 60px -12px inset, rgba(0, 0, 0, 1) 0px 18px 36px -18px inset"
            }}>
                <ControllerShop />
            </div>
            <div className="ContainerProducts">
                {
                    product.map((item, index) => {
                        return (
                            <CardProtuct
                                key={index}
                                name={item.name}
                                price={`$${item.price.toFixed(2)}`}
                                src={info.server_uri + "/" + item.img}
                            />
                        )
                    })
                }
                {/* <CardProtuct /> */}
            </div>

        </D>
    );
}