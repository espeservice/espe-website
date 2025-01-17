import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Espe Service Terms of Use
        </h1>

        <section className="text-lg text-gray-700 space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome</h2>
            <p>
              Welcome to <b>Espe Service</b> These Terms of Use govern your access
              to and use of our platform, where service providers can upload
              videos and images to showcase their services. By using the app,
              you agree to comply with these Terms.
            </p>
          </div>

          {/* Terms */}
          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p>
              By creating an account or using <b>Espe Service</b>, you acknowledge
              that you have read, understood, and agreed to these Terms. If you
              do not agree, do not use the app.
            </p>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">2. ELIGIBILITY</h2>
            <p>
              To use the app, you must:
            </p>
            <ul className="list-disc pl-6">
              <li>Be at least 18 years old (or the minimum legal age in your jurisdiction).</li>
              <li>Provide accurate and complete registration information.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">
              3. USER-GENERATED CONTENT (UGC)
            </h2>
            <p>
              Users can upload, post, or share content, including videos,
              images, and descriptions. By submitting UGC, you:
            </p>
            <ul className="list-disc pl-6">
              <li>Grant <b>Espe Service</b> a non-exclusive, worldwide, royalty-free license to use, distribute, display, and reproduce the content.</li>
              <li>Confirm that you own or have the right to share the content.</li>
              <li>Agree that your content will be publicly visible to users.</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-8 mb-4">
              3.1. Prohibited Content
            </h3>
            <p>
              You may not upload content that:
            </p>
            <ul className="list-disc pl-6">
              <li>Is illegal, fraudulent, or violates any law.</li>
              <li>Contains hate speech, threats, or harassment.</li>
              <li>Includes explicit, pornographic, or violent material.</li>
              <li>Violates intellectual property rights (copyrights, trademarks, etc.).</li>
              <li>Contains malware, spam, or deceptive practices.</li>
            </ul>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">4. MODERATION & REPORTING</h2>
            <p>
              We reserve the right to review, remove, or modify any UGC that
              violates these Terms. Users can report inappropriate content via
              the in-app reporting system. Repeated violations may result in
              account suspension or termination.
            </p>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">5. ACCOUNT RESPONSIBILITIES</h2>
            <p>
              - You are responsible for maintaining the confidentiality of your
              account credentials.
            </p>
            <p>
              - You must notify us immediately if you suspect unauthorized
              account access.
            </p>
            <p>
              - We reserve the right to suspend or terminate accounts for
              violations of these Terms.
            </p>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">6. DISCLAIMER & LIABILITY</h2>
            <p>
              - <b>Espe Service</b> provides a platform for service providers but does
              not guarantee the quality, accuracy, or legality of services
              offered.
            </p>
            <p>
              - We are not liable for disputes between users.
            </p>
            <p>
              - We are not responsible for any damages, losses, or legal issues
              arising from the use of the app.
            </p>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">7. TERMINATION</h2>
            <p>
              We may suspend or terminate your account if you violate these
              Terms. You may also delete your account at any time.
            </p>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">8. CHANGES TO TERMS</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued
              use of the app after updates constitutes acceptance of the new
              Terms.
            </p>
          </div>

          <div className="text-lg text-gray-700 mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">9. CONTACT US</h2>
            <p>
              For any questions or concerns about these Terms, contact us at
              <b>support@espeservice.com.</b>
            </p>
          </div>

          <div className="text-lg text-gray-700">
            <p>
              By using <b>Espe Service</b>, you agree to these Terms of Use.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
