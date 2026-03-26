import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-price mb-4 inline-block">Get in Touch</span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Start Your <span className="text-gradient">Project</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bento-card space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
              <Input placeholder="Your full name" required maxLength={100} className="bg-secondary/50 border-border" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Service Type</label>
              <Select required>
                <SelectTrigger className="bg-secondary/50 border-border">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uiux">UI/UX Design</SelectItem>
                  <SelectItem value="webdev">Full-Stack Web Dev</SelectItem>
                  <SelectItem value="ai">AI Solutions</SelectItem>
                  <SelectItem value="content">Content Strategy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Project Description</label>
            <Textarea placeholder="Tell us about your project..." required maxLength={1000} rows={4} className="bg-secondary/50 border-border" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Budget (₹)</label>
            <Input placeholder="e.g., ₹5,000 - ₹25,000" required maxLength={50} className="bg-secondary/50 border-border" />
          </div>

          <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
            {loading ? "Sending..." : <><Send className="h-4 w-4" /> Send Inquiry</>}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
