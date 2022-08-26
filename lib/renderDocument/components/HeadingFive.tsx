
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';
import { Heading, HeadingProps } from '@chakra-ui/react'
// import { Typography, TypographyProps } from '@material-ui/core';

// const HeadingFive = ({
//   node: _node, // silences linter; prevents node from being spread into the component
//   ...props
// }: NodeRendererProps & TypographyProps): React.ReactElement => (
//   <Typography variant="h5" {...props} />
// );

const HeadingFive = ({
  node: _node,
  ...props
}: NodeRendererProps & HeadingProps): React.ReactElement => (
  <Heading as="h5" size={"sm"} {...props} />
);

export default HeadingFive;