import React, {Component} from 'react';


export class DisplaySelect extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="form-group row py-5">
          <label htmlFor="job-input" className="col-md-6 col-form-label pl-4">Select a job</label>
          <select className="form-control col-md-6" id="job-input"
                  onChange={this.props.onChangeValue}>
            <option className="" value="">Select operation</option>
            {this.props.operations.map(operation => (
              <option key={operation} value={operation}>{operation}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default DisplaySelect;