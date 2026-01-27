'use client';

import Container from '@/lib/Container';
import { Clock } from 'lucide-react';



// Mock data - replace with your actual data source
const quoteRequests = [
  {
    id: 1,
    status: 'pending',
    isEmergency: true,
    email: 'electrician@wirequote.com',
    description: 'Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there\'s existing lighting I want to replace...',
    price: 213.00,
    estimatedHours: 2,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    status: 'accepted',
    isEmergency: true,
    email: 'electrician@wirequote.com',
    description: 'Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there\'s existing lighting I want to replace...',
    price: 213.00,
    estimatedHours: 2,
    timestamp: '2 hours ago',
  },
  {
    id: 3,
    status: 'accepted',
    isEmergency: true,
    email: 'electrician@wirequote.com',
    description: 'Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there\'s existing lighting I want to replace...',
    price: 213.00,
    estimatedHours: 2,
    timestamp: '2 hours ago',
  },
];

export default function ViewQuotesSection() {
  const pendingCount = quoteRequests.filter(req => req.status === 'pending').length;

  return (
    <div className="p-6">
      <Container className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Quote Requests
          </h1>
          <p className="text-gray-600 text-sm">
            Review and manage incoming job requests
          </p>
        </div>

        {/* Pending Approval Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
          <span className="text-gray-900 font-medium">
            Pending Approval ({pendingCount})
          </span>
        </div>

        {/* Quote Request Cards */}
        <div className="space-y-4">
          {quoteRequests.map((request) => (
            <QuoteCard key={request.id} request={request} />
          ))}
        </div>
      </Container>
    </div>
  );
}

function QuoteCard({ request }: QuoteCardProps) {
  return (
    <div className="border border-[#E5E5E5] rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
      {/* Header with badges and price */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Emergency Badge */}
          {request.isEmergency && (
            <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded">
              EMERGENCY
            </span>
          )}
          
          {/* Status Badge */}
          {request.status === 'pending' ? (
            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded">
              Pending
            </span>
          ) : (
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded">
              Accepted
            </span>
          )}
          
          {/* Timestamp */}
          <span className="text-gray-500 text-sm">
            {request.timestamp}
          </span>
        </div>

        {/* Price */}
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">
            £{request.price.toFixed(2)}
          </div>
          <div className="text-xs text-gray-500">
            inc. VAT
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="text-sm text-gray-600 mb-3">
        {request.email}
      </div>

      {/* Job Description */}
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-2">
          Job Description
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {request.description}
        </p>
      </div>

      {/* Estimated Time */}
      <div className="flex items-center gap-2 text-gray-600">
        <Clock className="w-4 h-4" />
        <span className="text-sm">
          {request.estimatedHours} Hrs Estimated
        </span>
      </div>
    </div>
  );
}