import React from 'react'
import PropTypes from 'prop-types'

const InputText = ({addTodo}) => {
    return (
        <div>
            <input type='text'></input>
            <button onClick={props.addTodo}>add todo</button>
        </div>
    )
}

//question :define proptype for action?
InputText.propTypes = {
    addTodo: function
}

export default InputText
