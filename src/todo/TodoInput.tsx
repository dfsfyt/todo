import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface TodoInputProps {
    onEnter: Function
}

const TodoInput = (props: TodoInputProps) => {
    const { onEnter } = props;
    const [inputValue, setInputValue] = useState<string>("");
    return <TextField color="info" sx={{width: 400, bgcolor: "background.paper", borderRadius: "4px"}} id="outlined-basic" label="Add A Todo" variant="outlined" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }} onKeyUp={async (e) => {
        if(e.key === "Enter" && inputValue) {
          await onEnter(inputValue);
          setInputValue("");
        }
      }} />
}

export default TodoInput;