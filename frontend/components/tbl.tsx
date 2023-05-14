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

interface TableProps {
  data: (string | number)[][];
}

// tableComponent style will be:
// [{num of cols, num of rows}, {...everything else in order}, {tableCaption}]

const Tbl = ({ data }: TableProps) => {
  const numColumns = Number(data[0][0]);
  const numRows = Number(data[0][1]);
  const headers = data.slice(1, numColumns + 1);
  const rows = data.slice(numColumns + 1, data.length - 1);
  const tableCaption = data[data.length - 1];

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

export default Tbl;
