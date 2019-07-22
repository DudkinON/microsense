import React, {Component} from 'react';


export class DisplayReader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reader: '',
      status: '',
      message: ''
    }
  }

  componentDidMount() {

    if (this.props.health) {
      const {reader, status, message} = this.props.health;
      this.setState({reader, status, message});
    } else {
      const reader = this.props.name;
      const status = 'ERROR';
      const message = 'Reader not found';
      this.setState({reader, status, message});
    }
  }

  isNotActive = () => !this.props.health || this.props.health.status === "ERROR";

  handleChange = () => {
    if (!this.isNotActive())
      this.props.pushValue(this.state);
  };

  render() {
    return (
      <div className="col-12 spacer">
        <div className="form-check">
          <input className="form-check-input"
                 type="checkbox"
                 value={this.state.reader}
                 onChange={this.handleChange}
                 id={`reader_${this.props.name}`}
                 name={this.props.name}
                 disabled={this.isNotActive()} />
            <label className="form-check-label text-center row" htmlFor={`reader_${this.props.name}`}>
              <div className="col-md-3 px-1">{this.props.name}</div>
              <div className="col-md-2 px-1">{this.props.type}</div>
              <div className="col-md-2 px-1">{this.props.address}</div>
              <div className={`col-md-5 text-${this.state.status.toLowerCase()}`}>
                <span className="px-1 text-lowercase">{this.state.status}: </span>
                <span>{this.state.message}</span>
              </div>
            </label>
        </div>
      </div>
    );
  }
}

export default DisplayReader;