import React from "react";

class Dream extends React.Component{
    render(){
        return <button className="journal-item">
            {this.props.name}
        </button>
    }
}

export default Dream;