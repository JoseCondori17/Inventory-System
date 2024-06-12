import {
  Card, 
  CardContent, 
  CardHeader 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface TableBasicProps{
  title: string,
  data: TableData,
}
interface TableData {
  header: { key: string, label: string, align?: string }[];
  body: { [key: string]: string | number }[];
}

const TableBasic: React.FC<TableBasicProps> = ({title, data}) => {
  return (
    <Card className="w-full">
      <CardHeader>{title}</CardHeader>
      <CardContent>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {data.header.map((header) => (
              <TableHead key={header.key} className={`text-${header.align || 'left'}`}>
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.body.map((row, index) => (
            <TableRow key={index}>
            {data.header.map(header => (
                <TableCell key={`${index}-${header.key}`}>
                    {row[header.key as keyof typeof row]}
                </TableCell>
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </CardContent>
    </Card>
  )
}

export default TableBasic;
