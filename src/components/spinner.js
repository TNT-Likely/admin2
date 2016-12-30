import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class spinner extends React.Component{
 componentDidMount() {

 }

 render() {
    return (
      <div className={`sk-spinner sk-spinner-wave ${this.props.isShow?'':'hide'}`} >
        <div className="sk-rect1"></div>
        <div className="sk-rect2"></div>
        <div className="sk-rect3"></div>
        <div className="sk-rect4"></div>
        <div className="sk-rect5"></div>
      </div>	
    )
 }
}

spinner.PropTypes = {
	isShow: PropTypes.boolean
}

export default spinner
