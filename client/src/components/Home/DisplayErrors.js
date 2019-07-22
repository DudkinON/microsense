import React, {Component} from 'react';


export class DisplayErrors extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="row">
          {this.props.errors.map(error => (
            <div className="col-12 text-center text-danger" key={error}>{error}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayErrors;