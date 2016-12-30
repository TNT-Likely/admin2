import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class table extends React.Component{
 	componentWillMount() {
 		this.props.fetchList()
 	}

  componentDidMount() {
 	
  }

  render() {
 		let { headers,title,fetchList,isLoading } = this.props
 		let { data:rs } =this.props
 		let { data,totalPages,currentPage } = rs

 		if(!headers || !data) return false;

 		let canLastPage = currentPage==1
 		let canNextPage = currentPage==totalPages

 		let keys = Object.keys(headers)//表头	
 		
 		let pageNations=[]
 		for(var i=1;i<=totalPages;i++){
			pageNations.push(<li key={i} className={i==currentPage?'active':''}><a onClick={r=>{fetchList(i)}}>{i}</a></li>)
		}

    return (
    	<div className="box">
			  <div className="row">
			  	<div className={!isLoading?'hide':''}>
			  		正在加载...
			  	</div>
			    <div className={isLoading?'hide':''}>
			      <h1></h1>
			      <div className="table-responsive">
			        <div className="panel panel-primary">
			        	<div className="panel-heading">
			        		{title}
			        	</div>
			        	<div className="panel-footer">
			            <div className="row">
			              <div className="col-xs-12">
			                <button type="button" className="btn btn-danger">添加 <i className="fa fa-plus"></i> </button>
			              </div>
			            </div>
			          </div>
			          <div className="panel-body">
			          	<table className="table table-striped">
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
						    	<nav aria-label="Page navigation">
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
