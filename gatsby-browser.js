import PageLayout from './src/components/PageLayout';

export const wrapPageElement = ({element, props}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <PageLayout {...props}>{element}</PageLayout>;
};

