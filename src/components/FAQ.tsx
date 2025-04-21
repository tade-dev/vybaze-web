
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the AI feedback?",
    answer: "Our AI feedback system provides highly accurate analysis based on thousands of professionally produced tracks. While no AI is perfect, our system offers valuable insights that align with industry standards and professional feedback about 90% of the time."
  },
  {
    question: "How do I sell my music on Vybaze?",
    answer: "After uploading your track, simply toggle the 'Sell This Track' option, set your price, add payment details, and our platform handles the rest. You'll receive payouts directly to your connected payment account."
  },
  {
    question: "What audio formats are supported?",
    answer: "Vybaze currently supports MP3 and WAV file formats. We recommend uploading high-quality files (at least 320kbps for MP3 or 16-bit/44.1kHz for WAV) for the best AI analysis results."
  },
  {
    question: "How long does the AI feedback take?",
    answer: "Our AI typically returns comprehensive feedback in under 60 seconds. Processing time may vary slightly based on track length and server load."
  },
  {
    question: "Is there a limit to how many tracks I can upload?",
    answer: "Free accounts can upload up to 5 tracks per month for AI feedback. Premium accounts enjoy unlimited uploads, priority processing, and additional monetization tools."
  },
  {
    question: "How does Vybaze handle copyright protection?",
    answer: "We use advanced fingerprinting technology to verify original content. All uploads are protected, and you maintain 100% ownership of your music while selling through our platform."
  }
];

const FAQ = () => {
  return (
    <section className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
