import LogoutButton from '@/app/components/LogoutButton';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

export default async function Dashboard() { 
    const dashboard = () => {
        const session = await getServerSession();

        if(!session) {
            redirect("/");
        }

    return (
        <div>
        <div>Ola, {session?.user?.name}</div>
        <div><LogoutButton/></div>
        </div>
  )
}
}
export default Dashboard

