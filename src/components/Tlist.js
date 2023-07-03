import React from 'react'
import {BsFillMoonStarsFill}  from 'react-icons/bs'

function Tlist(props) {
  return (
    <div>
        <p><BsFillMoonStarsFill/></p>

 {
props.todo.map((task,index)=><h3 key={index} className="text-danger text-center"> {task} </h3> )


 }




    </div>
  );
}

export default Tlist