import React from 'react'

export default class Gallery extends React.Component {
  state = { index: 0 }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        index: (this.state.index + 1) % this.props.images.length,
      })
    }, 3000)
  }

  render() {
    const image = this.props.images[this.state.index]
    return (
      <div className={this.props.className}>
        <img src={image} />
      </div>
    )
  }
}
