import React, { Component } from 'react';
import '../CSS/NavbarPage.css';
import NavbarPage from './NavbarPage';



class ContactPage extends Component {

    state = {
        user: 'manasa',
        date: ''
    }


    render() {

        return (
            <div>
                <NavbarPage page="contactPage"></NavbarPage>

            </div>
        )
    }
}
export default ContactPage;


