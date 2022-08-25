import { List, ListProps } from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const OrderedList = ({
  node: _node, // silences linter; prevents node from being spread into the component
  ...props
}: NodeRendererProps & ListProps): React.ReactElement => (
  //@ts-expect-error: can't set as ol, need to figure out
  <List disablePadding component="ol" {...props} />
);

export default OrderedList;