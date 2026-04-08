'use client';

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.link/zkvg9t`;

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-[30px] right-[10px]
        w-[60px] h-[60px]
        rounded-full animate-pulse
        bg-[#25d366]
        flex items-center justify-center
        shadow-md
        cursor-pointer
        transition-transform duration-200
        hover:scale-110
        z-[1000]
      "
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-[30px] h-[30px]"
      />
    </button>
  );
}
