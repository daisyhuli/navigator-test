import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Router} from "react-router-dom";
import history from "./history";

const Home = lazy(() => import('@/pages/Home'))

history.listen(() => {
    setTimeout(() => {
        if (history.action === "POP") {
            return;
        }
        window.scrollTo(0, 0);
    });
});

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Suspense fallback={'loading...'}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

