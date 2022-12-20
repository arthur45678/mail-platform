import React, {Component} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import {Trigger} from "../../classes/trigger";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Deleter from "../components/Deleter";
import Paginator from "../components/Paginator";


class Triggers extends Component {
    state = {
        triggers: []
    }
    page = 1;
    last_page = 0;

    componentDidMount = async () => {
        const response = await axios.get(`triggers?page=${this.page}`);

        this.setState({
            triggers: response.data.data
        });

        this.last_page = response.data.last_page;
    }

    handlePageChange = async (page: number) => {
        this.page = page;

        await this.componentDidMount();
    }

    handleDelete = async (id: number) => {
        this.setState({
            triggers: this.state.triggers.filter((t: Trigger) => t.id !== id)
        })
    }

    actions = (id: number) => {
        return (
            <div className="btn-group mr-2">
                <Link to={`/triggers/${id}/edit`}
                      className="btn btn-sm btn-outline-secondary">Edit</Link>
                <Deleter id={id} endpoint={'triggers'}
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
                    <Link to={'/triggers/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
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
                        {this.state.triggers.map(
                            (trigger: Trigger) => {
                                return (
                                    <tr key={trigger.id}>
                                        <td>{trigger.id}</td>
                                        <td>{trigger.identificator} {trigger.identificator}</td>
                                        <td>{trigger.title}</td>
                                        <td>{this.actions(trigger.id)}</td>
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


export default Triggers;