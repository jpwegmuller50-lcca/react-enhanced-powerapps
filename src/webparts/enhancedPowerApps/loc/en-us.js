define([], function () {
  return {
    ThemeValuePostLabel:
      "You can use <pre style='display:inline;font-weight:700;'>ColorValue(Param('themevaluename'))</pre> within your Power Apps to retrieve any of the theme color values you selected.",
    ThemeValueFieldLabel: 'Theme variant properties',
    ThemeValuePreLabel:
      'Select the theme colors you wish to pass to your app. You can use this to make your app theme-aware.',
    ThemeGroupName: 'Theme',
    DynamicsPropNameDescriptionLabel:
      "What name do you want to use when retrieving this parameter from Power Apps? E.g.: 'id'",
    DynamicPropsNameFieldLabel: 'Parameter name',
    DynamicPropFieldLabel: 'Dynamic property source',
    SelectDynamicSource: 'Select dynamic property source',
    UseDynamicPropsFieldLabel: 'Pass dynamic property as parameter?',
    UseDynamicPropsFieldLabel2: 'Pass a second dynamic property as parameter?',
    DynamicsPropsGroupDescription2:
      "Note that we always pass the page's locale. Use <pre style='display:inline;font-weight:700;'>Param('locale')</pre> to retrieve the value within Power Apps.",
    DynamicsPropsGroupDescription1:
      "You can pass dynamic properties from the page environment or other web parts on the page as parameters to Power Apps. Within Power Apps, you can use <pre style='display:inline;font-weight:700;'>Param('{0}')</pre> to retrieve the value.",
    DynamicPropertiesGroupLabel: 'Dynamic Properties',
    WidthFieldLabel: 'Width',
    AspectRatioCustomOption: 'Custom',
    AspectRatioFieldLabel: 'Aspect ratio',
    HeightFieldLabel: 'Height',
    LayoutAspectRatioOption: 'Resize proportionally',
    LayoutFixedHeightOption: 'Fixed height',
    LayoutFieldLabel: 'Resize behavior',
    BorderFieldLabel: 'Show border',
    AppearanceGroupName: 'Appearance',
    PlaceholderButtonLabel: 'Add an app',
    PlaceholderDescription: 'Include a custom business app on your page.',
    PlaceholderIconText: 'Enhanced Microsoft Power Apps',
    PropertyPaneDescription: 'Add a custom business app by pasting its web link or ID below.',
    BasicGroupName: 'Basic Configuration',
    AppWebLinkFieldLabel: 'App web link or ID (enter manually or click on the ellipsis above to get the link from another web part)',
    AppWebLinkDynamicFieldLabel: 'App web link',
    NoAppLinkFieldLabel: 'Text to display when the dynamic app web link is blank',
    AboutGroup: 'About'
  };
});
