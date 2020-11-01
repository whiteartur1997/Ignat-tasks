import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    setError: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, setError, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : null; // need to fix with (?:)

    const addUserInput = (event: KeyboardEvent<HTMLInputElement>) => {
      if(event.key === "Enter") {
        addUser();
        event.currentTarget.blur();
      }
    }

    return (
        <div className={s.greetingWrapper}>
          <div className={s.inputWrapper}>
            <input 
              value={name} 
              onKeyPress={addUserInput} 
              onChange={setNameCallback}
              onFocus={setError} 
              className={`${s.input} ${inputClass}`}/>
            <button onClick={addUser} className={s.btn}>add</button>
          </div>
            <span className={s.errorMessage}>{error}</span>
            <span className={s.count}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
