
import './Loginform.css';
const LoginForm = () => {
    return (
        <div> <div className="wrapper">
          <div className="form-container">
            <div className="form">
              <form action="">
                <div className="logo-container">
                <img src="./" alt="Logo" className="logo" />
                </div>
                <h1>Hi Admin</h1>
                <div>
                  <input type="text" placeholder="UserName" required />
                  {/* <FaUser /> */}
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Key" required />
                  {/* <FaLock /> */}
                </div>
                <div className="button-container">
                  <button type="submit" className="log-btn">Jump-In</button>
                  <button type="button" className="sign-btn">Sign-up</button>
                  <p className="forgot-password">Forgot Password</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        </div>
       
      );
    };

 
export default LoginForm;