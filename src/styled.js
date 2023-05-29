import styled from 'styled-components'

export const DivLista = styled.div`
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

export const DivForm = styled.div`
      width: 70%;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;
    h1{
        text-align: center;
    }

    form{
        width: 80%;
        margin: auto;
    }

    form input{
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
    }

    a{
        background-color: red;
        margin-bottom: 5px;
        color: white;
        text-decoration: none;
        padding: 5px;
    }

    button{
        color: white;
        background-color: green;
        border:none;
        display: inline-block;
        padding: 6px;
        margin-right: 10px;
    }

`

export const DivFotos = styled.div`

    min-height: 100vh;
    display: flex;
    flex-direction: column;


header{
    background-color: darkslateblue;
    width: 100%;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center; 
}

header h1{
    color: white;
}

main{
    flex-grow: 1;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 30px;
    padding-bottom: 70px;   
}

#espera{
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    font-weight: bold;
}

.card{
    width: 300px;
    border: 1px solid gray;
    box-shadow: 2px 2px 2px gray;
    border-radius: 7px;
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.card img{
    max-width: 100%;
}

.btnVw{
    text-decoration: none;
    display: inline-block;
    padding: 10px 20px;
    align-self: flex-end;
    background-color: #0c0cce;
    color: white;
    border-radius: 5px;
}

footer{
    background-color: black;
    width: 100%;
    min-height: 60px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer p{
    color: white;
}


`

