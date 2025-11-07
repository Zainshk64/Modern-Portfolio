import { Quote } from "lucide-react";
import React from "react";
import  { TextGenerateEffectDemo } from '../texteffect-demo'
const QuoteSection = () => {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto sm:px-6 lg:px-8 bg-black">
      <div className=" mx-auto">
        <Quote className="h-10 w-10 text-yellow-400"/>
        <div>
            <TextGenerateEffectDemo/>
        </div>
        <div className="flex px-14  gap-3 justify-end" >
            <img src="/heroImage.png" className="rounded-full object-cover h-15 w-15  "  alt="" />
            <div>
                <h1>John Smith.</h1>
                <p>Entrepernuer</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
