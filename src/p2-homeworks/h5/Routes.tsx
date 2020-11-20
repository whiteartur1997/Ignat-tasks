import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Error404 from './pages/Error404/Error404';
import Junior from "./pages/Junior";
import PreJunior from "./pages/PreJunior";
import StrongJunior from "./pages/StrongJunior";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    STRONG_JUNIOR: "/strong-junior"
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR} />} />
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior />} />
                <Route path={PATH.JUNIOR} render={() => <Junior />} />
                <Route path={PATH.STRONG_JUNIOR} render={() => <StrongJunior />} />

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404 />} />
            </Switch>
        </div>
    );
}

export default Routes;
