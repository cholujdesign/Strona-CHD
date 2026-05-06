'use client'

import { useState } from 'react'
import Image from 'next/image'

const pl = {
  title: 'Rynek Główny — Apartament — Instrukcje',
  address: 'Adres: Rynek Główny 43, Kraków',
  phone: 'Telefon: +48 516 947 657',
  wifi: 'WiFi: Rynek43Apartamenty2 5G / Hasło: Rg4334#$$#',
  keys: 'Odbiór kluczy',
  keysDesc: 'Prosimy otworzyć skrzyneczkę na klucze znajdującą się przy wejściu do kamienicy i zabrać z niej klucz oraz brelok zbliżeniowy.',
  code: 'Kod dostępu: 2102',
  entrance: 'Wejście',
  step1: 'Użyj breloka zbliżeniowego jeżeli krata jest opuszczona (czytnik po lewej stronie). *Krata sama się opuści po 60 sekundach — wielokrotne przykładanie breloka może zawiesić system. NIGDY NIE UŻYWAJ SIŁY ABY OTWORZYĆ KRATĘ — KARA 500 PLN W RAZIE USZKODZENIA.',
  step2: 'Użyj breloka zbliżeniowego jeżeli drzwi są zamknięte (czytnik po lewej stronie).',
  step3: 'Wejdź po schodach (schowek na bagaże jest pod schodami).',
  step4: 'Użyj breloka zbliżeniowego do drzwi (czytnik po lewej stronie).',
  step5: 'Po prawej znajdować się będą drzwi do lokalu — użyj kluczy do drzwi.',
  exit: 'Wyjście',
  step6: 'Przekręć klucz do mieszkania tylko raz, inaczej osoby w środku nie otworzą drzwi.',
  step7: 'Naciśnij klamkę jeżeli drzwi są zamknięte.',
  step8: 'Naciśnij klamkę jeżeli drzwi są zamknięte.',
  step9: 'Naciśnij przycisk po prawej stronie jeżeli krata jest opuszczona. *Krata sama się opuści po 60 sekundach.',
  checkout: 'Wymeldowanie',
  checkoutDesc: 'Prosimy zamknąć okna i zostawić klucze wraz z brelokiem na stole oraz zatrzasnąć drzwi.',
  rules: 'Regulamin',
  rulesList: [
    'Zakaz palenia.',
    'Zero hałasu po godzinie 22:00.',
    'Prosimy wyłączać światło po wyjściu z lokalu.',
    'Zwierzęta są zakazane.',
    'Tylko zarejestrowani goście.',
    'Zero imprez i wydarzeń.',
    '100 PLN kary za zgubienie klucza lub breloka zbliżeniowego.',
    'Monitoring w budynku. Goście są odpowiedzialni finansowo za zniszczenia przez nich spowodowane.',
  ],
}

const en = {
  title: 'Rynek Główny — Apartment — Instructions',
  address: 'Address: Rynek Główny 43, Kraków',
  phone: 'Phone: +48 516 947 657',
  wifi: 'WiFi: Rynek43Apartamenty2 5G / Password: Rg4334#$$#',
  keys: 'Keys',
  keysDesc: 'Please open the key box at the building entrance and take the key and proximity key fob.',
  code: 'Code: 2102',
  entrance: 'Entrance',
  step1: 'Use the proximity key fob if the gate is closed (reader on the left). *The gate closes automatically after 60 seconds — do not tap the reader repeatedly. NEVER USE FORCE TO OPEN THE GATE — 200 EUR FEE APPLIES.',
  step2: 'Use the proximity key fob to open the door (reader on the left).',
  step3: 'Go upstairs (luggage storage is under the staircase).',
  step4: 'Use the proximity key fob to open the door (reader on the left).',
  step5: "The apartment door will be on your right — use the key to open.",
  exit: 'Exit',
  step6: 'Turn the key only once — otherwise people inside cannot open the door.',
  step7: 'Press the door handle if the door is closed.',
  step8: 'Press the door handle if the door is closed.',
  step9: 'Press the button on the right if the gate is closed. *The gate closes automatically after 60 seconds.',
  checkout: 'Check-out',
  checkoutDesc: 'Please close the windows, leave the key and fob on the table, and pull the door shut.',
  rules: 'House Rules',
  rulesList: [
    'No smoking.',
    'No noise after 10 PM.',
    'Turn off lights when leaving.',
    'No pets.',
    'Registered guests only.',
    'No parties or events.',
    '50 EUR fine for lost key or key fob.',
    'CCTV in operation. Guests are financially responsible for any damages.',
  ],
}

