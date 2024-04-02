import React from "react";

class UserClass extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            count : 0,
            count1 : 2
        }
    }

    render(){
        const {name , city} = this.props;
        const {count} = this.state;
        return <div>
            <h1>Count : {count}</h1>

            <button onClick={()=>{
                this.setState({
                    count :  this.state.count + 1
                })
            }}>Inc</button>

            <h1>Name : {name}</h1>
            <h2>City : {city}</h2>
        </div>
    }

}

export default UserClass;