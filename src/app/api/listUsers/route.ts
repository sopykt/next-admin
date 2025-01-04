import { NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { applicationDefault, getApps, initializeApp } from 'firebase-admin/app';

if (!getApps().length) {
    initializeApp({
      credential: applicationDefault(),
    });
  }
  
  export async function GET() {
    const auth = getAuth();
    try {
      const result = await auth.listUsers(1000);
      const users = result.users.map((userRecord) => ({
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        phoneNumber: userRecord.phoneNumber,
      }));
      return NextResponse.json(users);
    } catch (error) {
      console.error('Error listing users:', error);
      return NextResponse.json({ error: 'Error listing users' }, { status: 500 });
    }
  }