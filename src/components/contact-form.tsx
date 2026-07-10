"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site-config";

type FieldErrors = Record<string, string>;

const requiredFields: { id: string; label: string }[] = [
  { id: "name", label: "이름을 입력해주세요." },
  { id: "contact", label: "연락처를 입력해주세요." },
  { id: "message", label: "문의 내용을 입력해주세요." },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const nextErrors: FieldErrors = {};
    for (const field of requiredFields) {
      const value = formData.get(field.id);
      if (typeof value !== "string" || value.trim() === "") {
        nextErrors[field.id] = field.label;
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidId = requiredFields.find((field) => nextErrors[field.id])?.id;
      if (firstInvalidId) {
        form.querySelector<HTMLElement>(`[name="${firstInvalidId}"]`)?.focus();
      }
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-neutral-200 p-8 text-center">
        <p className="text-lg font-semibold">문의가 접수되었습니다</p>
        <p className="mt-2 text-sm text-neutral-500">빠른 시일 내에 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-sm font-medium">
          문의 서비스
        </label>
        <select
          id="service"
          name="service"
          required
          className="h-12 rounded-xl border border-neutral-300 bg-white px-4 text-base"
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
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`h-12 rounded-xl border bg-white px-4 text-base ${
            errors.name ? "border-red-500" : "border-neutral-300"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact" className="text-sm font-medium">
          연락처 (전화 또는 카카오톡)
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? "contact-error" : undefined}
          className={`h-12 rounded-xl border bg-white px-4 text-base ${
            errors.contact ? "border-red-500" : "border-neutral-300"
          }`}
        />
        {errors.contact && (
          <p id="contact-error" className="text-sm text-red-600">
            {errors.contact}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`rounded-xl border bg-white px-4 py-3 text-base ${
            errors.message ? "border-red-500" : "border-neutral-300"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 flex h-12 items-center justify-center rounded-full bg-amber-500 text-base font-semibold text-white transition-colors hover:bg-amber-600"
      >
        상담 신청하기
      </button>
    </form>
  );
}
