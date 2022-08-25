import { TableRow as MuiTableRow, TableRowProps} from '@material-ui/core';
// [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const TableCell = ({
  node: _node,
  ...props
}: NodeRendererProps & TableRowProps): React.ReactElement => (
  <MuiTableRow {...props}></MuiTableRow>
);

export default TableCell;