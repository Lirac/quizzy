'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import D3Cloud from 'react-d3-cloud'

type Props = {}

const data = [
  { text: 'Vue', value: 10 },
  { text: 'Computer', value: 5 },
  { text: 'Svelte', value: 8 },
  { text: 'AWS', value: 6 },
  { text: 'React', value: 3 },
  { text: 'Tailwind', value: 1 },
]

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16
}

const CustomWordCloud = (props: Props) => {
  const theme = useTheme()
  return (
    <>
      <D3Cloud
        data={data}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === 'dark' ? 'white' : 'black'}
      />
    </>
  )
}

export default CustomWordCloud
