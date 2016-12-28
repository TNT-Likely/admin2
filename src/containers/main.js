import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Navigation from '../components/navigation'
import RightSliderbar from '../components/rightSidebar'
import TopNavbar from '../components/topNavbar'
import Footer from '../components/footer'
import { logoutUser } from '../actions'

class Main extends React.Component {
	render(){
		let { userInfo,logout } = this.props
		
		return (
			<div id="wrapper">
					<Navigation userInfo={userInfo} />
					<div id="page-wrapper" className="gray-bg">
						<TopNavbar logout={logout}/>
							{ this.props.children}
						<Footer />
		    	</div>
			</div>
		)
	}
} 

Main.propTypes = {

}

const mapStateToProps = (state) => ({
	userInfo: state.login.data
})

const mapDispatchToProps = (dispatch) => ({
	logout: r=>{
		dispatch(logoutUser())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
