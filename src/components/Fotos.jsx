//importar módulos
import React, {useState, useEffect} from 'react';
import './Fotos.css'

function Fotos() {
        //useState
        const [vetor, setVetor] = useState([])
        const [status, setStatus] = useState('Carregando...')
    
        //useEffect
        useEffect(()=>{
            obterDados()
        })
    
        //Função para obter os dados da API
        // const obterDados = async ()=>{
        //     const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        //     const converter = await dados.json()
        //     setVetor(converter)
        //     setStatus('Dados carregados com Sucesso!')
        // }

        const obterDados = ()=>{
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then((resp)=>{
                return resp.json()
            }).then((data)=>{
                setVetor(data)
            })
            setStatus('Dados carregados com Sucesso!')
        }

        
    
        return(
            <div className='container'>
                <header>
                <h1>Exemplo de consumo API</h1>
                </header>
                <main>
                    {status == 'Carregando...' 
                        ? 
                        <div id='espera'>Carregando...</div>
                        :
                        vetor.map(objeto => (
                        <div key={objeto.id} className='card'>
                            <h2>Foto: {objeto.id}</h2>
                            <img src={objeto.thumbnailUrl} alt={`Foto ${objeto.id}`} />
                            <p>{objeto.title}</p>
                            <a className='btnVw' href={objeto.url} target='_blank'>{`Visualizar img ${objeto.id}`}</a>
                        </div>
                    ))}
               </main>
               <footer>
                <p>Exemplo de Imagens - {status}</p>
               </footer>                
            </div>
        )
}

export default Fotos