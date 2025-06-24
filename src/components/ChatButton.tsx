"use client"

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with the API key
const genAI = new GoogleGenerativeAI("AIzaSyCuRwhgAqfhCsP5vzvR8lujYUbeb9COOXc");

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState<{type: 'user' | 'bot', text: string}[]>([
    {type: 'bot', text: 'Hello! I\'m the PROWEB assistant. How can I help you today? You can ask about our services, membership, events, or any other information about PROWEB Zimbabwe.'}
  ]);

  // Auto-scroll to the bottom of chat when new messages arrive
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping]);

  // Handle chat toggle
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Generate response using Gemini API
  const generateGeminiResponse = async (userQuery: string) => {
    setIsTyping(true);
    
    try {
      // Create a generative model instance
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      // Provide context about PROWEB Zimbabwe to help Gemini generate relevant responses
      const prompt = `
        You are an AI assistant for PROWEB Zimbabwe (Professional Women in Business), an organization established in 2005 
        to empower professional women and promote economic development in Zimbabwe. 
        
        PROWEB offers:
        - Membership tiers with benefits including networking, workshops, mentorship, and exclusive events
        - Regular events including annual conferences, leadership workshops, and networking mixers
        - Services like professional development training, mentorship programs, and advocacy
        - Projects such as Women in Tech Mentorship, Rural SME Digital Transformation, and Youth Skills Development
        
        Contact: info@prowebzimbabwe.org, +263 712 431 175, office in Harare (Mon-Fri, 8:30 AM - 4:30 PM)
        18 Fletcher Road Mount Pleasant, Harare, Zimbabwe

        Please provide accurate and helpful information about PROWEB Zimbabwe.
        If a user query is not related to PROWEB Zimbabwe, kindly inform them that you are an AI assistant and suggest they contact PROWEB Zimbabwe directly.
        Please respond helpfully and accurately to this user query about PROWEB Zimbabwe: ${userQuery}
        
        Keep your response concise and focused on PROWEB Zimbabwe information.
      `;
      
      // Generate content
      const result = await model.generateContent(prompt);
      const response = result.response.text();
      
      setIsTyping(false);
      return response;
    } catch (error) {
      console.error("Error generating response from Gemini:", error);
      
      // Fallback to local response if Gemini API fails
      const fallbackResponse = getFallbackResponse(userQuery);
      
      setIsTyping(false);
      return fallbackResponse;
    }
  };

  // Fallback response function if Gemini API fails
  const getFallbackResponse = (userQuery: string) => {
    const query = userQuery.toLowerCase().trim();
    
    if (/^(hi|hello|hey|greetings)/.test(query)) {
      return "Hello! How can I help you with PROWEB Zimbabwe today?";
    } 
    
    if (query.includes("membership") || query.includes("join")) {
      return "PROWEB Zimbabwe offers various membership tiers for professionals. Benefits include networking opportunities, professional development workshops, mentorship programs, and access to exclusive events.";
    } 
    
    if (query.includes("event") || query.includes("conference")) {
      return "PROWEB Zimbabwe hosts regular events including our annual conference, leadership workshops, networking mixers, and professional development seminars.";
    }
    
    return "Thank you for your question about PROWEB Zimbabwe. We're dedicated to empowering professional women and promoting economic development in Zimbabwe. Could you please provide more details about what you're looking for?";
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate message
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    
    // Add user message to chat
    const userMessage = trimmedMessage;
    setChatHistory(prev => [...prev, {type: 'user', text: userMessage}]);
    
    // Clear input field immediately
    setMessage("");
    
    // Get Gemini response
    const geminiResponse = await generateGeminiResponse(userMessage);
    setChatHistory(prev => [...prev, {type: 'bot', text: geminiResponse}]);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={toggleChat}
          className="bg-red-800 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors duration-300"
          aria-label="Open chat"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{ maxHeight: "calc(100vh - 150px)" }}
          >
            {/* Chat Header */}
            <div className="bg-red-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">PROWEB Assistant</h3>
                  <p className="text-xs text-red-100">Powered by Gemini AI</p>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-red-200 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Chat Messages */}
            <div 
              className="flex-grow p-4 overflow-y-auto bg-gray-50" 
              ref={messagesContainerRef}
              style={{ scrollBehavior: "smooth" }}
            >
              <div className="space-y-4">
                {chatHistory.map((chat, index) => (
                  <div 
                    key={index} 
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        chat.type === 'user' 
                          ? 'bg-red-800 text-white rounded-tr-none' 
                          : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-tl-none'
                      }`}
                    >
                      {chat.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 shadow-sm border border-gray-200 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-black"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  className={`${isTyping || !message.trim() ? 'bg-gray-400' : 'bg-red-800 hover:bg-red-700'} text-white px-4 py-2 rounded-r-lg transition-colors duration-300`}
                  disabled={isTyping || !message.trim()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}