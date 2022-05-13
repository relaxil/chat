import Message from "./Message";

function Messages(props){
  return (
    <div className="messages">
      <div ref={props.refChild} className="content">
        {props.messages.map((obj) => 
          <Message key={obj.id} name={obj.name} text={obj.text} />
        )}
      </div>
    </div>
  )
}

export default Messages;