import { ListItem as MuiListItem, ListItemProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const ListItem = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: ListItemProps & NodeRendererProps): React.ReactElement => (
  <MuiListItem button={false as any} disableGutters {...props} />
);

export default ListItem;