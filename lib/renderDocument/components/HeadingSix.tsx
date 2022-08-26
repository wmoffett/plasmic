import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import { 
  Heading, 
  HeadingProps 
} from '@chakra-ui/react';

const HeadingSix = ({
  node: _node,
  ...props
}: NodeRendererProps & HeadingProps): React.ReactElement => (
  <Heading as="h6" size={"xs"} {...props} />
);

export default HeadingSix;