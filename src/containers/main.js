import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Navigation from '../components/navigation'
import RightSliderbar from '../components/rightSidebar'
import TopNavbar from '../components/topNavbar'

const Main = ({}) => (
	<div id="wrapper">
			<Navigation />
			<div id="page-wrapper" className="gray-bg">
				<TopNavbar />
    	</div>
	</div>
)

Main.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
