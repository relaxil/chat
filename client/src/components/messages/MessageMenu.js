import InputMessage from "./InputMessage";
import Messages from "./Messages";

function MessageMenu(props){
  return(
    <div className="messageMenu">
      <Messages />
      <InputMessage />
    </div>
  )
}

export default MessageMenu;