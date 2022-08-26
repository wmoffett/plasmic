import { NodeRendererProps } from '@lib/renderDocument/documentToContent';
import { Heading, HeadingProps } from '@chakra-ui/react'
// import { Typography, TypographyProps } from '@material-ui/core';

// const HeadingTwo = ({
//   node: _node, // silences linter; prevents node from being spread into the component
//   ...props
// }: NodeRendererProps & TypographyProps): React.ReactElement => (
//   <Typography variant="h5" {...props} />
// );

const HeadingTwo = ({
  node: _node,
  ...props
}: NodeRendererProps & HeadingProps): React.ReactElement => (
  <Heading as="h2" size={"xl"} {...props} />
);

export default HeadingTwo;