'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProcessingPage() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
                {/* Animated processing icon */}
                <div className="mb-6">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Processing Your Recording{dots}
                </h1>

                <div className="space-y-4 text-left mb-6">
                    <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                        <div>
                            <p className="font-medium text-gray-900">Upload Complete</p>
                            <p className="text-sm text-gray-600">Your recording has been received</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="text-blue-500 mr-3 mt-1 text-xl animate-pulse">⟳</div>
                        <div>
                            <p className="font-medium text-gray-900">Generating Notes</p>
                            <p className="text-sm text-gray-600">Creating comprehensive study materials</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1 text-xl">○</span>
                        <div>
                            <p className="font-medium text-gray-400">Sending Email</p>
                            <p className="text-sm text-gray-600">Delivering your notes</p>
                        </div>
                    </div>
                </div>

                {/* Email confirmation */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-700">
                        <span className="font-medium">📧 Check your email:</span>
                        {email && (
                            <span className="block mt-1 text-blue-700">{email}</span>
                        )}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                        Your study notes will arrive in few minutes
                    </p>
                </div>

                {/* What happens next */}
                <div className="text-left space-y-2 mb-6">
                    <h2 className="font-semibold text-gray-900 text-sm">What happens next:</h2>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI is generating comprehensive notes</li>
                        <li>• Notes will be emailed to you shortly</li>
                        <li>• Your recording will be automatically deleted</li>
                    </ul>
                </div>

                {/* Privacy note */}
                <div className="bg-gray-50 rounded-lg p-3 mb-6">
                    <p className="text-xs text-gray-600">
                        🔒 Your recording is deleted immediately after processing. We only keep the generated notes.
                    </p>
                </div>

                {/* Action buttons */}
                <div className="space-y-3">
                    <Link
                        href="/upload"
                        className="block w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Upload Another Recording
                    </Link>

                    <Link
                        href="/"
                        className="block w-full bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>

                {/* Check spam notice */}
                <p className="text-xs text-gray-500 mt-4">
                    Don't see the email? Check your spam folder or wait a few more minutes.
                </p>
            </div>
        </div>
    );
}
