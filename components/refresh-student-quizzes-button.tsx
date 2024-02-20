'use client'

import { QUIZ_QUERY_KEY } from '@/const/query-keys'
import { Button } from '@nextui-org/react'
import { useQueryClient } from '@tanstack/react-query'
import { RefreshCwIcon } from 'lucide-react'

export const RefreshStudentQuizzesButton = () => {
	const queryClient = useQueryClient()

	const handleClick = () => {
		queryClient.invalidateQueries({ queryKey: [QUIZ_QUERY_KEY, 'visible'] })
	}

	return (
		<Button
			onClick={handleClick}
			startContent={<RefreshCwIcon size={18} />}
			variant='flat'
			color='primary'
		>
			Refresh
		</Button>
	)
}
