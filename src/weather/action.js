//关于天气在所有 action 
import * as  actionTypes from './actionType'

export const weatherQueryAction=(values)=>({
    type:actionTypes.WEATHER_QUERY,
    values:values
})