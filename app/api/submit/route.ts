import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, testType, noteFormat, fileUrl, sourceType, fileName } = body;

        // Validate required fields
        if (!email || !testType || !fileUrl) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Get n8n webhook URL from environment
        const webhookUrl = process.env.N8N_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('N8N_WEBHOOK_URL not configured');
            return NextResponse.json(
                { error: 'Webhook not configured' },
                { status: 500 }
            );
        }

        // Call n8n webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                testType,
                noteFormat,
                fileUrl,
                sourceType,
                fileName,
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('n8n webhook failed:', response.status, errorText);
            throw new Error('Workflow trigger failed');
        }

        const result = await response.json();

        return NextResponse.json({
            success: true,
            message: 'Your recording is being processed. Check your email in 15-20 minutes.'
        });
    } catch (error) {
        console.error('Submit error:', error);
        return NextResponse.json(
            { error: 'Failed to process submission' },
            { status: 500 }
        );
    }
}