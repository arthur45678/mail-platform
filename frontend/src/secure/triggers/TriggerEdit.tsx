import React, {Component, PropsWithRef, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import axios from "axios";
import {Trigger} from "../../classes/trigger";
import {Redirect} from 'react-router-dom';

class TriggerEdit extends Component<{ match: PropsWithRef<any> }> {
    state = {
        identificator: '',
        title: '',
        body: '',
        trigger_type: '',
        redirect: false
    }
    id = 0;
    identificator = '';
    title = '';
    body = '';
    trigger_type = '';

    componentDidMount = async () => {
        this.id = this.props.match.params.id;

        const triggerCall = await axios.get(`triggers/${this.id}`);

        console.log(triggerCall);

        const trigger: Trigger= triggerCall.data;

        this.setState({
            identificator: this.identificator,
            title: this.title,
            body: this.body,
            trigger_type: this.trigger_type,
        })
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.get(`triggers/${this.id}`, {
            identificator: this.identificator,
            title: this.title,
            body: this.body,
            trigger_type: this.trigger_type,
        });

        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/triggers'}/>;
        }

        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>identificator</label>
                        <input type="text" className="form-control" name="identificator"
                               defaultValue={this.identificator = this.state.identificator}
                               onChange={e => this.identificator = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title"
                               defaultValue={this.title = this.state.title}
                               onChange={e => this.title = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <textarea name="body" id="body"  className="form-control" onChange={e => this.body = e.target.value}
                                  defaultValue={this.body = this.state.body}
                            ></textarea>
                    </div>

                    <div className="form-group">
                        <input checked={this.state.trigger_type === "promo"}   type="radio" value="promo" name="trigger_type" onChange={e => this.trigger_type = e.target.value} /> Сервисный
                        <input checked={this.state.trigger_type === "service"} type="radio" value="service" name="trigger_type" onChange={e => this.trigger_type = e.target.value} /> Промо
                    </div>


                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default TriggerEdit;