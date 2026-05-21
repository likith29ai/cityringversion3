"use client";

import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function CityringAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hey 👋 Need help finding your people?",
    },
  ]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            data.reply ||
            "Couldn't find anything right now 👀",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "Something went wrong. Try again.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
        fixed bottom-6 right-6 z-50
        h-16 w-16 rounded-full
        bg-gradient-to-br
        from-fuchsia-600
        to-pink-500
        text-white text-2xl
        shadow-[0_0_30px_rgba(236,72,153,0.45)]
        hover:scale-110
        transition-all duration-300
        "
      >
        ✦
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
          fixed bottom-24 right-6 z-50
          h-[620px] w-[380px]
          rounded-3xl
          border border-white/10
          bg-black/40
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(255,0,128,0.15)]
          overflow-hidden
          flex flex-col
          "
        >
          {/* Header */}
          <div
            className="
            px-5 py-4
            border-b border-white/10
            bg-gradient-to-r
            from-fuchsia-500/20
            to-purple-500/10
            backdrop-blur-xl
            "
          >
            <h2 className="text-white text-lg font-semibold tracking-wide">
              Cityring AI
            </h2>

            <p className="text-white/50 text-sm mt-1">
              Discover your circle
            </p>
          </div>

          {/* Messages */}
          <div
            className="
            flex-1 overflow-y-auto
            px-4 py-5
            space-y-4
            "
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm leading-relaxed ${
                  msg.role === "user"
                    ? `
                    ml-auto
                    bg-gradient-to-br
                    from-fuchsia-600
                    to-pink-500
                    text-white
                    px-4 py-3
                    rounded-2xl rounded-br-md
                    shadow-[0_0_20px_rgba(236,72,153,0.35)]
                    `
                    : `
                    bg-white/5
                    border border-white/10
                    backdrop-blur-xl
                    text-white/90
                    px-4 py-3
                    rounded-2xl rounded-tl-md
                    shadow-lg
                    `
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div
                className="
                w-fit
                bg-white/5
                border border-white/10
                text-white/60
                px-4 py-3
                rounded-2xl
                animate-pulse
                "
              >
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div
            className="
            p-4
            border-t border-white/10
            bg-black/20
            backdrop-blur-xl
            flex gap-3
            "
          >
            <input
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about Cityring..."
              className="
              flex-1
              bg-white/5
              border border-white/10
              text-white
              placeholder:text-white/30
              rounded-2xl
              px-4 py-3
              outline-none
              focus:border-fuchsia-500/40
              focus:bg-white/10
              transition-all
              "
            />

            <button
              onClick={sendMessage}
              className="
              px-5
              rounded-2xl
              bg-gradient-to-r
              from-fuchsia-600
              to-pink-500
              text-white
              font-medium
              hover:scale-105
              transition-all
              shadow-[0_0_20px_rgba(236,72,153,0.35)]
              "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}