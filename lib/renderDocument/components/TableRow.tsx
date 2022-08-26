import { TableRow as MuiTableRow, TableRowProps} from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const TableCell = ({
  node: _node,
  ...props
}: NodeRendererProps & TableRowProps): React.ReactElement => (
  <MuiTableRow {...props}></MuiTableRow>
);

export default TableCell;