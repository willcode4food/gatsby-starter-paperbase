import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'

function FunctionsPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return <Layout location={location} title={pageTitle} />
}
FunctionsPage.propTypes = {
	location: PropTypes.object,
}
export default FunctionsPage
