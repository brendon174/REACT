import React from "react";
import { GlobalContext } from "./GlobalContext";


 const Produto = () => {

  const {dados} = React.useContext(GlobalContext);

  if(dados === null) return null;
  return(
    
   <div> 
      Produtos:{' '} 
      {dados.map(produto => (
        <li key={produto.id}> {produto.nome} {produto.preco}R$</li>
      ))}
      
   </div>
  );
 }

 export default Produto