import React, {Component, PropsWithRef, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import axios from "axios";
import {User} from "../../classes/user";
import {Redirect} from 'react-router-dom';

class UserEdit extends Component<{ match: PropsWithRef<any> }> {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        redirect: false
    }
    id = 0;
    first_name = '';
    last_name = '';
    email = '';

    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        const userCall = await axios.get(`users/${this.id}`);

        const user: User = userCall.data;

        this.setState({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`users/${this.id}`, {
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
                               defaultValue={this.first_name = this.state.first_name}
                               onChange={e => this.first_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name"
                               defaultValue={this.last_name = this.state.last_name}
                               onChange={e => this.last_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                               defaultValue={this.email = this.state.email}
                               onChange={e => this.email = e.target.value}
                        />
                    </div>


                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default UserEdit;