import * as React from 'react';
import styles from './EnhancedPowerApps.module.scss';
import { IEnhancedPowerAppsProps } from './IEnhancedPowerAppsProps';
import * as strings from 'EnhancedPowerAppsWebPartStrings';

/**
 * We use the placeholder to tell people they haven't configured the web part yet
 * */
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';

/**
 * Used to provide support for theme variants
 */
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { IEnhancedPowerAppsState } from './IEnhancedPowerAppsState';
import { ErrorBoundary } from '../../../common/errorBoundaryComp/ErrorBoundary';

export const EnhancedPowerApps: React.FunctionComponent<IEnhancedPowerAppsProps> = (props) => {
  /* props */
  const {
    useDynamicProp,
    dynamicPropName,
    dynamicProp,
    useDynamicProp2,
    dynamicPropName2,
    dynamicProp2,
    themeVariant,
    themeValues,
    appWebLink,
    locale,
    border,
    height,
    width
  } = this.props;

  /* states */
  const [error, setError] = React.useState({ errorFlag: false, errorMsg: '' });

  // The only thing we need for this web part to be configured is an app link or app id
  const needConfiguration: boolean = !appWebLink;

  const { semanticColors }: IReadonlyTheme = themeVariant;

  /** process any dynamic properties */
  let appUrl: string = '';
  let propIsUrl: boolean = false;
  let prop2IsUrl: boolean = false;

  console.log('dynamicProp1', dynamicProp);
  console.log('dynamicProp2', dynamicProp2);

  // set app url by checking to see if either dynamic property is an app url
  const appUrlRoot: string = 'https://apps.powerapps.com/play/';
  if (useDynamicProp && dynamicProp !== undefined && dynamicProp.substr(0, 32) === appUrlRoot) {
    appUrl = dynamicProp;
    propIsUrl = true;
  } else if (
    useDynamicProp2 &&
    dynamicProp2 !== undefined &&
    dynamicProp2.substr(0, 32) === appUrlRoot
  ) {
    appUrl = dynamicProp2;
    prop2IsUrl = true;
  } else {
    // We can take an app id or a full link. We'll assume (for now) that people are passing a valid app URL
    // would LOVE to find an API to retrieve list of valid apps
    appUrl =
      appWebLink && appWebLink.indexOf('https://') != 0
        ? `https://apps.powerapps.com/play/${appWebLink}`
        : appWebLink;
  }

  function setDynamicPropValue(propName: string, propValue: any): string {
    return `&${encodeURIComponent(propName)}=${encodeURIComponent(propValue)}`;
  }
  const dynamicPropValue: string =
    useDynamicProp && !propIsUrl && dynamicProp !== undefined
      ? setDynamicPropValue(dynamicPropName, dynamicProp)
      : '';
  const dynamicProp2Value: string =
    useDynamicProp2 && !prop2IsUrl && dynamicProp2 !== undefined
      ? setDynamicPropValue(dynamicPropName2, dynamicProp2)
      : '';

  // Build the portion of the URL where we're passing theme colors
  let themeParams: string = '';

  if (themeValues && themeValues.length > 0) {
    themeValues.forEach((themeValue: string) => {
      try {
        const themeColor: string = semanticColors[themeValue];
        themeParams = themeParams + `&${themeValue}=${encodeURIComponent(themeColor)}`;
      } catch (e) {
        console.log(e);
      }
    });
  }

  // Build the frame url
  const frameUrl: string = `${appUrl}?source=SPClient-EnhancedPowerAppsWebPart&locale=${locale}&enableOnBehalfOf=true&authMode=onbehalfof&hideNavBar=true&__appurl=${encodeURIComponent(
    appUrl
  )}${dynamicPropValue}${dynamicProp2Value}${themeParams}`;

  console.log('URL', frameUrl);

  return (
    <ErrorBoundary>
      <div className={styles.enhancedPowerApps} style={{ height: `${height}px` }}>
        {needConfiguration && (
          <Placeholder
            iconName="PowerApps"
            iconText={strings.PlaceholderIconText}
            description={strings.PlaceholderDescription}
            buttonLabel={strings.PlaceholderButtonLabel}
            onConfigure={this.props.onConfigure}
          />
        )}
        {!needConfiguration && (
          <>
            {this.props.appWebLink && (
              <iframe
                src={frameUrl}
                scrolling="no"
                allow="geolocation *; microphone *; camera *; fullscreen *;"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-forms allow-orientation-lock allow-downloads"
                width={width}
                height={height}
                frameBorder={border ? '1' : '0'}
              ></iframe>
            )}
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};
