import React, {Component,  PropsWithChildren} from 'react';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {User} from "../classes/user";

class Wrapper extends Component<PropsWithChildren<any>> {
    state = {
        redirect: false
    }

    componentDidMount = async () => {
        try{
            const response = await axios.get('user');
        }catch(e){
            this.setState({
                redirect: true
            })
        }

    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'}/>;
        }
        return (
            <>
                <Nav/>

                <Menu/>

                <main>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h1>Blank Page</h1>
                                <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                                     aria-label="breadcrumb">
                                    <ol className="breadcrumb pt-0">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Library</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                                <div className="separator mb-5">

                                    {this.props.children}

                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer/>
            </>
        );
    }
}




export default (Wrapper);