
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { GoogleGenAI } from "@google/genai";
import { Eraser, Upload, Loader2, Download } from 'lucide-react';

const BackgroundRemover: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBackground = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType } },
            { text: "Remove the background from this image. Replace the background with a solid flat white color. Keep the main subject intact. Return the result as an image." }
          ]
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setResult(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          break;
        }
      }
      
      if (!result && !response.candidates?.[0]?.content?.parts.find(p => p.inlineData)) {
         setError("AI did not return a processed image. Try again.");
      }
    } catch (err: any) {
      setError("Failed to process image. Make sure the subject is clear.");
    } finally {
      setLoading(false);
    }
  };

  const seoData = {
    title: 'AI Background Remover: Effortlessly Remove Backgrounds from Photos Online',
    introduction: 'Need to isolate a subject for your store or profile? Habix Media\'s AI Background Remover provides professional-grade masking in seconds. No more manual path-tracing; let our AI do the heavy lifting.',
    howToUse: [
      'Select or drag an image with a clear central subject.',
      'Ensure the background is relatively distinct from the subject.',
      'Initiate the "Remove Background" command.',
      'Download your subject isolated on a clean white background.'
    ],
    benefits: [
      'Edge Detection Excellence: Accurately handles hair, fur, and complex object boundaries.',
      'Commercial Grade: Perfect for Amazon and eBay sellers needing white-background product shots.',
      'Batch-Ready Performance: Fast enough to handle your entire catalog workflow.',
      'Completely Free: No subscription or "credits" required to use our premium AI features.'
    ],
    detailedArticle: `High-quality subject isolation is a fundamental skill in digital design, but it can take years to master the "Pen Tool" in professional software. Habix Media democratizes this technology by offering a high-performance AI Background Remover that works instantly in your web browser.

Our tool uses computer vision to identify the "semantic boundaries" of your photo. It recognizes the difference between a person's clothing and the mountain range behind them, or a product and its shadow. By intelligently "cutting out" the subject, we provide a clean, professional asset that can be used in marketing materials, presentation slides, or e-commerce listings.

Why choose Habix Media?
- Time Efficiency: What used to take 10-15 minutes of manual masking now takes 5 seconds.
- Cost Savings: Professional photo editing services charge per image. We offer this utility at zero cost.
- Quality: We use the latest Gemini AI models to ensure that edges are smooth and natural, avoiding the "jagged" look of cheaper background removers.

Whether you're creating a thumbnail for YouTube, a headshot for your portfolio, or a listing for your online store, our tool ensures your subject stands out. Experience professional-grade editing with the click of a button.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Eraser size={32} />
            </div>
            <h2 className="text-2xl font-bold">AI Background Remover</h2>
            <p className="text-slate-500 mt-2">Effortlessly isolate subjects from any background.</p>
          </div>

          {!image ? (
            <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer group relative">
              <input 
                type="file" 
                accept="image/*" 
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <Upload className="mx-auto text-slate-400 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <p className="text-slate-600 font-medium">Upload Image</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase">Input</p>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-square flex items-center justify-center bg-slate-50">
                    <img src={image} alt="Original" className="max-h-full object-contain" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase">Result</p>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-square flex items-center justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                    {loading ? (
                      <Loader2 className="animate-spin text-blue-600" size={40} />
                    ) : result ? (
                      <img src={result} alt="Result" className="max-h-full object-contain" />
                    ) : (
                      <div className="text-slate-300 italic text-sm">Awaiting Process</div>
                    )}
                  </div>
                </div>
              </div>

              {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">{error}</div>}

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setImage(null)}
                  className="flex-1 py-4 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  New Image
                </button>
                {!result ? (
                   <button 
                   onClick={removeBackground}
                   disabled={loading}
                   className="flex-[2] py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center justify-center"
                 >
                   {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : "Remove Background"}
                 </button>
                ) : (
                  <a 
                    href={result} 
                    download="bg-removed-habix.png"
                    className="flex-[2] py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Download className="mr-2" size={20} /> Download Result
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SEOWrapper>
  );
};

export default BackgroundRemover;
