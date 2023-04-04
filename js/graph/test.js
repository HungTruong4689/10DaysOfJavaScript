import * as React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    const { iconStandard } = this.props.content;
    this.state = {
      img: iconStandard,
    };
    this.handleMouseAction = this.handleMouseAction.bind(this);
  }

  handleMouseAction(icon) {
    this.setState({
      img: icon,
    });
  }

  render() {
    const { iconWhite, iconStandard } = this.props.content;
    return (
      <div onMouseOver={() => this.handleMouseAction(iconWhite)} onMouseOut={() => this.handleMouseAction(iconStandard)}>
        <img src={this.state.img} alt="Icon" />
      </div>
    );
  }
}