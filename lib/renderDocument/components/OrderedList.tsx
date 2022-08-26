import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import { 
  OrderedList as ChakraOrderedList,
  ListProps,
} from '@chakra-ui/react';

const OrderedList = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & ListProps): React.ReactElement => (
  <ChakraOrderedList disablePadding component="ol" {...props} />
);

export default OrderedList;