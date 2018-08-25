import React, { Component } from 'react'

export default class TodoListItems extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('this.props.todos hoera', this.props.todos);
        return (
            <ul>
                {
                    this.props.todos.map(t => <li>{t}</li>)
                }
            </ul>

        )
    }
}
