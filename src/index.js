import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const People = () => <div>People</div>;
const Places = () => <div>Places</div>;
const Things = () => <div>Things</div>;

const Nav = ({ location }) => {
  const pathname = location.pathname;
  const links = ['/people', '/places', '/things'];

  return (
    <ul className="nav nav-tabs">
      {links.map(link => (
        <li key={link} className="nav-item">
          <Link
            to={link}
            className={`nav-link ${link === pathname ? 'active' : ''}`}
          >
            {link.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Route path="/people" component={People} />
          <Route path="/places" component={Places} />
          <Route path="/things" component={Things} />
        </div>
      </Router>
    );
  }
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
