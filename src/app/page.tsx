import { TypingHeader } from "@/components/TypingHeader";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <TypingHeader
        title="Hello, I'm Vishnu Pasuleti"
        className="text-3xl font-bold text-transparent bg-clip-text"
      />
      <p className="text-lg font-medium text-gray-500 bg-clip-text">
        I am a full-stack developer with over a decade of experience in
        architecting, designing, and developing scalable applications
      </p>
    </div>
  );
}
