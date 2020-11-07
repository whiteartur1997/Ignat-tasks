import React, { ChangeEvent, KeyboardEvent } from "react";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./../h4/common/c1-SuperInputText/SuperInputText.module.css";
import styles from './../h3/Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const addUserInput = (event: KeyboardEvent<HTMLInputElement>) => {
      if(event.key === "Enter") {
        addUser();
        event.currentTarget.blur();
      }
    }

    return (
        <div className={s.greetingWrapper}>
          <div className={s.inputWrapper}>
            <SuperInputText
              spanClassName={styles.errorMessage}
              error={error}
              value={name} 
              onKeyPress={addUserInput} 
              onChange={setNameCallback}
              className={`${s.input} ${s.superInput}`}/>
              <div>
                <SuperButton onClick={addUser} className={s.SuperButton}>add</SuperButton>
              </div>
          </div>
            <span className={s.count}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
