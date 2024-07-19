import { SocketProvider } from "@/contexts/SocketProvider";
import { Jobs } from "./components/jobs/Jobs";

export default function Home() {
  return (
    <SocketProvider>
      <Jobs />
    </SocketProvider>
  );
}
