import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import {
  Button as ChakraButton,
  ButtonProps
} from "@chakra-ui/react";

const Button = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & ButtonProps): React.ReactElement => <ChakraButton {...props} />;

export default Button;