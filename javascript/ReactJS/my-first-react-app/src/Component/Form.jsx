import { useState } from "react";

function Form(){
    const [user,setUser] = useState({
        name: "",
        email: "",
        age: 0
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    return(
        <>
            <input type="text" value={user.name} onChange={handleChange} placeholder="Enter a Name"/>
            <input type="email" value={user.email} onChange={handleChange} placeholder="Enter an Email"/>
            <input type="number" value={user.age} onChange={handleChange} placeholder="Enter an Age"/>
            <p>Name: {user.name}, Email: {user.email}, Age: {user.age}</p>
        </>
    )
}

export default Form;