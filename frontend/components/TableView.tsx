import {
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";

// tableComponent style will be:
// [[num of cols, num of rows], [],[],..., [tableCaption]]
// see types.tsx or operators.tsx for example usage

const TableView = ({ tableData }: { tableData: (string | number)[][] }) => {
  const numColumns = Number(tableData[0][0]);
  const numRows = Number(tableData[0][1]);
  const headers = tableData.slice(1, numColumns + 1);
  const rows = tableData.slice(numColumns + 1, tableData.length - 1);
  const tableCaption = tableData[tableData.length - 1];

  return (
    <TableContainer w="75%">
      <Table colorScheme="blackAlpha" variant="striped">
        <TableCaption>{tableCaption}</TableCaption>
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Array.from(Array(numRows), (_, i) => (
            <Tr key={i}>
              {rows
                .slice(i * numColumns, (i + 1) * numColumns)
                .map((cell, index) => (
                  <Td key={index}>{cell}</Td>
                ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
