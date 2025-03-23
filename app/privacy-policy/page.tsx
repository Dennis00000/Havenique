export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="prose prose-gray max-w-none">
              <p>
                At Havenique, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or make a purchase from us.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you
                have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we collect automatically when you
                use our services, and information from third parties.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-2">Information You Provide to Us</h3>
              <p>We collect information you provide directly to us when you:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact our customer service</li>
                <li>Participate in surveys, contests, or promotions</li>
                <li>Post reviews or comments</li>
              </ul>
              <p>
                This information may include your name, email address, postal address, phone number, payment
                information, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2">Information We Collect Automatically</h3>
              <p>
                When you use our website, we automatically collect certain information about your device and how you
                interact with our website, including:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Device information (such as your IP address, browser type, operating system)</li>
                <li>Usage information (such as pages visited, time spent on pages, links clicked)</li>
                <li>Location information</li>
                <li>Information collected through cookies and similar technologies</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Process orders and payments</li>
                <li>Provide customer support</li>
                <li>Personalize your experience</li>
                <li>Send you newsletters and promotional materials</li>
                <li>Improve our website and services</li>
                <li>Detect and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">How We Share Your Information</h2>
              <p>We may share your information with third parties, including:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Service providers who assist us with payment processing, shipping, marketing, and data analytics
                </li>
                <li>Business partners who offer products or services in conjunction with us</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Your Choices</h2>
              <p>You have the following choices regarding your information:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>You can access, update, or delete your account information</li>
                <li>You can opt out of receiving promotional emails</li>
                <li>You can disable cookies in your browser settings</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
              <p>
                We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
                However, no method of transmission over the internet or method of electronic storage is completely
                secure.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will post any changes on our website.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@havenique.com">support@havenique.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

