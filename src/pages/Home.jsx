import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-4xl"
      >
        TEST
      </motion.div>
    </div>
  );
}
