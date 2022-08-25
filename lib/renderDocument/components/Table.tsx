import { TableContainer, Table as MuiTable, TableProps, TableBody as MuiTableBody, TableBodyProps } from '@material-ui/core';


import { NodeRendererProps } from '@lib/renderDocument/documentToContent';

const Table = ({
  node: _node,
  ...props
}: NodeRendererProps & TableProps  & TableBodyProps): React.ReactElement => (
  <TableContainer>
    <MuiTable>
      <MuiTableBody {...props}></MuiTableBody>
    </MuiTable> 
  </TableContainer>
);

export default Table;