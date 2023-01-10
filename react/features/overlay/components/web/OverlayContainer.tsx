import React, { Component } from 'react';

import { IReduxState } from '../../../app/types';
import { connect } from '../../../base/redux/functions';
import { getOverlayToRender } from '../../functions';


/**
 * The type of the React {@link Component} props of {@code OverlayContainer}.
 */
type Props = {

    /**
     * The React {@link Component} type of overlay to be rendered by the
     * associated {@code OverlayContainer}.
     */
    overlay: any;
};

/**
 * Implements a React {@link Component} that will display the correct overlay
 * when needed.
 */
class OverlayContainer extends Component<Props> {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @public
     * @returns {ReactElement|null}
     */
    render() {
        const { overlay } = this.props;

        return overlay ? React.createElement(overlay, {}) : null;
    }
}

/**
 * Maps (parts of) the redux state to the associated {@code OverlayContainer}'s
 * props.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {{
 *     overlay: ?Object
 * }}
 */
function _mapStateToProps(state: IReduxState) {
    return {
        /**
         * The React {@link Component} type of overlay to be rendered by the
         * associated {@code OverlayContainer}.
         */
        overlay: getOverlayToRender(state)
    };
}

export default connect(_mapStateToProps)(OverlayContainer);