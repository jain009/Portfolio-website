import React from 'react'


import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps={
    message: string;
    senderEmail: string;
}

export default function ContactFormEmail({
    message,senderEmail
}: ContactFormEmailProps){
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className='bg-gray-100'>
                    <Container>
                        <Section className=' bg-white borderBlack my-10 ppx-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>
                                You received the foloing message from the conatct form 
                            </Heading>
                            <Text>
                                {message}
                            </Text>
                            <Hr/>
                            <Text>Thd sender's email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}