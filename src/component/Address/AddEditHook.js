import React, { useState } from "react";
import { Error } from "../../Contexts/ErrorContext/ErrorContext";


export function AddressHook(initialState) {
  const [state, setState] = useState(initialState);
  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const stateClear = (initialState) => {
    // reset to innital state
    setState(initialState);
  };
  const onSubmitHandler = () => {
    // some logic check
    for (let [key, value] of Object.entries(state)) {
      if (!value) {
        Error("warn", `please fill all the section`);
        return false;
      }
    }
    return true;
  };

  return [state, onChangehandler, onSubmitHandler, stateClear];
}

export function FormShowHook(initialState) {
  const [showForm, setShowForm] = useState(initialState);
  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  return [showForm, showFormHandler];
}
