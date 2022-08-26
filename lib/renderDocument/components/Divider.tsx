
import { Divider as ChakraDivider, DividerProps } from '@chakra-ui/react'

import { Typography, TypographyProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const Divider = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & DividerProps): React.ReactElement => (
  <ChakraDivider  {...props} />
);

export default Divider;