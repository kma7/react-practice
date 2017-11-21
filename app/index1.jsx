import React from 'react'
import {render} from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.periodic = this.periodic.bind(this)
  }

  periodic() {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentWillMount() {
    console.log("in componentWillMount")
  }

  componentDidMount() {
    console.log("in componentDidMount")
    setInterval(this.periodic, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.periodic)
  }

  render() {
    console.log('in render')
    return (
      <div>
        <p>Hello World</p>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
