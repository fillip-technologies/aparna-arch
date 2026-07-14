import React, { useState } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Welcome to Aparna Architect. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let botText = "Thank you for reaching out. A representative will contact you shortly. You can also call us at +91-9955805687.";
      if (input.toLowerCase().includes('price') || input.toLowerCase().includes('bhk') || input.toLowerCase().includes('cost')) {
        botText = "We offer spacious 2 & 3 BHK flats starting from premium ranges. Please drop your email or contact details, or call marketing at +91-9955805687.";
      } else if (input.toLowerCase().includes('amenities') || input.toLowerCase().includes('facility')) {
        botText = "Aparna Architect features a 25,000 sqft Club House with over 30+ unique amenities including swimming pool, gym, and landscaped garden. Please visit our Amenities page for details.";
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-[#0E4828] hover:bg-secondary text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2.5 text-[13px] tracking-wider font-semibold transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20 active:scale-95"
      >
        <MessageSquare className="h-4.5 w-4.5 text-secondary-light" />
        <span>Chat with Bingo!</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-22 left-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-neutral-light overflow-hidden flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-secondary-light">
                B
              </div>
              <div>
                <h4 className="font-semibold text-sm">Bingo Virtual Assistant</h4>
                <p className="text-[10px] text-neutral-light/75">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-4 max-h-[300px] overflow-y-auto space-y-3 bg-[#F1F5ED]/30">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-white text-neutral-dark rounded-tl-none border border-neutral-light/80 shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Form input */}
          <form onSubmit={handleSend} className="p-3 border-t border-neutral-light bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Bingo a question..."
              className="flex-1 bg-neutral-light border-0 rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-full transition-colors flex items-center justify-center"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
