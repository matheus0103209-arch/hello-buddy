import { describe, expect, it } from "vitest";
import { siteConfig, whatsappUrl } from "@/config/site";

describe("WhatsApp link", () => {
  it("uses wa.me with the configured number and encoded message", () => {
    expect(whatsappUrl("Olá! Meu pet")).toBe(
      `https://wa.me/${siteConfig.whatsappNumber}?text=Ol%C3%A1!%20Meu%20pet`,
    );
  });
});
