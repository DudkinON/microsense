import React, {Component} from 'react';
import DisplayReader from './DisplayReader';
import ReadersHeader from './ReadersHeader';


export class ReadersList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      values: []
    }
  }

  pushValue = value => {

    const {values} = this.state;

    if (values.indexOf(value) !== -1) {
      const filteredValues = values.filter(val => val !== value);
      this.setState({values: filteredValues});
    } else {
      values.push(value);
      this.setState({values});
    }
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

        <div className="col-12 text-center py-5">
          <span className="btn btn-primary px-5 pointer">Job</span>
        </div>

      </div>
    );
  }
}

export default ReadersList;