import React, { Component } from 'react';
import '../CSS/NavbarPage.css';
import NavbarPage from './NavbarPage';
import '../CSS/AboutPage.css'



class AboutPage extends Component {

    state = {
        user: 'manasa',
        date: ''
    }

    componentDidMount() {
        fetch('http://192.168.1.160:8080/homepage')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,

                })

            });

    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading....</div>
        } else {

            var noOfRows = items.length;

            let rows = []
            let displayArticles = () => {
                for (let i = 0; i < noOfRows; i++) {
                    rows.push(<div className="articles" key={"articles" + (i + 1)}>
                        <h6>{items[i].title}</h6>
                    </div>)
                }
                return rows
            }


            return (
                <div>
                    <NavbarPage page="aboutPage"></NavbarPage>
                    <div className="about-container">
                        <div className="about-column">  
                            <h4>ABOUT</h4>
                            <hr></hr>
                        </div>
                        <div className="article-column">
                            <h5>Recent Posts</h5>
                            <hr></hr>
                            <div> {displayArticles()}</div>
                        
                        </div>
                    </div>

                </div>
            )
        }
    }
}
export default AboutPage;


