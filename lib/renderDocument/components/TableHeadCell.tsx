import { TableCell as MuiTableCell, TableCellProps} from '@material-ui/core';
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const TableHeadCell = ({
  node: _node,
  ...props
}: NodeRendererProps & TableCellProps): React.ReactElement => (
  <MuiTableCell {...props} component="th"></MuiTableCell>
);

export default TableHeadCell;