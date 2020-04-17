import React, { Component } from 'react';
import NavbarPage from './NavbarPage';
import '../CSS/HomePage.css';


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
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
    console.log(this.props.myarg)
    var { isLoaded, items } = this.state;
    console.log(items);

    if (!isLoaded) {
      return <div>Loading....</div>
    } else {

      var noOfRows = items.data.length / 3;
      if (!Number.isInteger(noOfRows)) {
        noOfRows = parseInt(noOfRows);
        noOfRows++;
      }

      let rows = []
      let i;
      let displayRows = () => {
        for (let i = 0; i < noOfRows; i++) {
          rows.push(<div className="row" key={i}>
            {displayCell()}
          </div>)

        }
        return rows
      }
      let imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu7fZTWIqwUYKHu8OaZn45JmYiXkV_NwQqaPhfiwQhTZ_jMjdd&usqp=CAU"
      let displayCell = () => {
        let coulmnCell = []
        for (i = 0; i < 3; i++) {
          let j = 0;
          let divStyle ={
            backgroundImage: 'url(' + imgUrl + ')'
          }

          coulmnCell.push(<div className="col-sm-4" key={items.data[j].id}>
            <a href={imgUrl}>
              <div className="blog-image" style={divStyle}> 
              </div>
            </a>
          </div>)
          if (j === items.data.length) {
            break;
          }
          j++
        }
        return coulmnCell
      }

      return (

        <div>
          <div className="header-top">
            <h6>Hey be careful</h6>
            <hr></hr>
          </div>
          <div>
            <NavbarPage></NavbarPage>

            <div className="main-block">
              <div className="banner">
                <div className="banner-content">
                  <h4>{items.status}</h4>
                  <h3>This is why people aren't reading your article</h3>
                  <h5>As the owner of a viral publication, there are three vital mistakes I see writers making.</h5>
                </div>
              </div>
              <div className="signin-tab">
                <h5>All Posts</h5>
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


