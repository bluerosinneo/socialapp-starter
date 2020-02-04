import React, { Component } from 'react';
import Menu from "../components/menu/Menu";
import Registration from '../components/registration/Registration';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';


class RegistrationPage extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.state = {}
    }














    render() {
        return (
            <>
           
                <Menu isAuthenticated={this.props.isAuthenticated} />
                {/* <Button variant="primary" type="Submit Registration" >
                        Submit Registration
                    </Button> */}
                    <Registration/>
               
            </>
            
        );


    }



}



export default RegistrationPage;