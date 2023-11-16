import styled from "styled-components";

const D = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    flex-wrap:wrap;
    flex-direction:column;
    gap:5px;
    transition:.5s;
    height:fit-content;

    ul{
        list-style:none;
        display:flex;
        flex-direction:column;
        flex-wrap: wrap;
        justify-content:center;
        align-items:center;
        width: 90%;
    transition:.5s;
        height:fit-content;
        background-color: transparent;
    }
    li{
        padding:0px 0px 0px 5px;
        transition:.5s;
        background-color: transparent;
        float: left;
        margin:0;
        position: relative;
        border-radius:0px;
        border:0px;
        display:flex;
        flex-wrap: wrap;
        width: 80%;
        height:fit-content;
    }
    li:hover{
        background-color:rgb(78, 0, 0);
        border-radius: 5px 15px 5px 15px;
    }
    ul li a{
    transition:.5s;
        width:80%;
		color:#fff;
		text-decoration:none;
		display:block;
    }
    ul li ul {
    transition:.5s;
		display:none;
        position: relative;
	}
    ul li:hover > ul {
        height:fit-content;
		display:block;
	}
    
    li:first-child{
    transition:.5s;
        background-color: transparent;
        width:80%;
        font-size:10px;
    }
    ul li ul li:first-child:hover{
        background-color:rgb(78, 0, 0);
    }
    ul li ul li:last-child{
        justify-content:start;
        width: 80%;
        font-size:.6rem;
        border:0px;
    }
    ul li ul li:last-child:hover{
        width: 80%;
        font-size:.6rem;
    }
`;

export default function List(){
    return(
        <D>
            <ul>
                <li className=" content-center"><a>Productos</a>
                    <ul>
                        <li>
                            <a>Proteinas</a>
                        </li>
                        <li>
                            <a>Creatinas</a>
                        </li>
                        <li>
                            <a>Preentrenos</a>
                        </li>
                        <li>
                            <a>Ropa</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </D>
    );
}