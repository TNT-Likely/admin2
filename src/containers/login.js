import { loginUser, changeName, changePassword } from '../actions/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React,{ PropTypes } from 'react'
import 'bootstrap.min.css'
import 'font-awesome.min.css'
import 'animate.css'
import 'style.css'
import 'index.scss'

const Login =({isLoading,data,name,password,loginClick,changeName,changePassword})=>(
  <div className="middle-box text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 className="logo-name">Y</h1>
        </div>
        <h3>Do Interesting Things</h3>
        <div className="m-t">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="用户名" onInput={e=>{changeName(e.target.value)}} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="密码" onInput={e=>{changePassword(e.target.value)}} />
          </div>
          <button type="submit" disabled={isLoading|| !name || !password?'disabled':''}className="btn btn-primary block full-width m-b" onClick={()=>{loginClick(name,password)}}>登录</button>
        </div>
      </div>
  </div>
)

Login.propTypes = {
  loginClick: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  name: PropTypes.string,
  password: PropTypes.string
}

const mapStateToProps = (state) => ({
  isLoading: state.login.isLoading,
  data: state.login.data,
  name: state.login.name,
  password: state.login.password
})

const mapDispatchToProps = (dispatch) => ({
  loginClick: (name, password) => {
    dispatch(loginUser(name,password))
  },
  changeName: (text) => {
    dispatch(changeName(text))
  },
  changePassword: (text) => {
    dispatch(changePassword(text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
