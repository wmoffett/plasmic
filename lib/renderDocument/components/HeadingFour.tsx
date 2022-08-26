import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import { 
  Heading, 
  HeadingProps 
} from '@chakra-ui/react';

const HeadingFour = ({
  node: _node,
  ...props
}: NodeRendererProps & HeadingProps): React.ReactElement => (
  <Heading as="h4" size={"md"} {...props} />
);
export default HeadingFour;