export default function InstructionsPage() {
  const [lang, setLang] = useState<'pl' | 'en'>('pl')
  const t = lang === 'pl' ? pl : en

  const steps = [t.step1, t.step2, t.step3, t.step4, t.step5]
  const exitSteps = [t.step6, t.step7, t.step8, t.step9]

  return (
    <div className="min-h-screen bg-[#1b222e] pt-24 pb-16">
      <div className="max-w-lg mx-auto px-4 text-center">

        <div className="flex gap-3 mb-8 justify-center">
          <button
            onClick={() => setLang('pl')}
            className={`px-4 py-2 text-sm border ${lang === 'pl' ? 'bg-[#A97900] border-[#A97900] text-white' : 'border-white/20 text-white/60'}`}
          >
            Polski
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 text-sm border ${lang === 'en' ? 'bg-[#A97900] border-[#A97900] text-white' : 'border-white/20 text-white/60'}`}
          >
            English
          </button>
        </div>

        <h1 className="font-display text-2xl text-white mb-6">{t.title}</h1>

        <div className="space-y-2 text-white/80 text-sm mb-6">
          <p>{t.address}</p>
          <p>{t.phone}</p>
          <p>{t.wifi}</p>
        </div>

        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          <a href="tel:+48516947657" className="px-4 py-2 bg-[#A97900] text-white text-sm">
            +48 516 947 657
          </a>
          <a href="mailto:cholujdesign@gmail.com" className="px-4 py-2 bg-[#A97900] text-white text-sm">
            Email
          </a>
          <a href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#A97900] text-white text-sm">
            Mapa / Map
          </a>
          <a href="tel:+48507894989" className="px-4 py-2 border border-white/20 text-white/60 text-sm">
            Taxi
          </a>
        </div>

        <h2 className="font-display text-xl text-[#A97900] mb-2">{t.keys}</h2>
        <p className="text-white/70 text-sm mb-3">{t.keysDesc}</p>
        <p className="text-white font-semibold mb-6">{t.code}</p>

        <div className="space-y-1 mb-6">
          {[1, 2].map((n) => (
            <div key={n} className="relative w-full aspect-[4/3] bg-stone-800">
              <Image src={`/images/instructions/${n}.jpeg`} alt={`Instrukcja ${n}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        <h2 className="font-display text-xl text-[#A97900] mb-4">{t.entrance}</h2>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i}>
              <p className="text-white/80 text-sm mb-2">{step}</p>
              <div className="relative w-full aspect-[4/3] bg-stone-800">
                <Image src={`/images/instructions/${i + 3}.jpeg`} alt={`Krok ${i + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-xl text-[#A97900] mt-10 mb-4">{t.exit}</h2>
        <div className="space-y-6">
          {exitSteps.map((step, i) => (
            <div key={i}>
              <p className="text-white/80 text-sm mb-2">{step}</p>
              <div className="relative w-full aspect-[4/3] bg-stone-800">
                <Image src={`/images/instructions/${i + 8}.jpeg`} alt={`Wyjście ${i + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display text-xl text-[#A97900] mt-10 mb-2">{t.checkout}</h2>
        <p className="text-white/70 text-sm mb-8">{t.checkoutDesc}</p>

        <h2 className="font-display text-xl text-[#A97900] mb-4">{t.rules}</h2>
        <ol className="space-y-2 text-left inline-block w-full">
          {t.rulesList.map((rule, i) => (
            <li key={i} className="text-white/70 text-sm flex gap-2">
              <span className="text-[#A97900] shrink-0">{i + 1}.</span>
              {rule}
            </li>
          ))}
        </ol>

      </div>
    </div>
  )
}
