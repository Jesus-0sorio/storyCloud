import React, { useEffect, useState } from 'react';
import { PostTopBar } from './PostTopBar';
import { PostBottomBar  } from './PostBottomBar';
import { useUser } from '../../hooks/useUser';

export const Post = ({ post }) => {

	return (
		<>
			<div className='bg-gray-100 rounded-md shadow-md w-2/3'>
				<PostTopBar create_by={post?.create_by}/>
				<img
					src={`${import.meta.env.VITE_BASE_URL}${post.fileUrl}`}
					alt={post.description}
					className='w-full object-cover'
				/>
				<PostBottomBar post={post}/>
			</div>
		</>
	);
};
