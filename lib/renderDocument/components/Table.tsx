import { 
  NodeRendererProps 
} from '@lib/renderDocument/documentToContent';

import {
  Table as ShakraTable,
  TableProps,
  Tbody as ShakraTableBody,
  TableBodyProps,
  TableContainer,
} from '@chakra-ui/react';

const Table = ({
  node: _node,
  ...props
}: NodeRendererProps & TableProps  & TableBodyProps): React.ReactElement => (
  <TableContainer>
    <ShakraTable>
      <ShakraTableBody {...props}></ShakraTableBody>
    </ShakraTable> 
  </TableContainer>
);

export default Table;