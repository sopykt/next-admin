'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Course {
  id: string;
  title: string;
  description: string;
  instructorName: string;
  startDate: string; // Date formatted as string
  enrollmentStartDate: string;
  enrollmentEndDate: string;
  coursePhotoUrl: string;
  createdAt: string; // Formatted as a human-readable date
}

export default function AllCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/listCourses');
        if (!response.ok) throw new Error('Failed to fetch courses');
        const data = await response.json();

        // Map the response and format date fields
        const formattedData = data.map((course: any) => ({
          ...course,
          startDate: new Date(course.startDate).toLocaleDateString(),
          enrollmentStartDate: new Date(course.enrollmentStartDate).toLocaleDateString(),
          enrollmentEndDate: new Date(course.enrollmentEndDate).toLocaleDateString(),
          createdAt: new Date(course.createdAt._seconds * 1000).toLocaleDateString(),
        }));

        setCourses(formattedData);
        console.log('Courses:', formattedData);
      } catch (e) {
        setError((e as Error).message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="aspect-video rounded-xl bg-muted/50">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.instructorName}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start">
              <img
                src={course.coursePhotoUrl}
                alt={course.title}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="text-sm">{course.description}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm">
                <strong>Start:</strong> {course.startDate} <br />
                <strong>Enroll:</strong> {course.enrollmentStartDate} - {course.enrollmentEndDate}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
