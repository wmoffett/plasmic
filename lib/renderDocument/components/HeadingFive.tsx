import { Typography, TypographyProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const HeadingFive = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & TypographyProps): React.ReactElement => (
  <Typography variant="h5" {...props} />
);

export default HeadingFive;