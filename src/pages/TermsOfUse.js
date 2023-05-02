import React from 'react';
import {Link} from 'react-router-dom';
import './TermsOfUse.css';

function TermsOfUse() {
    const currentDate = new Date().toDateString();
    return (
        <div className="terms-of-use-container">
            <h1>Terms of Use</h1>
            <p>Last updated: {currentDate}</p>
            <p>
                Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the bagong website (the
                "Service") operated by LongLongLiveTheKing ("us", "we", or "our").
            </p>
            <h2>Accounts</h2>
            <p>
                When you create an account with us, you must provide us with accurate, complete, and current
                information. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
            </p>
            <h2>Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of bagong website and its licensors. The Service is protected by copyright, trademark, and
                other laws of both the United States and foreign countries. Our trademarks and trade dress may not be
                used in connection with any product or service without the prior written consent of our services.
            </p>
            <h2>Termination</h2>
            <p>
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for
                any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms
                which by their nature should survive termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            <h2>Disclaimer</h2>
            <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
            </p>
            <h2>Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the laws of United States, without regard
                to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not
                be considered a waiver of those rights. If any provision of these Terms is held to be invalid or
                unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms
                constitute the entire agreement between us regarding our Service, and supersede and replace any prior
                agreements we might have had between us regarding the Service.
            </p>
            <h2>Changes</h2>
            <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us.
            </p>
            <div><Link to="/" style={{color: "white"}}>Return</Link></div>
        </div>
    );
}

export default TermsOfUse;
