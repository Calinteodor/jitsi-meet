/* eslint-disable lines-around-comment  */

import { connect } from 'react-redux';

import { IReduxState } from '../../app/types';
import { CLOSE_CAPTIONS_ENABLED } from '../../base/flags/constants';
import { getFeatureFlag } from '../../base/flags/functions';
import { translate } from '../../base/i18n/functions';
import { IconSubtitles } from '../../base/icons/svg';
import { navigate }
// @ts-ignore
    from '../../mobile/navigation/components/conference/ConferenceNavigationContainerRef';
// @ts-ignore
import { screen } from '../../mobile/navigation/routes';

import {
    AbstractClosedCaptionButton,
    IAbstractProps,
    _abstractMapStateToProps
} from './AbstractClosedCaptionButton';


/**
 * A button which starts/stops the transcriptions.
 */
class ClosedCaptionButton
    extends AbstractClosedCaptionButton {
    accessibilityLabel = 'toolbar.accessibilityLabel.cc';
    icon = IconSubtitles;
    label = 'toolbar.startSubtitles';
    labelProps = {
        // @ts-ignore
        language: this.props.t(this.props._language),
        // @ts-ignore
        languages: this.props.t(this.props.languages),
        // @ts-ignore
        languagesHead: this.props.t(this.props.languagesHead)
    };
    // @ts-ignore
    toggledLabel = 'transcribing.stop';

    /**
     * Toggle language selection dialog.
     *
     * @returns {void}
     */
    _handleClickOpenLanguageSelector() {
        navigate(screen.conference.subtitles);
    }
}

/**
 * Maps (parts of) the redux state to the associated props for this component.
 *
 * @param {Object} state - The redux state.
 * @param {Object} ownProps - The properties explicitly passed to the component
 * instance.
 * @private
 * @returns {Props}
 */
export function mapStateToProps(state: IReduxState, ownProps: IAbstractProps) {
    const enabled = getFeatureFlag(state, CLOSE_CAPTIONS_ENABLED, true);
    const abstractProps = _abstractMapStateToProps(state, ownProps);

    return {
        ...abstractProps,
        visible: abstractProps.visible && enabled
    };
}

export default translate(connect(mapStateToProps)(ClosedCaptionButton));