import React from 'react'
import {render} from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handler = this.handler.bind(this)
    this.submit = this.submit.bind(this)
  }

  handler(e) {
    this.setState({
      input: e.target.value
    })
  }

  submit() {
    this.setState({
      input: ''
    }, () => {
      ReactDOM.findDOMNode(this.refs.inputBox).focus()
    })
  }

  render() {
    return (
      <div>
        <input
          ref='inputBox'
          value={this.state.input}
          onChange={this.handler}
        />
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
