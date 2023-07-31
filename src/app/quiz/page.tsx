import QuizCreation from '@/components/QuizCreation'
import { getAuthSession } from '@/lib/next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export const metadata = {
    title: 'Quiz | Quizzy'
}

const page = async (props: Props) => {
    const session = await getAuthSession()
    if(!session?.user){
        redirect('/')
    }
  return (
    <div>
      <QuizCreation/>
    </div>
  )
}

export default page