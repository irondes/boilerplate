// app/pessoas/page.tsx
'use client'
import React, {
	useState,
} from 'react'
import type { Pessoas } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/views/data-table-dynamic'
import { Button } from '@/components/ui/button'
import {
	Pencil,
	PlusCircle,
	Trash2,
} from 'lucide-react'
import { ResponsiveFormSheet } from '@/components/views/responsive-form-sheet'
import { PessoasForm } from './pessoas-form'

const columns: ColumnDef<Pessoas>[] =
	[
		{
			accessorKey: 'nome',
			header: 'Nome',
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'cargo',
			header: 'Cargo',
		},
	]

const PessoasPage = () => {
	const [
		pessoas,
		setPessoas,
	] = useState<Pessoas[]>([])
	const [
		isSheetOpen,
		setIsSheetOpen,
	] = useState(false)
	const [
		currentPessoa,
		setCurrentPessoa,
	] =
		useState<Pessoas | null>(
			null,
		)

	const handleSubmitSuccess =
		(pessoa?: Pessoas) => {
			if (!pessoa) return

			if (currentPessoa) {
				// Edição
				setPessoas(
					pessoas.map((p) =>
						p.id === pessoa.id
							? pessoa
							: p,
					),
				)
			} else {
				// Adição
				setPessoas([
					...pessoas,
					{
						...pessoa,
						id: Date.now().toString(),
					},
				])
			}
			setIsSheetOpen(false)
			setCurrentPessoa(null)
		}

	const handleAddNew = () => {
		setCurrentPessoa(null)
		setIsSheetOpen(true)
	}

	const handleEdit = (
		pessoa: Pessoas,
	) => {
		setCurrentPessoa(pessoa)
		setIsSheetOpen(true)
	}

	const handleDelete = (
		pessoa: Pessoas,
	) => {
		setPessoas(
			pessoas.filter(
				(p) =>
					p.id !== pessoa.id,
			),
		)
	}

	const rowActions = (
		pessoa: Pessoas,
	) => (
		<div className='flex space-x-2'>
			<Button
				variant='ghost'
				size='sm'
				onClick={() =>
					handleEdit(pessoa)
				}
			>
				<Pencil className='h-4 w-4' />
			</Button>
			<Button
				variant='ghost'
				size='sm'
				onClick={() =>
					handleDelete(pessoa)
				}
			>
				<Trash2 className='h-4 w-4 text-red-500' />
			</Button>
		</div>
	)

	return (
		<div>
			<DataTable
				columns={columns}
				data={pessoas}
				searchKey='email'
				headerAction={
					<Button
						onClick={
							handleAddNew
						}
					>
						<PlusCircle className='mr-2 h-4 w-4' />
						Novo Usuário
					</Button>
				}
				rowActions={
					rowActions
				}
			/>

			<ResponsiveFormSheet
				open={isSheetOpen}
				onOpenChange={
					setIsSheetOpen
				}
				trigger={
					<Button className='hidden'>
						Trigger
					</Button>
				}
				title={
					currentPessoa
						? 'Editar Pessoa'
						: 'Nova Pessoa'
				}
				description='Preencha os dados abaixo'
			>
				<PessoasForm
					initialData={
						currentPessoa ||
						undefined
					}
					onSubmitSuccess={
						handleSubmitSuccess
					}
				/>
			</ResponsiveFormSheet>
		</div>
	)
}

export default PessoasPage
