import { List, ListProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const UnorderedList = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & ListProps): React.ReactElement => (
  <List disablePadding component="ul" {...props} />
);

export default UnorderedList;