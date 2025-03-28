// components/pessoas/pessoas-form.tsx
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
//import { toast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import type { Pessoas } from '@/types'

// Esquema de validação com tipos compatíveis com Pessoas
const formSchema = z.object({
	id: z.string().optional(),
	nome: z.string().min(2, {
		message:
			'Nome deve ter pelo menos 2 caracteres',
	}),
	email: z.string().email({
		message:
			'Digite um e-mail válido',
	}),
	cargo: z.string().min(2, {
		message:
			'Cargo deve ter pelo menos 2 caracteres',
	}),
	telefone: z
		.string()
		.optional(),
	dataNascimento: z
		.string()
		.optional(),
})

// Tipo inferido do schema que é compatível com Pessoas
type PessoasFormValues =
	z.infer<
		typeof formSchema
	> & { id?: string }

interface PessoasFormProps {
	initialData?: Partial<Pessoas>
	onSubmitSuccess?: (
		values: Pessoas,
	) => void // Agora exige Pessoas, não opcional
}

export function PessoasForm({
	initialData,
	onSubmitSuccess,
}: PessoasFormProps) {
	const form =
		useForm<PessoasFormValues>(
			{
				resolver: zodResolver(
					formSchema,
				),
				defaultValues:
					initialData || {
						nome: '',
						email: '',
						cargo: '',
						telefone: '',
						dataNascimento:
							'',
					},
			},
		)

	const [
		loading,
		setLoading,
	] = useState(false)

	async function onSubmit(
		values: PessoasFormValues,
	) {
		try {
			setLoading(true)

			// Simulação de chamada à API
			await new Promise(
				(resolve) =>
					setTimeout(
						resolve,
						1000,
					),
			)

			// Garante que o objeto retornado seja do tipo Pessoas
			const result: Pessoas =
				{
					id:
						values.id ||
						Date.now().toString(),
					nome: values.nome,
					email: values.email,
					cargo: values.cargo,
					...(values.telefone && {
						telefone:
							values.telefone,
					}),
					...(values.dataNascimento && {
						dataNascimento:
							values.dataNascimento,
					}),
				}

			// toast({
			// 	title: 'Sucesso!',
			// 	description:
			// 		initialData?.id
			// 			? 'Dados atualizados com sucesso.'
			// 			: 'Pessoa cadastrada com sucesso.',
			// })

			onSubmitSuccess?.(
				result,
			)
		} catch (error) {
			// toast({
			// 	title: 'Erro',
			// 	description:
			// 		'Ocorreu um erro ao salvar. Tente novamente.',
			// 	variant:
			// 		'destructive',
			// })
			console.error(
				'Erro ao salvar:',
				error,
			)
		} finally {
			setLoading(false)
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(
					onSubmit,
				)}
				className='space-y-4 flex w-full flex-col'
			>
				{/* Campos do formulário */}
				<Button
					type='submit'
					disabled={loading}
					className='w-full flex flex-row items-center justify-center'
				>
					{loading && (
						<Loader2 className='mr-2 h-4 w-4 animate-spin' />
					)}
					{initialData?.id
						? 'Atualizar'
						: 'Cadastrar'}
				</Button>
			</form>
		</Form>
	)
}
