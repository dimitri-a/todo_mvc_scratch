import React from 'react'
import {Component} from 'react'

class FilterThing extends Component {
    render() {
        const { filterShowAll,filterCompleted, filterUnCompleted } = this.props.actions;
        //debugger
         return (
            <div>
                <a onClick={ ()=>filterShowAll() } href='#'>All</a>{' '}

                <a onClick={ ()=>filterCompleted() } href='#'>Completed</a>{' '}

                <a onClick={ ()=>filterUnCompleted() } href='#'>Not Completed</a>{' '}
            </div>
        )
    }
}

export default FilterThing
