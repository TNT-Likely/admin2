import { loginUser, changeName, changePassword } from '../actions/'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => ({
  isLoading: state.login.isLoading,
  data: state.login.data
})

const mapDispatchToProps = (dispatch) => ({
  loginClick: (name, password) => {
    dispatch(loginUser())
  },
  changeName: (text) => {
    dispatch(changeName(text))
  },
  changePassword: (text) => {
    dispatch(changePassword(text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
