import { bucket, db } from '@/lib/firebase';
import { NextResponse } from 'next/server';

// POST handler for creating a course
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formData } = body;

    if (!formData) {
      return NextResponse.json({ message: 'Form data is required' }, { status: 400 });
    }

    const {
      title,
      description,
      instructorName,
      startDate,
      enrollmentStartDate,
      enrollmentEndDate,
      coursePhoto,
    } = formData;

    // Upload photo to Firebase Storage
    const buffer = Buffer.from(coursePhoto.split(',')[1], 'base64'); // Extract base64 data
    const fileName = `courses/${Date.now()}-${title}.jpg`;
    const file = bucket.file(fileName);

    await file.save(buffer, {
      contentType: 'image/jpeg',
      public: true,
    });

    const publicUrl = file.publicUrl();

    // Save course data to Firestore
    const courseData = {
      title,
      description,
      instructorName,
      startDate,
      enrollmentStartDate,
      enrollmentEndDate,
      coursePhotoUrl: publicUrl,
      createdAt: new Date(),
    };

    console.log(courseData);

    const courseRef = await db.collection('courses').add(courseData);

    return NextResponse.json({ id: courseRef.id, ...courseData }, { status: 200 });
  } catch (error) {
    // Log error only if error is an object
    if (error instanceof Error) {
      console.error('Error creating course:', error.message);
    } else {
      console.error('Error creating course:', error);
    }

    // Ensure that error is an object and doesn't cause issues when logging
    const errorMessage =
      error && typeof error === 'object' ? error : { message: error?.toString() };

    return NextResponse.json(
      { message: 'Error creating course', error: errorMessage },
      { status: 500 }
    );
  }
}
