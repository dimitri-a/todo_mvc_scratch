import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Filterthing extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
       <a>All</a>{' '}
       <a>Completed</a>{' '}
       <a>Uncompleted</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Filterthing)
