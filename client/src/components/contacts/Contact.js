function Contact(props){
  let activeContact = props.active === "active" ? 'contact active' : 'contact';

  return (
    <div className={activeContact}>
      <div className="name">{props.name}</div>
      <div className="lastMessage">{props.lastMessage}</div>
    </div>
  )
}

export default Contact;