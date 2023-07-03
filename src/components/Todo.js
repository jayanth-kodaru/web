import {useForm} from 'react-hook-form'


function Todo(props)
{



let {register,handleSubmit,formState:{errors}}=useForm();
console.log(props)
let formsubmit=(obj)=>{

console.log(obj)
props.todofunction(obj.ADDtask)


}
return(
    <div >
<form onSubmit={handleSubmit(formsubmit)}>


<input   type="text"  id="username"  className="form-control" {...register("ADDtask")}/>

<button type="submit" className="btn btn-info mt-3"   >Add</button>

    </form>
    </div>
);
}
export default Todo;