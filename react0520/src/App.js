import logo from './logo.svg';
import linkedin from './linkedin.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="logo">
      <img src={linkedin} alt="Linked In" />

      </div>
      <form className="box">
        <h1>
          Sign in <br />
          <span id="text">Stay updated on your professional world</span>
        </h1>

        <input type="text" name="emailOrPhone" placeholder="Email or Phone" />
        <input type="password" name="password" placeholder="Password" />
        <input
          id="signin"
          className="signin"
          type="submit"
          placeholder="Sign In"
          value="Sign in"
        />
        <br />
        <span>or</span>
        <br />
        <input
          id="apple"
          className="apple"
          type="submit"
          value="Sign in with apple"
        />
      </form>
      <footer className="footer">
        <ul>
          <li>LinkedIn</li>
          <li>copyright 2023</li>
          <li>User Agreement</li>
          <li>Privacy Policy</li>
          <li>Community Guidelines</li>
          <li>Cookie Policy</li>
          <li>Copyright Policy</li>
          <li>Send Feedback</li>
          <li>Language</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
