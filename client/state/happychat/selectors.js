/**
 * External dependencies
 */
import { map, head, get } from 'lodash';

/**
 * Internal dependencies
 */
import createSelector from 'lib/create-selector';
import {
	HAPPYCHAT_CHAT_STATUS_DEFAULT,
	HAPPYCHAT_CONNECTION_STATUS_DISCONNECTED,
	HAPPYCHAT_CONNECTION_STATUS_CONNECTED,
	HAPPYCHAT_CONNECTION_STATUS_CONNECTING,
} from './constants';

export const getHappychatChatStatus = createSelector(
	state => state.happychat.chatStatus
);

export const getHappychatTranscriptTimestamp = state => (
	state.happychat.transcript_timestamp || get( head( state.happychat.timeline ), 'timestamp' )
);

/**
 * Gets the current happychat connection status
 * @param {Object} state - global redux state
 * @return {String} current state value
 */
const getHappychatConnectionStatus = createSelector(
	state => state.happychat.connectionStatus
);

export const isHappychatDisconnected = createSelector(
	state => getHappychatConnectionStatus( state ) === HAPPYCHAT_CONNECTION_STATUS_DISCONNECTED
);

export const isHappychatConnected = createSelector(
	state => getHappychatConnectionStatus( state ) === HAPPYCHAT_CONNECTION_STATUS_CONNECTED
);

export const isHappychatConnecting = createSelector(
	state => getHappychatConnectionStatus( state ) === HAPPYCHAT_CONNECTION_STATUS_CONNECTING
);

export const isHappychatChatActive = createSelector(
	state => state.happychat.chatStatus !== HAPPYCHAT_CHAT_STATUS_DEFAULT,
	state => state.happychat.chatStatus
);

/**
 * Gets the current chat session status
 * @param {Object} state - global redux state
 * @return {String} status of the current chat session
 */
export const getHappychatStatus = createSelector(
	state => state.happychat.chatStatus
);

export const isHappychatAcceptingChats = createSelector(
	state => state.happychat.isAvailable
);

export const isHappychatAvailable = createSelector(
	state => isHappychatAcceptingChats( state ) || isHappychatChatActive( state ),
	[ isHappychatAcceptingChats, isHappychatChatActive ]
);

/**
 * Gets timeline chat events from the happychat state
 * @param {Object} state - Global redux state
 * @return [{Object}] events - an array of timeline chat events
 */
export const getHappychatTimeline = createSelector(
	state => state.happychat.timeline,
	state => map( state.happychat.timeline, 'id' )
);
