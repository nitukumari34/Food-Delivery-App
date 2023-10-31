import { useState } from "react";
const User = ({ name }) => {
    const [count, setCount] = useState(0);

    return (
        <div className=" user-card p-4 m-4 bg-gray-50 rounded-lg">
            <h2>Name:{name}</h2>
            <h1>count:{count}</h1>
            <h3>Location: Bihar</h3>
            <h4>Contact: nituspj032001@gmail.com</h4>

        </div>
    )
}

export default User;