import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import {
  Text,
  TextProps,
} from '@chakra-ui/react'

const Paragraph = ({
  node: _node,
  ...props
}: NodeRendererProps & TextProps): React.ReactElement => (
  <Text {...props} />
);

export default Paragraph;