'use client'
import React from 'react'

import type { Pessoas } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/table/data-table-dynamic'
import { Button } from '@/components/ui/button'
import { Pencil, PlusCircle, Trash2 } from 'lucide-react'

const columns: ColumnDef<Pessoas>[] = [
{
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "cargo",
    header: "Cargo",
  },
]

// Dados de exemplo (substitua por chamada API real)
const pessoas: Pessoas[] = [
  { id: "1", nome: "João Silva", email: "joao@exemplo.com", cargo: "Desenvolvedor" },
  { id: "2", nome: "Maria Souza", email: "maria@exemplo.com", cargo: "Designer" },
  { id: "3", nome: "Carlos Oliveira", email: "carlos@exemplo.com", cargo: "Gerente" },
]


const PessoasPage = () => {

  // Funções de ação para os botões da tabela e do cabeçalho
    const handleAddUser = () => {
    console.log("Adicionar novo usuário")
    // Sua lógica para adicionar usuário
  }

  const handleEdit = (user: Pessoas) => {
    console.log("Editar usuário:", user)
    // Sua lógica para edição
  }

  const handleDelete = (user: Pessoas) => {
    console.log("Excluir usuário:", user)
    // Sua lógica para exclusão
  }

  // Botão de ação no header
  const headerAction = (
    <Button onClick={handleAddUser}>
      <PlusCircle className="mr-2 h-4 w-4" />
      Novo Usuário
    </Button>
  )

  // Ações para cada linha
  const rowActions = (user: Pessoas) => (
    <div className="flex space-x-2">
      <Button 
        variant="ghost" 
        size="sm"
        onClick={() => handleEdit(user)}
      >
        <Pencil className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm"
        onClick={() => handleDelete(user)}
      >
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  )
  return (
 <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Lista de Usuários</h1>
      <DataTable 
        columns={columns} 
        data={pessoas} 
        searchKey="email" // Define por qual campo a pesquisa vai filtrar
        headerAction={headerAction}
        rowActions={rowActions}
      />
    </div>
  )
}

export default PessoasPage