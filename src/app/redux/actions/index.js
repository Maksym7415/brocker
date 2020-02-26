import { actionPromise, actionDeletePromise } from '../reducers/promiseReducer'
import { actionPromiseLogin } from '../reducers/loginReducer'
import { myAxios, myFetch, allOrders, orderOne, getDrivers, placeBid, sendMail, changeStackStatus, stackStatus, driverOne, profile, getStakes } from './constants'

const actionLogin = (token) => ({type: 'LOGIN', token})
const actionLogout = () =>({type: 'LOGOUT'})
const actionOnLogin = (log, password) => actionPromiseLogin(log, password)
const actionGetAllExternal = () => actionPromise('externalAll', myAxios(allOrders))
const actionGetOneExternal = (data) => actionPromise('externalOne', myAxios(orderOne, {order: data}))
const actionGetDrivers = () => actionPromise('drivers', myAxios(getDrivers))

const actionGetProfile = (data) => actionPromise('profile', myAxios(profile, {id: data}))
const actionSendMail = (data) => actionPromise('sendMail', myAxios(sendMail, data))
const actionGetOneDriver = (data) => actionPromise('oneDriver', myAxios(driverOne, {id: data}))

const actionPlaceBid = (data) => actionPromise('placeBid', myAxios(placeBid, data))

const actionGetStakes = () => actionPromise('bids', myAxios(getStakes))

export { actionLogin, actionLogout, actionOnLogin, actionGetAllExternal, actionGetOneExternal, actionGetProfile, actionGetDrivers, actionSendMail, actionGetOneDriver, actionPlaceBid, actionGetStakes }