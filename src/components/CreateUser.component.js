import React,{Component} from "react";
import axios from "axios";

export default class CreateUserComponent extends Component{

    constructor(props) {
        super(props);
        //binding methods to this class component
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        //states
        this.state = {
            username: ''
        }
    }


    componentDidMount() {

    }


    onSubmit(e){
      //prevent default
        e.preventDefault();
        //store user input in an object variable
        const user = {
            username: this.state.username
        }
        //for testing purposes
        console.log(user);

        //use axios for http request
        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log(res.data));

        //set user input back to blank
        this.setState({
            username: ''
        })

    }


    onChangeUsername(e){
        //update my state
        this.setState({
            username : e.target.value,
        })
        console.log(this.state.username)
    }


    render(){
        return(
            <div>
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <br/>
                    <div className="form-group">
                         <label>Username: </label>
                         {/* textarea ,  select , image submission */}
                         <input
                         type="text"
                         required
                         className="form-control"
                         value={this.state.username}
                         onChange={this.onChangeUsername}
                         />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create User"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
