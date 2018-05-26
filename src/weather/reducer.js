import * as  actionType from './actionType'
import { weatherQueryAction } from './action';



const weatherReducer=(state,action)=>{
    switch(action.type) {
        case actionType.WEATHER_QUERY:{
            let {values={}}=action;
            return Object.assign({},state,{queryArgs:values})
        }

    }
}


export default weatherReducer;