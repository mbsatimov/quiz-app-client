'use client'

import { TCreateQuiz } from '@/lib/validation/quiz-schema'
import { Button, Image } from '@nextui-org/react'
import { X } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import { UseFormReturn } from 'react-hook-form'

interface ImageFieldProps {
	form: UseFormReturn<TCreateQuiz>
	itemIndex: number
}

export const ImageField: React.FC<ImageFieldProps> = ({ form, itemIndex }) => {
	const picture = form.watch(`questions.${itemIndex}.picture`)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: (acceptedFiles) => {
			form.setValue(`questions.${itemIndex}.picture`, acceptedFiles[0])
		},
		accept: {
			'image/png': ['.png', '.jpg', '.jpeg', '.webp', '.avif'],
		},
	})

	return (
		<div
			{...getRootProps()}
			className='group/image relative flex min-h-[100px] w-full cursor-pointer items-center justify-center rounded-md border-3 border-dashed'
		>
			<input {...getInputProps()} />

			<div className='cursor-pointer'>
				{picture ? (
					<Image
						src={
							typeof picture === 'string'
								? picture
								: URL.createObjectURL(picture)
						}
						alt='Uploaded image'
						className='max-h-80 max-w-full object-contain'
					/>
				) : (
					<p>Drag and drop image here or click to browse.</p>
				)}
				{picture ? (
					<Button
						className='absolute -right-2 -top-2 z-20 w-4 group-hover/image:visible group-hover/image:opacity-100 md:invisible md:opacity-0'
						radius='full'
						size='sm'
						variant='flat'
						color='danger'
						isIconOnly
						type='button'
						onClick={() =>
							form.setValue(`questions.${itemIndex}.picture`, null)
						}
					>
						<X size={16} />
					</Button>
				) : null}
			</div>
		</div>
	)
}
