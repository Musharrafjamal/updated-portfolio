import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Textarea } from "../../textarea";
import { GradientText } from "../../gradient-text";

export function ContactPopover() {
  return (
    <MorphingPopover className="z-50">
      <MorphingPopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl backdrop-blur-md"
        >
          <Mail size={20} />
        </Button>
      </MorphingPopoverTrigger>
      <MorphingPopoverContent className="w-96 p-4 shadow-sm -top-72">
        <div className="grid gap-4">
          {/* <GradientText
            colors={["#AA60C8", "#40aaff", "#A294F9"]}
            className="text-2xl font-semibold text-left"
            animationSpeed={3}
          >
            Wanna Chat?
          </GradientText> */}
          <div className="text-xl font-medium">Wanna Chat?</div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Message"
              rows={4}
              className="resize-none"
            />
          </div>
        </div>
      </MorphingPopoverContent>
    </MorphingPopover>
  );
}
