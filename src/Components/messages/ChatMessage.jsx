import React from 'react';

export const ChatMessage = ({ message, isMine }) => {
	const containerClasses = isMine ? 'mt-2 flex justify-end' : 'mt-2 flex justify-start';
	const messageClasses = isMine
		? 'bg-blue-500 text-white rounded-tl-md rounded-br-md rounded-bl-md py-2 px-4'
		: 'bg-gray-200 rounded-tr-md rounded-bl-md rounded-br-md py-2 px-4';

	return (
		<div className={containerClasses}>
			<div className={messageClasses}>
				<p className='text-sm'>{message}</p>
			</div>
		</div>
	);
};
