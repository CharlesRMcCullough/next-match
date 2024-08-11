import React from 'react';
import {Member} from "@prisma/client";
import {Card, CardFooter, Image} from "@nextui-org/react";
import Link from "next/link";
import {calculateAge} from "@/lib/util";

type Props = {
    member: Member;
}

function MemberCard({member}: Props) {
    return (
        <Card fullWidth
            as={Link}
            href={`/members/${member.userId}`}
            isPressable >
            <Image
                isZoomed
                alt={member.name}
                width={300}
                src={member.image || '/images/user.png'}
                className='aspect-square object-cover'
            />
            <CardFooter
                className="flex justify-smart bg-black overflow-hidden absolute bottom-0 z-10 bg-gradient">
                <div className='flex flex-col text-white'>
                    <span className='font-semibold'>{member.name}, {calculateAge(member.dateOfBirth)}</span>
                    <span className='text-sm>'>{member.city}</span>
                </div>
            </CardFooter>
        </Card>
    );
}

export default MemberCard;