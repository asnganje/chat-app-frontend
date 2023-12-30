import LoginImg from '../../assets/images/react assets/login.svg'

const Login = () => {
    return(
        <div>
            <div>
                <div>
                    <div>
                        <img src={LoginImg} alt='login' />
                    </div>
                    <div>
                        <h2>Welcome!</h2>
                        <form>
                            <div>
                                <input
                                placeholder='Email'/>
                            </div>
                            <div>
                                <input
                                placeholder='Password'/>
                            </div>
                            <button>Login</button>
                        </form>
                        <p>Don't have an account? Register</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;