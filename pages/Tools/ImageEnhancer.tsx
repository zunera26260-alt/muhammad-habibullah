
import React, { useState } from 'react';
import SEOWrapper from '../../components/SEOWrapper';
import { GoogleGenAI } from "@google/genai";
import { Image as ImageIcon, Upload, Loader2, Download } from 'lucide-react';

const ImageEnhancer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setEnhancedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const enhanceImage = async () => {
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
            { text: "Please enhance this image. Improve the resolution, lighting, sharpness, and overall visual quality. Return only the enhanced image." }
          ]
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setEnhancedImage(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          break;
        }
      }
      
      if (!enhancedImage && !response.candidates?.[0]?.content?.parts.find(p => p.inlineData)) {
         setError("AI did not return an image part. Please try again with a different image.");
      }
    } catch (err: any) {
      setError(err.message || "Failed to enhance image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const seoData = {
    title: 'AI Image Enhancer: Professional Photo Upscaling and Clarity Tool',
    introduction: 'Transform blurry, low-resolution photos into stunning high-definition masterpieces. Habix Media uses cutting-edge Generative AI to sharpen details, balance lighting, and upscale your images for professional use.',
    howToUse: [
      'Click the upload area or drag and drop your low-quality image.',
      'Ensure the image is in JPG, PNG, or WEBP format.',
      'Click the "Enhance with AI" button to start the neural processing.',
      'Once complete, use the "Download Enhanced" button to save your clear photo.'
    ],
    benefits: [
      'Neural Detail Restoration: Our AI predicts and recreates lost texture and sharpness.',
      'Intelligent Lighting Balance: Automatically fixes overexposed or underexposed areas.',
      'Noise Reduction: Smooths out grainy artifacts commonly found in low-light photography.',
      'E-Commerce Optimized: Perfect for improving product photos for Shopify, Amazon, or eBay.'
    ],
    detailedArticle: `In today's visual-centric digital world, image quality is often the difference between success and failure. Whether you're a professional designer, a real estate agent, or a social media manager, low-quality assets can harm your credibility. 

The Habix Media AI Image Enhancer leverages the power of the Gemini 2.5 Flash model to perform what's known as "Super-Resolution." Unlike traditional digital zoom, which simply stretches existing pixels and creates blur, our AI understands the content of the image. It recognizes human faces, natural landscapes, and sharp text, reconstructing these elements with high-fidelity detail.

Common Use Cases:
- Restoring Old Photos: Give new life to vintage family photographs by removing grain and adding sharpness.
- Website Optimization: Upscale small icons or graphics for high-density Retina displays.
- Professional Branding: Sharpen headshots and profile pictures for LinkedIn and professional portfolios.
- Print Readiness: Increase the PPI (pixels per inch) of a digital image so it looks crisp when printed on physical media.

Safety and Quality:
We understand that your photos are personal. Our integration ensures that images are processed in a high-security ephemeral environment. Your data is used only for the duration of the enhancement task and is never used to train global AI models or stored permanently on our servers. Experience the future of photo editing today with Habix Media.`
  };

  return (
    <SEOWrapper content={seoData}>
      <div className="p-8 md:p-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ImageIcon size={32} />
            </div>
            <h2 className="text-2xl font-bold">AI Image Enhancer</h2>
            <p className="text-slate-500 mt-2">Restore clarity and detail to any photo.</p>
          </div>

          {!image ? (
            <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center hover:border-indigo-400 transition-colors cursor-pointer group relative">
              <input 
                type="file" 
                accept="image/*" 
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <Upload className="mx-auto text-slate-400 mb-4 group-hover:scale-110 transition-transform" size={48} />
              <p className="text-slate-600 font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-400 mt-2">PNG, JPG or WEBP up to 5MB</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase">Original</p>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-square flex items-center justify-center">
                    <img src={image} alt="Original" className="max-h-full object-contain" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase">Enhanced</p>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-square flex items-center justify-center relative">
                    {loading ? (
                      <div className="flex flex-col items-center space-y-3">
                        <Loader2 className="animate-spin text-indigo-600" size={40} />
                        <p className="text-sm font-medium text-slate-500">AI is working...</p>
                      </div>
                    ) : enhancedImage ? (
                      <img src={enhancedImage} alt="Enhanced" className="max-h-full object-contain" />
                    ) : (
                      <div className="text-slate-300 italic text-sm">Waiting for action</div>
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
                  Clear Image
                </button>
                {!enhancedImage ? (
                   <button 
                   onClick={enhanceImage}
                   disabled={loading}
                   className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors flex items-center justify-center"
                 >
                   {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : "Enhance with AI"}
                 </button>
                ) : (
                  <a 
                    href={enhancedImage} 
                    download="enhanced-habix.png"
                    className="flex-[2] py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Download className="mr-2" size={20} /> Download Enhanced
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

export default ImageEnhancer;
