'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Form, useForm, FormProvider } from 'react-hook-form'
import { quizCreationSchema } from '@/schemas/form/quiz'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BookOpen, CopyCheck } from 'lucide-react'
import { Separator } from './ui/separator'

type Props = {}

type Input = z.infer<typeof quizCreationSchema>

const QuizCreation = (props: Props) => {
  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      amount: 3,
      topic: '',
      type: 'MCQ',
    },
  })

  const onSubmit = (input: Input) => {
    alert(JSON.stringify(input, null, 2))
  }

  form.watch()
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Quiz Creation</CardTitle>
          <CardDescription>Choose a Topic</CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a topic" {...field} />
                    </FormControl>
                    <FormDescription>Please provide a topic.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter an amount"
                        {...field}
                        type="number"
                        min={1}
                        max={10}
                        onChange={e => {
                          form.setValue('amount', parseInt(e.target.value))
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  type="button"
                  className="rounded-none rounded-l-lg w-1/2"
                  variant={form.getValues('type') === 'MCQ' ? 'default' : 'secondary'}
                  onClick={() => form.setValue('type', 'MCQ')}
                >
                  <CopyCheck className="h-4 w-4 mr-2" />
                  Multi Choice
                </Button>
                <Separator orientation="vertical" />
                <Button
                  type="button"
                  className="w-1/2 rounded-none rounded-r-lg"
                  variant={form.getValues('type') === 'Open_ended' ? 'default' : 'secondary'}
                  onClick={() => form.setValue('type', 'Open_ended')}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Open Ended
                </Button>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuizCreation
