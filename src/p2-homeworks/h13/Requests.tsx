import React, { ChangeEvent, useState } from "react";
import { authAPI } from "./API/requestApi";

const Requests = () => {

  const [success, setSuccess] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const changeSuccess = (e: ChangeEvent<HTMLInputElement>) => {
    setSuccess(e.target.checked);
  }

  const sendRequest = () => {
    authAPI.testCall(success)
      .then(res => {
        setResponse(`${res.data.errorText} ${res.data.info}`);
      })
      .catch(err => {
        setResponse(`${err.response.data.errorText} ${err.response.data.info}`);
      })
  }

  return (
    <div>
      <div>{response}</div>
      <input type="checkbox" onChange={changeSuccess} />
      <button onClick={sendRequest}>Send request</button>
    </div>
  )
}

export default Requests;

