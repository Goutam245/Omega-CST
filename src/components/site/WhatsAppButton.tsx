import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971500000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 size-14 grid place-items-center rounded-full text-white animate-pulse-glow"
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
