export const CommonInput = ({type = 'text', text = 'Ingrese un texto', isRequired, onChange}) => {
  return (
		<input
			className='text-sm h-14 w-72 border rounded-md p-3'
			type={type}
			placeholder={text}
			required={isRequired}
			onChange={onChange}
		/>
	);
}
