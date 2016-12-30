import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Table from 'Components/table'
import { fetchList } from 'actions/list'

class user extends React.Component{
	componentDidMount() {
		let { dispatch } = this.props
		dispatch(fetchList('/rest/user/list'))
	}

	render(ReactElement, DOMElement, callback){
		let { headers,data } = this.props
		return (
			<Table headers={headers}  data={data}  title='用户' />
		)
	}
}

user.propTypes = {

}

const mapStateToProps = (state) => ({
	headers: {id:'Id',username:'用户名',email:'邮箱'},
	data: state.list.data
})

const mapDispatchToProps = (dispatch) => ({
	// fetchList: api=>dispatch(fetchList(api))
})

export default connect(mapStateToProps)(user)
