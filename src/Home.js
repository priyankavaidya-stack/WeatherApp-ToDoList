import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row home_cards">
          <div className="col-lg-6 col-md-6 home_cardOne">
            <h3 className="home_titleOne">
              Wants to know the weather of your city??
            </h3>
            <Link className="home_link" to="/weather">
              <div className="click_hereOne">Click Here</div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 home_cardTwo">
            <h3 className="home_titleTwo">
              Set your day2day goals with todoList
            </h3>
            <Link className="home_link" to="/todolist">
              <div className="click_hereTwo">Click Here</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
