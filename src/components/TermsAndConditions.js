import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px', 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      backgroundColor: '#f9f9f9', 
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif', 
      lineHeight: '1.6',
      color: '#333' 
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: '28px', 
        fontWeight: 'bold', 
        marginBottom: '20px' 
      }}>
        Terms and Conditions
      </h2>
      
      <p><strong>1.</strong> There is no refund and rescheduling policy. If you cancel your booking, no refunds will be issued, so please cancel at your own risk.</p>
      
      <p><strong>2.</strong> If you are a government employee, you are eligible for a 50% discount on your booking. Please upload a valid government ID with a clear picture.</p>
      
      <p><strong>3.</strong> If, after booking, we find that your ID is invalid or fraudulent, your booking will be automatically canceled without a refund.</p>
      
      <p><strong>4.</strong> No food services are provided with the booking. Only the stay and parking facilities are included.</p>
      
      <p><strong>5.</strong> Please contact us at the provided number if you encounter any issues with your booking.</p>
      
      <p><strong>6.</strong> All hotel assets and valuables must be properly maintained and should not be damaged or destroyed by guests.</p>
      
      <p><strong>7.</strong> Guests are required to present an original proof of identity upon arrival at the hotel.</p>
      
      <p><strong>8.</strong> The hotel reserves the right to ask guests to leave due to inappropriate conduct or behavior. This includes failure to follow instructions from hotel staff, discriminatory language, harassment, or endangering other guests.</p>
      
      <p><strong>9.</strong> This reservation is non-transferable.</p>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <p style={{ fontStyle: 'italic', color: '#666' }}>
          If you have any questions or concerns about these terms, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
