import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
function SearchMdorm(props: any) {
  const [input, setInput] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setInput(val);
  }
  function handleKeyPress(target: any) {
    if(target.charCode===13){
      props.search(input);    
    } 
  }
  return (
    <div style={{width:"100%"}}>
      <FormControl
      name="input"
      onChange={handleChange}
      value={input}
      placeholder="Search" 
      onKeyPress={handleKeyPress}
      />
    </div>
  );
}
export default SearchMdorm;
