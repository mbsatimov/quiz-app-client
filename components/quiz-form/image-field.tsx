'use client'

import { TCreateQuizSchema } from '@/lib/validation/quiz-schema'
import { Button, Image } from '@nextui-org/react'
import { X } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import { UseFormReturn } from 'react-hook-form'

interface ImageFieldProps {
	form: UseFormReturn<TCreateQuizSchema>
	itemIndex: number
}

export const ImageField: React.FC<ImageFieldProps> = ({ form, itemIndex }) => {
	const image = form.watch(`quizItems.${itemIndex}.image`)

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: (acceptedFiles) => {
			form.setValue(`quizItems.${itemIndex}.image`, acceptedFiles[0])
		},
	})
	return (
		<div
			{...getRootProps()}
			className='group/image relative cursor-pointer border-3 border-dashed rounded-md flex items-center justify-center min-h-[100px] w-full'
		>
			<input
				{...getInputProps({
					accept: 'image/png, image/jpeg, image/jpg, image/webp',
				})}
			/>

			<div className='cursor-pointer'>
				{image ? (
					<Image
						src={URL.createObjectURL(image)}
						alt='Uploaded image'
						className='max-h-80 max-w-full object-contain'
					/>
				) : (
					<p>Drag and drop image here or click to browse.</p>
				)}
				{image ? (
					<Button
						className='group-hover/image:opacity-100 md:opacity-0 group-hover/image:visible md:invisible absolute -right-2 -top-2 w-4'
						radius='full'
						size='sm'
						variant='flat'
						color='danger'
						isIconOnly
						type='button'
						onClick={() => form.setValue(`quizItems.${itemIndex}.image`, null)}
					>
						<X size={16} />
					</Button>
				) : null}
			</div>
		</div>
	)
}
