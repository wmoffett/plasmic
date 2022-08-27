// import { List, ListProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

import { 
  UnorderedList as ChakraUnorderedList,
  ListProps,
} from '@chakra-ui/react';

const UnorderedList = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & ListProps): React.ReactElement => (
  <ChakraUnorderedList disablePadding component="ul" m={10} my={1} {...props} />
);

export default UnorderedList;