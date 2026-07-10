import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "HYUNGNIM LAOS 상담 문의.",
};

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-xl">
        <p className="text-sm font-medium tracking-widest text-amber-600 uppercase">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">상담 문의</h1>
        <p className="mt-4 text-neutral-500">
          아래 정보를 남겨주시면 빠르게 답변 드립니다.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
