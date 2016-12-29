import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import Table from 'Components/table'
import { fetchList } from 'actions/list'

class user extends React.Component{
	componentDidMount() {
		
	}

	render(ReactElement, DOMElement, callback){
		let { headers,data,totalPages,currentPage,fetchList } = this.props
		return (
			<Table headers={headers}  data={data} totalPages={totalPages} currentPage={currentPage} title='用户' />
		)
	}
}

user.propTypes = {

}

const mapStateToProps = (state) => ({
	headers: {id:'Id',username:'用户名',email:'邮箱'},
	data: [{id:'1',username:'sunxiao',email:'532837139@qq.com'}],
	totalPages: 5,
	currentPage: 3
})

const mapDispatchToProps = (dispatch) => ({
	// fetchList: api=>dispatch(fetchList(api))
})

export default connect(mapStateToProps, mapDispatchToProps)(user)
