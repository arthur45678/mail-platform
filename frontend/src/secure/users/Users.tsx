import React, {Component} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import {User} from "../../classes/user";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Deleter from "../components/Deleter";
import Paginator from "../components/Paginator";


class Users extends Component {
    state = {
        users: []
    }
    page = 1;
    last_page = 0;

    componentDidMount = async () => {
        const response = await axios.get(`users?page=${this.page}`);

        this.setState({
            users: response.data.data
        });

        this.last_page = response.data.last_page;
    }

    handlePageChange = async (page: number) => {
        this.page = page;

        await this.componentDidMount();
    }

    handleDelete = async (id: number) => {
        this.setState({
            users: this.state.users.filter((u: User) => u.id !== id)
        })
    }

    actions = (id: number) => {
        return (
            <div className="btn-group mr-2">
                <Link to={`/users/${id}/edit`}
                      className="btn btn-sm btn-outline-secondary">Edit</Link>
                <Deleter id={id} endpoint={'users'}
                         handleDelete={this.handleDelete}/>
            </div>
        )
    }

    render() {
        let addButton = null;

        addButton = (
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to={'/users/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
            </div>
        );


        return (
            <Wrapper>
                {addButton}

                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(
                            (user: User) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.first_name} {user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{this.actions(user.id)}</td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>


                <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange}/>
            </Wrapper>
        );
    }
}


export default Users;