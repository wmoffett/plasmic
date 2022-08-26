import { NodeRendererProps } from '@lib/renderDocument/documentToContent';
import { Heading, HeadingProps } from '@chakra-ui/react'
// import { Typography, TypographyProps } from '@material-ui/core';

// const HeadingFour = ({
//   node: _node, // silences linter; prevents node from being spread into the component
//   ...props
// }: NodeRendererProps & TypographyProps): React.ReactElement => (
//   <Typography variant="h4" {...props} />
// );

const HeadingFour = ({
  node: _node,
  ...props
}: NodeRendererProps & HeadingProps): React.ReactElement => (
  <Heading as="h4" {...props} />
);
export default HeadingFour;