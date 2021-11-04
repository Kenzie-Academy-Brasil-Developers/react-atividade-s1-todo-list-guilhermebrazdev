import "../style.css";

function TodoList({ item, remov }) {
  return (
    <div>
      <ul>
        {item.map((item, index) => (
          <li id="taskBox" key={index}>
            <button
              id="removeBotao"
              className="botao"
              onClick={() => remov(index)}
            >
              Remover
            </button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
