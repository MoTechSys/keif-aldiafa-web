"use client";

import { memo } from "react";
import Header from "@/components/v7/Header";
import Footer from "@/components/v7/Footer";
import WhatsAppFab from "@/components/v7/WhatsAppFab";
import Reveal from "@/components/v7/Reveal";
import Lightbox from "@/components/v7/Lightbox";

/**
 * الشِل (المرحلة 2 — D115): هيدر النموذج + المحتوى + فوتر النموذج + واتساب طافٍ
 * واحد + المعرض الموحّد + حركة الظهور. حلّ محل Navbar/Footer/FloatingWhatsApp
 * القديمة (وطلب تثبيت PWA الذي كان معها — أُزيل: ليس في النموذج، D115).
 */
function ClientLayoutInner({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFab />
      <Lightbox />
      <Reveal />
    </>
  );
}

export default memo(ClientLayoutInner);
