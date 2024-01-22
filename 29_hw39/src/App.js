import React from 'react';
import './App.css';

let countOfCheckedItem = 0;
let triger;
let randomIndex;
let maxIndex = 0;

class Table extends React.Component {
  constructor(props) {
    super(props);
    
    maxIndex = this.state.list.length - 1;
    const intervalForCheck = setInterval(() => {
      while (!triger) {
        randomIndex = getRandom(0, maxIndex);
        if(this.props.list[randomIndex].class !== 'checked') {
          this.props.list[randomIndex].class = 'checked';
          triger = true;
          countOfCheckedItem++;
        };
      };

      this.setState({
        list: this.state.list
      });

      triger = false;
      if (countOfCheckedItem >= this.state.list.length) {
        clearInterval(intervalForCheck);
      }; 
    }, 2000)
  };

  state = {
    list: this.props.list
  }

  render() {
    return (
      <table className = {`${countOfCheckedItem >= (maxIndex + 1) /2 && "border10"} ${countOfCheckedItem >= maxIndex + 1 && " border20"}`}>
        <tbody>
          {this.state.list.map((item, index) => (
            <tr key = {index} className = {item.class && item.class}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
};

export default Table;

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};