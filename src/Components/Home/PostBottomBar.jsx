import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";

export const PostBottomBar = () => {
	return (
		<>
			<div className='h-1/2 bg-gray-200 rounded-b-md space-y-2'>
				<div className='flex items-center justify-between py-2 px-6'>
					<div className='flex items-center'>
						<button className='flex items-center text-gray-700 mr-6 space-x-2'>
							<AiOutlineHeart className='text-3xl' />
							<span className='font-semibold'>1,234</span>
						</button>
						<button className='flex items-center text-gray-700 space-x-2'>
							<FaRegComment className='text-2xl' />
							<span className='font-semibold'>Comentar</span>
						</button>
					</div>
					<button className='flex items-center text-gray-700 space-x-2'>
                        <BiBookmark className='text-2xl' />
                        <span className='font-semibold'>Guardar</span>
                    </button>
				</div>
			</div>
		</>
	);
};
