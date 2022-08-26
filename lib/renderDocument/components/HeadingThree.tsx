import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import { 
  Heading, 
  HeadingProps 
} from '@chakra-ui/react';

const HeadingThree = ({
  node: _node,
  ...props
}: NodeRendererProps & HeadingProps): React.ReactElement => (
  <Heading as="h3" size={"lg"} {...props} />
);

export default HeadingThree;