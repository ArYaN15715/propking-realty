import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type TabType = "get-deals" | "book-visit" | "talk-expert";

interface FormData {
  name: string;
  phone: string;
  email: string;
  budget: string;
  propertyType: string;
  location: string;
  visitDate: string;
  timePreference: string;
  contactTime: string;
  query: string;
}

const EMPTY: FormData = {
  name: "",
  phone: "",
  email: "",
  budget: "",
  propertyType: "",
  location: "",
  visitDate: "",
  timePreference: "",
  contactTime: "",
  query: "",
};

interface Errors {
  phone?: string;
  email?: string;
}

const AREAS = [
  "SG Highway",
  "Science City",
  "Satellite",
  "Bopal",
  "Prahlad Nagar",
  "Thaltej",
];

export function LeadCaptureSection() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [successTab, setSuccessTab] = useState<TabType | null>(null);

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const setSelect = (field: keyof FormData) => (v: string) =>
    setForm((prev) => ({ ...prev, [field]: v }));

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.phone.trim()) next.phone = "Phone number is required";
    else if (!/^[\d\s+\-()]{7,15}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent, tab: TabType) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccessTab(tab);
    setForm(EMPTY);
    setErrors({});
  };

  const resetSuccess = () => setSuccessTab(null);

  return (
    <section id="lead-capture" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            Start Your Property Journey
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tell us what you're looking for — we'll do the rest
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="bg-card rounded-2xl shadow-elevated border border-border/50 p-6 md:p-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {successTab ? (
            /* Success state */
            <div
              className="flex flex-col items-center justify-center py-10 gap-5 text-center"
              data-ocid="contact.success_state"
            >
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-2">
                  Thank you! 🏠
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll contact you within 24 hours with the best options for
                  you.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-accent hover:border-accent hover:text-accent-foreground transition-smooth"
                onClick={resetSuccess}
                data-ocid="contact.submit_another_button"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <Tabs defaultValue="get-deals" data-ocid="contact.tabs">
              <TabsList className="w-full mb-7 h-11">
                <TabsTrigger
                  value="get-deals"
                  className="flex-1 text-xs font-semibold data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  data-ocid="contact.get_deals_tab"
                >
                  Get Best Deals
                </TabsTrigger>
                <TabsTrigger
                  value="book-visit"
                  className="flex-1 text-xs font-semibold data-[state=active]:text-primary"
                  data-ocid="contact.book_visit_tab"
                >
                  Book Site Visit
                </TabsTrigger>
                <TabsTrigger
                  value="talk-expert"
                  className="flex-1 text-xs font-semibold data-[state=active]:text-primary"
                  data-ocid="contact.talk_expert_tab"
                >
                  Talk to Expert
                </TabsTrigger>
              </TabsList>

              {/* ── Tab 1: Get Best Deals ── */}
              <TabsContent value="get-deals">
                <form
                  onSubmit={(e) => handleSubmit(e, "get-deals")}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="gd-budget">Budget Range</Label>
                      <Select onValueChange={setSelect("budget")}>
                        <SelectTrigger
                          id="gd-budget"
                          data-ocid="contact.get_deals_budget_select"
                        >
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50l">Under ₹50 L</SelectItem>
                          <SelectItem value="50l-1cr">₹50 L – ₹1 Cr</SelectItem>
                          <SelectItem value="1cr-2cr">₹1 Cr – ₹2 Cr</SelectItem>
                          <SelectItem value="above-2cr">Above ₹2 Cr</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="gd-type">Property Type</Label>
                      <Select onValueChange={setSelect("propertyType")}>
                        <SelectTrigger id="gd-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Flat">Flat / Apartment</SelectItem>
                          <SelectItem value="Villa">
                            Villa / Bungalow
                          </SelectItem>
                          <SelectItem value="Plot">Plot / Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="gd-location">Location Preference</Label>
                    <Select onValueChange={setSelect("location")}>
                      <SelectTrigger id="gd-location">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {AREAS.map((a) => (
                          <SelectItem key={a} value={a}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="gd-name">Name</Label>
                      <Input
                        id="gd-name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={set("name")}
                        data-ocid="contact.get_deals_name_input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="gd-phone">
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="gd-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={set("phone")}
                        className={errors.phone ? "border-destructive" : ""}
                        data-ocid="contact.get_deals_phone_input"
                      />
                      {errors.phone && (
                        <p
                          className="text-xs text-destructive"
                          data-ocid="contact.phone_field_error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="gd-email">Email</Label>
                    <Input
                      id="gd-email"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={set("email")}
                      className={errors.email ? "border-destructive" : ""}
                      data-ocid="contact.get_deals_email_input"
                    />
                    {errors.email && (
                      <p
                        className="text-xs text-destructive"
                        data-ocid="contact.email_field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-1 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                    data-ocid="contact.get_deals_submit_button"
                  >
                    {submitting ? "Sending..." : "Send Me Best Deals"}
                  </Button>
                </form>
              </TabsContent>

              {/* ── Tab 2: Book Site Visit ── */}
              <TabsContent value="book-visit">
                <form
                  onSubmit={(e) => handleSubmit(e, "book-visit")}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bv-property">Property of Interest</Label>
                      <Select onValueChange={setSelect("propertyType")}>
                        <SelectTrigger id="bv-property">
                          <SelectValue placeholder="Select property" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sg-highway">
                            SG Highway – 3 BHK Premium
                          </SelectItem>
                          <SelectItem value="science-city">
                            Science City – 4 BHK Luxury
                          </SelectItem>
                          <SelectItem value="satellite">
                            Satellite Heights – 2 BHK
                          </SelectItem>
                          <SelectItem value="bopal">
                            Bopal Green Villas – 4 BHK
                          </SelectItem>
                          <SelectItem value="other">
                            Other / Not Sure
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bv-date">Preferred Date</Label>
                      <Input
                        id="bv-date"
                        type="date"
                        value={form.visitDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={set("visitDate")}
                        data-ocid="contact.book_visit_date_input"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bv-time">Time Preference</Label>
                    <Select onValueChange={setSelect("timePreference")}>
                      <SelectTrigger id="bv-time">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          Morning (9am – 12pm)
                        </SelectItem>
                        <SelectItem value="afternoon">
                          Afternoon (12pm – 4pm)
                        </SelectItem>
                        <SelectItem value="evening">
                          Evening (4pm – 7pm)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bv-name">Name</Label>
                      <Input
                        id="bv-name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={set("name")}
                        data-ocid="contact.book_visit_name_input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bv-phone">
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="bv-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={set("phone")}
                        className={errors.phone ? "border-destructive" : ""}
                        data-ocid="contact.book_visit_phone_input"
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="bv-email">Email</Label>
                    <Input
                      id="bv-email"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={set("email")}
                      className={errors.email ? "border-destructive" : ""}
                      data-ocid="contact.book_visit_email_input"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-1 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                    data-ocid="contact.book_visit_submit_button"
                  >
                    {submitting ? "Booking..." : "Book My Site Visit"}
                  </Button>
                </form>
              </TabsContent>

              {/* ── Tab 3: Talk to Expert ── */}
              <TabsContent value="talk-expert">
                <form
                  onSubmit={(e) => handleSubmit(e, "talk-expert")}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="te-query">What are you looking for?</Label>
                    <textarea
                      id="te-query"
                      rows={3}
                      placeholder="E.g. Looking for a 3 BHK near SG Highway under ₹90L for end use..."
                      value={form.query}
                      onChange={set("query")}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                      data-ocid="contact.talk_expert_query_textarea"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="te-name">Name</Label>
                      <Input
                        id="te-name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={set("name")}
                        data-ocid="contact.talk_expert_name_input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="te-phone">
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="te-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={set("phone")}
                        className={errors.phone ? "border-destructive" : ""}
                        data-ocid="contact.talk_expert_phone_input"
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="te-email">Email</Label>
                      <Input
                        id="te-email"
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={set("email")}
                        className={errors.email ? "border-destructive" : ""}
                        data-ocid="contact.talk_expert_email_input"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="te-contact-time">
                        Preferred Contact Time
                      </Label>
                      <Select onValueChange={setSelect("contactTime")}>
                        <SelectTrigger id="te-contact-time">
                          <SelectValue placeholder="Best time to call" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">
                            Morning (9–12)
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Afternoon (12–4)
                          </SelectItem>
                          <SelectItem value="evening">Evening (4–7)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-1 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                    data-ocid="contact.talk_expert_submit_button"
                  >
                    {submitting ? "Connecting..." : "Talk to an Expert"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          )}
        </motion.div>
      </div>
    </section>
  );
}
