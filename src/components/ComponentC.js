import React, {Component} from 'react'

export default class ComponentC extends Component {


  render() {
    console.log(this.props.data)
    return (
      <div>
       <div>ComponentC</div>
        <h2>{this.props.data}</h2>
      </div>

    )
  }
}
