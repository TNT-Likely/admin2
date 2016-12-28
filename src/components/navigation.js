import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class navigation extends React.Component{
 componentDidMount() {
 	$('#side-menu li').on('click',()=>{
 		$(this).toggleClass('active')
 	})
 }

 render() {
   return (
		<nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                    <div className="dropdown profile-element"> <span>
                            <img alt="image" className="img-circle" src="" />
                             </span>
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
                             </span> <span className="text-muted text-xs block">Art Director <b className="caret"></b></span> </span> </a>
                        <ul className="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="mailbox.html">Mailbox</a></li>
                            <li className="divider"></li>
                            <li><a href="login.html">Logout</a></li>
                        </ul>
                    </div>
                    <div className="logo-element">
                        IN+
                    </div>
                </li>
                <li className="active">
                    <a href=""><i className="fa fa-th-large"></i> <span className="nav-label">控制面板</span> <span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                        <li><Link to="/login">控制面板1</Link></li>
                        <li className="active"><a href="">控制面板2</a></li>
                        <li><a href="">控制面板5 <span className="label label-primary pull-right">NEW</span></a></li>
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
