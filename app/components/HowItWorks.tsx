import { MousePointerClick, Pencil, Send } from 'lucide-react';

const StepCard = ({ Icon, title, description }: { Icon: React.ElementType, title: string, description: string }) => (
  <div className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-10 hover:border-white/10 transition-all backdrop-blur-sm">
    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <Icon size={24} strokeWidth={2} />
    </div>
    <div className="flex flex-col gap-3">
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-noto-sans), ui-sans-serif, system-ui' }}>{description}</p>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <div className="w-full max-w-[1200px] px-4 py-12 md:py-16">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">How it Works</h2>
        <p className="text-gray-400 text-base" style={{ fontFamily: 'var(--font-noto-sans), ui-sans-serif, system-ui' }}>Create a surprise in three simple steps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        <StepCard
          Icon={MousePointerClick}
          title="1. Select"
          description="Choose from our curated collection of minimalist and animated templates."
        />
        <StepCard
          Icon={Pencil}
          title="2. Customize"
          description="Add your favorite photos, write a personal message, and pick a song."
        />
        <StepCard
          Icon={Send}
          title="3. Share"
          description="Send the unique link to your special someone and watch them smile."
        />
      </div>
    </div>
  );
}