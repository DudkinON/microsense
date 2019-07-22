import React, {Component} from 'react';


export class DisplayWarnings extends Component {
  render() {

    return (
      <div className="warning-block">
        <ol className="warning-list">
          {this.props.warnings.map(item => {
            if (item.status === 'WARNING')
              return <li className="text-warning"
                         key={item.reader}>{item.reader} - {item.status}: {item.message}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default DisplayWarnings;