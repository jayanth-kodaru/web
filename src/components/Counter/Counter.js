import './Counter.css'



function Counter(props)
{ console.log(props)
    
    return (
        <div className='bg-light text-dark'>
            <h2><strong>CHILD</strong></h2>
             <button className='btn btn-dark m-2' onClick={()=>props.increment()}> + </button>
             <button className='btn btn-dark m-2' onClick={()=>props.decrement()}> - </button>
             <button className='btn btn-dark m-2' onClick={()=>props.reset()}> reset </button>
        </div>
      )


}
export default Counter;