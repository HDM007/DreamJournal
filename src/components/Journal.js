import React from "react";
import Dream from "./Dream"

class Journal extends React.Component{
    render() {
        return <ul className="journal">
            {Object.keys(this.props.dreams).map(key => <Dream key={key} index={key} name={this.props.dreams[key].name}></Dream>)}
        </ul>
    }
}

export default Journal;