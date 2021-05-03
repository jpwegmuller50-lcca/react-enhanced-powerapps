import { mergeStyleSets } from 'office-ui-fabric-react';

export const modalClassNames = mergeStyleSets({
  main: {
    maxWidth: 500,
    minWidth: 400
  },
  header: {
    backgroundColor: 'rgb(242, 222, 222)',
    color: 'rgb(169, 68, 66)',
    backgroundImage: 'linear-gradient(rgb(242, 222, 222) 0%, rgb(231, 195, 195) 100%)',
    border: 'rgb(220, 167, 167) 1px solid',
    fontSize: 14,
    marginBottom: 20,
    padding: 15
  },
  title: {
    color: 'rgb(169, 68, 66)',
    fontSize: 18,
    fontWeight: 500
  },
  icon: {
    fontSize: 20,
    fontWeight: 900,
    paddingRight: 10
  },
  body: {
    color: 'rgb(51, 51, 51)',
    padding: 15,
    lineHeight: 20,
    whiteSpace: 'pre-wrap'
  },
  footer: {
    borderTop: 'rgb(229, 229, 229) 1px solid',
    color: 'rgb(51, 51, 51)',
    padding: 15
  }
});


