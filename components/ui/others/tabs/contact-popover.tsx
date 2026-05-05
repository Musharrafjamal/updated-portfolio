import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, Check, Loader2 } from "lucide-react";
import { Textarea } from "../../textarea";
import SocialLinks from "@/components/home/about/social-links";
import { MorphingPopover, MorphingPopoverTrigger, MorphingPopoverContent } from "../../morphing-popover";
import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export function ContactPopover() {
  return (
    <MorphingPopover className="w-fit">
      <MorphingPopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl backdrop-blur-md"
        >
          <Mail size={20} />
        </Button>
      </MorphingPopoverTrigger>
      <MorphingPopoverContent className="w-[calc(100vw-32px)] sm:w-[400px] p-4 sm:p-6 rounded-3xl !border-zinc-200 dark:!border-zinc-800/50 fixed inset-x-0 mx-auto bottom-24 sm:absolute sm:inset-auto sm:bottom-full sm:mb-4 sm:mx-0 z-50">
        <ContactForm />
      </MorphingPopoverContent>
    </MorphingPopover>
  );
}

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setIsSuccess(true);
        toast.success(result.message);
        setTimeout(() => {
          setFormData({ email: "", message: "" });
          setIsSuccess(false);
        }, 5000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex flex-col items-center justify-center gap-4 py-8"
        >
          <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Message Sent!</h3>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Thank you for reaching out. I&apos;ll get back to you soon!
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="grid gap-5"
        >
          <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 font-moonWalk">Wanna Chat?</div>
          <div className="flex flex-col gap-2">
            <Input
              id="email-contact"
              type="email"
              placeholder="Your email address"
              className="bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 rounded-xl focus-visible:ring-indigo-500"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Textarea
              id="message-contact"
              placeholder="How can I help you?"
              rows={4}
              className="resize-none bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 rounded-xl focus-visible:ring-indigo-500"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
          <SocialLinks size={"sm"} withTitle={false} className="mt-0 pt-4 border-t border-zinc-100 dark:border-zinc-800/50 justify-center gap-3" />
        </motion.form>
      )}
    </AnimatePresence>
  );
}
