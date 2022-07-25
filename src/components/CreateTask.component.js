import React,{Component} from "react";
import DatePicker from 'react-datepicker';
import axios from "axios";

export default class CreateTaskComponent extends Component{

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            duration: 0,
            description: '',
            date: new Date(),
            users:[]
        }

    }

    onChangeDate(e){
        this.setState({
            date: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        const taskObject = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        //use axios for http request
        axios.post('http://localhost:5000/tasks/add',taskObject)
            .then(res => console.log(res.data));

        //set user input back to blank
        this.setState({
            username: '',
            description: '',
            duration: '',
            date: '',
        })

        //redirect the user to view all tasks in homepage
        window.location = '/';

    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }

    onChangeUsername(e){
       this.setState({
           username: e.target.value
       })
    }

    componentDidMount() {
        //fetch list
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(users => users.username),
                        username: response.data[0].username
                    })
                }
            })
    }


    render(){
        return(
            <div>
                <h3>Create task</h3>
                <div className="form-group">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username: </label>
                            <select
                            ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            >


                                {/*this data will come from db : options */}
                                {
                                    this.state.users.map(function(user){
                                        return <option
                                          key={user}
                                        >
                                            {user}

                                        </option>
                                    })
                                }
                            </select>
                        </div>

                    {/*    description */}
                        <div className="form-group">
                            <label>Description: </label>
                            {/* textarea ,  select , image submission */}
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>

                        {/*    description */}
                        <div className="form-group">
                            <label>Duration: </label>
                            {/* textarea ,  select , image submission */}
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.duration}
                                onChange={this.onChangeDuration}
                            />
                        </div>


                    {/*    date picker */}
                        <div className="form-group">
                            <label>Date: </label>
                            {/* textarea ,  select , image submission */}
                            <DatePicker
                                 selected={this.state.date}
                                 onChange={this.onChangeDate}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Create task"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
