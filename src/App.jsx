import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";
import Checkbox from "./form/Checkbox";



const App = () => {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [linguagem, setLinguagem] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  const [cep, setCep] = React.useState('');
 

  


  return (
    <>
    <form>
      <h2>Termos</h2>
      <Checkbox 
      options={['Li e aceito os Termos']} 
      value={termos} 
      setValue={setTermos}
      />
      <h2>Checkbox</h2>
      <Checkbox 
      options={['javascript', 'C#', 'PHP']} 
      value={linguagem} 
      setValue={setLinguagem}
      />

      <Select options={['Smartphone', 'Notebook']} value={produto} setValue={setProduto}/>
        <Input label='nome' value={nome} setValue={setNome}/>
        <Input label='email'value={email} setValue={setEmail}/>
        {nome}
        <br/>
        {email}

        <Input 
        label= "CEP" 
        id="cep" 
        type="text" 
        value={cep}  
        setValue={setCep} 
      
        placeholder="00000-000"
        />
      
    </form>
 
 </>
  );
};

export default App