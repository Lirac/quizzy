import SignInButton from '@/components/SignInButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAuthSession } from '@/lib/next-auth'
import React from 'react'
import { redirect } from 'next/navigation'


const page = async () => {
  const session = await getAuthSession()
  if (session?.user) {
    return redirect('/dashboard')
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizzy</CardTitle>
          <CardDescription>
            Quizzy is a platform that allows you to learn different topics at your own pace and also share them with friends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google"></SignInButton>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
