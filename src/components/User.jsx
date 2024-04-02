import { useState } from "react";

const User = ({name})=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return <div>
        <hr />
        <h1>Count : {count}</h1>
        <h2>Count : {count2}</h2>
        <h2>Name : {name}</h2>
        <h2>City : Delhi</h2>
        <hr />
    </div>
    
}

export default User;