import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Paybtn.css';

const RazorpayReact = ({ totalAmount, phoneNumber }) => {
    const [paymentId, setPaymentId] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('initial');
    const navigate = useNavigate(); 

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setPaymentStatus('failure');
            return;
        }

        const options = {
            key: 'rzp_test_Su4WV4zdBIGTmZ',
            amount: totalAmount * 100,
            currency: 'INR',
            name: 'RamanaSoft',
            description: 'Test Transaction',
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                setPaymentId(response.razorpay_payment_id);
                setPaymentStatus('success');
                setTimeout(() => {
                    navigate('/ordersummary');
                }, 3000);
            },
            prefill: {
                name: 'Your Name',
                email: 'yourname@example.com',
                contact: phoneNumber,
            },
            notes: {
                address: 'RamanaSoft Corporate Office',
            },
            theme: {
                color: '#e8662a',
            },
            modal: {
                ondismiss: function () {
                    alert('Payment was cancelled.');
                    setPaymentStatus('failure'); // Update status on modal dismiss
                },
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const resetPayment = () => {
        setPaymentId('');
        setPaymentStatus('initial'); // Reset the state to initial
    };

    return (
        <div className="razorpay-container">
            {paymentStatus === 'initial' && (
                <button onClick={displayRazorpay} className="razorpay-button">
                    Make Payment
                </button>
            )}

            {paymentStatus === 'success' && (
                <div className="razorpay-success">
                    <h3>Payment Successful!</h3>
                    <p>Payment ID: {paymentId}</p>
                </div>
            )}

            {paymentStatus === 'failure' && (
                <div className="razorpay-failure">
                    <h3>Payment Failed</h3>
                    <button onClick={displayRazorpay} className="retry-button">
                        Start Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default RazorpayReact;