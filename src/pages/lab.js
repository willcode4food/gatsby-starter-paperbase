import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'

function LabPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return <Layout location={location} title={pageTitle} />
}
LabPage.propTypes = {
	location: PropTypes.object,
}
export default LabPage
