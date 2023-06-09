import { useState } from "react";
import "./Card.css";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <article className="flex  items-center justify-center bg-slate-100 rounded-xl">
      <div className="group h-96 w-80 [perspective:1000px]">
        <div
          className={`relative h-full w-full rounded-xl
          shadow-xl transition-all  durantion-500  [transform-style:preserve-3d] 
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
          onClick={handleClick}
        >
          <div className="absolute inset-0 h-full shadow-xl rounded-xl">
            <img
              className="h-5/6 w-full object-cover
            shadow-black/80
            rounded-t-xl"
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
            />
            <div className="px-6 py-4">
              <p className="font-bold text-xl mb-2">"a man is facing away"</p>
            </div>
          </div>

          <div
            className="absolute inset-0 h-full w-full
            bg-black px-12 text-center
            shadow-xl
            rounded-xl
           text-slate-200
           [transform:rotateY(180deg)]
           [backface-visibility:hidden]
           "
          >
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="text-base">Mining of the word</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default Card;
