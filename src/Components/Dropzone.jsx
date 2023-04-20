import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {
	const [file, setFile] = useState(null);

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFile(acceptedFiles[0]);
		},
	});

	return (
		<div
			className='w-full h-full bg-gray-200 flex items-center justify-center'
			{...getRootProps()}>
			<input {...getInputProps()} />
			{file ? (
				<p>{file.name}</p>
			) : (
				<p>Arrastra una imagen aquí o haz clic para seleccionar una</p>
			)}
		</div>
	);
}

export default Dropzone;
