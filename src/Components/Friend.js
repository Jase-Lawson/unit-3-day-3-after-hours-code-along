const Friend = (props) => {
  console.log('Props:', props)
  return (
    <div className='list-item'>
      <h2>First Name: {props.friend.first_name}</h2>
      <h2>Last Name: {props.friend.last_name}</h2>
      <h2>Class Role: {props.friend.role}</h2>
    </div>
  )
}

export default Friend;