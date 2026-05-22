import { useState, useEffect, useRef } from "react";

const SYSTEM = `You are Nicole Lau — a multidisciplinary artist with training in body-based coaching and sound healing. You created this free tool because you lived through creative shutdown yourself, and found your way back not through force, but through learning to listen to your body differently.

Your job is to help creatives understand what's underneath their block through a warm, body-based, emotionally intelligent conversation. You are not here to give productivity tips or productivity advice. You are here to help them feel genuinely seen — and to offer a small, personalized body-based reset at the right moment.

ABSOLUTE RULES — never break these under any circumstances:
- NEVER use the word "somatic" anywhere, ever. Not once. Always say "body-based" instead.
- NEVER mention laziness, discipline, motivation, or productivity in any framing — not even to dismiss them.
- NEVER use the phrase "1% safer" or any version of it.
- NEVER use clinical, structured, or worksheet-style language. You are warm and human.
- NEVER use bullet-point lists in the first 6 exchanges. Write in flowing paragraphs, like a real conversation.
- Ask exactly ONE question per message. Always.
- Always validate what they shared before you go anywhere else. Always.
- Be genuinely present and responsive — do not follow a visible script.

WHO YOU ARE TALKING TO:
Artists, writers, musicians, dancers, creatives of all kinds — people who feel stuck, blocked, avoidant, numb, overwhelmed, or disconnected from work they care about.

THE CONVERSATION ARC — follow this carefully:

PHASE 1 — UNDERSTANDING (exchanges 1–4, minimum):
Gently learn what's going on. One question at a time. Natural order, but not rigid:
1. What kind of creative work feels blocked right now?
2. How does the block actually show up for you day to day?
3. How long has it been feeling this way?
4. What have you already tried?

PHASE 2 — GOING DEEPER (exchanges 5–8):
Now go beneath the surface. Weave these in naturally, one at a time, based on what they share:
- What stories have been coming up about why you're stuck?
- When you imagine finishing a piece and putting it out into the world — what comes up for you?
- Where do you feel that in your body?
- If the block could speak, what would it be trying to protect you from?
- What do you most want to feel in relation to your work?

Do not rush through these. If someone is brief or guarded, ask a follow-up before moving on.

PHASE 3 — THE BODY-BASED RESET (after 8–10 substantive exchanges, when you have enough to personalize):

Signal it naturally — something like: "I think I've heard enough to offer you something real now..."

Then offer the GENTLE BODY-BASED RESET. Write it warmly and in flowing prose, not as a numbered list. Include all of these elements:

GROUNDING:
"Before we go anywhere else, let's help your body feel safe right now. Not safe from the fear — safe with it.

Stand or sit. Let your feet find the floor. Place both hands on your chest, right over your heart. Feel your hands there. Feel the warmth. Your own hands are holding you.

Now breathe into your lower back ribs. Expand them on the inhale like a balloon filling slowly. Exhale and stay open. Do this three times, slowly."

AFFIRMATION — personalise this completely based on what they shared. Choose the one that fits, or write a new one in the same spirit:
- Fear of being seen: "I am allowed to be seen. My fear is trying to protect me, and I'm grateful for that. And right now, I am safe."
- Numbness or disconnection: "The quiet doesn't mean the creativity is gone. It's resting. And I can meet it gently."
- Perfectionism or fear of not being good enough: "Showing up imperfectly is still showing up. My work doesn't have to be perfect to matter."
- Burnout or exhaustion: "Rest is part of the creative process. My body isn't failing me — it's asking for care."
- Fear of failure or not knowing what comes next: "I don't have to know how it ends. I just have to take the next small step."
- Feeling lost or disconnected from passion: "I haven't lost it. I've just been under a lot. The love for this is still in me."

GENTLE PRACTICES — offer 1 to 3 small, specific body-based practices that fit their situation. These are not productivity tactics. They are gentle re-entry points. Write them as suggestions, not prescriptions.

PHASE 4 — THE FINAL PAUSE (after the reset, always):
After you give the reset, say something like:

"Thank you for staying with this. Before I share what came up for me — is there anything else sitting with you that you haven't quite found the words for yet?"

Then wait for their response. This is important. Do not skip this step. It slows them down, signals something is coming, and gives them one more moment to feel genuinely heard.

PHASE 5 — THE FINAL MESSAGE (after they reply to the pause question):
This is your last message. Write it like a letter. Include all of these, woven together naturally:
- Warmly reflect what the whole conversation revealed
- Name the pattern underneath their block with compassion — frame it as protection, not failure, not character flaw
- Gently explain why pushing harder hasn't worked (because the block is doing a job, not because something is wrong with them)
- Reassure them clearly: they are not broken, their creativity is not gone
- Then, naturally and briefly, mention the course — not as a pitch, but as a genuine next step: "If you want to go deeper with this — not just understand it, but actually move through it in a guided, body-based way — I made a 90-minute workshop for exactly this moment. It's called Unblocked. There's body-based teaching, guided meditations, and practices built specifically for creative block."

End your final message with EXACTLY this marker on its own line: [SHOW_EMAIL_CAPTURE]

STYLE THROUGHOUT:
- Warm, grounded, honest, human. Like talking to someone who has genuinely been there.
- Short paragraphs. Conversational sentences. Occasional gentleness or wry humanity when it fits.
- Never robotic. Never clinical. Never a checklist.
- If someone seems distressed or raw, slow down. Prioritise gentleness over gathering information.
- Never rush toward insight. Let it arrive.`;

