"use client";

export default function Particles404() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .particle {
          animation: float 4s ease-in-out infinite;
          opacity: 0.5;
        }
      `}</style>
      
      <div className="particle absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-orange-400" style={{ animationDelay: "0s" }} />
      <div className="particle absolute right-[15%] top-[30%] h-1 w-1 rounded-full bg-orange-300" style={{ animationDelay: "1s" }} />
      <div className="particle absolute left-[20%] bottom-[40%] h-1.5 w-1.5 rounded-full bg-orange-200" style={{ animationDelay: "2s" }} />
      <div className="particle absolute right-[25%] bottom-[30%] h-2 w-2 rounded-full bg-orange-400" style={{ animationDelay: "3s" }} />
      <div className="particle absolute left-[50%] bottom-[20%] h-1 w-1 rounded-full bg-orange-300" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}
