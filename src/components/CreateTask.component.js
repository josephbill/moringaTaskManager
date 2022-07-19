import React,{Component} from "react";
import DatePicker from 'react-datepicker'

export default class CreateTaskComponent extends Component{

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            username: '',
            duration: '',
            description: '',
            users:[]
        }

    }

    onChangeDate(){

    }

    onSubmit(){

    }

    onChangeDescription(){

    }

    onChangeDuration(){

    }

    onChangeUsername(){

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

                                <option value="Joseph">Joseph</option>
                                <option value="Bill">Bill</option>

                            {/*    this data will come from db : options */}
                            {/*    {*/}
                            {/*        this.state.users.map(function(user){*/}
                            {/*            return <option*/}
                            {/*              key={user}*/}
                            {/*            >*/}
                            {/*                {user}*/}
                            {/*                */}
                            {/*            </option>*/}
                            {/*        })*/}
                            {/*    }*/}
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
