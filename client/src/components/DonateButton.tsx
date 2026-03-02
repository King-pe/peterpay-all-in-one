/**
 * ============================================================================
 * PROPRIETARY SOFTWARE - KING-PE
 * ============================================================================
 * 
 * Copyright © 2026 King-pe. All rights reserved.
 * 
 * This file is part of PeterPay All-in-One and is protected by copyright law.
 * Unauthorized copying, modification, distribution, or use of this file is
 * strictly prohibited without explicit written permission from King-pe.
 * 
 * For commercial use or licensing inquiries, contact: [INSERT CONTACT EMAIL]
 * 
 * Donation for commercial use: TSh 15,000 via M-Pesa
 * 
 * ============================================================================
 */

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

interface DonateButtonProps {
  className?: string;
  showLabel?: boolean;
}

export function DonateButton({ className = "", showLabel = true }: DonateButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDonateClick = () => {
    // Open donation modal or redirect to payment page
    const message = `
Support PeterPay All-in-One Development

To use this code commercially or to support continued development, please donate TSh 15,000 via M-Pesa.

Payment Details:
- Amount: TSh 15,000
- Method: M-Pesa
- Recipient: [INSERT M-PESA NUMBER]

After donation, you will receive:
- Commercial usage rights
- Access to priority support
- License certificate
- Usage tracking exemption

For more information, contact: [INSERT CONTACT EMAIL]
    `;
    
    // In a real implementation, this would open a payment modal or redirect to a payment gateway
    alert(message);
  };

  return (
    <Button
      onClick={handleDonateClick}
      className={`${className} ${
        isHovered ? "bg-red-600 hover:bg-red-700" : "bg-pink-500 hover:bg-pink-600"
      } text-white transition-colors duration-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Heart className={`w-4 h-4 ${isHovered ? "fill-current" : ""} mr-2`} />
      {showLabel && "Donate TSh 15,000"}
    </Button>
  );
}
