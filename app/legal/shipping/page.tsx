export const metadata = {
  title: "Shipping Policy – The Curry Club",
  description: "Processing, delivery, and shipping terms for The Curry Club.",
};

export default function ShippingPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 prose prose-gray">
      <h1>Shipping Policy</h1>

      <h2>1. Processing &amp; Dispatch</h2>
      <p>
        Standard processing is 1–3 business days after order confirmation and receipt of cleared funds.
        Lead times may vary for bulk orders or special items. We’ll notify you of material delays.
      </p>

      <h2>2. Shipping Methods &amp; Charges</h2>
      <p>
        We ship via reputable carriers; services may include tracked or palletised freight.
        Charges are shown at order confirmation or invoiced separately for bespoke shipments.
      </p>

      <h2>3. Delivery Windows &amp; Access</h2>
      <p>
        Delivery windows are estimates. You must ensure safe access and a person available to accept delivery.
        Redelivery, waiting time, or access issues may incur additional charges.
      </p>

      <h2>4. Risk of Loss; Title</h2>
      <p>
        Risk of loss passes on delivery. Title transfers upon receipt of full payment, except for samples or
        pilots as otherwise agreed.
      </p>

      <h2>5. Inspection; Damages; Shortages</h2>
      <p>
        Inspect shipments upon receipt. Report visible damage or shortage within 48 hours and non‑delivery
        within 7 days of expected arrival. Keep packaging for carrier inspection.
      </p>

      <h2>6. Temperature &amp; Storage</h2>
      <p>
        Products are ambient‑stable unless otherwise specified. Store per label/instructions. We are not
        responsible for damage due to improper storage.
      </p>

      <h2>7. International Shipments</h2>
      <p>
        You are responsible for customs clearance, duties, taxes, and compliance with import regulations.
      </p>

      <h2>8. Returns</h2>
      <p>
        Returns require our prior written authorisation (RMA). Unauthorised returns may be refused. See Terms
        &amp; Conditions for return eligibility.
      </p>

      <h2>9. Contact</h2>
      <p>
        For shipping questions: <a href="mailto:ops@thecurry.club">ops@thecurry.club</a>
      </p>
    </main>
  );
}
