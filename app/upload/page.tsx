'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';

type UploadMethod = 'file' | 'drive';
type TestType = 'act-sat' | 'lsat' | 'mcat';
type NoteFormat = 'standard' | 'nd-enhanced';

export default function UploadPage() {
    const router = useRouter();
    const [uploadMethod, setUploadMethod] = useState<UploadMethod>('file');
    const [file, setFile] = useState<File | null>(null);
    const [driveLink, setDriveLink] = useState('');
    const [testType, setTestType] = useState<TestType>('act-sat');
    const [noteFormat, setNoteFormat] = useState<NoteFormat>('standard');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState('');

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                setFile(acceptedFiles[0]);
                setError('');
            }
        },
        accept: {
            'audio/*': ['.m4a', '.mp3', '.wav', '.aac', '.ogg'],
            'video/*': ['.mp4', '.mov', '.avi', '.mkv']
        },
        maxSize: 2 * 1024 * 1024 * 1024, // 2GB
        multiple: false,
        disabled: uploadMethod === 'drive'
    });

    const validateGoogleDriveLink = (link: string): boolean => {
        const patterns = [
            /^https:\/\/drive\.google\.com\/file\/d\/[^\/]+/,
            /^https:\/\/drive\.google\.com\/open\?id=[^&]+/,
        ];
        return patterns.some(pattern => pattern.test(link));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        if (!consent) {
            setError('Please confirm you have permission to record this session');
            return;
        }

        if (uploadMethod === 'file' && !file) {
            setError('Please select a file to upload');
            return;
        }

        if (uploadMethod === 'drive' && !driveLink) {
            setError('Please enter a Google Drive link');
            return;
        }

        if (uploadMethod === 'drive' && !validateGoogleDriveLink(driveLink)) {
            setError('Please enter a valid Google Drive link');
            return;
        }

        setIsUploading(true);

        try {
            let fileUrl = '';

            if (uploadMethod === 'file' && file) {
                // Upload file to Vercel Blob
                const formData = new FormData();
                formData.append('file', file);

                const uploadResponse = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!uploadResponse.ok) {
                    throw new Error('File upload failed');
                }

                const { url } = await uploadResponse.json();
                fileUrl = url;
            } else {
                fileUrl = driveLink;
            }

            // Submit to n8n workflow
            const submitResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    testType,
                    noteFormat: testType === 'act-sat' ? noteFormat : 'standard',
                    fileUrl,
                    sourceType: uploadMethod,
                    fileName: file?.name || 'Google Drive Recording'
                }),
            });

            if (!submitResponse.ok) {
                throw new Error('Submission failed');
            }

            // Redirect to processing page
            router.push(`/processing?email=${encodeURIComponent(email)}`);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
            setIsUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Turn Any Session Into Study Notes
                    </h1>
                    <p className="text-lg text-gray-600">
                        Receive comprehensive study notes in few minutes
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Upload Method Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                How do you want to share your recording?
                            </label>
                            <div className="space-y-2">
                                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                    style={{ borderColor: uploadMethod === 'file' ? '#3b82f6' : '#e5e7eb' }}>
                                    <input
                                        type="radio"
                                        value="file"
                                        checked={uploadMethod === 'file'}
                                        onChange={(e) => setUploadMethod(e.target.value as UploadMethod)}
                                        className="mr-3"
                                    />
                                    <div>
                                        <div className="font-medium text-gray-900">Upload a file</div>
                                        <div className="text-sm text-gray-500">From your phone, computer, or device</div>
                                    </div>
                                </label>

                                <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                    style={{ borderColor: uploadMethod === 'drive' ? '#3b82f6' : '#e5e7eb' }}>
                                    <input
                                        type="radio"
                                        value="drive"
                                        checked={uploadMethod === 'drive'}
                                        onChange={(e) => setUploadMethod(e.target.value as UploadMethod)}
                                        className="mr-3"
                                    />
                                    <div>
                                        <div className="font-medium text-gray-900">Google Drive link</div>
                                        <div className="text-sm text-gray-500">For Google Meet recordings or shared files</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* File Upload or Drive Link */}
                        {uploadMethod === 'file' ? (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Recording file
                                </label>
                                <div
                                    {...getRootProps()}
                                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                    ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
                    ${file ? 'bg-green-50 border-green-500' : ''}`}
                                >
                                    <input {...getInputProps()} />
                                    {file ? (
                                        <div>
                                            <p className="text-green-700 font-medium">{file.name}</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                                            </p>
                                            <p className="text-sm text-blue-600 mt-2">Click or drag to replace</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="text-gray-600">
                                                {isDragActive ? 'Drop your file here' : 'Drag & drop your recording here'}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-2">or click to browse</p>
                                            <p className="text-xs text-gray-400 mt-2">
                                                Supports audio and video files up to 2GB
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <label htmlFor="driveLink" className="block text-sm font-medium text-gray-700 mb-2">
                                    Google Drive link
                                </label>
                                <input
                                    type="url"
                                    id="driveLink"
                                    value={driveLink}
                                    onChange={(e) => setDriveLink(e.target.value)}
                                    placeholder="https://drive.google.com/file/d/..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Make sure the link is set to "Anyone with the link can view"
                                </p>
                            </div>
                        )}

                        {/* Test Type */}
                        <div>
                            <label htmlFor="testType" className="block text-sm font-medium text-gray-700 mb-2">
                                What type of session is this?
                            </label>
                            <select
                                id="testType"
                                value={testType}
                                onChange={(e) => setTestType(e.target.value as TestType)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white appearance-none"
                                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                            >
                                <option value="act-sat">ACT/SAT Prep</option>
                                <option value="lsat">LSAT Prep</option>
                                <option value="mcat">MCAT Prep</option>
                            </select>
                        </div>

                        {/* Note Format (only for ACT/SAT) */}
                        {testType === 'act-sat' && (
                            <div>
                                <label htmlFor="noteFormat" className="block text-sm font-medium text-gray-700 mb-2">
                                    Note format
                                </label>
                                <select
                                    id="noteFormat"
                                    value={noteFormat}
                                    onChange={(e) => setNoteFormat(e.target.value as NoteFormat)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white appearance-none"
                                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                                >
                                    <option value="standard">Standard Notes</option>
                                    <option value="nd-enhanced">ND-Enhanced (optimized for ADHD, autism, dyslexia)</option>
                                </select>
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                We'll email your study notes here (usually within 20 minutes)
                            </p>
                        </div>

                        {/* Consent */}
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="consent"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="mt-1 mr-3"
                                required
                            />
                            <label htmlFor="consent" className="text-sm text-gray-700">
                                I confirm that I have permission to record this session and that all participants
                                have been informed of the recording
                            </label>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isUploading}
                            className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                        >
                            {isUploading ? 'Processing...' : 'Generate Study Notes'}
                        </button>
                    </form>

                    {/* Privacy Note */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                            🔒 <strong>Privacy first:</strong> Your recording is deleted immediately after processing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
