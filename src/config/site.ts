/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * Preencha os campos marcados com "PREENCHER" antes de publicar.
 * Campos vazios ("") ficam ocultos no site automaticamente.
 */

export const siteConfig = {
  /** Nome comercial (provisório) */
  name: "Seu Pet Shop",

  /**
   * WhatsApp: formato internacional, SOMENTE dígitos (DDI + DDD + número).
   * Exemplo: 5511987654321. PREENCHER — o valor abaixo é provisório.
   */
  whatsappNumber: "5500000000000",

  whatsappMessage:
    "Olá! Gostaria de conhecer os serviços e agendar um atendimento para meu pet.",

  /** Contato — PREENCHER (deixe "" para ocultar) */
  phoneDisplay: "",
  email: "",
  address: "",
  /** Horários — PREENCHER. Ex.: { days: "Segunda a sexta", hours: "9h às 18h" } */
  openingHours: [] as { days: string; hours: string }[],

  /** Redes sociais — só aparecem quando preenchidas */
  social: {
    instagram: "",
    facebook: "",
  },
};

/** Serviços — ajuste `confirmed` conforme o que o proprietário confirmar. */
export const services = [
  {
    title: "Banho",
    description:
      "Banho cuidadoso, com produtos adequados ao tipo de pele e pelagem, secagem tranquila e atenção ao bem-estar do seu pet.",
    confirmed: true,
  },
  {
    title: "Tosa",
    description:
      "Tosa higiênica ou estética, respeitando as características de cada raça e o conforto do animal.",
    confirmed: true,
  },
  {
    title: "Hidratação e pelagem",
    description:
      "Tratamentos de hidratação e cuidados com a pelagem para deixá-la macia, brilhante e saudável.",
    confirmed: true,
  },
  {
    title: "Outros serviços",
    description:
      "Espaço reservado para serviços adicionais, que serão incluídos após confirmação do proprietário.",
    confirmed: false,
  },
];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const PLACEHOLDER_NUMBER = "5500000000000";
export const isWhatsappConfigured = () =>
  /^\d{12,13}$/.test(siteConfig.whatsappNumber) &&
  siteConfig.whatsappNumber !== PLACEHOLDER_NUMBER;

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
