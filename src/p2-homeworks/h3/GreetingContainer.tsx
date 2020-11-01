import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> 
    addUserCallback: (name: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<"" | "You should put a name!">("");

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { 
        setName(event.currentTarget.value);
    };
    
    const addUser = () => {
      if(name.trim().length > 1) {
        alert(`Hello, ${name}!`);
        addUserCallback(name);
        setName("");
      } else {
        setError("You should put a name!")
      } 
    };

    const setErrorCallback = () => {
      setError("");
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setError={setErrorCallback}
        />
    );
}

export default GreetingContainer;
