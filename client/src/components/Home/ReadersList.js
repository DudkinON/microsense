import React, {Component} from 'react';
import DisplayReader from './DisplayReader';
import ReadersHeader from './ReadersHeader';
import DisplaySelect from './DisplaySelect';
import DisplayErrors from './DisplayErrors';
import DisplayWarnings from './DisplayWarnings';

export class ReadersList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      values: [],
      operation: '',
      errors: []
    }
  };


  pushValue = value => {

    const {values} = this.state;

    const name = this.getName(value);

    if (name) {
      const filteredValues = values.filter(val => val.reader !== value.reader);
      this.setState({values: filteredValues});
    } else {
      values.push(value);
      this.setState({values});
    }
  };

  getName = value => {

    const {values} = this.state;

    let name = null;
    for (let i = 0; i < values.length; i++) {
      if (values[i].reader === value.reader)
        name = value;
    }
    return name;
  };

  getReaders = () => {
    const readers = [];
    this.state.values.forEach(item => readers.push(item.reader));
    return readers
  };

  errorsHandler = () => {
    const errors = [];

    if (this.state.operation.length < 1)
      errors.push("Select an operation");
    if (this.state.values.length === 0)
      errors.push("select at least one reader");

    this.setState({errors});
    return errors.length === 0;
  };

  startJob = () => {
    if (this.errorsHandler()) {
      const readers = this.getReaders();
      const {operation} = this.state;
      this.props.handleSubmit({operation, readers})
    }
  };

  handleChange = e => {
    this.setState({operation: e.target.value});
  };

  getHealth = name => this.props.health.filter(item => item.reader === name);

  render() {
    return (
      <div className="row">
        <h3 className="col-12 pb-5 text-center">Readers</h3>
        <ReadersHeader/>
        {this.props.readers.map(reader => {
          const health = this.getHealth(reader.name)[0];
          return <DisplayReader
            key={reader.name}
            health={health}
            pushValue={this.pushValue}
            {...reader} />;
        })}
        <DisplaySelect onChangeValue={this.handleChange}
                       operations={this.props.operations}/>

        <DisplayErrors errors={this.state.errors}/>

        <div className="col-12 text-center py-5">
          <div className="start-job-btn" onClick={this.startJob}>
            <span className="btn btn-primary px-5 pointer">Start Job</span>
          </div>
        </div>

        <DisplayWarnings warnings={this.state.values}/>
      </div>
    );
  }
}

export default ReadersList;