
import TopNavbar from "@/components/TopNavbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#f7f6fa]">
      <TopNavbar />
      <div className="pt-24 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using Vybaze, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="text-gray-600 mb-4">
              When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content Guidelines</h2>
            <p className="text-gray-600 mb-4">
              You retain your rights to any content you submit, post or display on Vybaze. By submitting content, you grant us a license to use, modify, and distribute that content for providing our services.
            </p>
            <p className="text-gray-600 mb-4">
              You agree not to upload:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Content that infringes on intellectual property rights</li>
              <li>Malicious software or harmful code</li>
              <li>Content that violates any applicable laws</li>
              <li>Content that promotes hate or discrimination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify or discontinue our service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
