/**
 * External dependencies
 */
import { translate } from 'i18n-calypso';
import { random } from 'lodash';

/**
 * Internal dependencies
 */
import config from 'config';
import notices from 'notices';
import {
	NPS_SURVEY_RAND_MAX,
} from './constants';
import {
	NPS_SURVEY_DIALOG_IS_SHOWING,
} from 'state/action-types';

export function showNpsSurveyNoticeIfEligible() {
	return ( dispatch ) => {
		if ( 1 === random( 1, NPS_SURVEY_RAND_MAX ) ) {
			dispatch( showNpsSurveyNotice() );
		}

		if ( config.isEnabled( 'nps-survey/dev-trigger' ) ) {
			window.npsSurvey = function() {
				dispatch( showNpsSurveyNotice() );
			};
		}
	};
}

export function showNpsSurveyNotice() {
	return ( dispatch ) => {
		const options = {
			button: translate( 'Sure!' ),
			onClick: ( event, closeFn ) => {
				closeFn();
				dispatch( setNpsSurveyDialogShowing( true ) );
			}
		};

		// NOTE: It would be nice to move to dispatching the `createNotice` action,
		// but that currently doesn't support notices with `button` and `onClick`
		// options.
		notices.new( translate( 'Would you mind answering a question about WordPress.com?' ), options, 'is-info' );
	};
}

export function setNpsSurveyDialogShowing( isShowing ) {
	return {
		type: NPS_SURVEY_DIALOG_IS_SHOWING,
		isShowing,
	};
}
