import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReadersList from './ReadersList';
import {getReaders, getHealth} from '../../actions';


export function mapStateToProps(state) {
  return {
    urls: state.config.urls,
    readers: state.readers,
    health: state.health
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onGetReaders: url => dispatch(getReaders(url)),
    onGetHealth: url => dispatch(getHealth(url))
  };
}

export class Home extends Component {

  componentDidMount() {
    this.props.onGetReaders(this.props.urls.readers);
    this.props.onGetHealth(this.props.urls.health);
  }

  render() {
    return (
      <div className="container my-5 py-5 home">
        {this.props.readers.length > 0 &&
        this.props.health.length > 0 &&
        <ReadersList readers={this.props.readers}
                     health={this.props.health}/>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);