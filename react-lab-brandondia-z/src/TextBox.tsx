interface TextBoxProps {
    label: string;
    changeHandler: (value: string) => void;
}

function TextBox(props: TextBoxProps) {
    return (
      <div className="TextBox">
            <label>{props.label}</label>
            <input type={'text'} onChange={e => props.changeHandler(e.target.value)} />
      </div>
    );
  }

  export default TextBox;