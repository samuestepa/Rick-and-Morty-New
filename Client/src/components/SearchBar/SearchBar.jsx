import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {          
      setId(event.target.value)
   }


   return (
      <div>
         <input type='search' value={id}  onChange={handleChange} />     {/*----a value le damos id para q el estado del servidor = input  y  handleChange input = al estado interno ----*/}
         <button onClick={() => {onSearch(id); setId("")}}>Agregar</button>     {/*---------setId('') debe ir como segundo parametro y borra el numero del input que buscamos desps de dar click en agregar*----*/}
      </div>
   );
}
