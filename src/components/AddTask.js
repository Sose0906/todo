import React from 'react';


class AddTask extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="AddTask">
                <h1>Things Todo</h1>
                <div>
                    <input onChange={this.props.handleChange} value={this.props.inputValue} type="text"
                           placeholder="Add task here..."/>
                    <button onClick={this.props.handleClick}>Add</button>
                </div>
            </div>
        )
    }


}

export default AddTask