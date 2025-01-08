"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import CustomTable from '@/components/CustomTable';
//import TShirtDesigner from '@/components/TShirtDesigner';

const TShirtDesigner = dynamic(() => import('@/components/TShirtDesigner'), { ssr: false });

export default function HomePage() {
  return (
    <main>
      <h1>React Exam</h1>
      <CustomTable />
      <TShirtDesigner />
    </main>
  );
}
