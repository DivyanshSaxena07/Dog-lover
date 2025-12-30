import React from "react";
import "./DogDonation.css";

export default function DogDonation() {
  const donors = [
    {
      name: "Jahirukhi Hamsala",
      amount: "₹200",
      comment: "Happy to support these innocent souls ❤️",
    },
    {
      name: "Amit Sharma",
      amount: "₹501",
      comment: "Great work! Keep it up 🙌",
    },
    {
      name: "Priya Verma",
      amount: "₹1,500",
      comment: "Bhagwan aap logo ko khush rakhe.",
    },
    {
      name: "Rahul Singh",
      amount: "₹5,000",
      comment: "Proud to contribute to this noble cause.USE this for good purpose only",
    },
    {
      name: "Neha Gupta",
      amount: "₹101",
      comment: "Small help with big prayers 🐶",
    },
    {
      name: "Sandeep Yadav",
      amount: "₹3,000",
      comment: "Boht bhalai ka kaam kr rhe ho aap log.",
    },
    {
      name: "Anjali Mehta",
      amount: "₹1,100",
      comment: "May every dog find a home ❤️",
    },
    { name: "Rohit Kumar", amount: "₹551", comment: "Keep saving lives,keep it up yr" },
    {
      name: "Pooja Singh",
      amount: "₹500",
      comment: "So grateful for your efforts.",
    },
    {
      name: "Vikram Jain",
      amount: "₹1,000",
      comment: "1000 from my side May this small contribution help 🙏",
    },
    {
      name: "Sujeet Saxena",
      amount: "₹2,100",
      comment: "Respect for this initiative 🙏",
    },
    {
      name: "Abhay Patil",
      amount: "₹1,100",
      comment: "Dhanya ho aap log jo is kaam me lage ho.",
    },
    {
      name: "Maya Shankar Thakur",
      amount: "₹251",
      comment: "Hope this helps injured babies.",
    },
    {
      name: "Prateek Sehjpal",
      amount: "₹5,100",
      comment: "Love what you guys are doing!",
    },
    {
      name: "Shivik Kaushal",
      amount: "₹5,100",
      comment: "Boht bhadiya meri jaan",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Help Us to Heal the Voiceless 🐶</h1>
        <p>
          Every day, injured and abandoned dogs struggle to survive on the
          streets. With your support, we rescue them, treat them, and give them
          a second chance at life.
        </p>
        <div className="stats">
          ❤️200+ Dogs Rescued &nbsp; | &nbsp;🍲50+ Dogs Fed Daily
        </div>
      </section>

      {/* WORK SECTION */}
      <section className="section">
        <h2>Our Work on the Ground</h2>

        {/* <div className="image-grid"> */}
        <div className="image-slider">
          <img src="/dogdon4.jpg" />
          <img src="/dogdon6.jpg" />
          <img src="/dogdon3.jpg" />
          <img src="/dogdon.jpg" />
          <img src="/dogdon5.jpg" />
          <img src="/dogdon7.jpg" />
          <img src="/dogdon2.jpg" />
        </div>

        <p className="center-text">
          From road accident victims to abandoned puppies, we ensure medical
          care, food, warmth, and love. Many of these dogs would not survive
          without timely help.
        </p>
      </section>

      <section className="section donation donation-box">
        <div className="donation-text">
          <h2>Donate & Save a Life 🐾</h2>

          <p className="donation-quote">
            “They don’t need much — just food, care, and a chance to live.”
          </p>

          <p>
            Scan the QR code to donate instantly. Your kindness directly helps
            us rescue injured dogs, provide medical treatment, and feed hungry
            souls every single day.
          </p>

          {/* <ul className="donation-list">
            <li>
              <strong>₹500</strong> — Feeds 10 hungry dogs
            </li>
            <li>
              <strong>₹1,000</strong> — Medicines & first-aid care
            </li>
            <li>
              <strong>₹2,500</strong> — Emergency rescue support
            </li>
          </ul> */}

          <p className="donation-note">
            💛 Even the smallest donation can save a life.
          </p>
        </div>

        <div className="qr-box">
          <p className="qr-title">Scan & Donate</p>
          <img src="/QR.png" alt="Donate QR Code" />
          <p className="secure-text">100% Secure • Used only for dog welfare</p>
        </div>
      </section>

      {/* WHY DONATE */}
      <section className="section why-donate">
        <h2>Why Your Donation Matters</h2>

        <p>
          Every day, countless dogs suffer silently on the streets — injured by
          accidents, weakened by hunger, and abandoned by the world they
          trusted. They don’t understand cruelty, they don’t complain, and they
          never ask for more than a little kindness.
        </p>

        <p>
          Your donation becomes their second chance. It turns pain into
          treatment, hunger into nourishment, fear into safety, and loneliness
          into care. What feels like a small amount to us can mean survival,
          healing, and hope for them.
        </p>

        <p>
          When you choose to donate, you’re not just giving money — you’re
          giving warmth on cold nights, medicine to ease suffering, and love to
          souls who have never known it. You become their voice, their family,
          and the reason they live another day 🐾
        </p>
      </section>

      <section className="section donors">
        <h2>Our Kind Contributors 🙏</h2>

        {donors.map((donor, index) => (
          <div className="donor-card" key={index}>
            <div className="donor-header">
              <span>{donor.name}</span>
              <span className="amount">{donor.amount}</span>
            </div>
            <p>“{donor.comment}”</p>
          </div>
        ))}
      </section>

      {/* FAQ SECTION */}
      <section className="section faq">
        <h2>Frequently Asked Questions ❓</h2>

        <details className="faq-item">
          <summary>Where does my donation go?</summary>
          <p>
            100% of your donation is used for dog rescue operations, medical
            treatment, daily feeding, vaccinations, and shelter care for injured
            and abandoned dogs.
          </p>
        </details>

        <details className="faq-item">
          <summary>Is my donation secure?</summary>
          <p>
            Yes. Donations made via QR code are processed through secure UPI
            platforms. Your contribution is used strictly for animal welfare
            purposes.
          </p>
        </details>

        <details className="faq-item">
          <summary>Can I donate any amount?</summary>
          <p>
            Absolutely. Even ₹100 helps us feed a hungry dog. Every
            contribution, regardless of size, makes a meaningful impact.
          </p>
        </details>

        <details className="faq-item">
          <summary>Do you provide updates after donation?</summary>
          <p>
            Yes. We regularly share rescue stories, treatment updates, and
            feeding drives through our social channels to maintain transparency.
          </p>
        </details>

        <details className="faq-item">
          <summary>Can I volunteer or help in other ways?</summary>
          <p>
            Of course! You can help by volunteering, spreading awareness, or
            supporting us with food, medicines, and supplies. Every form of help
            counts.
          </p>
        </details>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Together, we can save more lives 🐾</p>
        <small>© 2025 Your Support Care</small>
      </footer>
    </>
  );
}
