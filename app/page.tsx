"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PterodactylTour from "@/components/PterodactylTour";
import FeaturesBento from "@/components/FeaturesBento";
import NodesPing from "@/components/NodesPing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CreateServerModal from "@/components/CreateServerModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Neo Free Starter");

  const handleOpenModal = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen relative selection:bg-primary/30">
      {/* Floating Pill Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Pricing & Custom RAM Slider */}
      <Pricing onOpenModal={handleOpenModal} />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Pterodactyl Panel Tour */}
      <PterodactylTour />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Bento Grid Features */}
      <FeaturesBento />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Live Nodes & Ping Latency Checker */}
      <NodesPing />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* FAQ Accordion */}
      <Faq />

      {/* Footer */}
      <Footer />

      {/* Interactive Server Creation Dialog */}
      <CreateServerModal
        isOpen={modalOpen}
        planName={selectedPlan}
        onClose={handleCloseModal}
      />
    </main>
  );
}
