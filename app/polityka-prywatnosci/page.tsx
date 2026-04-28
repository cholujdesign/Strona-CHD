import type { Metadata } from 'next'
import { SITE_URL, SITE_EMAIL } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Polityka prywatności — CHD Architekci',
  description: 'Polityka prywatności, cookies i przetwarzanie danych osobowych. CHD Architekci / CholujDesign S.C.',
  alternates: { canonical: `${SITE_URL}/polityka-prywatnosci` },
  robots: { index: false },
}

export default function PolitykaPrywatnosci() {
  return (
    <section className="py-20 bg-white">
      <div className="container-site max-w-3xl">
        <h1 className="font-display text-4xl text-navy mb-3">Polityka prywatności</h1>
        <p className="text-sm text-gray-400 mb-12">Ostatnia aktualizacja: 2025</p>

        <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="font-display text-xl text-navy mb-3">1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest CholujDesign S.C. z siedzibą przy Rynku Głównym 43, 31-013 Kraków.
              Kontakt w sprawach danych: <a href={`mailto:${SITE_EMAIL}`} className="text-gold">{SITE_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">2. Jakie dane zbieramy</h2>
            <p>Gromadzimy dane, które podajesz dobrowolnie:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Imię i nazwisko (formularz kontaktowy)</li>
              <li>Adres e-mail (formularz kontaktowy)</li>
              <li>Treść wiadomości</li>
              <li>Dane techniczne (adres IP, przeglądarka) — automatycznie przez serwer</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">3. Cel przetwarzania</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Odpowiedź na zapytania przesłane przez formularz kontaktowy</li>
              <li>Realizacja umów o świadczenie usług projektowych</li>
              <li>Analityka ruchu na stronie (Google Analytics 4)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">4. Podstawa prawna</h2>
            <p>
              Przetwarzamy dane na podstawie art. 6 ust. 1 lit. a (zgoda), b (umowa) i f (uzasadniony interes) RODO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">5. Cookies</h2>
            <p>
              Strona używa plików cookies w celu zapewnienia prawidłowego działania oraz analizy ruchu (Google Analytics).
              Możesz wyłączyć cookies w ustawieniach przeglądarki — nie wpłynie to na korzystanie z formularza kontaktowego.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">6. Twoje prawa</h2>
            <p>Masz prawo do:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania nieprawidłowych danych</li>
              <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przeniesienia danych</li>
              <li>Sprzeciwu wobec przetwarzania</li>
            </ul>
            <p className="mt-3">
              Żądania realizujemy na wniosek przesłany na: <a href={`mailto:${SITE_EMAIL}`} className="text-gold">{SITE_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">7. Czas przechowywania</h2>
            <p>
              Dane z formularza kontaktowego przechowujemy przez czas niezbędny do obsługi zapytania lub realizacji umowy, nie dłużej niż 5 lat od zakończenia współpracy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">8. Skargi</h2>
            <p>
              W przypadku zastrzeżeń co do przetwarzania danych możesz wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
