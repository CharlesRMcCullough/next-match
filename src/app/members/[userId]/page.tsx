import React from 'react'
import {getMemberByUserId, getMembers} from "@/app/actions/memberActions";
import {notFound} from "next/navigation";
import {CardHeader} from "@nextui-org/card";
import {CardBody, Divider} from "@nextui-org/react";

export default async function MemberDetailPage({params}: {params: {userId: string}}) {
  const member = await getMemberByUserId(params.userId);
  if (!member)
    return notFound();

  return (
    <>
      <CardHeader className={'text-2xl font-semibold text-secondary'}>
        Profile
      </CardHeader>
      <Divider />
      <CardBody>
        {member.description}
      </CardBody>
    </>
  )
}
