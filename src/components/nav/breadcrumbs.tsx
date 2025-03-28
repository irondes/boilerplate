'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import MyUserButton from '../auth/my-user-button'

const capitalize = (
	str: string,
) =>
	str
		.charAt(0)
		.toUpperCase() +
	str.slice(1)

export function Breadcrumbs() {
	const pathname =
		usePathname()
	const paths = pathname
		.split('/')
		.filter(Boolean)

	return (
		<div className='flex w-full items-center justify-between'>
			<div className='text-sm flex-1 overflow-hidden'>
				{/* Breadcrumb Base */}
				<ul className='flex space-x-2'>
					<li>
						<Link
							href='/'
							className='text-blue-600 hover:underline'
						>
							Home
						</Link>
					</li>

					{/* Iterando pelas partes do caminho */}
					{paths.map(
						(path, index) => {
							const href = `/${paths.slice(0, index + 1).join('/')}`
							const isLast =
								index ===
								paths.length -
									1

							return (
								<Fragment
									key={href}
								>
									<li>
										<span className='text-gray-500'>
											/
										</span>
									</li>
									<li>
										{/* Se for o último, não coloca o link */}
										{isLast ? (
											<span className='font-semibold text-gray-700'>
												{capitalize(
													path,
												)}
											</span>
										) : (
											<Link
												href={
													href
												}
												className='text-blue-600 hover:underline'
											>
												{capitalize(
													path,
												)}
											</Link>
										)}
									</li>
								</Fragment>
							)
						},
					)}
				</ul>
			</div>

			{/* Botão de usuário */}
			<div className='ml-auto relative min-w-[50px]'>
				<MyUserButton />
			</div>
		</div>
	)
}
