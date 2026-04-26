import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import emailjs from "emailjs-com";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { packages } from "@/data/packages";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const EMAILJS_SERVICE_ID  = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_EMAILJS_PUBLIC_KEY";
const RECIPIENT_EMAIL     = "pharelrohit1992@gmail.com";

const eventTypes = [
  "Birthday", "Wedding", "Engagement", "Hens Night", "Bucks Party",
  "Baby Shower", "Gender Reveal", "Romantic Setup", "Other",
];

const Book = () => {
  const [params] = useSearchParams();
  const preselected = params.get("package") || "";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    package: preselected || packages[0].name,
    eventType: "Birthday",
    eventDate: "",
    eventTime: "",
    location: "",
    guests: "",
    theme: "",
    notes: "",
    deposit: false,
  });

  useEffect(() => {
    if (preselected) setForm((f) => ({ ...f, package: preselected }));
  }, [preselected]);

  useEffect(() => {
    document.title = "Book Now | JK Party Hire Melbourne";
  }, []);

  const packageOptions = useMemo(() => packages.map((p) => p.name), []);

  const update = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.deposit) {
      toast({ title: "Please confirm the deposit acknowledgement.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        package: form.package,
        event_type: form.eventType,
        event_date: form.eventDate,
        event_time: form.eventTime,
        location: form.location,
        guests: form.guests,
        theme: form.theme,
        notes: form.notes,
      };

      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) {
        console.warn("EmailJS not configured — booking details:", templateParams);
      } else {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please call us on 0410 235 755.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,#4c1d95_0%,#0a0115_60%,#000000_100%)]">
      <Header />

      <main className="flex-1 py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-purple-700/10 blur-3xl pointer-events-none" />

        <div className="container max-w-3xl relative">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">Booking Enquiry</p>
            <h1 className="font-serif text-4xl md:text-5xl">
              Let's Plan Your <span className="text-gold">Event</span>
            </h1>
          </div>

          {submitted ? (
            <div className="luxe-card rounded-2xl p-10 text-center glow-gold">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-2xl mb-3">Thank you for your enquiry!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                A <span className="text-primary font-semibold">$100 non-refundable deposit</span> is required to confirm your booking.
                Payment details will be emailed to you shortly.
              </p>
              <Link to="/" className="mt-8 inline-block bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold">
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="luxe-card rounded-2xl p-6 md:p-10 space-y-5">

              <Field label="Full Name" required>
                <input required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputCls} />
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" required>
                  <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} />
                </Field>
                <Field label="Phone Number" required>
                  <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} />
                </Field>
              </div>

              <Field label="Selected Package" required>
                <select required value={form.package} onChange={(e) => update("package", e.target.value)} className={inputCls}>
                  {packageOptions.map((n) => <option key={n}>{n}</option>)}
                </select>
              </Field>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Event Type">
                  <select value={form.eventType} onChange={(e) => update("eventType", e.target.value)} className={inputCls}>
                    {eventTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Number of Guests">
                  <input type="number" min={1} value={form.guests} onChange={(e) => update("guests", e.target.value)} className={inputCls} />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Event Date" required>
                  <input type="date" required value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} className={inputCls} />
                </Field>
                <Field label="Event Time">
                  <input type="time" value={form.eventTime} onChange={(e) => update("eventTime", e.target.value)} className={inputCls} />
                </Field>
              </div>

              <Field label="Event Location" required>
                <input required value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Suburb / Address" className={inputCls} />
              </Field>

              <Field label="Theme / Colour Preference">
                <input value={form.theme} onChange={(e) => update("theme", e.target.value)} className={inputCls} />
              </Field>

              <Field label="Additional Notes">
                <textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} className={inputCls} />
              </Field>

              <label className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/30 cursor-pointer">
                <input type="checkbox" checked={form.deposit} onChange={(e) => update("deposit", e.target.checked)} className="mt-1 h-5 w-5 accent-primary" required />
                <span className="text-sm text-foreground">
                  I understand a <span className="text-primary font-semibold">$100 non-refundable deposit</span> is required to confirm booking.
                </span>
              </label>

              <button type="submit" disabled={loading} className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-full font-semibold">
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>

            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const inputCls =
  "w-full bg-input border border-border/60 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

const Field = ({ label, required, children }: any) => (
  <div>
    <label className="block text-sm font-medium mb-2 text-foreground">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    {children}
  </div>
);

export default Book;
