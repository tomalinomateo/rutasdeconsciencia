// import { defaultStyles } from "@/lib/defaultStyles";

export default function SpacialBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Estrellas */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full shadow-white animate-twinkle"></div>
      <div
        className="absolute top-40 right-40 w-1 h-1 bg-blue-200 rounded-full shadow-blue-200 animate-twinkle"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-yellow-200 rounded-full shadow-yellow-200 animate-twinkle"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-80 right-1/4 w-1 h-1 bg-purple-200 rounded-full shadow-purple-200 animate-twinkle"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-32 left-2/3 w-1.5 h-1.5 bg-cyan-200 rounded-full shadow-cyan-200 animate-twinkle"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-96 left-1/4 w-1 h-1 bg-pink-200 rounded-full shadow-pink-200 animate-twinkle"
        style={{ animationDelay: "0.8s" }}
      ></div>

      {/* Elementos flotantes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-100/5 rounded-full blur-galaxy animate-float"></div>
      <div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-yellow-200/5 rounded-full blur-nebula animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-200/3 rounded-full blur-galaxy animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
}
