import { NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { applicationDefault, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

if (!getApps().length) {
  initializeApp({
    credential: applicationDefault(),
  });
}

const db = getFirestore();

export async function GET() {
  const auth = getAuth();
  try {
    // Retrieve users from Firebase Authentication
    const authResult = await auth.listUsers(1000);
    const authUsers = authResult.users.map((userRecord) => ({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      phoneNumber: userRecord.phoneNumber,
    }));

    // Retrieve user documents from Firestore
    const userDocs = await db.collection('users').get();
    const firestoreUsers = userDocs.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));

    // Merge Authentication and Firestore user data
    const mergedUsers = authUsers.map((authUser) => {
      const firestoreUser = firestoreUsers.find((user) => user.uid === authUser.uid);
      return { ...authUser, firestoreData: firestoreUser || null };
    });

    return NextResponse.json(mergedUsers);
  } catch (error) {
    console.error('Error listing users:', error);
    return NextResponse.json({ error: 'Error listing users' }, { status: 500 });
  }
}
