import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import {FaEdit, FaTrash} from "react-icons/fa"

const DivLista = styled.div`
    width: 70%;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;

    h1{
        text-align: center;
    }

    a{
        text-decoration: none;
        padding: 10px 15px;
        margin-bottom: 20px;
        background-color: yellowgreen;
        color: white;
        display: inline-block;
    }

    table{
        width: 100%;
        margin: auto;
    }

    thead tr{
        background-color: darkblue;
        color: white;
    }

    thead tr th{
        padding: 10px;
    }

    tbody{
        text-align: center;
    }

    tbody tr:nth-child(2n+2){
        background-color: #cccccc;
    }

    tbody tr td a{
        background: none;
        margin-bottom: 5px;
        color: blue;
        font-size: 1.5em;
    }
    
    tbody tr td button{
        color: red; 
        background: none;
        border: none;
        font-size: 1.5em;
    }

    tfoot tr td{
        padding: 10px;
        text-align: center;
        background-color: #333333;
        color: white;
    }
`


export default function ListaProduto(){

    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/produto")
        .then(resp=>resp.json())
        .then(data=>setProdutos(data))
        .catch(e=>console.log(e))
    },[])

    const handleDelete = id =>{
        fetch("http://localhost:5000/produto/"+id,{
            method: "delete"
        })
        .then(()=> {
            window.location = "/"
        })
        .catch(e=>console.log(e))
    }

    return(
        <DivLista>
            <h1>Lista Produtos</h1>
            <Link to="/incluir">Inserir Produtos</Link>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, i)=>(
                        <tr key={i}>
                            <td>{produto.titulo}</td>
                            <td>R$ {produto.preco}</td>
                            <td>{produto.quantidade}</td>
                            <td>
                                <Link title="Editar" to={`/editar/${produto.id}`}>
                                    <FaEdit/></Link>
                            </td>
                            <td>
                                <button title="Excluir" onClick={handleDelete.bind(this, produto.id)}>
                                <FaTrash/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>Produtos listados do Json Server</td>
                    </tr>
                </tfoot>
            </table>
        </DivLista>
    )
}