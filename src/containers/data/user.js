import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Table from 'Components/table'
import { fetchList } from 'actions/list'

class user extends React.Component{
	componentWillMount() {
		let { dispatch } = this.props
		this.fetchList = page=>dispatch(fetchList(`/rest/user/list?page=${page||'1'}`))
	}

	componentDidMount() {
		// this.fetchList()
	}

	render(ReactElement, DOMElement, callback){
		let { headers,data,isLoading } = this.props
		let fetchList = this.fetchList
		return (
			<Table headers={headers}  data={data}  title='用户' fetchList={fetchList} isLoading={isLoading} />
		)
	}
}

user.propTypes = {

}

const mapStateToProps = (state) => ({
	headers: {id:'Id',username:'用户名',email:'邮箱'},
	data: state.list.data,
	isLoading: state.list.isLoading
})

const mapDispatchToProps = (dispatch) => ({
	// fetchList: api=>dispatch(fetchList(api))
})

export default connect(mapStateToProps)(user)