const OPENING = `Creative block can feel so personal — especially when the work really matters to you. Whatever's going on, it doesn't mean something is wrong with you. Sometimes there's a much deeper pattern underneath it, and that's exactly what I want to help you explore.

By the end of this conversation I'll share a small body-based reset tailored to what comes up for you.

To start — what kind of creative work feels blocked right now?`;

const S = {
  shell: {
    fontFamily: "'Georgia', serif",
    background: "#EDE6D8",
    color: "#3A2E24",
    display: "flex",
    flexDirection: "column",
    height: "620px",
    maxWidth: "680px",
    margin: "0 auto",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 2px 24px rgba(107,79,58,0.10)",
  },
  header: {
    flexShrink: 0,
    padding: "18px 24px 14px",
    textAlign: "center",
    background: "#EDE6D8",
    borderBottom: "1px solid #D9CEBC",
  },
  badge: {
    display: "inline-block",
    fontStyle: "italic",
    fontSize: "12px",
    color: "#C4B49A",
    border: "1px solid #D9CEBC",
    borderRadius: "999px",
    padding: "2px 13px",
    marginBottom: "9px",
    letterSpacing: "0.02em",
  },
  h1: { fontSize: "23px", fontWeight: 400, color: "#8B6B52", lineHeight: 1.2, margin: "0 0 4px" },
  sub: { fontStyle: "italic", fontSize: "13px", color: "#6B5C4E", margin: 0 },
  chat: {
    flex: "1 1 0",
    overflowY: "auto",
    padding: "18px 18px 10px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  rowAsst: { display: "flex", alignItems: "flex-end", gap: "9px" },
  rowUser: { display: "flex", alignItems: "flex-end", gap: "9px", flexDirection: "row-reverse" },
  avAsst: {
    flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "10px", fontWeight: 600, letterSpacing: "0.03em",
    background: "#D9CEBC", color: "#6B4F3A",
  },
  avUser: {
    flexShrink: 0, width: 30, height: 30, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "10px", fontWeight: 600, letterSpacing: "0.03em",
    background: "#6B4F3A", color: "#F5F0E8",
  },
  bubAsst: {
    maxWidth: "calc(100% - 48px)", padding: "12px 16px",
    fontSize: "15.5px", lineHeight: 1.75, whiteSpace: "pre-wrap", wordBreak: "break-word",
    background: "#F5F0E8", color: "#3A2E24",
    borderRadius: "4px 16px 16px 16px",
    boxShadow: "0 1px 4px rgba(107,79,58,.08)",
  },
  bubUser: {
    maxWidth: "calc(100% - 48px)", padding: "12px 16px",
    fontSize: "15.5px", lineHeight: 1.75, whiteSpace: "pre-wrap", wordBreak: "break-word",
    background: "#6B4F3A", color: "#FDFAF5",
    borderRadius: "16px 4px 16px 16px", textAlign: "right",
  },
  typingRow: { display: "flex", alignItems: "flex-end", gap: "9px" },
  typingBub: {
    background: "#F5F0E8", borderRadius: "4px 16px 16px 16px",
    padding: "14px 18px", display: "flex", gap: "5px", alignItems: "center",
    boxShadow: "0 1px 4px rgba(107,79,58,.08)",
  },
  inputArea: { flexShrink: 0, padding: "10px 18px 12px", background: "#EDE6D8" },
  inputWrap: (focused) => ({
    display: "flex", alignItems: "flex-end", gap: "9px",
    background: "#F5F0E8",
    border: `1.5px solid ${focused ? "#C4B49A" : "#D9CEBC"}`,
    borderRadius: "13px", padding: "10px 13px",
    transition: "border-color 0.2s",
  }),
  textarea: {
    flex: 1, background: "transparent", border: "none", outline: "none",
    fontFamily: "Georgia, serif", fontSize: "15px", fontStyle: "italic",
    color: "#3A2E24", resize: "none", maxHeight: "110px", minHeight: "26px",
    lineHeight: 1.65, overflowY: "auto",
  },
  sendBtn: (active) => ({
    flexShrink: 0, background: "transparent", border: "none",
    cursor: active ? "pointer" : "default",
    padding: "3px",
    color: active ? "#8B6B52" : "#C4B49A",
    display: "flex", alignItems: "center",
    transition: "color 0.2s",
  }),
  footer: { flexShrink: 0, textAlign: "center", padding: "5px 18px 12px", background: "#EDE6D8" },
  footerP: { fontSize: "11px", fontStyle: "italic", color: "#C4B49A", margin: 0, lineHeight: 1.5 },
  emailCard: {
    background: "#F5F0E8", border: "1px solid #D9CEBC",
    borderRadius: "16px", padding: "22px 20px", textAlign: "center",
    boxShadow: "0 2px 8px rgba(107,79,58,.07)",
  },
  emailP: { fontStyle: "italic", fontSize: "14.5px", color: "#6B5C4E", marginBottom: "16px", lineHeight: 1.65 },
  emailRow: { display: "flex", gap: "8px", marginBottom: "16px" },
  emailInput: (sent) => ({
    flex: 1, padding: "10px 13px",
    fontFamily: "Georgia, serif", fontSize: "14px",
    color: sent ? "#C4B49A" : "#3A2E24",
    background: "#FDFAF5", border: "1px solid #D9CEBC",
    borderRadius: "8px", outline: "none",
    fontStyle: sent ? "italic" : "normal",
  }),
  emailSendBtn: (sent) => ({
    padding: "10px 16px", fontFamily: "Georgia, serif", fontSize: "14px",
    background: sent ? "#C4B49A" : "#6B4F3A", color: "#FDFAF5",
    border: "none", borderRadius: "8px",
    cursor: sent ? "default" : "pointer",
    transition: "background 0.2s", whiteSpace: "nowrap",
  }),
  ctaBtn: {
    display: "block", width: "100%", padding: "13px",
    fontFamily: "Georgia, serif", fontSize: "15.5px", fontStyle: "italic",
    color: "#FDFAF5", background: "#8A9E8C", border: "none",
    borderRadius: "10px", cursor: "pointer", textAlign: "center",
    marginBottom: "9px", textDecoration: "none",
    transition: "background 0.2s",
  },
  ctaNote: { fontSize: "12px", color: "#6B5C4E", fontStyle: "italic" },
  divider: { border: "none", borderTop: "1px solid #D9CEBC", margin: "14px 0" },
};

function TypingDots() {
  return (
    <div style={S.typingRow}>
      <div style={S.avAsst}>NL</div>
      <div style={S.typingBub}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: "50%", background: "#C4B49A",
            animation: "nlBounce 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }} />
        ))}
      </div>
    </div>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit() {
    if (!email.includes("@")) return;
    setSent(true);
  }

  return (
    <div style={S.emailCard}>
      <p style={S.emailP}>
        If this resonated, I'd love to stay in touch — and share a little more with you.
      </p>
      <div style={S.emailRow}>
        <input
          type="email"
          style={S.emailInput(sent)}
          placeholder={sent ? "Thank you ✦" : "your@email.com"}
          value={sent ? "" : email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !sent && submit()}
          disabled={sent}
          aria-label="Email address"
        />
        <button style={S.emailSendBtn(sent)} onClick={submit} disabled={sent}>
          {sent ? "Sent ✦" : "Send"}
        </button>
      </div>
      <hr style={S.divider} />
      <a
        href="https://nicolelau.com/unblockedcourse"
        target="_blank"
        rel="noopener noreferrer"
        style={S.ctaBtn}
      >
        Explore Unblocked →
      </a>
      <p style={S.ctaNote}>A 90-min body-based workshop for stuck artists</p>
    </div>
  );
}

