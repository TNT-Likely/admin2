import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'

const info = ({}) => (
	 <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>个人信息</h5>
                            <div className="ibox-tools">
                                <a className="collapse-link">
                                    <i className="fa fa-chevron-up"></i>
                                </a>
                            </div>
                        </div>
                        <div className="ibox-content">
                            <form method="get" className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">用户名</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" /></div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">邮箱</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" /></div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group">
                                    <div className="col-sm-4 col-sm-offset-2">
                                        <button className="btn btn-primary" type="submit">保存</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
)

info.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(info)
