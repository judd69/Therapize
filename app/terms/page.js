export default function TermsPage() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-5xl font-display mb-12">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-text-body">
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">1. Service Description</h2>
            <p>Therapize provides online psychiatric consultations and counseling services. These services are delivered via secure video communication and are not a substitute for in-person emergency care.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">2. Eligibility</h2>
            <p>Clients must be at least 18 years of age to book a session, or have the explicit consent of a legal guardian. Our services are subject to jurisdictional limitations based on the licensing of our practitioners.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">3. Cancellation Policy</h2>
            <p>We require at least 24 hours notice for session cancellations or rescheduling. Cancellations made with less than 24 hours notice may be subject to a full session fee.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display text-text-primary mb-4">4. Limitations of Liability</h2>
            <p>Our practitioners provide expert medical and psychological advice. However, Therapize is not liable for outcomes resulting from the client's failure to provide accurate medical information or follow prescribed treatment plans.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