export default function App() {
  const [messages, setMessages]   = useState([{ role: "assistant", content: OPENING }]);
  const [history, setHistory]     = useState([{ role: "assistant", content: OPENING }]);
  const [input, setInput]         = useState("");
  const [loading, setLoading]     = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [focused, setFocused]     = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, loading, showEmail]);

  async function send() {
    if (loading || !input.trim()) return;
    const text = input.trim();
    setInput("");

    const userMsg = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1024,
          system: SYSTEM,
          messages: newHistory,
        }),
      });

      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        throw new Error(`Error ${res.status}: ${e?.error?.message || res.statusText}`);
      }

      const data = await res.json();
      if (!data.content) throw new Error("Unexpected response shape.");

      const full = data.content.filter(b => b.type === "text").map(b => b.text).join("");
      const hasCapture = full.includes("[SHOW_EMAIL_CAPTURE]");
      const clean = full.replace("[SHOW_EMAIL_CAPTURE]", "").trimEnd();

      const asstMsg = { role: "assistant", content: clean };
      setMessages(prev => [...prev, asstMsg]);
      setHistory(prev => [...prev, asstMsg]);

      if (hasCapture) setTimeout(() => setShowEmail(true), 800);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: err.message || "Couldn't reach the server — please check your connection and try again.",
      }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  const canSend = !loading && input.trim().length > 0 && !showEmail;

  return (
    <>
      <style>{`
        @keyframes nlBounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }
        @keyframes nlFade { from{opacity:0;transform:translateY(7px)} to{opacity:1;transform:translateY(0)} }
        .nl-msg { animation: nlFade 0.32s ease forwards; }
        .nl-textarea::placeholder { color: #C4B49A; font-style: italic; }
        .nl-textarea::-webkit-scrollbar { width: 3px; }
        .nl-textarea::-webkit-scrollbar-thumb { background: #D9CEBC; border-radius: 999px; }
        .nl-chat::-webkit-scrollbar { width: 4px; }
        .nl-chat::-webkit-scrollbar-thumb { background: #D9CEBC; border-radius: 999px; }
        .nl-cta-btn:hover { background: #6B7F6D !important; }
      `}</style>

      <div style={S.shell}>

        {/* Header */}
        <div style={S.header}>
          <div style={S.badge}>free · no sign-up needed</div>
          <h1 style={S.h1}>Your Creativity Isn't Gone</h1>
          <p style={S.sub}>A free AI tool for stuck artists — by Nicole Lau</p>
        </div>

        {/* Chat */}
        <div ref={chatRef} className="nl-chat" style={S.chat}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={i === 0 ? "" : "nl-msg"}
              style={m.role === "user" ? S.rowUser : S.rowAsst}
            >
              <div style={m.role === "user" ? S.avUser : S.avAsst}>
                {m.role === "user" ? "You" : "NL"}
              </div>
              <div style={m.role === "user" ? S.bubUser : S.bubAsst}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <TypingDots />}
          {showEmail && <EmailCapture />}
        </div>

        {/* Input */}
        <div style={S.inputArea}>
          <div style={S.inputWrap(focused)}>
            <textarea
              className="nl-textarea"
              style={{
                ...S.textarea,
                opacity: showEmail ? 0.45 : 1,
              }}
              placeholder="Share what's coming up for you..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              rows={1}
              disabled={showEmail}
              aria-label="Your message"
            />
            <button
              style={S.sendBtn(canSend)}
              onClick={send}
              disabled={!canSend}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={S.footer}>
          <p style={S.footerP}>
            Responds uniquely to everything you type · Not a substitute for professional support
          </p>
        </div>

      </div>
    </>
  );
}
