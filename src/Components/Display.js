import { Component } from 'react'
import Friend from './Friend'

class Display extends Component {
  constructor() {
    super();
    this.state = {
      bestFriend: { first_name: 'Fluffy', last_name: 'Dog', role: 'Good Boi' },
      friends: [
        { first_name: 'Ben', last_name: 'Dehlin', role: 'Mentor' },
        { first_name: 'Jase', last_name: 'Lawson', role: 'Student' },
        { first_name: 'Stuart', last_name: 'Ernstsen', role: 'Student' },
        { first_name: 'Tori', last_name: 'Flinders', role: 'Student' },
        { first_name: 'Jacob', last_name: 'Orbach', role: 'Student' },
        { first_name: 'Rachel', last_name: 'Seaborn', role: 'Student' },
        { first_name: 'Anthony', last_name: 'Gianell', role: 'Student' },
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Display Component</h1>
        {this.state.friends.map((el, i) => {
          return (
            < Friend friend={el} key={i} />

            // <div className='list-item' key={i} >
            //   <h2>First Name: {el.first_name} </h2>
            //   <h2>Last Name: {el.last_name} </h2>
            //   <h2>Role: {el.role}</h2>
            // </div>
            // This data has been used 

          )
        })}
        <h3> Some other cool stuff thats down here </h3>
        <h3> Below is a special zone for my best friend.</h3>
        <Friend friend={this.state.bestFriend} />
      </div>
    )
  }
}


export default Display;