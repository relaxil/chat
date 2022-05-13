import {useRef} from "react";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

function InputMessage(props) {
  const inputRef = useRef(null);

  function submit(e) {
    e.preventDefault();

    props.addMessage(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={submit} className="fieldMessage">
      <CustomInput inputRef={inputRef} /* changeInput={changeInputValue} */ />
      <CustomButton />
    </form>
  )
}

export default InputMessage;