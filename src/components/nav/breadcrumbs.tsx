// components/breadcrumbs.tsx
"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { capitalize } from "lodash";

export function Breadcrumbs() {
	const pathname = usePathname();
	const paths = pathname.split("/").filter(Boolean);

	return (
		<Breadcrumb className="text-sm">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>

				{paths.map((path, index) => {
					const href = `/${paths.slice(0, index + 1).join("/")}`;
					const isLast = index === paths.length - 1;

					return (
						<Fragment key={href}>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{capitalize(path)}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={href}>
										{capitalize(path)}
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
