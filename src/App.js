import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Basic",
      benefits: ["Access to basic content", "Email support"],
      price: 250,
    },
    {
      id: 2,
      name: "Premium",
      benefits: [
        "Access to all content",
        "Priority email support",
        "Monthly webinars",
      ],
      price: 500,
    },
    {
      id: 3,
      name: "VIP",
      benefits: [
        "All benefits of Premium",
        "1-on-1 coaching",
        "Exclusive content",
      ],
      price: 1000,
    },
    {
      id: 4,
      name: "VVIP",
      benefits: [
        "All benefits of Premium",
        "1-on-1 coaching",
        "Exclusive content",
      ],
      price: 2500,
    },
    {
      id: 5,
      name: "Elite",
      benefits: [
        "All benefits of Premium",
        "1-on-1 coaching",
        "Exclusive content",
      ],
      price: 5000,
    },
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentForm(false);
  };

  const handlePayClick = () => {
    setShowPaymentForm(true);
  };

  return (
    <div className="main">
      <div className="div1">
        <div className="div11">
          <h3>Our Membership</h3>
        </div>
        <div className="div12">
          <h1>
            - "Become a part of JHope's Inner Circle" - "Unlock exclusive
            content, early access, and personalized experiences" - "Choose your
            membership plan and join the community today!"
          </h1>
        </div>
        <div className="div13">
          <div className="div131">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="div132">
            <h3>
              - "Welcome to JHope Inner Circle!" - "Get exclusive access to
              JHope's world, only for loyal fans like you!" - "Join the ultimate
              fan experience and unlock behind-the-scenes content, early
              updates, and more!
            </h3>
          </div>
        </div>
        <div className="div14"></div>
      </div>

      <div className="div2">
        <div className="div11">
          <h3>Membership Plans</h3>
        </div>
        <div className="div21">
          <h3>
            Join the inner circle of Lynk, where you'll get unparalleled access
            to the latest news, updates, and behind-the-scenes content from your
            favorite celebrities. Our membership plans offer a range of perks
            and benefits that will take your fandom to the next level. As a
            member of Lynk, you'll be part of a vibrant community of fans who
            share your passion and enthusiasm. Enjoy exclusive content, early
            access to tickets and merchandise, and even personalized messages
            from the stars themselves.
          </h3>
        </div>

        <div className="div22">
          <div className="div221">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => handlePlanClick(plan)}
                className={
                  selectedPlan && selectedPlan.id === plan.id
                    ? "active"
                    : "div222"
                }
              >
                <div className="write">
                  <h4 style={{ color: "gray" }}>Membership Type</h4>
                  <h2>{plan.name} Membership</h2>
                </div>
                <div style={{ alignSelf: "center" }} className="write1">
                  <h2>${plan.price}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="div223">
            {!selectedPlan ? (
              <p>Select a plan to see its benefits.</p>
            ) : (
              <div className="div224">
                <h4>{selectedPlan.name} Membership</h4>
                <h3>Description & Benefits</h3>
                <ul>
                  {selectedPlan.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <div onClick={handlePayClick} className="btn">
                  Continue with {selectedPlan.name} Membership
                </div>
              </div>
            )}
          </div>

          {showPaymentForm && (
            <div className="payment-form">
              <h2>Payment Information</h2>
              <form>
                <div>
                  <label>First Name:</label>
                  <input type="text" name="firstName" required />
                </div>
                <div>
                  <label>Last Name:</label>
                  <input type="text" name="lastName" required />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" name="email" required />
                </div>
                <div>
                  <label>Tether Wallet Address:</label>
                  <input type="text" name="walletAddress" required />
                </div>
                <div>
                  <label>Transfer ${selectedPlan.price} to this address:</label>
                  <p>
                    <strong>your-tether-wallet-address</strong>
                  </p>
                  <img src="path-to-your-qr-code.png" alt="QR Code" />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
