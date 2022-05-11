function Message(props){
  return (
    <div className="message">
      <div className="name">{props.name}</div>
      <div className="text">{props.text}</div>
    </div>
  )
}

export default Message;