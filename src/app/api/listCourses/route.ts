import admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';
import { NextResponse } from 'next/server';

if (!admin.apps.length) {
  admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount),
    credential: applicationDefault(),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

const db = admin.firestore();

export async function GET() {
  try {
    console.log('trying..');
    const coursesRef = db.collection('courses');
    //   const snapshot = await coursesRef.where('capital', '==', true).get();
    const snapshot = await coursesRef.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    // Convert snapshot into a structured array of documents
    const courses = snapshot.docs.map((doc) => ({
      id: doc.id, // Include document ID
      ...doc.data(), // Spread the Firestore document data
    }));
    console.log('Courses retrieved successfully:', courses);
    return NextResponse.json(courses); // Return the structured array
  } catch (error) {
    console.error('Error listing courses:', error);
    return NextResponse.json({ error: 'Error listing users' }, { status: 500 });
  }
}
