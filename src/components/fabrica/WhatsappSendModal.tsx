import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const COUNTRIES: { code: string; flag: string; name: string; dial: string; ph: string }[] = [
  { code: "BR", flag: "🇧🇷", name: "Brasil", dial: "55", ph: "11 99999-9999" },
  { code: "PT", flag: "🇵🇹", name: "Portugal", dial: "351", ph: "912 345 678" },
  { code: "US", flag: "🇺🇸", name: "Estados Unidos", dial: "1", ph: "555 123 4567" },
  { code: "ES", flag: "🇪🇸", name: "Espanha", dial: "34", ph: "612 345 678" },
  { code: "AR", flag: "🇦🇷", name: "Argentina", dial: "54", ph: "11 1234-5678" },
  { code: "MX", flag: "🇲🇽", name: "México", dial: "52", ph: "55 1234 5678" },
  { code: "CL", flag: "🇨🇱", name: "Chile", dial: "56", ph: "9 1234 5678" },
  { code: "CO", flag: "🇨🇴", name: "Colômbia", dial: "57", ph: "300 123 4567" },
  { code: "PE", flag: "🇵🇪", name: "Peru", dial: "51", ph: "912 345 678" },
  { code: "UY", flag: "🇺🇾", name: "Uruguai", dial: "598", ph: "9 123 456" },
  { code: "PY", flag: "🇵🇾", name: "Paraguai", dial: "595", ph: "981 123456" },
  { code: "FR", flag: "🇫🇷", name: "França", dial: "33", ph: "6 12 34 56 78" },
  { code: "IT", flag: "🇮🇹", name: "Itália", dial: "39", ph: "312 345 6789" },
  { code: "DE", flag: "🇩🇪", name: "Alemanha", dial: "49", ph: "1512 3456789" },
  { code: "GB", flag: "🇬🇧", name: "Reino Unido", dial: "44", ph: "7400 123456" },
];

interface Props {
  open: boolean;
  onClose: () => void;
  onSend: (phoneFull: string) => void;
  defaultPhone?: string;
}

export const WhatsappSendModal = ({ open, onClose, onSend, defaultPhone }: Props) => {
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [phone, setPhone] = useState(defaultPhone || "");

  if (!open) return null;

  const handleSend = () => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 6) {
      alert("Digite um número válido (com DDD).");
      return;
    }
    onSend(`${country.dial}${cleaned}`);
    onClose();
  };

  const sendWithoutNumber = () => {
    onSend("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            Enviar no WhatsApp
          </h3>
          <button onClick={onClose} className="text-white/50 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-white/60 mb-4">
          Escolha o país e digite o número de quem vai receber o diagnóstico.
        </p>

        <label className="text-xs text-white/60 uppercase tracking-wider font-semibold block mb-2">
          País
        </label>
        <select
          value={country.code}
          onChange={(e) => {
            const c = COUNTRIES.find((x) => x.code === e.target.value);
            if (c) setCountry(c);
          }}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3 py-3 text-white outline-none focus:border-white/40 mb-4"
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code} className="bg-zinc-900">
              {c.flag} {c.name} (+{c.dial})
            </option>
          ))}
        </select>

        <label className="text-xs text-white/60 uppercase tracking-wider font-semibold block mb-2">
          Número (com DDD)
        </label>
        <div className="flex gap-2 mb-5">
          <div className="px-3 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white text-sm font-semibold flex items-center gap-1">
            <span>{country.flag}</span>
            <span>+{country.dial}</span>
          </div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={country.ph}
            inputMode="tel"
            className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-white/40"
          />
        </div>

        <button
          onClick={handleSend}
          className="w-full px-5 py-3 bg-[#25D366] hover:brightness-110 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors mb-2"
        >
          <MessageCircle className="w-4 h-4" /> Abrir WhatsApp e enviar
        </button>

        <button
          onClick={sendWithoutNumber}
          className="w-full px-5 py-2.5 text-white/60 hover:text-white text-xs font-semibold transition-colors"
        >
          Enviar sem número (escolher contato no WhatsApp)
        </button>
      </div>
    </div>
  );
};