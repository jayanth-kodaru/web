import React from 'react'

function Count(props) {
    console.log(props)
  return (
    <div>
       

<h1 className="text-warning text-center display-3">{props.todo.length}</h1>




    </div>
  )
}

export default Count