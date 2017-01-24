import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Table from 'Components/table'
import { fetchList,addItem,showModal } from 'actions/list'

class user extends React.Component{
	componentWillMount() {
		let { dispatch } = this.props
		this.fetchList = page=>dispatch(fetchList(`/rest/user/list?page=${page||'1'}`))
		this.addItem = data=>dispatch(addItem('/rest/user/add',data))
		this.showModal = ()=>dispatch(showModal())
	}

	componentDidMount() {
		// this.fetchList()
	}

	render(ReactElement, DOMElement, callback){
		let { headers,data,isLoading,status } = this.props
		return (
			<Table headers={headers}  data={data}  title='用户' fetchList={this.fetchList} addItem={this.addItem} isLoading={isLoading} status={status} showModal={this.showModal} />
		)
	}
}

user.propTypes = {

}

const mapStateToProps = (state) => ({
	headers: {id:'Id',username:'用户名',email:'邮箱'},
	data: state.list.data,
	isLoading: state.list.isLoading,
	status: state.list.status
})

const mapDispatchToProps = (dispatch) => ({
	// fetchList: api=>dispatch(fetchList(api))
})

module.exports = connect(mapStateToProps)(user)
