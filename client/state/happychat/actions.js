/** IMPORTANT NOTE BEFORE EDITING THIS FILE **
 *
 * We're in the process of moving the side-effecting logic (anything to do with connection)
 * into Redux middleware. If you're implementing something new or changing something,
 * please consider moving any related side-effects into middleware.js.
 */

/**
 * Internal dependencies
 */
import {
	HAPPYCHAT_CONNECTED,
	HAPPYCHAT_CONNECTING,
	HAPPYCHAT_RECEIVE_EVENT,
	HAPPYCHAT_SEND_BROWSER_INFO,
	HAPPYCHAT_SEND_MESSAGE,
	HAPPYCHAT_SET_AVAILABLE,
	HAPPYCHAT_SET_CHAT_STATUS,
	HAPPYCHAT_SET_MESSAGE,
	HAPPYCHAT_TRANSCRIPT_RECEIVE,
} from 'state/action-types';

export const connectChat = () => ( { type: HAPPYCHAT_CONNECTING } );
export const receiveChatEvent = event => ( { type: HAPPYCHAT_RECEIVE_EVENT, event } );
export const receiveChatTranscript = ( messages, timestamp ) => ( { type: HAPPYCHAT_TRANSCRIPT_RECEIVE, messages, timestamp } );
export const setChatConnected = () => ( { type: HAPPYCHAT_CONNECTED } );
export const setHappychatAvailable = isAvailable => ( { type: HAPPYCHAT_SET_AVAILABLE, isAvailable } );
export const setHappychatChatStatus = status => ( { type: HAPPYCHAT_SET_CHAT_STATUS, status } );
export const sendBrowserInfo = siteUrl => ( { type: HAPPYCHAT_SEND_BROWSER_INFO, siteUrl } );
export const sendChatMessage = message => ( { type: HAPPYCHAT_SEND_MESSAGE, message } );
export const setChatMessage = message => ( { type: HAPPYCHAT_SET_MESSAGE, message } );
export const clearChatMessage = () => setChatMessage( '' );
