import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import main from './main'
import {container as weather} from './weather'

const router =()=>(    
<Router>
    <Route path='/' component={main}>
            <Route path='/weather' component={weather}></Route>
    </Route>
 </Router>
)


export default router;