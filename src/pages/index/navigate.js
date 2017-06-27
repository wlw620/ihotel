import React from 'react';

class NavigateComponent extends React.Component {
    constructor(props) {
        super(props)
        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };
        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        alert(event.target);
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <a onClick={this.handleChange} value={this.state.text}>1</a>
                <a onClick={this.handleChange} value={this.state.text}>2</a>
                <a onClick={this.handleChange} value={this.state.text}>3</a>
            </div>
        );
    }
}

export default NavigateComponent
