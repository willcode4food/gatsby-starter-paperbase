import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'

function DatabasePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return <Layout location={location} title={pageTitle} />
}
DatabasePage.propTypes = {
	location: PropTypes.object,
}
export default DatabasePage
