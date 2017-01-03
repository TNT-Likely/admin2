import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class modal extends React.Component{
	handleSaveItem(){
		let data = {}
		Object.keys(this.refs).map(i=>{
			data[i] = this.refs[i].value
		})
		this.props.addItem(data)
	}

  componentDidMount() {

  }

  render() {
  	let { title,buttonText,cols,showModal } = this.props
  	let obj = cols
    return (
      <div className="modal inmodal" id="myModal" style={{display:showModal?'block':'none'}}>
	      <div className="modal-dialog">
	      	<div className="modal-content animated bounceInRight">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">{title}</h4>
              </div>
              <div className="modal-body form-horizontal">
                {
                	cols.map((i,index)=>{
                		return  <div className="form-group" key={index}>
                							<label className="col-sm-3 control-label no-padding-right">
																{i.text}
                							</label>
                							<div className="col-sm-7">
          											<span className="block input-icon input-icon-right">
                									<input type="text" ref={i.key} className="form-control" />
                								</span>
                							</div>
                						</div>
                	})
                }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={r=>{
                	this.handleSaveItem()
                }}>{buttonText}</button>
              </div>
	         </div>
	      </div>
	  	</div>	                      
    )
  }
}
                                                                                                                        
modal.PropTypes = {

}

modal.defaultProps = {
	title:'测试标题',
	buttonText:'测试按钮文字',
	cols:[
		{"key":"title","text":"测试key1"},
		{"key":"content1","text":"测试key2"},
		{"key":"click","text":"测试key3"},
		{"key":"userId","text":"测试key4"}
	],
	showModal:true
}

export default modal
