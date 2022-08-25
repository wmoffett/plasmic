import { Typography, TypographyProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const Paragraph = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & TypographyProps): React.ReactElement => (
  <Typography {...props} />
);

export default Paragraph;