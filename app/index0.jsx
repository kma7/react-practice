import React from 'react'
import ReactDOM from 'react-dom'

class Profile extends React.Component {
  render() {
    let hobbies = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>
    })
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.name} {this.props.bio}</p>
        <h3>Hobbies</h3>
        <ul>{hobbies}</ul>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [
        {
          name: 'John',
          age: 30,
          bio: 'enjoys swimming and biking',
          hobbies: ['swimming', 'biking', 'talking']
        },
        {
          name: 'Mark',
          age: 22,
          bio: 'enjoys reading',
          hobbies: ['gardening', 'sleeping']
        }
      ]
    }
    this.addUser = this.addUser.bind(this)
  }
  addUser(e) {
    let user = {
      name: 'Tom',
      age: 18,
      bio: 'enjoys sports',
      hobbies: ['basketball', 'baseball']
    }
    this.setState({
      profiles: this.state.profiles.concat(user)
    })
  }

  render() {
    let profiles = this.state.profiles.map( (profile) => {
      return (
        <div>
          <Profile
            name = {profile.name}
            age = {profile.age}
            bio = {profile.bio}
            hobbies = {profile.hobbies} />
        </div>
      )
    })

    return (
      <div>
        {profiles}
        <button onClick={this.addUser}> Add new profile</button>
      </div>
    )
    /* <button onClick={this.addUser.bind(this)}> Add new profile</button> */
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
