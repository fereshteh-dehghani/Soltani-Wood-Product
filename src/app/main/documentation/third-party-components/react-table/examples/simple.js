import { useMemo } from 'react';
import MaUTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTable } from 'react-table';
import sampleData from './sampleData';

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const { getTableProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data
	});

	// Render the UI for your table
	return (
		<MaUTable {...getTableProps()}>
			<TableHead>
				{headerGroups.map(headerGroup => (
					<TableRow {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
						))}
					</TableRow>
				))}
			</TableHead>
			<TableBody>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<TableRow {...row.getRowProps()}>
							{row.cells.map(cell => {
								return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
							})}
						</TableRow>
					);
				})}
			</TableBody>
		</MaUTable>
	);
}

function App() {
	const columns = useMemo(
		() => [
			{
				Header: 'نام',
				columns: [
					{
						Header: 'نام',
						accessor: 'firstName'
					},
					{
						Header: 'نام خانوادگی',
						accessor: 'lastName'
					}
				]
			},
			{
				Header: 'اطلاعات',
				columns: [
					{
						Header: 'سن',
						accessor: 'age'
					},
					{
						Header: 'بازدید',
						accessor: 'visits'
					},
					{
						Header: 'وضعیت',
						accessor: 'status'
					},
					{
						Header: 'پیشرفت پروفایل',
						accessor: 'progress'
					}
				]
			}
		],
		[]
	);

	const data = useMemo(() => sampleData, []);

	return <Table columns={columns} data={data} />;
}

export default App;
