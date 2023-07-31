import HistoryCard from '@/components/dashboard/HistoryCard'
import HotTopicsCard from '@/components/dashboard/HotTopicsCard'
import QuizmeCard from '@/components/dashboard/QuizmeCard'
import RecentActivities from '@/components/dashboard/RecentActivities'
import { getAuthSession } from '@/lib/next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export const metadata = {
  title: 'Dashboard | Quizzy',
}

const dashboard = async (props: Props) => {
  const session = await getAuthSession()
  if (!session?.user) {
    redirect('/')
  }
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="text-3xl mr-2 font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizmeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard/>
        <RecentActivities/>
      </div>
    </div>
  )
}

export default dashboard
