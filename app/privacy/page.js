export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-5xl font-display mb-12">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-text-body">
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">1. Data Collection</h2>
            <p>At Therapize, we collect only the necessary personal and clinical information required to provide our services. This includes contact details, medical history relevant to your care, and session notes which are stored in compliance with medical confidentiality standards.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">2. Secure Storage</h2>
            <p>Your data is encrypted both in transit and at rest. we use industry-standard electronic health record (EHR) systems that are GDPR and HIPAA compliant to ensure your clinical records remain private and secure.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">3. Confidentiality Limits</h2>
            <p>Therapeutic confidentiality is strictly maintained except where required by law, such as when there is a significant risk of harm to yourself or others, or in cases of child protection concerns.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">4. Your Rights</h2>
            <p>Under GDPR, you have the right to access your data, request corrections, or ask for the deletion of your personal information (subject to medical record retention laws).</p>
          </section>
        </div>
      </div>
    </div>
  );
}
