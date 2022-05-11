import Message from "./Message";

function Messages(props){
  const messages = [
    {id: 0, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 1, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 2, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 3, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 4, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 5, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 6, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 7, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 8, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
    {id: 9, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
  ];

  return (
    <div className="messages">
      <div className="content">
        {messages.map((obj) => 
          <Message key={obj.id} name={obj.name} text={obj.text} />
        )}
      </div>
    </div>
  )
}

export default Messages;