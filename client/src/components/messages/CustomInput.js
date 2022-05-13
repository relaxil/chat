function CustomInput(props){
  return (
    <input ref={props.inputRef} className="customInput" placeholder="Введите текст" />
  );
}

export default CustomInput;