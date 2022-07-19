import React,{useRef} from "react";
import { toast } from "react-toastify";
import UserApi from "../API/UserApi";


//useRef=> reacte hook methode
function Create(props){
    const name=useRef();
    const email =useRef();
    const mobile = useRef();
    const address =useRef();
    
    const submitHandler=(e)=>{
        e.preventDefault();//avoid page refresh on submit
        const data ={
            name:name.current.value,
            email:email.current.value,
            mobile:mobile.current.value,
            address:address.current.value
        };
        console.log('data =',data);
        UserApi.create(data).then(res=>{
            toast.success('user created successfully');
            window.location.href=`/`;
}).catch(err=>toast.error(err.message));
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Create</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form autoComplete="off" onSubmit={submitHandler}>
                        <div className="form-group mt-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" ref={name} className="form-control"  required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" ref={email} className="form-control" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" name="mobile" id="mobile" ref={mobile} className="form-control" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="Address">Address</label>
                            <input type="address" name="address" id="address" ref={address} cols="30" rows="5" className="form-control" required/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="submit" value="create" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Create