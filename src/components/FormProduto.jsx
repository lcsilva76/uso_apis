import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import { FaLocationArrow, FaRegTimesCircle } from "react-icons/fa"
import {DivForm} from './../styled'

export default function FormProduto(){

    let {id} = useParams()

    const [novo, setNovo] = useState({
        id: id,
        titulo: "",
        preco: "",
        quantidade:""
    })

    console.log(id);
    let metodo = "post"

    if(id){
        metodo = "put"
    }

    const handleChange = e=>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e=>{
        e.preventDefault()

        fetch("http://localhost:5000/produto/"+(id ? id : ""),{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        })
        .then(()=> window.location = "/")
        .catch(e=>console.log(e))
    }

    useEffect(()=>{
        if(id){
            fetch("http://localhost:5000/produto/"+id)
            .then(resp=> resp.json())
            .then(data=> setNovo(data))
        }
    },[id])

    return(
        <DivForm>
            <h1>Formulário Produtos</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="titulo" value={novo.titulo}
                placeholder="Titulo" onChange={handleChange} /><br/>
                <input type="number" name="preco" value={novo.preco}
                placeholder="Preço" onChange={handleChange} step="0.01" /><br/>
                <input type="number" name="quantidade" value={novo.quantidade}
                placeholder="Quantidade" onChange={handleChange} /><br/>
                <button type="submit"><FaLocationArrow/></button>
                <Link to='/'><FaRegTimesCircle/></Link>
            </form>
        </DivForm>
    )
}