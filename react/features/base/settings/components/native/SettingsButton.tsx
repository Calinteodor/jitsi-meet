import { translate } from '../../../../base/i18n';
import { IconSettings } from '../../../../base/icons';
import { AbstractButton, type AbstractButtonProps } from '../../../../base/toolbox/components';
import { navigate }
    from '../../../../mobile/navigation/components/conference/ConferenceNavigationContainerRef';
import { screen } from '../../../../mobile/navigation/routes';

/**
 * Implements an {@link AbstractButton} to open the carmode.
 */
class SettingsButton extends AbstractButton<AbstractButtonProps, any, any> {
    accessibilityLabel = 'toolbar.accessibilityLabel.Settings';
    icon = IconSettings;
    label = 'settings.buttonLabel';

    /**
     * Handles clicking / pressing the button, and opens the carmode mode.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        return navigate(screen.conference.settings);
    }
}

export default translate(SettingsButton);
