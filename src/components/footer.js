import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class footer extends React.Component{
 componentDidMount() {

 }

 render() {
    return (
      <div className="footer">
		    <div className="pull-right">
		        {/*10GB of <strong>250GB</strong> Free.*/}
		    </div>
		    <div>
		    {this.props.children}
		    </div>
		    <div>
		        <strong>版权所有</strong> Youths &copy; 2014-2016
		    </div>
		</div>	
    )
 }
}

footer.PropTypes = {

}

export default footer
