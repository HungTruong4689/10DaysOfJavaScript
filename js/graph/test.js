import * as React from 'react';

class MyComponent{
    handleMouseOver(){
        const { iconWhite} = this.props.content;
        this.setState({
            img: iconWhite,
        })
    }
    handleMouseOut(){
        const { iconStandard} = this.props.content;
        this.setState({
            img: iconStandard,
        })
    }
}