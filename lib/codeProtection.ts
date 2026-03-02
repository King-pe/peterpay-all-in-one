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

/**
 * Code Protection and Usage Tracking Module
 * 
 * This module provides mechanisms to:
 * 1. Detect unauthorized usage of the codebase
 * 2. Track code execution and usage patterns
 * 3. Log potential violations
 * 4. Notify developers of unauthorized access
 */

interface UsageLog {
  timestamp: Date;
  location: string;
  context: string;
  severity: 'info' | 'warning' | 'critical';
  details: Record<string, unknown>;
}

class CodeProtectionManager {
  private usageLogs: UsageLog[] = [];
  private isAuthorized: boolean = false;
  private authorizationToken: string | null = null;

  constructor() {
    this.initializeProtection();
  }

  /**
   * Initialize code protection mechanisms
   */
  private initializeProtection(): void {
    this.checkAuthorization();
    this.setupUsageTracking();
    this.logInitialization();
  }

  /**
   * Check if the current environment is authorized to use this code
   */
  private checkAuthorization(): void {
    // Check for authorization token in environment variables
    this.authorizationToken = process.env.PETERPAY_AUTH_TOKEN || null;
    
    // Check for license file
    const hasLicense = this.checkLicenseFile();
    
    // Check for donation marker
    const hasDonationMarker = this.checkDonationMarker();
    
    this.isAuthorized = hasLicense || hasDonationMarker || !!this.authorizationToken;
    
    if (!this.isAuthorized) {
      this.logUnauthorizedUsage();
    }
  }

  /**
   * Check if a valid license file exists
   */
  private checkLicenseFile(): boolean {
    try {
      // This would check for a license file in the project root
      // In a real implementation, this would verify the license signature
      return false; // Default to false for security
    } catch {
      return false;
    }
  }

  /**
   * Check for donation marker or commercial use authorization
   */
  private checkDonationMarker(): boolean {
    try {
      // Check for a donation marker file that would be created after payment
      // This is a placeholder for the actual implementation
      return false;
    } catch {
      return false;
    }
  }

  /**
   * Setup usage tracking
   */
  private setupUsageTracking(): void {
    // Track when the code is being used
    this.logUsage('initialization', 'Code protection module initialized', 'info');
  }

  /**
   * Log code usage
   */
  private logUsage(
    location: string,
    context: string,
    severity: 'info' | 'warning' | 'critical' = 'info',
    details: Record<string, unknown> = {}
  ): void {
    const log: UsageLog = {
      timestamp: new Date(),
      location,
      context,
      severity,
      details: {
        ...details,
        authorized: this.isAuthorized,
        environment: process.env.NODE_ENV || 'development',
      },
    };

    this.usageLogs.push(log);

    // Log to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[PeterPay Protection] ${severity.toUpperCase()}: ${context}`);
    }

    // Send critical logs to monitoring service
    if (severity === 'critical') {
      this.sendCriticalLog(log);
    }
  }

  /**
   * Log unauthorized usage
   */
  private logUnauthorizedUsage(): void {
    this.logUsage(
      'authorization_check',
      'Unauthorized usage detected. This code requires a license or donation of TSh 15,000.',
      'critical',
      {
        unauthorizedAccess: true,
        requiresDonation: true,
        donationAmount: 'TSh 15,000',
      }
    );
  }

  /**
   * Log initialization
   */
  private logInitialization(): void {
    this.logUsage(
      'initialization',
      `PeterPay All-in-One initialized. Authorization status: ${this.isAuthorized ? 'AUTHORIZED' : 'UNAUTHORIZED'}`,
      this.isAuthorized ? 'info' : 'warning'
    );
  }

  /**
   * Send critical logs to monitoring service
   */
  private sendCriticalLog(log: UsageLog): void {
    // In a real implementation, this would send logs to a monitoring service
    // For now, we'll just log it locally
    if (process.env.NODE_ENV === 'production') {
      // Send to monitoring endpoint
      console.error('[CRITICAL] Code Protection Alert:', log);
    }
  }

  /**
   * Get usage logs
   */
  public getLogs(): UsageLog[] {
    return [...this.usageLogs];
  }

  /**
   * Check if code is authorized
   */
  public isCodeAuthorized(): boolean {
    return this.isAuthorized;
  }

  /**
   * Get authorization status message
   */
  public getAuthorizationStatus(): string {
    if (this.isAuthorized) {
      return 'This code is properly authorized for use.';
    }
    return 'This code requires authorization. Please contact King-pe or make a donation of TSh 15,000 to use this code commercially.';
  }
}

// Create and export a singleton instance
export const codeProtectionManager = new CodeProtectionManager();

// Export the class for testing
export { CodeProtectionManager };
