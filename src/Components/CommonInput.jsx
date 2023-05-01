
export const CommonInput = ({ type = 'text', text = 'Ingrese un texto', isRequired, handleFunc, name = "" }) => {

	const handleInput = (e) => {
		handleFunc(e);
	};

  return (
		<input
			className='text-sm h-14 w-72 border rounded-md p-3'
			name="email"
			type={type}
			placeholder={text}
			required={isRequired}
			onChange={handleInput}
		/>
	);
}
