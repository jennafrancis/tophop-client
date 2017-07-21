

import logout from '../redux/actions/auth'

class logoutForm extends Component {

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.logout(this.state, this.props.history);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        Sure ya wanna logout?
      </div>
    )
  }
}

export default connect(null, { logout })(logoutForm)
