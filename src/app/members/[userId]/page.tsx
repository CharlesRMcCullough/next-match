import React from 'react'
import {getMemberByUserId, getMembers} from "@/app/actions/memberActions";
import {notFound} from "next/navigation";

export default async function MemberDetailPage({params}: {params: {userId: string}}) {
  const member = await getMemberByUserId(params.userId);
  if (!member)
    return notFound();

  return (
    <div>{member.name}
      
    </div>
  )
}
