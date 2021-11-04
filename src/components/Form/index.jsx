import { useState } from "react";
import "../style.css";

function Form({ adicionar }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <form>
        <input
          id="input"
          type="text"
          placeholder="Nova Atividade"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        ></input>

        <button
          className="botao"
          onClick={(element) => {
            adicionar(userInput);
            element.preventDefault();
            setUserInput("");
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default Form;
