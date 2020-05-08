import React, { Component } from 'react';
import NavbarPage from './NavbarPage';
import '../CSS/HomePage.css';
import Moment from 'moment'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useRouteMatch, useParams } from "react-router-dom";



class HomePage extends Component {


  constructor(props) {
    super(props);
    this.state = {

    }
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



    console.log(this.state)
    // console.log(this.props.myarg)
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>
    } else {

      var noOfRows = items.length / 3;

      if (!Number.isInteger(noOfRows)) {
        noOfRows = parseInt(noOfRows);
        noOfRows++;
      }

      let rows = []
      let i;
      let displayRows = () => {
        for (let i = 0; i < noOfRows; i++) {
          rows.push(<div className="row" key={"row" + (i + 1)}>
            {displayCell("row" + (i + 1))}
          </div>)
        }
        return rows
      }


      let imgUrl = "https://images.unsplash.com/photo-1587614227447-2697e25730a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80"
      let displayCell = (rowId) => {
        let coulmnCell = []
        let j = 0;
        for (i = 0; i < 3; i++) {
          console.log("j = ", j)
          let divStyle = {
            backgroundImage: 'url(' + imgUrl + ')'

          }
          const date = Date(items[j].datePub);
          const formattedDate = Moment(date).format("MMM Do");


          coulmnCell.push(<div className="col-sm-4" key={"cell" + items[j].id}>

            <div className="div-posts" key={"posts" + items[j].id}>

              <div className="insights">
                <h6>{formattedDate}</h6>
                <span>*</span>
                <h6>{items[j].readTime + ' min read'}</h6>
              </div>


              <a href={"/blogpage/" + items[j].id}>
                <div className="blog-image" >
                  <img className="featured-img" src={imgUrl} alt="Logo" />
                </div>

              </a>

              <div className="div-for-title">
                <a className="href-title" href={"/blogpage/" + items[j].id} >
                  <h4>{items[j].title}</h4>
                </a>
                {/* <h5>{items[j].description}</h5> */}
                <h5>Golang Constants – In this blog, we will learn about constants in Golang or The Go Programming Language. Let’s see what we are going to cover in this Golang tutorial[…]</h5>
                <a className="read-more" href={"/blogpage/" + items[j].id}>Read more</a>
              </div>


            </div>
          </div>)
          if (j === (items.length - 1)) {
            break;
          }
          j++
        }
        return coulmnCell
      }
      return (
        <div>
          <div>
            <NavbarPage></NavbarPage>
            <div className="main-block">
              <div className="signin-tab">
                <h5>Latest Blog Posts</h5>
                {/* <hr /> */}
              </div>
              <div className="blog-container">
                {displayRows()}
              </div>
            </div>
          </div>

        </div>
      );
    }
  }

} export default HomePage;



