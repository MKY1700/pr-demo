import { Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Link from "next/link";
import Button from "@mui/material/Button";

function createData(name,github,link) {
  return {name,github,link};
}
const rows = [
  createData('duduge', 'https://github.com/MKY1700/pr-demo/tree/main/public/duduge', '/duduge'),
  createData('review', 'https://github.com/MKY1700/pr-demo/tree/main/public/review', '/review'),
  createData('snake', 'https://github.com/MKY1700/pr-demo/tree/main/public/snake', '/snake'),
  createData('space', 'https://github.com/MKY1700/pr-demo/tree/main/public/space', '/space')
]

export default function Home() {
  return (
    <>
    <Container fixed>
      <h1>Demo-List</h1>
      <Table sx={{minWidth : 650}} aria-label="demo-list">
        <TableHead>
          <TableRow>
            <TableCell>Demo-List</TableCell>
            <TableCell>Github</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th' : {border : 0}}}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell><Link href={row.github}>깃허브 바로가기</Link></TableCell>
              <TableCell><Button variant="outlined" size="small" href={row.link}>Link</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
    </>
  )
}