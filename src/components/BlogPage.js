import React, { Component } from 'react';
import '../CSS/BlogPage.css';
import { useParams } from 'react-router-dom';
import NavbarPage from './NavbarPage';
import Moment from 'moment'
import Parser from 'html-react-parser';
import MD from 'react-markdown'
import welcome from "./markdown/welcome.md"





class BlogPage extends Component {

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

    fetch(welcome)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })

  }


  render() {
    // const logofooter = require('../Images/logo.png');

    console.log(this.props)
    console.log("this.props", parseInt(this.props))

    var { isLoaded, items } = this.state;
    let title, desctription, content, readTime, formattedDate, imgUrl;


    function createMarkup() {
      return { __html: content };
    };

    if (!isLoaded) {
      return <div>Loading....</div>
    } else {

      for (let i = 0; i < items.length; i++) {
        console.log("items[i].id)", items[i].id)

        if (parseInt(this.props.id) === parseInt(items[i].id)) {
          title = items[i].title;
          desctription = items[i].description;
          readTime = items[i].readTime
          const date = Date(items[i].datePub);
          formattedDate = Moment(date).format("MMM Do YYYY");
          content = items[i].content;
          content = ''

          console.log("content", content)
          imgUrl = items[i].imgSrc;
          imgUrl = 'https://images.unsplash.com/photo-1547560444-e3a9cbe4419f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          createMarkup();


        }
      }

      return (<div>
        <NavbarPage  page="blogPage"></NavbarPage>
        <div className="blog-container">
          <div className="article-details">
            <h3 >{title}</h3>
            <h4>{desctription}</h4>
            <div className="insights-blog">
              <div className="auth-name">
                <h6>by <a href="/about">Abhijit Alur</a> on {formattedDate}</h6>
              </div>
              {/* <span>*</span> */}
              <h6 className="read-time">{readTime + ' min read'}</h6>
            </div>
          </div>
          <div className="image-source">
            <img src={imgUrl} alt="Logo" />
          </div>
          <div className="blog-content">
            <MD children={this.state.md} />

          </div>
        </div>
      </div>


      )
    }
  }
}
export default BlogPage;


