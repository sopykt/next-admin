'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, CircleCheckBig, Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function CreateCourseForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructorName: '',
    coursePhoto: null as File | null,
    startDate: undefined as Date | undefined,
    enrollmentStartDate: undefined as Date | undefined,
    enrollmentEndDate: undefined as Date | undefined,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, coursePhoto: file }));
  };

  const handleDateChange = (key: keyof typeof formData, date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, [key]: date }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    let photoBase64 = null;
    if (formData.coursePhoto) {
      const reader = new FileReader();
      reader.readAsDataURL(formData.coursePhoto);
      const photoBase64Promise = new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
      });
      photoBase64 = await photoBase64Promise;
    }

    const submissionData = { ...formData, coursePhoto: photoBase64 };

    try {
      const response = await fetch('/api/createCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: submissionData }),
      });

      const data = await response.json();
      console.log('Course created successfully:', data);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error('Error submitting course:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderDatePicker = (label: string, fieldKey: keyof typeof formData) => (
    <div className="flex flex-col space-y-2">
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[240px] justify-start text-left font-normal',
              !formData[fieldKey] && 'text-muted-foreground'
            )}>
            <CalendarIcon />
            {formData[fieldKey] ? (
              format(formData[fieldKey] as Date, 'PPP')
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={formData[fieldKey] as Date}
            onSelect={(date) => handleDateChange(fieldKey, date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );

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
          required
        />
      </div>

      <div>
        <Label htmlFor="coursePhoto">Course Photo</Label>
        <Input id="coursePhoto" type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {renderDatePicker('Course Start Date', 'startDate')}
      <div className="space-y-6">
        <Label>Enrollment Period</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {renderDatePicker('Enrollment Start Date', 'enrollmentStartDate')}
          {renderDatePicker('Enrollment End Date', 'enrollmentEndDate')}
        </div>
      </div>

      {showAlert && (
        <Alert>
          <CircleCheckBig className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Course created successfully.</AlertDescription>
        </Alert>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : null}
        {isSubmitting ? 'Creating Course' : 'Create Course'}
      </Button>
    </form>
  );
}
