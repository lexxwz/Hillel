import React, { Component } from 'react';

class List extends Component {
    state = {
        list: this.props.list,
        actions: this.props.actions,
    }

    render() {
        return (
            this.state.list.length > 0 && (
                <React.Fragment>
                    <ul>
                        {this.state.list.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                    <div className='footer'>
                        {this.state.actions.map((item, index) => (
                            <button key={index} onClick={item.action}>{item.text}</button>
                        ))}
                    </div>
                </React.Fragment>
            )
        );
    }
}

export default List;