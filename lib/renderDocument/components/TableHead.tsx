import { TableHead as MuiTableHead, TableHeadProps, TableRow as MuiTableRow, TableRowProps} from '@material-ui/core';
// [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <th>{children}</th>,
import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const TableHead = ({
  node: _node,
  ...props
}: NodeRendererProps & TableHeadProps & TableRowProps) : React.ReactElement => (
  <MuiTableHead {...props}/>

);

export default TableHead;