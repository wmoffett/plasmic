import { Box, BoxProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const EmbeddedEntry = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & BoxProps): React.ReactElement => <Box {...props} />;

export default EmbeddedEntry;