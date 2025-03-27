import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, Check } from "lucide-react";
import { Textarea } from "../../textarea";
import SocialLinks from "@/components/home/about/social-links";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../dialog";
import { useState } from "react";
import { sendEmail } from "@/app/actions/send-email";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export function ContactPopover() {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl backdrop-blur-md"
        >
          <Mail size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[600px]">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex flex-col items-center justify-center gap-4 py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="rounded-full bg-green-100 p-3 dark:bg-green-900"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </motion.div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-semibold"
              >
                Message Sent!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center text-muted-foreground"
              >
                Thank you for reaching out. I&apos;ll get back to you soon!
              </motion.p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="grid gap-4"
            >
              <div className="text-xl font-medium">Wanna Chat?</div>
              <div className="flex flex-col gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Mail size={18} />
                    </motion.div>
                    Sending...
                  </motion.div>
                ) : (
                  <>
                    Send <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
              <SocialLinks size={"sm"} withTitle={true} className="mt-0 justify-between" />
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
