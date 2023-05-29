import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {DivLista} from './../styled'
import {FaEdit, FaTrash} from "react-icons/fa"


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