import React from 'react'

export const Chats = ({picture, username}) => {
  return (
		<div className='flex items-center p-2 border-b'>
			<img
				src={picture}
				alt='Profile'
				className='w-10 h-10 rounded-full mr-4'
			/>
			<div>
				<h2 className='text-lg font-semibold'>{username}</h2>
			</div>
		</div>
	);
}
