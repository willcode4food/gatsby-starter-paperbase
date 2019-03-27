import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	paper: {
		margin: 'auto',
		overflow: 'hidden',
		[theme.breakpoints.up('sm')]: {
			minWidth: 600,
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 936,
		},
	},
	searchBar: {
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
	},
	searchInput: {
		fontSize: theme.typography.fontSize,
	},
	block: {
		display: 'block',
	},
	addUser: {
		marginRight: theme.spacing.unit,
	},
	contentWrapper: {
		margin: '40px 16px',
	},
	container: {
		padding: '48px 36px 0',
	},
})

function Content({ classes }) {
	return (
		<div className={classes.container}>
			<Grid container spacing={16} alignItems="center" direction="column">
				<Grid item>
					<Paper className={classes.paper}>
						<div className={classes.contentWrapper}>
							<Typography color="textSecondary" align="center">
								Welcome to your new project
							</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item>
					<Paper className={classes.paper}>
						{' '}
						<div className={classes.contentWrapper}>
							<Typography color="textSecondary" align="center">
								Happy Coding!
							</Typography>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

Content.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)
