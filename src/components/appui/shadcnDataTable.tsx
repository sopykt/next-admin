'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/engDate';

export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
  firestoreData: {
    locationType: string;
    namePrefix: string;
    userName: string;
    gender: string;
    birthDate: {
      _seconds: number;
      _nanoseconds: number;
    };
    township: string;
    addressDetails: string;
    fatherNamePrefix: string;
    fatherName: string;
    motherNamePrefix: string;
    motherName: string;
    phoneNumber: string;
    userId: string;
  } | null; // `null` if Firestore data is not available
};

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all rows"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label={`Select row ${row.id}`}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'uid',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        ID
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('uid')}</div>,
  },
  {
    id: 'namePrefix',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Name Prefix
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.namePrefix ?? '', // Provide a fallback for sorting
    cell: ({ row }) => <div>{row.original.firestoreData?.namePrefix || 'N/A'}</div>,
    sortingFn: 'text', // Use a built-in string sorting function
  },
  {
    accessorKey: 'displayName',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Name
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('displayName')}</div>,
  },
  {
    id: 'birthDate',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Birth Date
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => {
      const birthDate = row.firestoreData?.birthDate;
      if (birthDate?._seconds) {
        console.log('birthDate raw:', birthDate);
        return new Date(birthDate._seconds * 1000); // Convert _seconds to milliseconds
      }
      return ''; // Fallback for missing or invalid dates
    },
    cell: ({ row }) => {
      const birthDate = row.original.firestoreData?.birthDate;
      const formattedDate = birthDate?._seconds
        ? formatDate(new Date(birthDate._seconds * 1000))
        : 'N/A';
      console.log('Formatted birthDate:', formattedDate);
      return <div>{formattedDate}</div>;
    },
    sortingFn: (a, b) => {
      const dateA = a.getValue('birthDate') as Date | '';
      const dateB = b.getValue('birthDate') as Date | '';
      if (dateA && dateB) {
        return dateA.getTime() - dateB.getTime(); // Compare timestamps
      }
      if (!dateA && dateB) return -1; // Place empty dates (or N/A) first
      if (dateA && !dateB) return 1; // Place valid dates after
      return 0; // Keep order for equal or both empty dates
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Email
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => {
      const user = row.original;
      const locationType = user.firestoreData?.locationType;
      if (locationType === 'Domestic') {
        return <div>N/A</div>;
      }
      return <div className="lowercase">{user.email || 'N/A'}</div>;
    },
    enableSorting: true,
    sortingFn: (a, b) => {
      const emailA =
        a.original.firestoreData?.locationType === 'Domestic' ? '' : a.original.email || '';
      const emailB =
        b.original.firestoreData?.locationType === 'Domestic' ? '' : b.original.email || '';
      return emailA.localeCompare(emailB); // localeCompare always returns a number
    },
  },
  {
    id: 'phoneNumber',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Phone
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.phoneNumber ?? '', // Provide a fallback for sorting
    cell: ({ row }) => <div>{row.original.firestoreData?.phoneNumber || 'N/A'}</div>,
    sortingFn: 'text', // Use a built-in string sorting function
  },
  {
    id: 'gender',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Gender
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.gender ?? '',
    cell: ({ row }) => <div>{row.original.firestoreData?.gender || 'N/A'}</div>,
    sortingFn: 'auto',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.uid)}>
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function UserTable() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/listUsers'); // Adjust your API endpoint
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setUsers(data); // Ensure data matches the `User` type
      } catch (e) {
        setError((e as Error).message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const table = useReactTable({
    data: users,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by email..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
