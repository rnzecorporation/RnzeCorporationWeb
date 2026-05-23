import { Shield, Download, Monitor, Terminal, Smartphone } from "lucide-react";

const platforms = [
  {
    id: "windows",
    label: "Windows",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
  },
  {
    id: "linux",
    label: "Linux",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.504 0c-.155 0-.315.008-.48.021C7.27.191 4.22 5.082 4.168 5.165a.535.535 0 0 0-.094.301c0 .092.025.18.072.259l2.437 3.98a.497.497 0 0 0 .435.245.504.504 0 0 0 .457-.3l.38-.79c.24-.498.57-.95.96-1.327.39-.376.848-.674 1.352-.875a4.28 4.28 0 0 1 1.572-.288c.546 0 1.076.097 1.573.288.503.201.96.499 1.352.875.39.376.72.83.96 1.327l.381.79a.504.504 0 0 0 .457.3.497.497 0 0 0 .435-.245l2.437-3.98a.497.497 0 0 0-.022-.56C19.78 5.082 16.73.19 12.984.021A6.34 6.34 0 0 0 12.504 0zM9.93 7.104c-.218 0-.43.023-.637.07a3.21 3.21 0 0 0-.58.196 3.036 3.036 0 0 0-.5.307 2.867 2.867 0 0 0-.411.405 2.74 2.74 0 0 0-.298.485 2.71 2.71 0 0 0-.17.552 2.73 2.73 0 0 0-.038.578c.014.19.054.376.117.553.063.177.15.344.257.496.108.152.234.29.375.41.14.12.294.22.457.298.163.078.334.135.509.17.174.036.352.054.53.054.178 0 .355-.018.53-.054.174-.035.345-.092.508-.17a2.46 2.46 0 0 0 .457-.298c.141-.12.267-.258.375-.41.108-.152.194-.319.257-.496.063-.177.103-.362.117-.553a2.73 2.73 0 0 0-.038-.578 2.71 2.71 0 0 0-.17-.552 2.74 2.74 0 0 0-.298-.485 2.867 2.867 0 0 0-.411-.405 3.036 3.036 0 0 0-.5-.307 3.21 3.21 0 0 0-.58-.196 3.304 3.304 0 0 0-.637-.07zm5.14 0c-.218 0-.43.023-.637.07a3.21 3.21 0 0 0-.58.196 3.036 3.036 0 0 0-.5.307 2.867 2.867 0 0 0-.411.405 2.74 2.74 0 0 0-.298.485 2.71 2.71 0 0 0-.17.552 2.73 2.73 0 0 0-.038.578c.014.19.054.376.117.553.063.177.15.344.257.496.108.152.234.29.375.41.14.12.294.22.457.298.163.078.334.135.509.17.174.036.352.054.53.054.178 0 .355-.018.53-.054.174-.035.345-.092.508-.17a2.46 2.46 0 0 0 .457-.298c.141-.12.267-.258.375-.41.108-.152.194-.319.257-.496.063-.177.103-.362.117-.553a2.73 2.73 0 0 0-.038-.578 2.71 2.71 0 0 0-.17-.552 2.74 2.74 0 0 0-.298-.485 2.867 2.867 0 0 0-.411-.405 3.036 3.036 0 0 0-.5-.307 3.21 3.21 0 0 0-.58-.196 3.304 3.304 0 0 0-.637-.07zM12.5 14.332c-1.205 0-2.27.546-3.004 1.41a4.505 4.505 0 0 0-1.05 2.888c-.003.34.03.678.097 1.01.068.33.17.65.304.956.27.613.676 1.152 1.184 1.565.507.413 1.106.696 1.75.822.238.047.48.071.722.071.24 0 .483-.024.72-.07a4.45 4.45 0 0 0 1.752-.823c.508-.413.913-.952 1.183-1.565.134-.306.236-.626.304-.956.068-.332.1-.67.097-1.01a4.505 4.505 0 0 0-1.05-2.888 4.002 4.002 0 0 0-3.009-1.41z" />
      </svg>
    ),
  },
  {
    id: "android",
    label: "Android",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
      </svg>
    ),
  },
  {
    id: "ios",
    label: "iOS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#003366" }}
    >
      <div className="w-full max-w-lg mx-auto px-6 py-32 flex flex-col items-center text-center gap-6">
        <span className="text-white/50 text-xs uppercase tracking-widest font-medium">
          Featured Application
        </span>

        <div className="mt-2 mb-2">
          <Shield size={80} color="#FFFFFF" strokeWidth={1.2} />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <h1
            className="font-space-grotesk font-black text-4xl md:text-6xl uppercase tracking-wide text-white leading-tight"
            style={{ wordBreak: "break-word" }}
          >
            RnzeShield Pro
          </h1>
          <p className="text-white/60 text-xs uppercase tracking-widest font-medium">
            Enterprise Security Suite
          </p>
        </div>

        <p className="text-white/70 text-sm md:text-base max-w-sm leading-relaxed">
          Real-time threat detection and advanced firewall protection for modern teams. Trusted by thousands of professionals worldwide.
        </p>

        {/* Platform Icons */}
        <div className="flex items-center justify-center gap-8 mt-2">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center gap-1.5 cursor-default transition-all duration-300 ease-in-out hover:scale-110"
              data-testid={`platform-icon-${p.id}`}
            >
              <div className="text-white/70 hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <span className="text-white/40 text-[10px] uppercase tracking-wider">
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <button
          data-testid="hero-download-btn"
          className="mt-2 flex items-center gap-3 px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#003366",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#E8EDF2";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FFFFFF";
          }}
        >
          <Download size={18} />
          Download Now
        </button>

        <div className="flex items-center gap-4 mt-1">
          <div className="w-8 h-px bg-white/20"></div>
          <span className="text-white/30 text-xs uppercase tracking-widest">
            v3.0.1 &nbsp;&middot;&nbsp; 48.2 MB
          </span>
          <div className="w-8 h-px bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
