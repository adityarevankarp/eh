import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  FaMobileAlt, FaHeartbeat, FaUserMd, FaMapMarkerAlt, 
  FaClipboardList, FaBell, FaDollarSign, FaPhoneAlt, 
  FaEnvelope, FaCalendarCheck, FaShieldAlt, FaClock, 
  FaCheckCircle 
} from "react-icons/fa";
export default function EasyHealthLanding() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen flex flex-col items-center text-center px-6">
      {/* Hero Section */}
      <motion.h1
        className="text-white text-6xl font-extrabold mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        EasyHealth – Instant Emergency Care
      </motion.h1>
      <motion.p
        className="text-white text-xl mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        One tap to connect with emergency responders, family, and healthcare providers – because every second counts.
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button className="bg-red-600 text-white px-10 py-5 text-2xl font-bold rounded-full shadow-lg hover:bg-red-700">
          🚨 SOS Emergency
        </Button>
      </motion.div>
    </div>
  );
}