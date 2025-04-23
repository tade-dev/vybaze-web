
import TopNavbar from "@/components/TopNavbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#f7f6fa]">
      <TopNavbar />
      <div className="pt-24 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At Vybaze, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Create an account</li>
              <li>Upload music content</li>
              <li>Request AI-powered feedback</li>
              <li>Interact with other users</li>
              <li>Contact our support team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide and maintain our services</li>
              <li>Generate AI feedback on your music</li>
              <li>Process your transactions</li>
              <li>Send you important updates</li>
              <li>Improve our platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
