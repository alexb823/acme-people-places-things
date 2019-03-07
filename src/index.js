import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';

const People = ({ people, location, match }) => {
  if (match.params.id) {
    console.log(`do something with ${match.params.id}`);
  }
  return (
    <ul>
      {people.map(person => {
        return (
          <li key={person.id}>
            <Link to={`/people/${person.id}`}>{person.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
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
            className={`nav-link ${pathname.startsWith(link) ? 'active' : ''}`}
          >
            {link.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { id: 1, name: 'moe' },
        { id: 2, name: 'larry' },
        { id: 3, name: 'curly' },
      ],
    };
  }
  render() {
    const { people } = this.state;
    console.log(people);
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Switch>
            <Route
              exact
              path="/people/:id?"
              render={({ location, match }) => (
                <People people={people} location={location} match={match} />
              )}
            />
            <Route path="/places" component={Places} />
            <Route path="/things" component={Things} />
            <Redirect to="/people" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
