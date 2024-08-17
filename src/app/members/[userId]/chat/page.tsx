import React from 'react';
import {CardHeader} from "@nextui-org/card";
import {CardBody, Divider} from "@nextui-org/react";

function ChatPage() {
    return (
        <>
            <CardHeader className={'text-2xl font-semibold text-secondary'}>
                Chat
            </CardHeader>
            <Divider/>
            <CardBody>
                Chat goes here
            </CardBody>
        </>
    );
}

export default ChatPage;