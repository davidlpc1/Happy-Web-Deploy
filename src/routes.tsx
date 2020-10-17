import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagersMap from './pages/OrphanagersMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

function Routes() {
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagersMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;