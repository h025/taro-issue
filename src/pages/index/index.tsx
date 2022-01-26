import { Component } from 'react'
import { View, Input } from '@tarojs/components'

const inputStyle = `
  box-sizing: border-box;
  width: 80vw;
  height: 40px;
  border: 1px solid #000;
  padding: 5px 10px;
  margin-top: 15px;
  margin-left: 10vw;
`;

const countStyle = `
  margin-top: 30px;
  text-align: center;
`;

export default class Index extends Component {

  state = {
    value: '',
    count: 0
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  onInput = (e) => {
    this.setState({
      value: e.detail.value
    })
  }

  render () {
    return (
      <View>
        <View style={countStyle}>{this.state.count}</View>
        <Input
          style={inputStyle}
          value={this.state.value}
          onInput={this.onInput}
         />
      </View>
    )
  }
}
