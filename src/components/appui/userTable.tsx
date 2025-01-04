'use client';
import { useEffect, useState } from "react";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
}

type SortKey = keyof User | null;
type SortOrder = 'asc' | 'desc';

export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [sortKey, setSortKey] = useState<SortKey>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  
    useEffect(() => {
      async function fetchUsers() {
        const response = await fetch('/api/listUsers');
        const data = await response.json();
        setUsers(data);
      }
      fetchUsers();
    }, []);

    const handleSort = (key: SortKey) => {
        if (sortKey === key) {
          // Toggle sort order if the same column is clicked again
          setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        } else {
          // Set the new sort key and reset to ascending order
          setSortKey(key);
          setSortOrder('asc');
        }
      };
    
      const sortedUsers = [...users].sort((a, b) => {
        if (!sortKey) return 0; // No sorting
        const valA = a[sortKey] ?? '';
        const valB = b[sortKey] ?? '';
        const comparison = valA > valB ? 1 : valA < valB ? -1 : 0;
        return sortOrder === 'asc' ? comparison : -comparison;
      });
    
      const getSortIcon = (key: SortKey) => {
        if (sortKey === key) {
          return sortOrder === 'asc' ? '▲' : '▼';
        }
        return '↕'; // Default icon when not sorted
      };

      return (
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 shadow-md text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-800">
                  <th
                    className="cursor-pointer border border-gray-300 px-4 py-2"
                    onClick={() => handleSort('uid')}>
                    UID {getSortIcon('uid')}
                  </th>
                  <th
                    className="cursor-pointer border border-gray-300 px-4 py-2"
                    onClick={() => handleSort('email')}>
                    Email {getSortIcon('email')}
                  </th>
                  <th
                    className="cursor-pointer border border-gray-300 px-4 py-2"
                    onClick={() => handleSort('displayName')}>
                    Display Name {getSortIcon('displayName')}
                  </th>
                  <th
                    className="cursor-pointer border border-gray-300 px-4 py-2"
                    onClick={() => handleSort('phoneNumber')}>
                    Phone Number {getSortIcon('phoneNumber')}
                  </th>
                </tr>
              </thead>
              <tbody>
            {sortedUsers.length > 0 ? (
              sortedUsers.map((user) => (
                <tr
                  key={user.uid}
                  className="even:bg-gray-50 hover:bg-gray-100 transition duration-300">
                  <td className="border border-gray-300 px-4 py-2">{user.uid}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email || 'N/A'}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.displayName || 'N/A'}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.phoneNumber || '-'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center border border-gray-300 px-4 py-4 text-gray-500">
                  No users available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}