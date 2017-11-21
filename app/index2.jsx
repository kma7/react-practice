import React from 'react'
import {render} from 'react'
import ReactDOM from 'react-dom'

let HOCGen = (Component, state) => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = state
  }
  componentDidMount() {
    console.log("in componentDidMount")
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  render() {
    return (
      <Component {...this.props} {...this.state}/>
    )
  }
}

class Comp1 extends React.Component {
  render() {
    return (
      <div>
        <p> Componet 1 </p>
        {this.props.count}
      </div>
    )
  }
}

class Comp2 extends React.Component {
  render() {
    return (
      <div>
        <p> Componet 2 </p>
        {this.props.count}
      </div>
    )
  }
}

let WrappedComp1 = HOCGen(Comp1, {count: 0})
let WrappedComp2 = HOCGen(Comp2, {count: 100})


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Hello World</p>
        <WrappedComp1 />
        <WrappedComp2 />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
