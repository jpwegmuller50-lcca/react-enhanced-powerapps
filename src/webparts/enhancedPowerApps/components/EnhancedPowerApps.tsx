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
    dynamicAppWebLink,
    noLinkHtml,
    appWebLink,
    locale,
    border,
    height,
    width
  } = props;

  /* states */
  const [error, setError] = React.useState({ errorFlag: false, errorMsg: '' });

  // Only need configuration if set for manual web link and web link is blank
  //  i.e. if getting dynamic web link and it's blank, that's ok.
  const needConfiguration: boolean = !appWebLink && !dynamicAppWebLink;

  const displayNoLinkHtml: boolean = !appWebLink && dynamicAppWebLink;

  const { semanticColors }: IReadonlyTheme = themeVariant;

  // We can take an app id or a full link. We'll assume (for now) that people are passing a valid app URL
  console.log('appWebLink', appWebLink);
  let appUrl: string = '';

  if (typeof appWebLink === 'string') {
    appUrl =
      appWebLink && appWebLink.indexOf('https://') != 0
        ? `https://apps.powerapps.com/play/${appWebLink}`
        : appWebLink;
  }

  /** process any dynamic properties */
  console.log('dynamicProp', dynamicProp);
  console.log('dynamicProp2', dynamicProp2);

  const setDynamicPropValue = (propName: string, propValue: any): string =>
    `&${encodeURIComponent(propName)}=${encodeURIComponent(propValue)}`;

  const dynamicPropValue: string =
    useDynamicProp && dynamicProp !== undefined
      ? setDynamicPropValue(dynamicPropName, dynamicProp)
      : '';
  const dynamicProp2Value: string =
    useDynamicProp2 && dynamicProp2 !== undefined
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
            onConfigure={props.onConfigure}
          />
        )}
        {displayNoLinkHtml && (
          <Placeholder iconName="PowerApps" iconText={noLinkHtml} description="" />
        )}
        {!needConfiguration && (
          <>
            {appWebLink && (
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
