import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import { 
  Heading, 
  HeadingProps 
} from '@chakra-ui/react';

const HeadingOne = ({
  node: _node,
  ...props
}: NodeRendererProps & HeadingProps): React.ReactElement => (
  <Heading as="h1" size={"2xl"} {...props} />
);

export default HeadingOne;