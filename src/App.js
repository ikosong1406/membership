import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Basic",
      benefits: [
        "Exclusive access to BTS celebrity news and updates",
        "10% discount on merchandise",
        "Limited edition digital autographed poster",
        "Access to member-only contests and giveaways",
      ],
      price: 250,
    },
    {
      id: 2,
      name: "Premium",
      benefits: [
        "All Basic benefits",
        "Behind-the-scenes content (photos, videos, and stories)",
        "Early access to ticket sales for concerts and events",
        "Personalized video message from the celebrity (once a year)",
        "20% discount on merchandise",
      ],
      price: 500,
    },
    {
      id: 3,
      name: "VIP",
      benefits: [
        "All Basic + Premium benefits",
        "Meet-and-greet opportunity at a concert or event",
        "Signed physical copy of the celebrity's latest album or book",
        "Priority entry to events and concerts",
        "30% discount on merchandise",
      ],
      price: 1000,
    },
    {
      id: 4,
      name: "VVIP",
      benefits: [
        "All Basic + Premium + VIP benefits",
        "Private virtual meet-and-greet with the celebrity (30 minutes)",
        "Autographed memorabilia (e.g. guitar, photo, or script)",
        "Access to exclusive events (e.g. movie premieres, charity galas)",
        "40% discount on merchandise",
      ],
      price: 2500,
    },
    {
      id: 5,
      name: "Elite",
      benefits: [
        "All Basic + Premium + VIP + VVIP benefits",
        "Personalized, one-on-one meet-and-greet with the celebrity (1 hour)",
        "Access to the celebrity's private social media group",
        "Customized, one-of-a-kind gift from the celebrity",
        "50% discount on merchandise",
        "Complimentary tickets to all concerts and events for a year",
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

  const closeModal = () => {
    setShowPaymentForm(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("0xE447f3Dc0dc5BA8B3e874eB2259bdDff8a7667bA");
    alert("Wallet address copied to clipboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="main">
      <div className="div1">
        <div className="div11">
          <h3>Our Membership</h3>
        </div>
        <div className="div12">
          <h1>
            - "Become a part of BTS Inner Circle" - "Unlock exclusive content,
            early access, and personalized experiences" - "Choose your
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
              - "Welcome to BTS Inner Circle!" - "Get exclusive access to BTS
              world, only for loyal fans like you!" - "Join the ultimate fan
              experience and unlock behind-the-scenes content, early updates,
              and more!
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
            Join the inner circle of BTS, where you'll get unparalleled access
            to the latest news, updates, and behind-the-scenes content from your
            favorite celebrities. Our membership plans offer a range of perks
            and benefits that will take your fandom to the next level. As a
            member of BTS, you'll be part of a vibrant community of fans who
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
              <p style={{ color: "whitesmoke" }}>
                Select a plan to see its benefits.
              </p>
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
        </div>
      </div>

      {showPaymentForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Fill Your Information</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", marginTop: 5 }}>
                <label>First Name:</label>
                <input type="text" name="firstName" required />
              </div>
              <div style={{ display: "grid", marginTop: 5 }}>
                <label>Last Name:</label>
                <input type="text" name="lastName" required />
              </div>
              <div style={{ display: "grid", marginTop: 5 }}>
                <label>Email:</label>
                <input type="email" name="email" required />
              </div>
              <div style={{ marginTop: 5 }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3 style={{ color: "whitesmoke" }}>
                    Transfer ${selectedPlan.price} to this USDT address:
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "whitesmoke",
                    width: "100%",
                  }}
                >
                  <h3>0xE447f3Dc0dc5BA8B3e874eB2259bdDff8a7667bA</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button type="button" onClick={handleCopy}>
                    Copy Address
                  </button>
                </div>
              </div>
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {showConfirmationModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeConfirmationModal}>
              &times;
            </span>
            <h2>Thank You!</h2>
            <p>
              Your details have been collected and the payment will be
              confirmed.
            </p>
            <p>A confirmation email will be sent to your email address.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
