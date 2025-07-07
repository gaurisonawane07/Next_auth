import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
} from '@react-email/components';

interface VerificationCodeEmailProps {
    username: string;
    otp: string;
}

export function VerificationEmail({ username, otp }: VerificationCodeEmailProps) {
    return (
        <Html lang="en">
            <Head>
                <title>Your Verification Code</title>
            </Head>
            <Body style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', backgroundColor: '#f6f6f6' }}>
                <Container style={{ margin: '0 auto', padding: '20px', maxWidth: '600px', backgroundColor: '#ffffff', border: '1px solid #e0e0e0' }}>
                    <Section style={{ padding: '20px' }}>
                        <Heading style={{ fontSize: '24px', textAlign: 'center', color: '#333333' }}>
                            Verify Your Account
                        </Heading>
                        <Text style={{ fontSize: '16px', color: '#555555', lineHeight: '24px' }}>
                            Hi **{username}**,
                        </Text>
                        <Text style={{ fontSize: '16px', color: '#555555', lineHeight: '24px' }}>
                            Here is your verification code:
                        </Text>
                        <Text style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', color: '#007bff', letterSpacing: '4px', margin: '20px 0' }}>
                            {otp}
                        </Text>
                        <Text style={{ fontSize: '16px', color: '#555555', lineHeight: '24px' }}>
                            Please use this code to complete your verification.
                        </Text>
                        <Text style={{ fontSize: '16px', color: '#555555', lineHeight: '24px' }}>
                            If you didn't request this code, please ignore this email.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

export default VerificationEmail;