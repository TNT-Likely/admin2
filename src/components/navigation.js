import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class navigation extends React.Component{
 componentDidMount() {

 }

 render() {
    let { userInfo } = this.props
    return (
		<nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                    <div className="dropdown profile-element"> <span>
                             {/*<img alt="image" className="img-circle" src="" />*/}
                             </span>
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{userInfo.email}</strong>
                             </span> <span className="text-muted text-xs block">{userInfo.username} <b className="caret"></b></span> </span> </a>
                        <ul className="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="mailbox.html">Mailbox</a></li>
                            <li className="divider"></li>
                            <li><a href="login.html">Logout</a></li>
                        </ul>
                    </div>
                    <div className="logo-element">
                        Y+
                    </div>
                </li>
                <li className="active">
                    <a href=""><i className="fa fa-th-large"></i> <span className="nav-label">设置</span> <span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                        <li className="active"><Link to="/setting/info">个人信息</Link></li>
                        <li><Link to="/setting/security">安全 <span className="label label-primary pull-right">新</span></Link></li>
                    </ul>
                </li>
                <li>
                    <a href=""><i className="fa fa-database"></i> <span className="nav-label">数据</span> <span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                        <li><Link to="/data/user">用户管理</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
   )
 }
}

navigation.PropTypes = {
  userInfo:PropTypes.object
}

export default navigation
