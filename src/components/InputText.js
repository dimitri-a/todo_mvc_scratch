import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'




export class InputText extends Component {
    state = { text: '' }

    onChangeText = (e) => {
        this.setState({ text: e.target.value })
    }

    onAdd = () => {
        this.addTodo(this.state.text)
    }

    render = () =>{
        return (
            <div>
                <input type='text' onChange={this.onChangeText} value={this.state.text}></input>
                <button onClick={this.onAdd}>add todo</button>
            </div>
        )
    }
}

//question :define proptype for action?
InputText.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default InputText
