import React from 'react';
import '../App.css';
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import uniqId from 'uniqid'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            tasks: []
        }
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    };
    handleClick = () => {
        const newTasks = [...this.state.tasks];
        newTasks.push({
            id: uniqId(),
            name: this.state.inputValue,
            done: false
        });
        this.setState({
            tasks: newTasks,
            inputValue: ""
        })
    };
    onTaskToggle = (id) => {
        const newTasks = [...this.state.tasks];
        const current = newTasks.find(item => item.id === id);
        const currentIndex = newTasks.indexOf(current);
        newTasks.splice(currentIndex,1,{
            ...current,
            done:!current.done
        });

        this.setState({tasks: newTasks})

    };
    onTaskDelete = (id)=>{
        const newTasks = [...this.state.tasks];
        const currentIndex = newTasks.findIndex(item => item.id === id);
        newTasks.splice(currentIndex,1);
        this.setState({tasks: newTasks})
    };


    render() {
        return (
            <div className="Main">
                <AddTask handleClick={this.handleClick} handleChange={this.handleChange}
                         inputValue={this.state.inputValue}/>
                <TodoList onTaskDelete={this.onTaskDelete} onTaskToggle={this.onTaskToggle} currentTask={this.state.tasks}/>
            </div>
        );

    }

}

export default Main;