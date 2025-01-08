"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import CustomTable from '@/components/CustomTable';

const TShirtDesigner = dynamic(() => import('@/components/TShirtDesigner'), { ssr: false });

export default function HomePage() {
  return (
    <main className='p-4 shadow-lg'>
      <CustomTable />
      <TShirtDesigner />
    </main>
  );
}
