'use client';

import Container from '@/lib/Container';
import { Clock } from 'lucide-react';
import PageHeader from './PageHeader';
import { MdOutlineWatchLater } from "react-icons/md";
import { useState } from 'react';
import AcceptModal from './AcceptModal';

type QuoteStatus = 'pending' | 'accepted';

type QuoteRequest = {
  id: number;
  status: QuoteStatus;
  isEmergency: boolean;
  email: string;
  description: string;
  price: number;
  estimatedHours: number;
  timestamp: string;
};

const quoteRequests: QuoteRequest[] = [
  {
    id: 1,
    status: 'pending',
    isEmergency: true,
    email: 'electrician@wirequote.com',
    description:
      "Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there's existing lighting I want to replace...",
    price: 213.0,
    estimatedHours: 2,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    status: 'accepted',
    isEmergency: true,
    email: 'electrician@wirequote.com',
    description:
      "Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there's existing lighting I want to replace...",
    price: 213.0,
    estimatedHours: 2,
    timestamp: '2 hours ago',
  },
  {
    id: 3,
    status: 'accepted',
    isEmergency: true,
    email: 'electrician@wirequote.com',
    description:
      "Install 5 new LED downlights in the kitchen. The ceiling is plasterboard and there's existing lighting I want to replace...",
    price: 213.0,
    estimatedHours: 2,
    timestamp: '2 hours ago',
  },
];

export default function ViewQuotesSection() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const pendingCount = quoteRequests.filter(
    (req) => req.status === 'pending'
  ).length;

  return (
    <div className="py-6">
      <Container className="max-w-[1200px] mx-auto px-6">

        <PageHeader
          title="Quote Requests"
          subtitle="Review and manage incoming job requests"
          className="mb-6"
        />

        <div className="flex items-center gap-2 mb-6">
          <MdOutlineWatchLater size={20} className="text-primary" />
          <span className="text-[#0A0A0A] font-semibold text-lg">
            Pending Approval ({pendingCount})
          </span>
        </div>

        <div className="space-y-4">
          {quoteRequests.map((request) => {
            const isPending = request.status === 'pending';

            return (
              <div
                key={request.id}
                className="border border-[#E5E5E5] rounded-xl p-6 bg-white hover:shadow-md transition-shadow duration-300"
              >
                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    {request.isEmergency && (
                      <span className="px-3 py-1 bg-[#FF25253D] text-[#FF2525] text-sm rounded-lg">
                        EMERGENCY
                      </span>
                    )}

                    <div>
                      {isPending ? (
                        // Pending button (no click)
                        <button
                          className="px-3 py-1 text-sm rounded-lg text-white bg-[#FD7C1F] cursor-pointer"
                          disabled
                        >
                          Pending
                        </button>
                      ) : (
                        // Accepted button (clickable, opens modal) + modal
                        <>
                          <button
                            className="px-3 py-1 text-sm rounded-lg text-white bg-[#08BA23] cursor-pointer"
                            onClick={() => setShowModal(true)}
                          >
                            Accepted
                          </button>
                          <AcceptModal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                          />
                        </>
                      )}
                    </div>

                    <span className="text-[#5C5C5C] text-sm">
                      {request.timestamp}
                    </span>
                  </div>

                  <div className="text-left md:text-right">
                    <div className="text-2xl font-bold text-[#030213]">
                      £{request.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-[#5C5C5C]">
                      inc. VAT
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="text-sm text-[#5C5C5C] mb-3">
                  {request.email}
                </div>

                <div className="text-sm text-[#5C5C5C] mb-2">
                  Job Description
                </div>
                <div className="lg:flex items-start justify-between">
                  {/* Job Description */}
                  <div>
                    <p className="text-sm text-[#030213] font-bold mb-2 lg:mb-0">
                      {request.description}
                    </p>
                  </div>

                  {/* Estimated Time */}
                  <div className="flex items-center gap-2 text-[#5C5C5C]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {request.estimatedHours} Hrs Estimated
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* modal  */}
      </Container>
    </div>
  );
}
