import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Explain from "./ExplainComponent";
import Predict from "./PredictComponent";
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import _ from 'lodash';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
}

const mapDispatchToProps = dispatch => ({
  
    postComment: (dishId, rating, author, comment) => {dispatch(postComment(dishId, rating, author, comment))},
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
  
  });

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }
  //when the main component is mounted, fetch dishes will be called and load into redux store
  componentDidMount() {

  }

  render() {

    return (
      <div>
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/predict' component={Predict}></Route>
          <Route exact path='/explain' component={Explain}></Route>
          <Footer />
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
