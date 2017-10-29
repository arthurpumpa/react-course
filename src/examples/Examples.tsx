import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Components from './components/Components';
import StateAndLifecycle from './state/StateAndLifecycle';
import Lists from './list/Lists';
import Refs from './refs/Refs';
import IsolatedContext from './context/IsolatedContext';
import Toggle from './events/Toggle';
import HomeWork from './homeworks/HomeWork';
import ReduxExample from './redux/ReduxExample';

class Examples extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container" style={{marginTop: '4vh'}}>
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="list-group">
                                <li className="list-group-item"><Link to={'/components'}>1. Components</Link></li>
                                <li className="list-group-item">
                                    <Link to={'/state-anf-lifecycle'}>2. State and lifecycle</Link>
                                </li>
                                <li className="list-group-item"><Link to={'/events'}>4. Events</Link></li>
                                <li className="list-group-item"><Link to={'/lists'}>5. Lists</Link></li>
                                <li className="list-group-item"><Link to={'/refs'}>6. Refs</Link></li>
                                <li className="list-group-item"><Link to={'/context'}>7. Context</Link></li>
                                <li className="list-group-item"><Link to={'/home-work'}>8. Home Work</Link></li>
                                <li className="list-group-item"><Link to={'/redux/shop'}>9. Redux shop</Link></li>
                            </ul>
                        </div>

                        <div className="col-sm-9">
                            <Switch>
                                <Route path="/components" component={Components}/>
                                <Route path="/state-anf-lifecycle" component={StateAndLifecycle}/>
                                <Route path="/events" component={Toggle}/>
                                <Route path="/lists" component={Lists}/>
                                <Route path="/refs" component={Refs}/>
                                <Route path="/context" component={IsolatedContext}/>
                                <Route path="/home-work" component={HomeWork}/>
                                <Route path="/redux" component={ReduxExample}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default Examples;
