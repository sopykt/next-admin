import CreateCourseForm from '@/components/appui/createCourse';
import React from 'react';

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-3xl bg-card shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Create New Course</h1>
        <CreateCourseForm />
      </div>
    </div>
  );
}

export default Page;
