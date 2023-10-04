import { useState, useEffect } from "preact/hooks";
import { getFightersByName } from "../services/fighter";
import { apiUrl } from "../services/apiConfig";

function FighterSearch() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameString = name.toString(); // Convierte 'name' a una cadena
    window.location.href = `/prueba/${nameString}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del luchador"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default FighterSearch;
