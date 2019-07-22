import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReadersList from './ReadersList';
import {
  getReaders,
  getHealth,
  getOperations,
  startJob,
  setMessage
} from '../../actions';


export function mapStateToProps(state) {
  return {
    urls: state.config.urls,
    readers: state.readers,
    health: state.health,
    operations: state.operations
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onGetReaders: url => dispatch(getReaders(url)),
    onGetHealth: url => dispatch(getHealth(url)),
    onGetOperations: url => dispatch(getOperations(url)),
    onStartJob: (url, data) => dispatch(startJob(url, data)),
    onSetMessage: msg => dispatch(setMessage(msg))
  };
}

export class Home extends Component {

  componentDidMount() {
    this.props.onGetReaders(this.props.urls.readers);
    this.props.onGetHealth(this.props.urls.health);
    this.props.onGetOperations(this.props.urls.operations);
  }

  handleSubmit = data => {
    this.props.onStartJob(this.props.urls.jobs, data);
  };

  render() {
    return (
      <div className="container my-5 py-5 home">
        {this.props.readers.length > 0 &&
        this.props.health.length > 0 &&
        <ReadersList readers={this.props.readers}
                     health={this.props.health}
                     operations={this.props.operations}
                     handleSubmit={this.handleSubmit}/>}
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Home);