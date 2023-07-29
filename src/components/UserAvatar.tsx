import React from 'react'
import { User } from 'next-auth'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Image } from 'next/dist/client/image-component'
type Props = {
  user: Pick<User, 'name' | 'image'>
}

const UserAvatar = ({user}: Props) => {
  return (
    <Avatar>
      {user?.image ? (
        <div className='relative w-full h-full aspect-square'>
            <Image fill src={user?.image} alt="profile image" referrerPolicy='no-referrer' />
        </div>
      ) : (
        <AvatarFallback>{user?.name}</AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
