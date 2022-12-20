import React, {Component, SyntheticEvent} from 'react';
import Wrapper from "../Wrapper";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class TriggerCreate extends Component {
    state = {
        redirect: false
    }
    identificator = '';
    title = '';
    body = '';
    trigger_type = '';




    submit = async (e: SyntheticEvent) => {
        e.preventDefault();


        console.log(this.trigger_type);
        await axios.post('triggers', {
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
                        <label>Identificator</label>
                        <input type="text" className="form-control" name="identificator"
                               onChange={e => this.identificator = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title"
                               onChange={e => this.title = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <textarea name="body" id="body"  className="form-control" onChange={e => this.body = e.target.value}></textarea>
                    </div>
                     <div className="form-group">
                        <input type="radio" value="promo" name="trigger_type" onChange={e => this.trigger_type = e.target.value} /> Сервисный
                        <input type="radio" value="service" name="trigger_type" onChange={e => this.trigger_type = e.target.value} /> Промо
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        );
    }
}

export default TriggerCreate;