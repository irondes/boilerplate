// components/views/responsive-form-sheet.tsx
'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useMediaQuery } from '@/hooks/use-media-query'

interface ResponsiveFormSheetProps {
	open?: boolean
	onOpenChange?: (
		open: boolean,
	) => void
	trigger: React.ReactNode
	title: string
	description?: string
	children: React.ReactNode
}

export function ResponsiveFormSheet({
	open,
	onOpenChange,
	trigger,
	title,
	description,
	children,
}: ResponsiveFormSheetProps) {
	const isDesktop =
		useMediaQuery(
			'(min-width: 768px)',
		)

	if (isDesktop) {
		return (
			<Sheet
				open={open}
				onOpenChange={
					onOpenChange
				}
			>
				<SheetTrigger asChild>
					{trigger}
				</SheetTrigger>
				<SheetContent
					side='right'
					className='w-[400px] sm:w-[540px] ml-10'
				>
					<SheetHeader>
						<SheetTitle>
							{title}
						</SheetTitle>
						{description && (
							<SheetDescription>
								{description}
							</SheetDescription>
						)}
					</SheetHeader>
					<div className='py-4 h-[calc(100vh-120px)] overflow-y-auto pr-2 mr-2 ml-2 flex w-full'>
						{children}
					</div>
				</SheetContent>
			</Sheet>
		)
	}

	return (
		<Dialog
			open={open}
			onOpenChange={
				onOpenChange
			}
		>
			<DialogTrigger asChild>
				{trigger}
			</DialogTrigger>
			<DialogContent className='max-h-[90vh] overflow-y-auto'>
				<SheetHeader className='text-left'>
					<SheetTitle>
						{title}
					</SheetTitle>
					{description && (
						<SheetDescription>
							{description}
						</SheetDescription>
					)}
				</SheetHeader>
				<div className='py-4'>
					{children}
				</div>
			</DialogContent>
		</Dialog>
	)
}
