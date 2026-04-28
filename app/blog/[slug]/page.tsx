import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export const posts: Record<string, {
  title: string
  date: string
  category: string
  excerpt: string
  content?: string
  html?: string
  coverImage?: string
  gallery?: string[]
}> = {
  'newhaven-place-of-disappearance': {
    title: 'Newhaven, Place of Disappearance — studium światła i formy',
    date: '2016-06-01',
    category: 'Architektura koncepcyjna',
    excerpt: 'Ścieżka słońca definiowała bryłę. Bryła i jej strategiczne posadowienie definiowały cały master plan. Studium rewitalizacji nadmorskiego miasta w Anglii.',
    coverImage: '/images/brighton.webp',
    gallery: ['/images/brighton.webp', '/images/brighton2.webp'],
    html: `
      <p>Newhaven to miasto portowe w East Sussex, na wybrzeżu Kanału La Manche. Zapomniane przez planistów, naznaczone przemysłowym charakterem i starzejącą się tkanką miejską — idealne pole do badań nad możliwościami rewitalizacji.</p>

      <p>Projekt <em>Place of Disappearance</em> to studium z 2016 roku, w którym punktem wyjścia była geometria światła. Ścieżka słońca — ściśle obliczona dla szerokości geograficznej Newhaven — definiowała bryłę projektowanego obiektu: jej nachylenia, cięcia, przesłony. Obiekt nie był odpowiedzią na program. Był odpowiedzią na światło.</p>

      <h2>Od bryły do miasta</h2>
      <p>Strategiczne posadowienie obiektu na działce wynikało z tej samej logiki. Cień rzucany przez bryłę w określonych porach roku i dnia stał się generatorem układu przestrzennego całego master planu — osi pieszych, placów, stref aktywności. Bryła i jej cień dosłownie <em>narysowały</em> strukturę urbanistyczną otoczenia.</p>

      <p>Ten sposób myślenia — od zjawiska fizycznego (światło) do formy (bryła) do układu przestrzennego (miasto) — stanowi odwrócenie typowej logiki projektowej, w której planuje się miasto od góry, a budynek jest wypełnieniem siatki. Tutaj pojedynczy obiekt i jego relacja ze słońcem stały się katalitycznym elementem całości.</p>

      <h2>Kontekst: rewitalizacja przez obecność</h2>
      <p>Newhaven jako miasto jest wyraźnie naznaczone brakiem. Zabudowa przemysłowa, port towarowy, zanikające centrum — miasto, które jakby "znika" ze świadomości regionu. Stąd tytuł: <em>Place of Disappearance</em>. Projekt nie proponuje drastycznej interwencji — proponuje gest, który nadaje miejscu nową orientację i nową tożsamość poprzez świadomą obecność w krajobrazie świetlnym.</p>
    `,
  },

  'east-london-organic-development': {
    title: 'East London, Organic Development — algorytmiczne miasto',
    date: '2018-09-01',
    category: 'Architektura koncepcyjna',
    excerpt: 'Projekt oparty na metabolistach, filozofii sytuacjonizmu i New Babylon. Algorytmiczne struktury z tetrahedronu reagujące na zdecentralizowaną tkankę East London.',
    coverImage: '/images/oxford.webp',
    gallery: ['/images/oxford.webp', '/images/oxford2.webp'],
    html: `
      <p>East London to obszar o szczególnie fragmentarycznej strukturze urbanistycznej. W przeciwieństwie do haussmannowskiego centrum Paryża czy regularnej siatki Manhattanu, wschodnie rejony Londynu rozwijały się oddolnie — warstwa po warstwie, bez centralnego planu, reagując na migracje, industrializację i kolejne fale przemian ekonomicznych. Ten zdecentralizowany charakter stał się punktem wyjścia projektu z 2018 roku.</p>

      <h2>Trzy źródła teoretyczne</h2>

      <p><strong>Metabolizm</strong> — japoński ruch architektoniczny lat 60., który proponował miasto jako żywy organizm: wymieniane kapsułowe moduły mieszkalne wtykane w stałe megastruktury. Kisho Kurokawa i Kenzo Tange pokazali, że architektura może być projektowana jak systemy biologiczne — z wbudowaną zdolnością do ewolucji i wymiany.</p>

      <p><strong>Sytuacjonizm</strong> — filozofia i ruch artystyczny tego samego okresu. Guy Debord wprowadził pojęcia <em>dérive</em> — spontanicznej wędrówki przez miasto zgodnie z jego "psychogeografią" — i <em>détournement</em>, przekształcania zastanej przestrzeni. Miasto nie jest trwałą strukturą. Jest sceną dla sytuacji.</p>

      <p><strong>New Babylon</strong> — wieloletni projekt Constanta Nieuwenhuys (1956–1974): sieć powiązanych platform zawieszonych nad starymi miastami, zamieszkiwana przez nomadów bez stałych domów. Przestrzeń jako ciągły eksperyment, nieustannie rekonfigurowana przez tych, którzy ją zamieszkują.</p>

      <h2>Struktura i moduł</h2>
      <p>Projekt opracował prototypy modułów opartych na tetrahedronie — jednej ze <em>space-filling polyhedra</em>, wielościanów zdolnych wypełnić przestrzeń bez przerw i bez odpadów poprzez samo powtarzanie. Algorytmiczne budowanie struktur pozwalało generować różne konfiguracje przestrzenne w zależności od warunków miejscowych, gęstości i kierunku wzrostu.</p>

      <p>Kluczowa zasada projektu: <strong>wielkość przestrzeni nie była narzucona z zewnątrz</strong> — była ustalana przez użytkownika. Każda jednostka mogła rozszerzać się lub kurczyć w zależności od aktualnych potrzeb. Struktury rosły organicznie, reagując na ludzkie potrzeby w czasie rzeczywistym — tak jak East London samo w sobie: nieplanowanie, ale z pewną logiką pod spodem.</p>

      <h2>Znaczenie badania</h2>
      <p>Projekt stanowił prototypowe badanie możliwości systemu architektonicznego, który odpowiada na miasto takim jakim jest — zdecentralizowane, nieplanowane, żywe — zamiast narzucać mu porządek z zewnątrz. W świecie coraz szybszych zmian demograficznych i ekonomicznych pytanie o adaptacyjność formy architektonicznej pozostaje otwarte.</p>
    `,
  },

  'swiadectwo-charakterystyki-energetycznej': {
    title: 'Świadectwo charakterystyki energetycznej — kiedy jest wymagane i ile kosztuje',
    date: '2023-05-10',
    category: 'Proces',
    excerpt: 'Od 28 kwietnia 2023 r. obowiązują nowe przepisy. Kiedy świadectwo energetyczne jest wymagane, co zawiera, ile kosztuje i kto jest zwolniony z obowiązku.',
    html: `
      <p>Świadectwo charakterystyki energetycznej to dokument określający wielkość zapotrzebowania na energię niezbędną do użytkowania budynku lub jego części — ogrzewanie, wentylacja, ciepła woda, chłodzenie, a w budynkach niemieszkalnych również oświetlenie. Obowiązek jego posiadania wynika z prawa europejskiego i ma promować budownictwo efektywne energetycznie.</p>

      <p>Dzięki informacjom zawartym w świadectwie właściciel lub najemca może określić orientacyjne roczne zapotrzebowanie na energię — a tym samym spodziewany koszt utrzymania.</p>

      <h2>Kiedy świadectwo jest wymagane?</h2>
      <ul>
        <li>Przy sprzedaży lub wynajmie budynku, lokalu lub jego części (obowiązek od 2015 r.)</li>
        <li>Po zakończeniu budowy — inwestor dołącza świadectwo do zawiadomienia o zakończeniu budowy lub wniosku o pozwolenie na użytkowanie (od 28 kwietnia 2023 r.)</li>
        <li>Przy staraniu się o dotacje i dofinansowania</li>
        <li>Gdy charakterystyka energetyczna budynku ulegnie zmianie (wymiana okien, źródła ciepła, docieplenie)</li>
        <li>Po upływie 10 lat od poprzedniego świadectwa</li>
      </ul>
      <p>Świadectwo przekazuje się nabywcy lub najemcy — fakt jego przekazania zostaje odnotowany w akcie notarialnym. Notariusz poucza o karze grzywny za niewywiązanie się z obowiązku.</p>

      <h2>Ważność świadectwa</h2>
      <p>Świadectwo jest ważne przez <strong>10 lat</strong> od dnia sporządzenia. Traci ważność przed tym terminem, jeśli przeprowadzono prace zmieniające charakterystykę energetyczną — np. wymiana okien, źródła ciepła lub docieplenie budynku.</p>

      <h2>Co zawiera świadectwo?</h2>
      <p>Wzór świadectwa określa Minister Inwestycji i Rozwoju — jest ustandaryzowany. Zawiera:</p>
      <ul>
        <li>rodzaj, adres, datę budowy budynku</li>
        <li>rodzaje przegród budowlanych, sposób ogrzewania, wentylację i chłodzenie</li>
        <li>zapotrzebowanie na energię użytkową, końcową i nieodnawialną pierwotną</li>
        <li>udział odnawialnych źródeł energii</li>
        <li>jednostkową wielkość emisji CO₂</li>
        <li>zdjęcie obiektu i dane osoby sporządzającej</li>
      </ul>
      <p>Przy ogłoszeniach sprzedaży lub najmu (od 28 kwietnia 2023 r.) należy podawać kluczowe wskaźniki z świadectwa.</p>

      <h2>Forma przekazania</h2>
      <p>Świadectwo można otrzymać w formie:</p>
      <ul>
        <li><strong>papierowej</strong> — z numerem z centralnego rejestru i podpisem własnoręcznym</li>
        <li><strong>elektronicznej</strong> — z numerem z centralnego rejestru i kwalifikowanym podpisem elektronicznym, podpisem zaufanym lub osobistym</li>
      </ul>

      <h2>Kto jest zwolniony z obowiązku?</h2>
      <ul>
        <li>Budynki zabytkowe — objęte ochroną na podstawie przepisów o ochronie zabytków (wpis do rejestru lub gminnej ewidencji zabytków)</li>
        <li>Budynki kultu religijnego</li>
        <li>Obiekty przemysłowe i gospodarcze bez instalacji zużywających energię (poza oświetleniem)</li>
        <li>Budynki mieszkalne użytkowane sezonowo — do 4 miesięcy w roku</li>
        <li>Wolnostojące budynki o powierzchni użytkowej poniżej 50 m²</li>
        <li>Domy o powierzchni zabudowy do 70 m² budowane na własne cele mieszkaniowe (przy sprzedaży lub najmie — obowiązek wraca)</li>
      </ul>
      <p><em>Uwaga: budynki zlokalizowane w strefach ochrony konserwatorskiej lub na obszarach historycznych układów urbanistycznych nie są automatycznie zwolnione — decyduje wpis do rejestru lub ewidencji zabytków.</em></p>

      <h2>Podstawa wykonania</h2>
      <p>Audyt wykonujemy na podstawie dokumentacji okazanej przez zleceniodawcę, wizji lokalnej oraz dokumentacji urzędowej.</p>

      <h2>Orientacyjne koszty</h2>
      <ul>
        <li>Mieszkanie — ok. 500 PLN</li>
        <li>Lokal użytkowy — ok. 1 000 PLN</li>
        <li>Dom jednorodzinny — ok. 1 000 PLN</li>
        <li>Kamienice, obiekty przemysłowe i większe — wycena indywidualna</li>
      </ul>
      <p>Cena zależy od powierzchni lokalu lub budynku, liczby okien i rodzaju instalacji. W celu otrzymania wyceny prosimy o kontakt bezpośredni.</p>

      <p><strong>Brak świadectwa może skutkować karą grzywny w wysokości 5 000 PLN.</strong> Ustawa w aktualnym brzmieniu obowiązuje od 28 kwietnia 2023 roku.</p>
    `,
  },
  'jak-zaczac-projekt-architektoniczny': {
    title: 'Jak zacząć projekt architektoniczny — od działki do pozwolenia',
    date: '2025-01-15',
    category: 'Architektura',
    excerpt: 'MPZP, warunki zabudowy, projekt budowlany, pozwolenie na budowę — krok po kroku przez etapy, które musisz przejść zanim zaczną się prace.',
    html: `
      <p>Decyzja o budowie domu lub przebudowie nieruchomości to jeden z większych kroków inwestycyjnych w życiu. Zanim zaangażujesz architekta i zaczniesz myśleć o elewacji, musisz sprawdzić kilka rzeczy, które zadecydują o tym, co w ogóle możesz na swojej działce zrobić.</p>

      <h2>Krok 1: Sprawdź przeznaczenie działki</h2>
      <p>Pierwsza rzecz, którą musisz zrobić po zakupie działki (lub zanim ją kupisz), to sprawdzić jej status planistyczny. Masz dwie możliwości:</p>
      <ul>
        <li><strong>Miejscowy Plan Zagospodarowania Przestrzennego (MPZP)</strong> — uchwalany przez gminę, określa dokładnie co można na danej działce wybudować: funkcję zabudowy, maksymalną wysokość, wskaźnik zabudowy, linie zabudowy, wymagany procent powierzchni biologicznie czynnej. MPZP jest wiążący i nie podlega negocjacji.</li>
        <li><strong>Warunki Zabudowy (WZ)</strong> — jeśli na danym terenie nie ma MPZP, możesz złożyć wniosek o wydanie decyzji o warunkach zabudowy. Urząd gminy wyda ją w oparciu o zasadę "dobrego sąsiedztwa" — czyli nowa zabudowa musi nawiązywać parametrami do istniejącej w okolicy.</li>
      </ul>
      <p>Bez jednego z powyższych dokumentów nie uzyskasz pozwolenia na budowę ani nie przeprowadzisz skutecznego zgłoszenia robót budowlanych.</p>

      <h2>Krok 2: Badanie geotechniczne</h2>
      <p>Przed zleceniem projektu warto wykonać badanie geotechniczne gruntu. Kosztuje stosunkowo niewiele (kilka tysięcy złotych), a pozwala uniknąć kosztownych niespodzianek na etapie fundamentowania. Warunki gruntowe mają bezpośredni wpływ na wybór technologii fundamentów — w obszarach z wysokim poziomem wód gruntowych lub słabym gruntem koszty fundamentów mogą znacząco wzrosnąć.</p>

      <h2>Krok 3: Wybór architekta i projekt budowlany</h2>
      <p>Projekt budowlany wymagany do uzyskania pozwolenia na budowę może sporządzić wyłącznie osoba z uprawnieniami budowlanymi w odpowiedniej specjalności (architektonicznej lub konstrukcyjno-budowlanej). Uprawnienia nadaje Polska Izba Architektów lub właściwa izba inżynierów budownictwa.</p>
      <p>Proces projektowy przebiega przez kilka etapów:</p>
      <ul>
        <li><strong>Projekt koncepcyjny</strong> — wstępne założenia przestrzenne, rzuty, bryła. Służy do rozmowy z inwestorem i weryfikacji programu.</li>
        <li><strong>Projekt budowlany</strong> — niezbędny do uzyskania pozwolenia na budowę. Zawiera projekt zagospodarowania działki, projekt architektoniczno-budowlany i projekt techniczny. Zakres określa Rozporządzenie Ministra Rozwoju z 2020 r.</li>
        <li><strong>Projekt wykonawczy</strong> — uszczegółowiony projekt dla ekipy realizacyjnej. Nie jest wymagany prawnie, ale niezbędny dla prawidłowego wykonawstwa.</li>
      </ul>

      <h2>Krok 4: Pozwolenie na budowę vs. zgłoszenie</h2>
      <p>Zgodnie z Prawem Budowlanym (Ustawa z dnia 7 lipca 1994 r. z późn. zm.) nie każda inwestycja wymaga pozwolenia na budowę. Część robót wymaga jedynie zgłoszenia, a część można wykonać bez żadnych formalności.</p>
      <ul>
        <li><strong>Pozwolenie na budowę</strong> wymagane jest m.in. dla budynków mieszkalnych jednorodzinnych, jeśli obszar oddziaływania obiektu wykracza poza granicę działki.</li>
        <li><strong>Zgłoszenie</strong> wystarczy dla wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce — przy spełnieniu warunków z art. 29 Prawa Budowlanego.</li>
        <li><strong>Legalizacja samowoli</strong> — budowa bez wymaganego pozwolenia lub zgłoszenia skutkuje postępowaniem naprawczym przed organem nadzoru budowlanego i może wiązać się z nakazem rozbiórki.</li>
      </ul>

      <h2>Krok 5: Kierownik budowy i dziennik budowy</h2>
      <p>Przed rozpoczęciem robót należy ustanowić kierownika budowy — osobę z uprawnieniami budowlanymi, która prowadzi dziennik budowy i jest odpowiedzialna za realizację zgodną z projektem i przepisami. Inwestor zawiadamia właściwy organ o zamierzonym terminie rozpoczęcia robót co najmniej 7 dni wcześniej, dołączając oświadczenie kierownika budowy.</p>

      <h2>Typowy harmonogram</h2>
      <ul>
        <li>Sprawdzenie MPZP/złożenie wniosku o WZ: 1–3 miesiące (WZ może trwać do 90 dni)</li>
        <li>Projekt koncepcyjny i budowlany: 2–4 miesiące</li>
        <li>Uzyskanie pozwolenia na budowę: 65 dni (ustawowy termin dla organu)</li>
        <li>Projekt wykonawczy i wybór wykonawcy: 1–3 miesiące</li>
      </ul>
      <p>W praktyce cały etap przygotowawczy — od pierwszej rozmowy z architektem do wejścia na budowę — zajmuje zwykle od 8 do 14 miesięcy. Warto ten czas uwzględnić w planowaniu finansowania i całego projektu.</p>
    `,
  },
  'modelowanie-3d-dla-biur-architektonicznych': {
    title: 'Dlaczego biura architektoniczne zlecają modelowanie 3D na zewnątrz',
    date: '2025-02-10',
    category: 'B2B / 3D',
    excerpt: 'Outsourcing modelowania 3D pozwala skalować możliwości biura bez zwiększania stałych kosztów. Kiedy warto, na co uważać i jak wygląda dobra współpraca B2B.',
    html: `
      <p>Modelowanie 3D stało się w ostatnich latach standardem — nie tylko na potrzeby wizualizacji dla klientów, ale przede wszystkim jako narzędzie robocze w procesie projektowania i dokumentacji wykonawczej. Rhino3D, Grasshopper, Revit, ArchiCAD — każde biuro ma swój workflow. Problem pojawia się wtedy, gdy projekt wymaga umiejętności lub mocy przerobowych, których biuro nie posiada na stałe.</p>

      <h2>Kiedy outsourcing ma sens?</h2>
      <p>Biuro architektoniczne pracuje projektami. Zapotrzebowanie na modelowanie 3D jest nierównomierne — jeden miesiąc wymaga intensywnej pracy nad modelem, przez kolejne trzy wystarcza standardowa dokumentacja 2D. Zatrudnianie specjalisty na stałe do pracy, której może nie być przez połowę roku, to kosztowna decyzja.</p>
      <p>Outsourcing pozwala tę zmienność wchłonąć: angażujesz zewnętrzny zespół na czas konkretnego projektu lub jego etapu, a twoje stałe koszty pozostają bez zmian. To model szczególnie popularny wśród średnich biur w UK i USA, gdzie stawki za pracę są wyższe niż w Polsce, a specjaliści od modelowania parametrycznego są trudno dostępni lokalnie.</p>

      <h2>Rodzaje prac najczęściej zlecanych zewnętrznie</h2>
      <ul>
        <li><strong>Modelowanie złożonej geometrii</strong> — schody, balustrady, elementy stalowe o niestandardowych kształtach. Geometria krzywoliniowa i parametryczna wymaga specjalistycznych narzędzi (Grasshopper, Dynamo) i doświadczenia, którego nie każde biuro potrzebuje na co dzień.</li>
        <li><strong>Dokumentacja wykonawcza elementów prefabrykowanych</strong> — rysunki warsztatowe dla fabrykatora stali, stolarni, producenta elewacji. Precyzja co do milimetra, znajomość tolerancji produkcyjnych i norm materiałowych.</li>
        <li><strong>CGI i wizualizacje</strong> — rendering końcowy często wymaga dedykowanego czasu i sprzętu. Wiele biur woli mieć wewnętrznie dobry model roboczy, a rendering zlecić zewnętrznie.</li>
        <li><strong>Inwentaryzacje</strong> — szczegółowe modele istniejących budynków na potrzeby przebudowy lub dokumentacji.</li>
      </ul>

      <h2>Jak działa dobra współpraca B2B?</h2>
      <p>Kluczowe jest wejście w istniejący workflow biura bez tarcia. Dobry zewnętrzny wykonawca 3D nie wymaga tłumaczenia od zera — rozumie konwencje plików, systemy warstw, sposób opisywania elementów i formaty wymiany danych między programami. W praktyce oznacza to znajomość DWG, IFC, 3DM i umiejętność pracy w środowiskach kolaboracyjnych (BIM360, Trimble Connect).</p>
      <p>W naszej pracy przy projektach dla biur z Londynu i Chicago współpraca wyglądała tak: biuro przesyłało pliki robocze i brief, my zwracaliśmy gotowy model lub dokumentację w uzgodnionym formacie w określonym terminie. Żadnych zbędnych spotkań, żadnego wprowadzania — model mówił sam za siebie.</p>

      <h2>Na co zwrócić uwagę przy wyborze wykonawcy?</h2>
      <ul>
        <li><strong>Portfolio podobnych realizacji</strong> — geometria parametryczna to nie to samo co rendering wnętrz. Pytaj o konkretne projekty, nie tylko o oprogramowanie.</li>
        <li><strong>Znajomość norm i kodów budowlanych</strong> — przy dokumentacji wykonawczej dla rynku UK czy USA znajomość lokalnych kodów (np. NYC Building Code) jest niezbędna. Błąd w rysunkach warsztatowych kosztuje znacznie więcej niż oszczędność na wykonawcy.</li>
        <li><strong>Dostępność i komunikacja</strong> — różnice stref czasowych, responsywność i jasne terminy to fundamenty sprawnej współpracy zdalnej.</li>
        <li><strong>Poufność</strong> — projekty przed publikacją są wrażliwe. Umowa powinna zawierać klauzulę NDA.</li>
      </ul>

      <h2>Czy warto?</h2>
      <p>Dla biur pracujących z klientami premium lub na rynkach zagranicznych — tak, w wielu przypadkach to jedyna sensowna droga. Skalowanie możliwości bez skalowania kosztów stałych to realna przewaga konkurencyjna. Pytanie nie brzmi "czy zlecać zewnętrznie", ale "komu i jak strukturować tę współpracę".</p>
    `,
  },
  'rakowicka-15a-plomba-architektoniczna': {
    title: 'Rakowicka 15A — jak zaprojektować plombę architektoniczną w Krakowie',
    date: '2025-04-25',
    category: 'Architektura',
    excerpt: 'Wąska działka w sąsiedztwie zabytkowego pałacu, wymogi konserwatora i złożony program mieszkalno-usługowy. Jak powstawał projekt Pi i Sigma przy Rakowickiej 15A.',
    coverImage: '/images/rakowicka151.webp',
    gallery: ['/images/rakowicka151.webp', '/images/rakowicka152.webp'],
    html: `
      <p>Projektowanie w gęstej zabudowie Krakowa to zawsze kompromis. Każda wolna działka ma swojego sąsiada, swoją historię i swoje ograniczenia. Działka przy Rakowickiej 15A miała ich wyjątkowo dużo: wąska, głęboka, z istniejącym pałacem po jednej stronie — obiektem zabytkowym wpisanym do rejestru. I program do zrealizowania: budynek mieszkalno-usługowy, który musi funkcjonować zarówno komercyjnie, jak i przestrzennie, nie dominując nad tym, co już jest.</p>

      <h2>Czym jest plomba architektoniczna?</h2>
      <p>Plomba to budynek wstawiany w lukę w pierzei — między dwa istniejące budynki, często o zupełnie różnym charakterze. W Krakowie takich luk jest wiele: efekt wojennych zniszczeń, rozbiórek i niezrealizowanych inwestycji. Projekt plomby jest trudny z kilku powodów: nie może być ani agresywnie nowoczesny (zabije kontekst), ani ślepo historyzujący (to byłoby kłamstwo). Musi znaleźć własną tożsamość, respektując sąsiedztwo.</p>
      <p>Przy Rakowickiej 15A doszedł dodatkowy czynnik: sąsiedztwo pałacu z XIX wieku. Konserwator od początku był stroną w rozmowie — nie tylko urzędową przeszkodą, ale realnym partnerem wpływającym na kształt projektu.</p>

      <h2>Forma z przestrzeni negatywnej</h2>
      <p>Kluczowa decyzja projektowa dotyczyła nie tego, co budować, ale czego nie budować. Wąska działka, bezpośrednie sąsiedztwo pałacu i konieczność zapewnienia dostępu światła do obu budynków — zarówno nowego, jak i istniejącego — wygenerowały przestrzeń negatywną: wewnętrzny plac między budynkami. To nie był gest sentymentalny ani przypadek. To była konsekwencja geometrii i wzajemnych relacji.</p>
      <p>Przestrzeń między "Pi" (istniejący pałac) a "Sigma" (nowy budynek) stała się organizującym elementem projektu. Oba budynki razem tworzą układ — stąd nazwy zaczerpnięte z matematyki: dwie różne bryły, wspólny wynik.</p>

      <h2>Program — dwa charaktery w jednym budynku</h2>
      <p>Parter i pałac "Pi" pełnią funkcje usługowe. Wyższe kondygnacje nowego budynku "Sigma" to mieszkania. Ten podział nie jest przypadkowy — wynika z logiki ulicy i wymogów planistycznych. Usługi na poziomie chodnika aktywizują pierzeję, mieszkania powyżej korzystają z odległości od hałasu i z widoku. Wewnętrzny dziedziniec jest wspólny — punkt styku obu funkcji.</p>

      <h2>Zieleń jako argument</h2>
      <p>Projekt zaproponował duży procent powierzchni biologicznie czynnej, ogród na poziomie gruntu i zielony dach. To nie był tylko gest ekologiczny — to był argument w rozmowie z konserwatorem i planistą. Gęsta zabudowa centrum Krakowa jest często krytykowana za brak zieleni. Projekt przy Rakowickiej starał się tę lukę wypełnić realnie, nie tylko symbolcznie.</p>

      <h2>Czego uczy ten projekt?</h2>
      <p>Rakowicka 15A to przykład projektu, w którym ograniczenia stały się generatorami formy. Wąska działka wymusiła myślenie o przestrzeni negatywnej. Sąsiedztwo zabytku wymusiło pokorę wobec skali. Program mieszkalno-usługowy wymagał precyzyjnego podziału bez dominacji jednej funkcji. Wynik — "Pi i Sigma" — jest czytelny właśnie dlatego, że każde ograniczenie zostało potraktowane poważnie, a nie obejdzione.</p>
      <p>To lekcja aktualna przy każdym projekcie w historycznym centrum: nie walcz z kontekstem. Projektuj z kontekstem i dzięki niemu.</p>
    `,
  },

  'gastronomia-w-szpitalu': {
    title: 'Gastronomia w szpitalu — jak projektować bistro i kawiarnię dla pacjentów',
    date: '2025-04-28',
    category: 'Wnętrza',
    excerpt: 'Uzdrowisko Bistro w Szpitalu Onkologicznym i Dzień Dobry Cafe w Szpitalu Uniwersyteckim w Krakowie. Co decyduje o projekcie lokalu gastronomicznego w instytucji medycznej?',
    coverImage: '/images/uzdrowiskoBistro.webp',
    gallery: [
      '/images/uzdrowiskoBistro.webp',
      '/images/uzdrowiskoBistro2.webp',
      '/images/uzdrowsko3.webp',
      '/images/dzienDobryCafe.webp',
      '/images/dzienDobryCafe2.webp',
    ],
    html: `
      <p>Szpital to jedno z ostatnich miejsc, w którym myślimy o projektowaniu wnętrz gastronomicznych. A jednak — stołówka, kawiarnia, bistro — te przestrzenie istnieją w każdym dużym szpitalu i są odwiedzane przez setki osób dziennie: pacjentów, rodziny, personel. To, jak wyglądają i jak działają, ma realny wpływ na doświadczenie pobytu w instytucji, której główną konotacją jest stres.</p>
      <p>CHD realizowało dwa projekty gastronomiczne w szpitalach w Krakowie: <strong>Uzdrowisko Bistro</strong> w Szpitalu Onkologicznym przy ul. Garncarska oraz <strong>Dzień Dobry Cafe</strong> w Szpitalu Uniwersyteckim. Każdy z nich stawiał inne pytanie projektowe.</p>

      <h2>Uzdrowisko Bistro — ciepło w trudnym kontekście</h2>
      <p>Szpital Onkologiczny to miejsce, w którym pacjenci spędzają tygodnie lub miesiące — często w trudnym momencie życia. Lokal gastronomiczny musi tu pełnić funkcję nie tylko żywieniową, ale też psychologiczną: miejsce wyjścia z oddziału, chwilowego oderwania, normalności. To wyjątkowo wymagające brief.</p>
      <p>Projekt Uzdrowisko Bistro postawił na ciepłe materiały: drewno, ceramikę, miękkie oświetlenie. Kontrast z korytarzami szpitalnymi był celowy — lokal nie miał udawać, że jest częścią szpitala. Miał być wyraźnie inną przestrzenią, przejściem w inne doświadczenie. Kolorystyka: naturalna, stonowana, bez sterylnej bieli i bez nadmiernie "kawiarnianych" trendów. Charakter: bistro, które mogłoby stać na ulicy w centrum miasta — i to właśnie tworzyło jego wartość w kontekście szpitalnym.</p>
      <p>Funkcjonalnie: lada wydawcza zaprojektowana tak, żeby obsługa była szybka i czytelna nawet dla osób o ograniczonej mobilności. Siedzenia zarówno przy stolikach, jak i przy blacie okiennym — dla tych, którzy chcą być sami ze swoimi myślami i filiżanką kawy.</p>

      <h2>Dzień Dobry Cafe — codzienny rytuał dla personelu i odwiedzających</h2>
      <p>Szpital Uniwersytecki to inny typ instytucji: duży, wielofunkcyjny, z ogromną rotacją ludzi przez cały dzień. Kawiarnia Dzień Dobry Cafe miała obsłużyć zupełnie różnych użytkowników: lekarzy między wizytami, rodziny czekające na wyniki, studentów medycyny, administrację. Każda z tych grup ma inne potrzeby i inny rytm.</p>
      <p>Projekt postawił na elastyczność: układ przestrzenny z różnymi strefami — szybką obsługą przy ladzie dla tych, którzy mają 5 minut, i spokojniejszymi miejscami siedzącymi dla tych, którzy zostają dłużej. Estetyka świadomie "niemszpitalna" — ciepłe drewno, rośliny, grafika ścienna z hasłem tytułowym projektu jako motywem przewodnim.</p>
      <p>Realizacja w czynnym szpitalu oznaczała ścisłe rygory wykonawcze: prace tylko w określonych godzinach, materiały dopuszczone do przestrzeni szpitalnych (łatwe w dezynfekcji powierzchnie przy strefach kontaktu z żywnością), wentylacja spełniająca normy sanitarne dla gastronomii.</p>

      <h2>Czego uczy projektowanie gastronomii w szpitalu?</h2>
      <p>Oba projekty potwierdziły jedną zasadę: użytkownik w instytucji medycznej jest wyjątkowo wrażliwy na przestrzeń. W kawiarni na ulicy zły projekt oznacza brak klientów. W szpitalu zły projekt oznacza pogłębienie dyskomfortu. Stawka jest wyższa niż w typowym projekcie gastronomicznym.</p>
      <p>Drugą lekcją jest ograniczona swoboda wykonawcza — szpital narzuca materiały, godziny pracy ekip, procedury odbiorów. Projekt musi być zaprojektowany z myślą o tym, że realizacja będzie trudniejsza i dłuższa niż w standardowym lokalu. To wymaga precyzyjniejszej dokumentacji i ściślejszej koordynacji z zarządcą obiektu.</p>
      <p>Trzecia lekcja: nie ma jednego szablonu. Bistro onkologiczne i kawiarnia w szpitalu uniwersyteckim to zupełnie różne projekty, mimo podobnej typologii. Brief zawsze zaczyna się od pytania: kto tu naprawdę przychodzi i po co?</p>
    `,
  },

  'gastronomia-w-zabytkowym-centrum-krakowa': {
    title: 'Lokale gastronomiczne w zabytkowym centrum Krakowa — cztery realizacje',
    date: '2025-05-05',
    category: 'Wnętrza',
    excerpt: 'Kurka Wodna, Ingo Hostel, Restauracja Szoberowska, Pod Słońcem — o projektowaniu wnętrz gastronomicznych w kamienicach Starego Miasta. Kiedy ograniczenia konserwatorskie stają się narzędziem projektowym.',
    coverImage: '/images/kurkaWodna.webp',
    gallery: [
      '/images/kurkaWodna.webp',
      '/images/kurkaWodna2.webp',
      '/images/ingo1.webp',
      '/images/ingo2.webp',
      '/images/szoberowska1.webp',
      '/images/szoberowska2.webp',
      '/images/podsloncem1.webp',
      '/images/podsloncem2.webp',
    ],
    html: `
      <p>Stare Miasto w Krakowie to jeden z najtrudniejszych i najbardziej satysfakcjonujących kontekstów projektowych, z jakimi pracuje się w Polsce. Kamienice przy Kanoniczej, Małym Rynku czy Rynku Głównym mają po kilkaset lat. Każda ingerencja w ich wnętrza odbywa się w ramach określonych przez konserwatora i przez samą architekturę — układ pomieszczeń, piwnice, grubość murów, historyczna posadzka. Cztery projekty gastronomiczne CHD w centrum Krakowa pokazują, jak różnie można odpowiedzieć na te same warunki brzegowe.</p>

      <h2>Kurka Wodna — klimat Kanoniczej</h2>
      <p>Projekt wnętrz restauracji Kurka Wodna przy ul. Kanoniczej 15 to jeden z pierwszych i najbardziej rozpoznawalnych projektów CHD. Kanonicza to jedna z najstarszych ulic Krakowa — brukowana, wąska, z kamienicami bezpośrednio przy katedrze wawelskiej. Restauracja musiała być tego miejsca godna bez popadania w kicz "historycznej stylizacji".</p>
      <p>Projekt postawił na surowość i autentyczność: ceglane sklepienia pozostawione odkryte, posadzka kamienna, drewniane meble projektowane na zamówienie, oświetlenie ciepłe i lokalne. Żadnego "krakowskiego klimatu" rodem z katalogu dekoracji — tylko bezpośrednia odpowiedź na to, co jest w murach. Efekt: lokal, który nie wygląda na "urządzony", a jednak ma silną tożsamość. Kurka Wodna szybko stała się jednym z rozpoznawalnych miejsc Krakowa — co pokazuje, że autentyczność jest skuteczniejsza niż stylizacja.</p>

      <h2>Ingo Hostel — ul. Kopernika</h2>
      <p>Hostel przy ul. Kopernika to inny typ przestrzeni: nie restauracja, ale lokal z częścią gastronomiczną skierowaną do gości hostelowych i przechodniów. Budynek z pierzei Kopernika — kamienica z XIX wieku, bez dramatycznych sklepień, ale z charakterystyczną wysokością kondygnacji i podziałem okien.</p>
      <p>Projekt postawił na kontrast: historyczna powłoka budynku i nowoczesne, minimalistyczne wyposażenie wnętrza. To celowe zderzenie — nie próba "wpisania się" w charakter kamienicy, ale świadomy dialog między tym co istniejące a tym, co nowe. Sufit z widoczną instalacją, industrialne oświetlenie, jasne kolory — w opozycji do ciemniejszej, ciężkiej kamienicy na zewnątrz. Projekt szybki do realizacji i trwały estetycznie, co przy obiekcie hostelowym o dużej rotacji ma znaczenie praktyczne.</p>

      <h2>Restauracja Szoberowska — Mały Rynek</h2>
      <p>Mały Rynek to mniejszy, spokojniejszy brat Rynku Głównego — z własnym charakterem, letnimi ogródkami i lokalami skierowanymi raczej do krakowian niż do turystów. Restauracja Szoberowska przy Małym Rynku miała ten charakter odzwierciedlać.</p>
      <p>Projekt wnętrz postawił na materię: tynk barwiony w masie, drewno na ścianach, miedziane detale. Kolorystyka ciemniejsza, cieplejsza niż typowe krakowskie lokale z białymi ścianami — celowe odejście od "kawiarni z Instagramu" w stronę czegoś bardziej trwałego i bardziej własnego. Układ sali umożliwiał zarówno romantyczne kolacje (narożne stoliki, odizolowane nisze), jak i szybszy lunch. W Krakowie o tej porze (2008 rok) nie było jeszcze tylu lokali — Szoberowska wchodziła na rynek jako propozycja z wyraźnym charakterem, nie kolejny powielony szablon.</p>

      <h2>Pod Słońcem — Rynek Główny 43</h2>
      <p>Rynek Główny 43 to adres z prestiżem i ze wszystkimi tego konsekwencjami: najwyższy ruch turystyczny w Polsce, najwyższe oczekiwania co do wyglądu, najwyższe wymagania konserwatorskie i najwyższe koszty. Restauracja Pod Słońcem powstawała jako lokal z pełną obsługą kelnerską, nastawiony na dłuższe pobyty.</p>
      <p>Projekt musiał odpowiedzieć na dwa pytania jednocześnie: jak być widocznym przy Rynku Głównym (gdzie każdy lokal walczy o uwagę) i jak zachować spokój i intymność dla gości, którzy chcą zostać na dłużej. Rozwiązanie: wyraźna fasada z wielkowymiarowym oknem witrynowym i wyraźny podział wnętrza na strefy — bardziej publiczną przy wejściu i spokojniejszą w głębi lokalu, oddzieloną elementem architektonicznym. Materiały: marmur, skóra, tkaniny — poziom adekwatny do lokalizacji, ale bez ostentacji.</p>

      <h2>Wspólny mianownik</h2>
      <p>Cztery różne lokale, cztery różne ulice, cztery różne odpowiedzi projektowe. Co je łączy? Każdy projekt zaczynał się od budynku — od tego, co jest w murach, w proporcjach, w historii miejsca. Żaden nie zakładał tabula rasa. Ograniczenia konserwatorskie, sklepienia, układ historyczny — to nie były przeszkody do ominięcia, ale dane wejściowe do projektu.</p>
      <p>Projektowanie gastronomii w zabytkowym centrum Krakowa uczy jednej rzeczy: najlepsze wnętrza restauracyjne nie walczą z miejscem. One wynikają z miejsca. I właśnie dlatego mają charakter, którego nie da się podrobić ani skopiować.</p>
    `,
  },

  'pawla-12-katowice-rewitalizacja': {
    title: 'Pawła 12, Katowice — rewitalizacja kamienicy w centrum miasta',
    date: '2025-04-10',
    category: 'Architektura',
    excerpt: 'Zabytkowa kamienica przy ul. Pawła 12 w Katowicach — projekt rewitalizacji w centrum śląskiej metropolii. Jak pracuje się z konserwatorem, historyczną tkanką i współczesnym programem użytkowym.',
    coverImage: '/images/leszek/pawla12a.webp',
    gallery: ['/images/leszek/pawla12a.webp', '/images/leszek/katowice.webp'],
    html: `
      <p>Katowice to miasto, które przez dekady kojarzyło się głównie z przemysłem i powojenną zabudową. Centrum jednak kryje wiele kamienic z przełomu XIX i XX wieku — zabytkowych, zaniedbaных, ale architektonicznie wartościowych. Kamienica przy ul. Pawła 12 to jeden z takich obiektów: solidna cegłowa budowla z bogatą dekoracją fasady, wymagająca gruntownej rewitalizacji.</p>

      <h2>Kontekst i wyzwania</h2>
      <p>Projekt zlecony CHD i Idea Development w 2024 roku objął kompleksowe opracowanie koncepcji rewitalizacji budynku wpisanego do gminnej ewidencji zabytków. Kamienica przez lata była użytkowana bez należytego utrzymania — elewacja wymagała odtworzenia detalu architektonicznego, klatka schodowa remontów generalnych, a instalacje wymiany w całości.</p>
      <p>Kluczowe wyzwanie projektowe to pogodzenie dwóch sprzecznych na pozór wymagań: zachowania historycznego charakteru obiektu i dostosowania go do współczesnych standardów użytkowych i energetycznych. Konserwator oczekuje zachowania detalu; inwestor — komfortu i efektywności.</p>

      <h2>Podejście projektowe</h2>
      <p>Punktem wyjścia była szczegółowa inwentaryzacja stanu istniejącego: dokumentacja fotograficzna i pomiarowa elewacji, analiza konstrukcji, ocena stanu stropów i klatki schodowej. Dopiero na tej podstawie można sensownie rozmawiać zarówno z konserwatorem, jak i z inwestorem — bez inwentaryzacji każda rozmowa o zakresie prac jest spekulacją.</p>
      <p>Elewacja zostanie odtworzona z zachowaniem oryginalnego podziału, gzymzów i detalu sztukatorskiego — tam, gdzie oryginał zachował się w wystarczającym stopniu, służy jako bezpośredni wzorzec. Kolorystyka ustalona na podstawie odkrywek warstw historycznych tynków. Okna: drewniane skrzynkowe — wymóg konserwatora, ale też właściwy wybór dla kamienicy tego okresu.</p>

      <h2>Program i wnętrza</h2>
      <p>Budynek po rewitalizacji zachowuje funkcję mieszkalno-usługową: lokale usługowe na parterze, mieszkania na wyższych kondygnacjach. Układ pomieszczeń w mieszkaniach w większości zachowany — historyczne ściany działowe w cegłe są elementem charakteru obiektu, nie przeszkodą. Adaptacja polega na nowym wykończeniu, instalacjach i doświetleniu tam, gdzie układ na to pozwala.</p>
      <p>Klatka schodowa: oryginalna posadzka terakotowa zostanie oczyszczona i uzupełniona. Balustrada schodowa — stalowa kuta — odtworzona według dokumentacji fotograficznej. To detale, które decydują o tym, czy po remoncie budynek zachowuje duszę, czy ją traci.</p>

      <h2>Proces i harmonogram</h2>
      <p>Projekt jest w toku — etap dokumentacji projektowej. Uzyskanie pozwolenia na budowę przy obiektach w gminnej ewidencji wymaga uzgodnienia z WKZ i uwzględnienia jego wskazówek w projekcie. Doświadczenie pokazuje, że warto konserwatora traktować jako partnera na wczesnym etapie, nie jako przeszkodę na etapie składania wniosku.</p>
      <p>Realizacja planowana na lata 2025–2026. Projekt jest dowodem na to, że Katowice wracają do świadomego traktowania swojego centrum — rewitalizacja poszczególnych kamienic jest tu równie ważna jak wielkie projekty deweloperskie.</p>
    `,
  },

  'krynica-zdroj-willa-zlocien': {
    title: 'Willa Złocień, Krynica-Zdrój — rewitalizacja z myślą o energooszczędności',
    date: '2025-04-20',
    category: 'Architektura',
    excerpt: 'Jak pogodzić wymogi konserwatora z nowoczesnymi standardami energetycznymi? Projekt rewitalizacji Willi Złocień w Krynicy-Zdroju — podejście, materiały, wnioski z realizacji.',
    coverImage: '/images/leszek/krynica2.webp',
    gallery: ['/images/leszek/krynica2.webp', '/images/krynica3.webp'],
    html: `
      <p>Krynica-Zdrój to jedno z najstarszych i najbardziej znanych uzdrowisk w Polsce — miasto, którego charakter budowały przez ponad sto lat wille i pensjonaty z przełomu XIX i XX wieku. Willa Złocień wpisuje się w tę tradycję: drewniana konstrukcja, bogata stolarka, historyczny detal, widok na Góry Beskidzkie. I poważne wyzwanie projektowe: jak przeprowadzić rewitalizację, która podniesie standard i efektywność energetyczną budynku, nie niszcząc tego, co w nim najcenniejsze.</p>

      <h2>Punkt wyjścia: obiekt z historią i problemami</h2>
      <p>Willa Złocień, zanim trafiła do nowego inwestora, była przez lata eksploatowana bez gruntownych remontów. Stan techniczny był zróżnicowany: konstrukcja drewniana zachowana w dobrej kondycji (co przy obiektach tego wieku nie jest oczywiste), natomiast elewacja, stolarka i instalacje wymagały wymiany lub gruntownej naprawy.</p>
      <p>Obiekt wpisany do gminnej ewidencji zabytków — to oznacza konieczność uzgodnień z konserwatorem przy wszelkich istotnych zmianach zewnętrznych. Wewnętrznie zakres swobody jest większy, pod warunkiem zachowania charakteru historycznego wnętrz.</p>

      <h2>Energooszczędność a zabytek — sprzeczność pozorna</h2>
      <p>Największa obawa inwestorów przy zabytkowych obiektach drewnianych to energetyka: jak ocieplić budynek tak, żeby nie zmienić jego proporcji i detalu, a jednocześnie spełnić współczesne normy? Rozwiązanie nie jest jedno — jest zestaw decyzji, które muszą być spójne.</p>
      <p>W przypadku Willi Złocień zastosowano ocieplenie od wewnątrz w miejscach, gdzie detal zewnętrzny to wyklucza — izolacja na ościeżach, wełna mineralna za nowymi suchymi ściankimi działowymi. Tam, gdzie elewacja pozwalała na dodatkową warstwę, zastosowano materiały kompatybilne z drewnem: izolację z włókna drzewnego, która przepuszcza parę wodną i nie powoduje problemów kondensacji, nieuchronnych przy styropianie pod drewnem.</p>
      <p>Okna: skrzynkowe drewniane z szybą zespoloną w środkowej ramie. Parametry termiczne znacznie lepsze niż oryginał, profil i podział zgodne z historycznym wzorcem. Konserwator zaakceptował — co nie jest oczywiste, wymaga dobrej dokumentacji i cierpliwej rozmowy.</p>

      <h2>Źródło ciepła</h2>
      <p>Stare kotłownie węglowe w obiektach uzdrowiskowych to temat drażliwy — zarówno ekologicznie, jak i prawnie (strefy ochrony uzdrowiskowej mają własne przepisy emisyjne). W Willi Złocień zdecydowano o pompie ciepła powietrznej jako podstawowym źródle z kotłem gazowym szczytowym. Układ hybrydowy pozwala zachować niezależność od jednego źródła i optymalizować koszty eksploatacji w zależności od temperatury zewnętrznej.</p>

      <h2>Materiały — wybory nieoczywiste</h2>
      <p>Elewacja drewniana wymagała decyzji: odtworzyć w drewnie czy zastąpić materiałem o niższej konserwacji? Tu zdecydowanie drewno — i nie tylko ze względu na wymogi konserwatora. Krynica-Zdrój ma specyficzny mikroklimat, a drewno prawidłowo zabezpieczone (impregnacja głęboka, lazura paroprzepuszczalna) w górskim klimacie sprawdza się lepiej niż materiały kompozytowe, które przy dużych wahaniach temperatury pracują nierównomiernie.</p>
      <p>Tynki wewnętrzne: wapno hydrauliczne — dla oddychających ścian drewnianych to jedyne właściwe rozwiązanie. Gips na drewnianej konstrukcji to prosta droga do problemów z wilgocią.</p>

      <h2>Wnioski</h2>
      <p>Rewitalizacja Willi Złocień potwierdza, że energooszczędność i historyczny charakter obiektu nie są sprzeczne — wymagają tylko więcej czasu i głębszej wiedzy o materiałach i fizyce budowli. Projekty przy zabytkach uczą pokory wobec istniejącej materii i pragmatyzmu w doborze rozwiązań. To doświadczenie, które wprost przekłada się na jakość każdego kolejnego projektu — nie tylko rewitalizacyjnego.</p>
    `,
  },

  'uchwala-krajobrazowa-krakow-stare-miasto': {
    title: 'Uchwała krajobrazowa Krakowa — jak legalnie reklamować firmę na Starym Mieście',
    date: '2026-04-28',
    category: 'Prawo / Regulacje',
    excerpt: 'Kraków ma jedną z najsurowszych uchwał krajobrazowych w Polsce. Co wolno a czego nie — szyldy, banery, neony, potykacze, parasole. I jak CHD pomaga firmom na Starym Mieście poruszać się w tych przepisach.',
    coverImage: '/images/kurkaWodna.webp',
    gallery: ['/images/kurkaWodna.webp', '/images/kurkaWodna2.webp'],
    html: `
      <p>Kraków przyjął uchwałę krajobrazową w październiku 2022 roku — jedną z najsurowszych i najbardziej szczegółowych w Polsce. Dla firm prowadzących działalność na Starym Mieście, przy Rynku Głównym i w innych strefach historycznych oznacza to konkretne ograniczenia, które weszły w życie po dwuletnim vacatio legis. Kontrole Straży Miejskiej i Wydziału Architektury UMK są coraz częstsze. Jeśli masz lokal w centrum Krakowa — czas to dobrze rozumieć.</p>

      <h2>Co to jest uchwała krajobrazowa i dlaczego Kraków jest wyjątkowy?</h2>
      <p>Uchwała krajobrazowa (formalnie: "zasady i warunki sytuowania obiektów małej architektury, tablic reklamowych i urządzeń reklamowych oraz ogrodzeń") to instrument planistyczny wprowadzony do polskiego prawa w 2015 roku. Każda gmina może, ale nie musi jej uchwalić.</p>
      <p>Kraków jest jednym z pierwszych dużych miast, które ją uchwaliły — a jej zakres jest wyjątkowo szeroki. Obejmuje nie tylko reklamy wielkoformatowe, ale też szyldy, neony, potykacze, parasole ogródkowe, iluminacje i ekspozytory widoczne z zewnątrz. Miasto podzielono na strefy — Strefa A (Stare Miasto, Kazimierz, Podgórze Historyczne) ma najostrzejsze wymagania.</p>

      <h2>Strefa A — co obowiązuje na Starym Mieście</h2>
      <p>Dla przedsiębiorców przy Rynku Głównym, Kanoniczej, Floriańskiej i otaczających ulicach to strefa najściślejszych regulacji. Najważniejsze zasady:</p>
      <ul>
        <li><strong>Szyldy</strong> — dopuszczalne, ale ograniczone. Maksymalna powierzchnia jednego szyldu przy historycznej fasadzie to 0,6 m². Musi być płaski, przylegać do elewacji, nie może wystawać poza lico ściany. Preferowane materiały: metal, drewno, kamień — z wykluczeniem PVC i banerów drukowanych.</li>
        <li><strong>Reklamy wielkoformatowe</strong> — bannery, siatki reklamowe na rusztowaniach dopuszczone wyłącznie podczas prac remontowych, z ograniczeniami co do treści i powierzchni. Na stałe — zakazane.</li>
        <li><strong>Neony i reklamy świetlne</strong> — nowe instalacje dopuszczone tylko jako podświetlenie wewnętrzne liter lub historyczne neony rurowe. Boxy z blokową podświetlaną powierzchnią są w Strefie A zakazane.</li>
        <li><strong>Potykacze (A-frame)</strong> — zakazane na chodniku. Dopuszczone wyłącznie na terenie własnej posesji (brama, prywatny dziedziniec).</li>
        <li><strong>Parasole ogródkowe</strong> — dopuszczone, ale kolor i nadruki reguluje uchwała. Parasole z nadrukiem reklamowym muszą mieć barwy stonowane, nawiązujące do historycznej palety. Wymiary ograniczone.</li>
        <li><strong>Wystrój witryn</strong> — ekspozytory widoczne z zewnątrz mogą podlegać ocenie konserwatora przy budynkach wpisanych do rejestru lub ewidencji.</li>
      </ul>

      <h2>Kto kontroluje i jakie są konsekwencje?</h2>
      <p>Kontrole prowadzą dwa podmioty: <strong>Straż Miejska</strong> (mandaty do 500 zł za wykroczenie) i <strong>Wydział Architektury i Urbanistyki UMK</strong> w trybie administracyjnym. Postępowanie administracyjne może zakończyć się nakazem usunięcia reklamy lub szyldu — na koszt właściciela. Przy obiektach zabytkowych dochodzi decyzja WKZ.</p>
      <p>Częsty błąd: zakładanie, że "stary szyld, który wisiał od lat" jest automatycznie dopuszczony. Uchwała odnosi się do stanu w dniu kontroli, nie do historii instalacji. Jeśli szyld nie spełnia wymagań — podlega nakazowi usunięcia niezależnie od tego, kiedy go zawieszono.</p>

      <h2>Jak CHD pomaga firmom na Starym Mieście</h2>
      <p>Projektowanie identyfikacji wizualnej lokalu w strefie historycznej łączy wiedzę architektoniczną, znajomość przepisów i doświadczenie w kontakcie z konserwatorem i urzędem. To nie jest zadanie wyłącznie dla agencji reklamowej — to jest zadanie dla architekta, który rozumie zarówno projekt, jak i formalne uwarunkowania miejsca.</p>
      <ul>
        <li><strong>Analiza stanu istniejącego</strong> — sprawdzamy, które elementy identyfikacji wizualnej lokalu są zgodne z uchwałą, a które wymagają zmiany lub zalegalizowania.</li>
        <li><strong>Projekt szyldu i systemu oznaczeń</strong> — projektujemy szyldy, gabloty i ekspozytory spełniające wymagania uchwały, estetycznie spójne z charakterem budynku i marką klienta. Materiały, wymiary, sposób mocowania — zgodne z przepisami.</li>
        <li><strong>Dokumentacja i uzgodnienia</strong> — przygotowujemy kompletną dokumentację do zgody konserwatora (jeśli budynek jest w ewidencji lub rejestrze) lub do zawiadomienia urzędu. Prowadzimy korespondencję z WKZ i Wydziałem Architektury.</li>
        <li><strong>Projekt ogródka letniego</strong> — parasole, meble, przegrody — projektujemy w zgodzie z uchwałą i wytycznymi urzędu. Ogródek spójny z marką i bezpieczny podczas kontroli.</li>
        <li><strong>Materiały marketingowe do użytku w lokalu i na terenie własnym</strong> — plakaty, potykacze, ekspozytory wewnętrzne — z uwzględnieniem ograniczeń strefowych dla elementów widocznych z zewnątrz.</li>
      </ul>

      <h2>Perspektywa z Rynku Głównego 43</h2>
      <p>Biuro CHD mieści się przy Rynku Głównym 43 — jesteśmy stroną w tej samej strefie, w której doradzamy klientom. Znamy uchwałę nie tylko z lektury, ale z własnych uzgodnień i doświadczenia w kontaktach z konserwatorem. Wiemy, co urząd akceptuje w pierwszym kroku, a co wymaga kilku iteracji projektu. I wiemy, że dobrze zaprojektowany szyld w Strefie A może być bardziej elegancki i skuteczny niż typowa propozycja agencji, która i tak nie przejdzie urzędowej kontroli.</p>

      <h2>Kiedy warto się zgłosić?</h2>
      <p>Najlepiej zanim zainstalujemy cokolwiek. Zmiana szyldu po fakcie — po nakazie usunięcia — jest zawsze droższa i bardziej stresująca niż zaprojektowanie go prawidłowo na początku. Warto też sprawdzić stan istniejących instalacji jeszcze przed kontrolą, a nie po.</p>
      <p>Napisz do nas. Ocenimy stan istniejący i zaproponujemy zakres działania dopasowany do Twojego lokalu i strefy.</p>
    `,
  },

  'rewitalizacja-zabytkow-jak-to-dziala': {
    title: 'Rewitalizacja obiektów zabytkowych — co musisz wiedzieć przed zakupem',
    date: '2025-03-05',
    category: 'Architektura',
    excerpt: 'Rejestr zabytków, gminna ewidencja, wymogi konserwatora, koszty i dostępne dotacje — co sprawdzić przed zakupem zabytkowej kamienicy lub willi.',
    html: `
      <p>Zabytkowa kamienica, willa z przełomu wieków, XIX-wieczna oficyna — nieruchomości z historią mają w sobie coś, czego nie da się zaprojektować od zera. Mają też jednak swoje reguły, które kupujący musi znać zanim podpisze akt notarialny.</p>

      <h2>Jakie formy ochrony istnieją w Polsce?</h2>
      <p>Podstawowym aktem prawnym jest Ustawa z dnia 23 lipca 2003 r. o ochronie zabytków i opiece nad zabytkami. Wyróżnia ona kilka form ochrony:</p>
      <ul>
        <li><strong>Wpis do rejestru zabytków</strong> — najsilniejsza forma ochrony. Każda istotna zmiana wymaga pozwolenia Wojewódzkiego Konserwatora Zabytków (WKZ). Dotyczy to m.in. przebudowy, nadbudowy, zmiany wyglądu zewnętrznego, a często też prac wewnętrznych.</li>
        <li><strong>Gminna ewidencja zabytków</strong> — lżejsza forma. Budynek jest "pod obserwacją", ale nie każda zmiana wymaga zgody konserwatora. Przy sprzedaży lub uzyskiwaniu pozwolenia na budowę organ może jednak wymagać uzgodnienia z WKZ.</li>
        <li><strong>Strefy ochrony konserwatorskiej</strong> — nie chronią samego budynku, ale obszar. Budynek w strefie niekoniecznie jest zabytkiem, ale nowe inwestycje w strefie mogą wymagać uzgodnień.</li>
      </ul>
      <p>Przed zakupem sprawdź w urzędzie gminy lub w rejestrze prowadzonym przez Narodowy Instytut Dziedzictwa, jaką formą ochrony objęty jest dany obiekt.</p>

      <h2>Co zmienia wpis do rejestru zabytków w praktyce?</h2>
      <p>Pozwolenie WKZ jest wymagane m.in. dla:</p>
      <ul>
        <li>Prowadzenia robót budowlanych przy zabytku</li>
        <li>Wykonywania robót budowlanych w otoczeniu zabytku (strefa ochronna)</li>
        <li>Zmiany przeznaczenia lub sposobu korzystania z zabytku</li>
        <li>Umieszczania na zabytku urządzeń technicznych, tablic i reklam</li>
        <li>Podziału zabytku nieruchomego</li>
      </ul>
      <p>Pozwolenie konserwatora nie zastępuje pozwolenia na budowę — to dwa odrębne dokumenty. Musisz uzyskać oba.</p>

      <h2>Materiały i technologia — dlaczego to kosztuje więcej</h2>
      <p>Konserwator może wymagać stosowania tradycyjnych materiałów i technik — wapno hydrauliczne zamiast cementu portlandzkiego, cegła rozbiórkowa zamiast nowej, okna drewniane zamiast PVC. Wymogi materiałowe i konieczność zatrudnienia doświadczonych rzemieślników (a nie standardowej ekipy budowlanej) sprawiają, że koszty realizacji są wyższe niż przy typowej przebudowie. Często 20–40% wyższe, w skrajnych przypadkach jeszcze więcej.</p>

      <h2>Due diligence przed zakupem</h2>
      <p>Zanim złożysz ofertę, zleć:</p>
      <ul>
        <li><strong>Ekspertyzę techniczną budynku</strong> — stan konstrukcji, fundamentów, stropów, dachu. Zabytkowe obiekty często mają drewniane stropy i belkowania, które mogą wymagać wzmocnienia lub wymiany.</li>
        <li><strong>Audyt konserwatorski</strong> — rozmowa z WKZ lub prywatnym konserwatorem zabytków pozwoli wstępnie określić zakres wymaganych uzgodnień i ograniczeń dla planowanej inwestycji.</li>
        <li><strong>Analizę stanu prawnego</strong> — sprawdzenie księgi wieczystej, ewentualnych służebności, obciążeń, dawnych umów najmu z lokatorami.</li>
      </ul>

      <h2>Finansowanie — dotacje i ulgi</h2>
      <p>Właściciele zabytków wpisanych do rejestru mogą ubiegać się o dofinansowanie prac konserwatorskich. Główne źródła:</p>
      <ul>
        <li>Dotacje z Ministerstwa Kultury i Dziedzictwa Narodowego</li>
        <li>Dotacje z budżetu gminy lub województwa (różne programy — warto sprawdzić lokalnie)</li>
        <li>Fundusze europejskie w ramach programów regionalnych (perspektywa 2021–2027)</li>
        <li>Ulga podatkowa — właściciel zabytku wpisanego do rejestru może odliczyć od dochodu wydatki na prace konserwatorskie (art. 26hb Ustawy o PIT)</li>
      </ul>
      <p>Dotacje są zwrotne lub bezzwrotne w zależności od programu i przeznaczenia obiektu po rewitalizacji. Procedury są czasochłonne — wniosek składa się z reguły rok przed planowanymi pracami.</p>

      <h2>Czy warto?</h2>
      <p>Rewitalizacja zabytkowego obiektu to projekt bardziej złożony, droższy i dłuższy niż typowa budowa od zera. Ale też unikalny — efekt, który nie może być powielony. W naszym doświadczeniu projekty przy Pawła 12 w Katowicach i Willi Złocień w Krynicy-Zdroju pokazały, że kluczem jest wczesna współpraca z konserwatorem: zamiast walczyć z ograniczeniami, warto je rozumieć i projektować w ich ramach.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return {}

  return {
    title: `${post.title} | CHD Architekci`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${params.slug}`,
      languages: { pl: `${SITE_URL}/blog/${params.slug}`, en: `${SITE_URL}/en/blog/${params.slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      section: post.category,
      ...(post.coverImage && { images: [{ url: `${SITE_URL}${post.coverImage}` }] }),
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug]
  if (!post) notFound()

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Strona główna', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${params.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={params.slug}
        date={post.date}
        image={post.coverImage}
        category={post.category}
      />

      <section className="py-20 bg-white">
        <div className="container-site max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
            <Link href="/" className="hover:text-gold">Strona główna</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">{post.title}</span>
          </nav>

          <p className="text-xs uppercase tracking-widest text-gold mb-3">{post.category}</p>
          <h1 className="font-display text-4xl text-navy mb-4 leading-tight">{post.title}</h1>
          <time className="text-sm text-gray-400 block mb-12">
            {new Date(post.date).toLocaleDateString('pl-PL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          {post.coverImage && (
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 mb-12">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {post.html ? (
            <div
              className="prose prose-stone max-w-none
                prose-headings:font-display prose-headings:font-normal prose-headings:text-navy
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-2
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600 prose-li:leading-relaxed
                prose-strong:text-navy prose-strong:font-semibold
                prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                prose-ul:my-4 prose-ol:my-4"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          ) : (
            <div className="prose prose-stone max-w-none prose-headings:font-display prose-headings:font-normal prose-headings:text-navy">
              <p>{post.content}</p>
            </div>
          )}

          {post.gallery && post.gallery.length > 1 && (
            <div className="mt-12 grid grid-cols-2 gap-2">
              {post.gallery.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={src}
                    alt={`${post.title} — ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 384px"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 pt-10 border-t border-gray-100">
            <Link href="/blog" className="text-sm text-gold hover:underline tracking-wide">
              ← Wróć do bloga
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
