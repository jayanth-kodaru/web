import {useEffect , useState} from 'react';



function Useeffect() {
    let [todo,Settodo]=useState([])

    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(todos=>Settodo(todos))
        .catch(error=>console.log(error))
    },[]);



return(
    <div className="text-success">
        
        <h1 className="text-success">Use</h1>

       <table className="table text-white">
        <thead>
            <tr>
                <td>
                    Userid
                </td>
                <td>
                   id
                </td>
                <td>
                    title
                </td>
                <td>
                    completed
                </td>


                </tr>
        </thead>
<tbody>


{
todo.map(obj=><tr key={obj.id}> 
    <td>
                   {obj.userId}
                </td>
                <td>
                   {obj.id}
                </td>
                <td>
                   {obj.title}
                </td>
                <td>
                   {obj.completed}
                </td>
    
    
     </tr>)




}






</tbody>



       </table>

        
         </div>


);




}
export default Useeffect