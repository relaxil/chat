function Contact(props){
  return (
    <div className={props.active ==="active" ? 'contact active' : 'contact'}>
      <div className="name">{props.name}</div>
      <div className="lastMessage">{props.lastMessage}</div>
    </div>
  )
}

export default Contact;