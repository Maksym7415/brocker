import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { dive } from '../functions'

const ManagerRoute = (props) => (
	<Route {...props}
		component={(pageComponentProps) => {
			const PageComponent = props.component
			if (props.data === 'manager' || props.data === 'admin') { //  I'm making here double check with 'or' because when I'm subscribed only on redux on re-login localStorage resave ddata with empty fields, but when I'm subscribed only on localStorage - on logout from privatRoute component I'm not redirecting to 'fallback'
				console.log(pageComponentProps)
				return (
					<PageComponent {...pageComponentProps}/>
				)
			}
			return (
				<Redirect to={props.fallback} />
			)
		}
	} />
)

export default connect((state) => ({data: dive`${state}token.data.sub.role`}))(ManagerRoute)