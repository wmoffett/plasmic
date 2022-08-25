import { Typography, TypographyProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const HeadingSix = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & TypographyProps): React.ReactElement => (
  <Typography variant="h6" {...props} />
);

export default HeadingSix;