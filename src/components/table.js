import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Spinner from 'components/spinner'
import Modal from 'Components/modal'

class table extends React.Component{
 	componentWillMount() {
 		this.props.fetchList()
 	}

  componentDidMount() {
 	
  }

  render() {
 		let { headers,title,fetchList,isLoading,addItem,status,showModal } = this.props
 		let { data:rs } =this.props
 		let { data,totalPages,currentPage } = rs

 		if(!headers || !data) return false;

 		let canLastPage = currentPage==1
 		let canNextPage = currentPage==totalPages

 		let keys = Object.keys(headers)//表头	
 		
 		let pageNations=[]
 		for(var i=1;i<=totalPages;i++){
 			let c=i
			pageNations.push(<li key={i} className={i==currentPage?'active':''}><a onClick={r=>{fetchList(c)}}>{i}</a></li>)
		}

    return (
    	<div className="box">
			  <div className="row">
			    <div className="col-sm-12">
			      <h1></h1>
			      <div className="table-responsive">
			        <div className="panel panel-primary">
			        	<div className="panel-heading">
			        		{title}
			        	</div>
			        	<div className="panel-footer">
			            <div className="row">
			              <div className="col-xs-12">
			                <button type="button" className="btn btn-danger" onClick={r=>{showModal()}}>添加 <i className="fa fa-plus"></i> </button>
			              </div>
			            </div>
			          </div>
			          <div className="panel-body">
			          	<Spinner isShow={isLoading}/>
			          	<table className={`table table-striped ${isLoading?'hide':''}`}>
						        <thead>
							        <tr>
								        {
								        	keys.map((item,i)=>{
								        		return <th key={i}>{headers[item]}</th>
								        	})
								        }
							        </tr>
						        </thead>
						        <tbody>
											{
												data.map((item,i)=>{
													return <tr key={i}>{
														keys.map((j,index)=>{
															return <td key={index}>{item[j]}</td>
														})
													}</tr>
												})
											}
						        </tbody>
						    	</table>
						    	<nav>
									  <ul className="pagination">
									    <li className={canLastPage?'disabled':''}>
									      <a href="#" onClick={r=>{fetchList(currentPage-1)}}>
									       上一页
									      </a>
									    </li>
									    {
									    	pageNations
									    }
									    <li className={canNextPage?'disabled':''}>
									      <a href="#" onClick={r=>{fetchList(currentPage+1)}}>
									        下一页
									      </a>
									    </li>
									  </ul>
									</nav>
								</div>	
			        </div>
			      </div>
			    </div>
			  </div>
			  <Modal addItem={addItem} status={status} />
			</div>
    )
 }
}

table.PropTypes = {
	headers: PropTypes.object,
	data: PropTypes.object,
	title: PropTypes.string
}

export default table
