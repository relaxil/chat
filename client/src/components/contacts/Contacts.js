import Contact from "./Contact";

function Contacts(props) {
  const contacts = [
    {id: 0, name: 'Иван Иванов', lastMessage: 'Он: тебя долго ждать?', active: 'active'},
    {id: 1, name: 'Сергей Сергеевич', lastMessage: 'Вы: как ты?', active: 'none'},
  ];

  return (
    <div className="contacts">
      {contacts.map((obj) => 
        <Contact key={obj.id} name={obj.name} lastMessage={obj.lastMessage} active={obj.active} />
      )}
    </div>
  )
}

export default Contacts;