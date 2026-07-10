"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site-config";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-200 p-8 text-center dark:border-neutral-800">
        <p className="text-lg font-semibold">문의가 접수되었습니다</p>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">빠른 시일 내에 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-medium">
          문의 서비스
        </label>
        <select
          id="service"
          name="service"
          required
          className="h-12 rounded-xl border border-neutral-300 bg-white px-4 text-base dark:border-neutral-700 dark:bg-neutral-900"
        >
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          이름
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="h-12 rounded-xl border border-neutral-300 bg-white px-4 text-base dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact" className="text-sm font-medium">
          연락처 (전화 또는 카카오톡)
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="h-12 rounded-xl border border-neutral-300 bg-white px-4 text-base dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <button
        type="submit"
        className="mt-2 h-12 rounded-full bg-neutral-900 text-base font-semibold text-white transition-colors hover:bg-amber-600 dark:bg-white dark:text-neutral-900"
      >
        상담 신청하기
      </button>
    </form>
  );
}
