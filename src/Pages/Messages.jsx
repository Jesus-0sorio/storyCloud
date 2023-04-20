import axios from 'axios';
import { useState, useEffect } from 'react';
import {Chats} from '../Components/messages/Chats'

const getUsers = async () => {
	const response = await axios.get('https://randomuser.me/api/?results=3');
	return response.data.results;
};

export const Messages = () => {
	const [users, setUsers] = useState([]);
	useEffect(async () => {
		const res = await getUsers();
		setUsers(res);
		console.log(users);
	}, []);

	return (
		<div className='pl-60'>
			<div className='grid grid-cols-5 p-7'>
				<div className='border rounded-l-lg h-[50rem]'>
					{users.map((user, key) => (
						<Chats
							key={key}
							picture={user.picture.thumbnail}
							username={user.name.first + ' ' + user.name.last}
						/>
					))}
				</div>
				<div className=' col-span-4 border rounded-r-lg h-[50rem]'>
					<Chats
						picture={users[0]?.picture.thumbnail}
						username={users[0]?.name.first + ' ' + users[0]?.name.last}
					/>
					<div className='p-3 flex items-end'>
						<div className='flex w-full'>
							<textarea
								type='text'
                className='border rounded-md resize-none outline-none px-2 py-1 w-full h-10'>
                

                    </textarea>
							<button className='absolute buttom-0 right-0 mt-[0.5rem] mr-12'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='  h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
