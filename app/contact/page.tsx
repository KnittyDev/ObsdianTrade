"use client";

import Link from "next/link";
import { useState } from "react";
import { BackgroundEffects, Navbar } from "@/app/components/landing";
import { useToast } from "@/app/components/ToastProvider";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { addToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Message sent. We'll get back to you soon.", "success");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundEffects />
      <Navbar />
      <main id="main" className="relative z-10 mx-auto w-full max-w-xl flex-1 px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
          Back to home
        </Link>
        <div className="glass-card rounded-2xl border border-white/10 p-8 md:p-10">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">
            Contact us
          </h1>
          <p className="mb-8 text-gray-400">
            Have a question or feedback? Send us a message.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-white py-3 text-sm font-bold text-black transition-colors hover:bg-gray-200"
            >
              Send message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
