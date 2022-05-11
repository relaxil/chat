import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

function InputMessage(props) {
  return (
    <div className="fieldMessage">
      <CustomInput />
      <CustomButton />
    </div>
  )
}

export default InputMessage;