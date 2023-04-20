import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import Dropzone from '../Dropzone';

export function Modal({ modalState, handleModal }) {
	const [open, setOpen] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root
			show={modalState}
			as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={handleModal}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='h-[40rem] w-[70rem] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8'>
								<div className='bg-white w-full h-full '>
									<div className='sm:flex justify-center sm:items-center px-4 pb-3		 sm:pt-4'>
										<div className='mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-base text-center font-semibold leading-6 text-gray-900'>
												Crear publicación
											</Dialog.Title>
											<button className='absolute top-0 right-0 mt-3 mr-4 text-blue-600 hover:text-blue-800'>
												{/* <svg
													className='w-6 h-6 text-gray-400 hover:text-gray-500'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'>
													<path	
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}

														d='M6 18L18 6M6 6l12 12'
													/>
												</svg> */}
												Compartir
											</button>
										</div>
									</div>
									<div className='grid grid-cols-4 grid-rows-1 pb-[3.2rem] h-full'>
										<div className='container col-span-3 mx-auto h-full w-full'>
											<Dropzone />
										</div>
										<div className='bg-gray-50 min-h-fit'>
											<textarea
												className='w-full h-full p-4 outline-none resize-none'
												placeholder='Escribe una descripción'
											/>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
