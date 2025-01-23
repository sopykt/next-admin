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
import { FaMale, FaFemale } from 'react-icons/fa';

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
import { calculateAgeFromDate, formatDate } from '@/lib/engDate';
import { Badge } from '../ui/badge';
import { getLocationDetails } from '@/lib/addresses';

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
    id: 'uid',
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
    id: 'age',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Age
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => {
      const birthDate = row.firestoreData?.birthDate;
      if (birthDate?._seconds) {
        const dateOfBirth = new Date(birthDate._seconds * 1000);
        return calculateAgeFromDate(dateOfBirth); // Calculate age from date
      }
      return 'N/A'; // Fallback for missing or invalid dates
    },
    cell: ({ row }) => {
      const birthDate = row.original.firestoreData?.birthDate;
      const age = birthDate?._seconds
        ? calculateAgeFromDate(new Date(birthDate._seconds * 1000))
        : 'N/A';
      return <div>{age}</div>; // Render age in the cell
    },
    sortingFn: (a, b) => {
      const ageA = a.getValue('age') as number | 'N/A';
      const ageB = b.getValue('age') as number | 'N/A';

      if (ageA === 'N/A' && ageB !== 'N/A') return -1; // Sort 'N/A' first
      if (ageA !== 'N/A' && ageB === 'N/A') return 1; // Sort valid ages after
      if (ageA === 'N/A' && ageB === 'N/A') return 0; // Keep order for both 'N/A'
      return (ageA as number) - (ageB as number); // Sort by age numerically
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
    cell: ({ row }) => {
      const gender = row.original.firestoreData?.gender;

      return gender === 'male' ? (
        <Badge gender="male">
          <FaMale className="mr-1" /> Male
        </Badge>
      ) : gender === 'female' ? (
        <Badge gender="female">
          <FaFemale className="mr-1" /> Female
        </Badge>
      ) : (
        <Badge variant="outline">N/A</Badge>
      );
    },
    sortingFn: 'auto',
  },
  {
    id: 'addressDetails',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Address Details
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.addressDetails ?? 'N/A',
    cell: ({ row }) => {
      const addressDetails = row.original.firestoreData?.addressDetails;
      return <div>{addressDetails || 'N/A'}</div>;
    },
    sortingFn: 'text',
  },
  {
    id: 'township',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Township
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => {
      if (row.firestoreData?.locationType === 'Domestic') {
        const { township } = getLocationDetails(row.firestoreData?.township);
        return township ?? 'N/A';
      }
      return 'N/A';
    },
    cell: ({ row }) => {
      const { firestoreData } = row.original;
      if (firestoreData?.locationType === 'Domestic') {
        const { township } = getLocationDetails(firestoreData?.township);
        return <div>{township}</div>;
      }
      return <div>N/A</div>;
    },
    sortingFn: (a, b) => {
      const townshipA = a.getValue('township') as string;
      const townshipB = b.getValue('township') as string;

      // Sorting with N/A considered to come last
      if (townshipA === 'N/A' && townshipB !== 'N/A') return 1;
      if (townshipA !== 'N/A' && townshipB === 'N/A') return -1;
      return townshipA.localeCompare(townshipB); // Sorting strings alphabetically
    },
  },
  {
    id: 'district',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        District
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => {
      if (row.firestoreData?.locationType === 'Domestic') {
        const { district } = getLocationDetails(row.firestoreData?.township);
        return district ?? 'N/A';
      }
      return 'N/A';
    },
    cell: ({ row }) => {
      const { firestoreData } = row.original;
      if (firestoreData?.locationType === 'Domestic') {
        const { district } = getLocationDetails(firestoreData?.township);
        return <div>{district}</div>;
      }
      return <div>N/A</div>;
    },
    sortingFn: (a, b) => {
      const districtA = a.getValue('district') as string;
      const districtB = b.getValue('district') as string;

      // Sorting with N/A considered to come last
      if (districtA === 'N/A' && districtB !== 'N/A') return 1;
      if (districtA !== 'N/A' && districtB === 'N/A') return -1;
      return districtA.localeCompare(districtB); // Sorting strings alphabetically
    },
  },
  {
    id: 'state',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        State
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => {
      if (row.firestoreData?.locationType === 'Domestic') {
        const { state } = getLocationDetails(row.firestoreData?.township);
        return state ?? 'N/A';
      }
      return 'N/A';
    },
    cell: ({ row }) => {
      const { firestoreData } = row.original;
      if (firestoreData?.locationType === 'Domestic') {
        const { state } = getLocationDetails(firestoreData?.township);
        return <div>{state}</div>;
      }
      return <div>N/A</div>;
    },
    sortingFn: (a, b) => {
      const stateA = a.getValue('state') as string;
      const stateB = b.getValue('state') as string;

      // Sorting with N/A considered to come last
      if (stateA === 'N/A' && stateB !== 'N/A') return 1;
      if (stateA !== 'N/A' && stateB === 'N/A') return -1;
      return stateA.localeCompare(stateB); // Sorting strings alphabetically
    },
  },
  {
    id: 'fatherNamePrefix',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Father Name Prefix
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.fatherNamePrefix ?? '', // Provide a fallback for sorting
    cell: ({ row }) => <div>{row.original.firestoreData?.fatherNamePrefix || 'N/A'}</div>,
    sortingFn: 'text', // Use a built-in string sorting function
  },
  {
    accessorKey: 'fatherName',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Father Name
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.fatherName ?? '', // Provide a fallback for sorting
    cell: ({ row }) => <div>{row.original.firestoreData?.fatherName || 'N/A'}</div>,
    sortingFn: 'text', // Use a built-in string sorting function
  },
  {
    id: 'motherNamePrefix',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Mother Name Prefix
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.motherNamePrefix ?? '', // Provide a fallback for sorting
    cell: ({ row }) => <div>{row.original.firestoreData?.motherNamePrefix || 'N/A'}</div>,
    sortingFn: 'text', // Use a built-in string sorting function
  },
  {
    accessorKey: 'motherName',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Mother Name
        <ArrowUpDown />
      </Button>
    ),
    accessorFn: (row) => row.firestoreData?.motherName ?? '', // Provide a fallback for sorting
    cell: ({ row }) => <div>{row.original.firestoreData?.motherName || 'N/A'}</div>,
    sortingFn: 'text', // Use a built-in string sorting function
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
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
    uid: false,
    birthDate: false,
    fatherNamePrefix: false,
    fatherName: false,
    motherNamePrefix: false,
    motherName: false,
  });
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
          <DropdownMenuContent align="end" className="max-h-64 overflow-y-auto">
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
