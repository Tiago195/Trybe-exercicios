import React from 'react'

class Task extends React.Component {
  render() {
    return (
      <ol>
        {this.props.value.map((e, i) => <li key={i}>{e}</li>)}
      </ol>
    )
  }
}

export default Task