import {useState, useRef, useEffect} from "react";

import InputMessage from "./InputMessage";
import Messages from "./Messages";

function MessageMenu(props){
  const [messages, setMessages] = useState([
    // {id: 0, name: 'Иван Иванов', text: 'Долго тебя ждать?'},
  ]);

  function addMessage(text){
    setMessages((obj) => {
      const newElement = {
        id: obj.length,
        name: 'Иван Иванов',
        text
      }

      return [...obj, newElement];
    })
  }

  const messagesListRef = useRef(null);

  useEffect(() => {
    messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
  }, [messages])

  return(
    <div className="messageMenu">
      <Messages refChild={messagesListRef} messages={messages} />
      <InputMessage addMessage={addMessage} />
    </div>
  )
}

export default MessageMenu;