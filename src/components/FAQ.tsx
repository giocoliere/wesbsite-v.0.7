import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "What projects are you currently working on?",
      answer: "I'm actively developing CreeperHUB and its subprojects, creepers.sbs, and OtakuForge, a community platform for anime enthusiasts. I also work on various web development projects and open-source contributions."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "My core expertise includes JavaScript (React, Node.js, NextJs), Java for Minecraft development, Python, modern CSS frameworks like Tailwind, and databases like MongoDB and PostgreSQL. I'm also experienced with cloud platforms and deployment tools."
    },
    {
      question: "Should we believe in you?",
      answer: "Depends on you. The majority of my projects are open-source, so you can check out my GitHub profile to see the code and contributions."
    },
    {
      question: "How did you learned all this?",
      answer: "The experience comes from years of self-learning, experimenting, and modifying existing projects. I've also taken courses, asked Ai for help, and read books to expand my knowledge. But dont worry as I am going to attend the IT university soon."
    },
    {
      question: "How can I collaborate with you?",
      answer: "You can try contacting me through Discord, email, or GitHub. Whether it's contributing to existing projects like Creepercraft or starting something new, I'd love to hear your ideas. (I am faster on discord tho)"
    },
    {
      question: "Are you available for freelance work?",
      answer: "Not right now, but I'm open to discussing potential collaborations in the future. If you have a project in mind, feel free to reach out."
    },
    {
      question: "How can I join your community projects?",
      answer: "You can join the CreeperHUB community through the website, participate in Creepercraft testing, or contribute to open-source projects on my GitHub. I'm always looking for passionate developers and community members to collaborate with."
    },
    {
      question: "Why is this website so ugly?",
      answer: "It's just a demo, no big deal, I'm working on a better one. The design is still a work in progress. Consider it a prototype: Wesbsite v0.7"}
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Frequently Asked Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <button 
                  className={`faq-toggle w-full text-left p-6 flex justify-between items-center ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                  <i className="fas fa-chevron-down text-primary flex-shrink-0"></i>
                </button>
                <div className={`faq-content px-6 ${activeIndex === index ? 'active' : ''}`}>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
