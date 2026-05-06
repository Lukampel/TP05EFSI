import { useState } from "react";

function Buscador({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Buscar</button>
    </form>
  );
}

export default Buscador;