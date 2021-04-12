import { DynamicProperty } from '@microsoft/sp-component-base';
import { DisplayMode } from "@microsoft/sp-core-library";
import { IReadonlyTheme } from '@microsoft/sp-component-base';

export interface IEnhancedPowerAppsProps {
  /**
   * The current web part culture
   */
  locale: string;

  /**
   * Event handler for clicking the Configure button on the Placeholder
   */
  onConfigure: () => void;

  /**
   * The selected dynamic property to pass (first and second)
   */
  dynamicProp: string;
  dynamicProp2: string;

  /**
   * The parameter name of the dynamic prop (first and second)
   *
   */
  dynamicPropName: string;
  dynamicPropName2: string;

  /**
   * Whether we use dynamic props (first and second)
   */
  useDynamicProp: boolean;
  useDynamicProp2: boolean;

  /**
   * Power Apps
   */
  appWebLink: string;

  /**
   * Width
   */
  width: number;

  /**
   * Height
   */
  height: number;

  /**
   * Support theme variant
   */
  themeVariant: IReadonlyTheme | undefined;

  /**
   * Whether we show border or not
   */
  border: boolean;

  /**
   * Selected theme values to pass to Power Apps
   */
  themeValues: string[];
}
