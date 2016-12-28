import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Navigation from '../components/navigation'
import RightSliderbar from '../components/rightSidebar'
import TopNavbar from '../components/topNavbar'
import { logoutUser } from '../actions'

const Main = ({ userInfo,logout }) => (
	<div id="wrapper">
			<Navigation userInfo={userInfo} />
			<div id="page-wrapper" className="gray-bg">
				<TopNavbar logout={logout}/>
    	</div>
	</div>
)

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
