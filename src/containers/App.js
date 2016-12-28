import React, {} from 'react'
import { connect } from 'react-redux'
import { checkUserStatus } from '../actions'


class App extends React.Component {
		componentDidMount() {
			let { dispatch } = this.props
			dispatch(checkUserStatus())
		}

	  render(){
		 	return (
		 		<div>
		 			 	{this.props.children}
		 		</div>
		 	)
	  }
}

const mapStateToProps = (state) => ({
	userInfo: state.login.data
})

const mapDispatchToProps = (dispatch) => ({
	checkUserStatus: dispatch(checkUserStatus)
})

export default connect(mapStateToProps)(App)