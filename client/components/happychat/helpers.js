/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import {
	propEquals,
	when,
	any
} from './functional';
import {
	HAPPYCHAT_CONNECTION_STATUS_CONNECTED,
	HAPPYCHAT_CONNECTION_STATUS_CONNECTING,
} from 'state/happychat/constants';
import Timeline from './timeline';
import Composer from './composer';
import Spinner from 'components/spinner';

/*
 * Renders a spinner in a flex-box context so it is centered vertically and horizontally
 */
const renderLoading = () => (
	<div className="happychat__loading">
		<Spinner />
	</div>
);

/*
 * Functions for determinining the state of happychat
 */
export const isConnecting = propEquals( 'connectionStatus', HAPPYCHAT_CONNECTION_STATUS_CONNECTING );
export const isConnected = propEquals( 'connectionStatus', HAPPYCHAT_CONNECTION_STATUS_CONNECTED );

/*
 * Renders the timeline once the happychat client has connected
 */
export const timeline = when(
	any( isConnecting, propEquals( 'isMinimizing', true ) ),
	renderLoading,
	( { onScrollContainer } ) => <Timeline onScrollContainer={ onScrollContainer } />
);

/**
Renders the message composer once happychat client is connected
 */
export const composer = when( isConnected, () => <Composer /> );
