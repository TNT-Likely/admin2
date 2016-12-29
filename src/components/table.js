import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class table extends React.Component{
 componentDidMount() {

 }

 render() {
 		let { headers,data,totalPages,currentPage,title } = this.props

 		let keys = Object.keys(headers)//表头
 
 		let pageNations=[]
 		for(var i=0;i<totalPages;i++){
			pageNations.push(<li key={i} className={i==currentPage?'active':''}><a>{i+1}</a></li>)
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
									    <li>
									      <a href="#">
									        上一页
									      </a>
									    </li>
									    {
									    	pageNations
									    }
									    <li>
									      <a href="#">
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
	headers: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired,
	totalsPages: PropTypes.number,
	currentPage: PropTypes.number,
	title: PropTypes.string
}

export default table
