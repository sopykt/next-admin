'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

export default function CreateCourseForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructorName: '',
    coursePhoto: null,
    startDate: null,
    enrollDuration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      coursePhoto: e.target.files[0],
    }));
  };

  const handleDateChange = (date, key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Course Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter course title"
          className="mt-2 w-full"
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter course description"
          className="mt-2 w-full"
          required
        />
      </div>

      <div>
        <Label htmlFor="instructorName">Instructor Name</Label>
        <Input
          id="instructorName"
          name="instructorName"
          value={formData.instructorName}
          onChange={handleChange}
          placeholder="Enter instructor name"
          className="mt-2 w-full"
          required
        />
      </div>

      <div>
        <Label htmlFor="coursePhoto">Course Photo</Label>
        <Input
          id="coursePhoto"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2"
        />
      </div>

      <div>
        <Label>Start Date</Label>
        <Calendar
          selected={formData.startDate}
          onSelect={(date) => handleDateChange(date, 'startDate')}
          className="mt-2 w-full"
          required
        />
        {formData.startDate && (
          <p className="text-sm mt-2">Selected Date: {format(formData.startDate, 'PPP')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="enrollDuration">Enrollment Duration (in days)</Label>
        <Input
          id="enrollDuration"
          name="enrollDuration"
          type="number"
          value={formData.enrollDuration}
          onChange={handleChange}
          placeholder="Enter enrollment duration"
          className="mt-2 w-full"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Create Course
      </Button>
    </form>
  );
}
