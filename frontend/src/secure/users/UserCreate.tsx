import React, {Component, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class UserCreate extends Component {
    state = {
        redirect: false
    }
    first_name = '';
    last_name = '';
    email = '';


    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('users', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
        });

        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/users'}/>;
        }

        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="first_name"
                               onChange={e => this.first_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name"
                               onChange={e => this.last_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                               onChange={e => this.email = e.target.value}
                        />
                    </div>


                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default UserCreate;