import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	secondaryBar: {
		zIndex: 0,
	},
})

function TabBar({ classes }) {
	return (
		<AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
			<Tabs value={0} textColor="inherit">
				<Tab textColor="inherit" label="Users" />
				<Tab textColor="inherit" label="Sign-in method" />
				<Tab textColor="inherit" label="Templates" />
				<Tab textColor="inherit" label="Usage" />
			</Tabs>
		</AppBar>
	)
}

TabBar.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TabBar)
