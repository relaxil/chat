function Contact(props){
  let activeUse = props.active === "active" ? 'contact active' : 'contact';
  
  return (
    <div className={activeUse}>
      <div className="name">{props.name}</div>
      <div className="lastMessage">{props.lastMessage}</div>
    </div>
  )
}

export default Contact;