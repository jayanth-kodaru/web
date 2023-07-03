import {useForm} from 'react-form-hook';

function form()
{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const formsubmit = (data) => {
        console.log(data);
      };
    return (
        <div className='bg-danger text-center text-light'>
          <h1>Forms</h1>
          <div className='row '>
            <div className=' col-2 col-sm-4 col-md-5 mx-auto'>
              <form onSubmit={handleSubmit(formsubmit)}>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  name='username'
                  id='username'
                  className='form-control'
                  {...register('username')}
                />
                <label htmlFor='dob' className='mt-5'>
                  DOB
                </label>
                <input
                  type='date'
                  id='dob'
                  className='form-control'
                  {...register('dob')}
                /> 
                <div className="form-check mt-5">
                  <input   type="radio" className="form-check-input" id="male"{...register("gender") } value="male" />
                  <label htmlFor="male" className="form-check-label"> male</label>
                </div>
                <div className="form-check ">
                  <input   type="radio" className="form-check-input" id="female"{...register("gender")}  value="female"/>
                  <label htmlFor="female" className="form-check-label"> female</label>
                </div>
                
                <button type='submit' className='btn btn-info mt-5 mb-5'>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}
export default form;