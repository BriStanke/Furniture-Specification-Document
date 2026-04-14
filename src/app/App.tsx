import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';

interface FurnitureItem {
  image: string;
  supplier: string;
  collection: string;
  material: string;
  colour: string;
  dimensions: string;
  care: string;
  link: string;
  quantity?: string;
  notes?: string;
}

interface RoomSection {
  room: string;
  items: FurnitureItem[];
}

const furnitureData: RoomSection[] = [
  {
    room: "BALDAI",
    items: [
      {
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Kavehome",
        collection: "Onix TV spintelė",
        material: "Riešutmedžio lukštas, tamsus apdailas",
        colour: "Tamsiai ruda",
        dimensions: "2000 × 450 × —",
        care: "Valyti sausai arba drėgna šluoste. FSC Mix Credit sertifikuotas.",
        link: "kavehome.com/en/en/p/onix-tv-stand-with-a-walnut-veneer-in-a-dark-finish-200-x-45-cm-fsc-mix-credit"
      },
      {
        image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Kavehome",
        collection: "Onix svetainės komoda",
        material: "Riešutmedžio lukštas, tamsus apdailas",
        colour: "Tamsiai ruda",
        dimensions: "2000 × 800 × —",
        care: "Valyti sausai arba drėgna šluoste. FSC Mix Credit sertifikuotas.",
        link: "kavehome.com/en/en/p/onix-sideboard-with-a-walnut-veneer-in-a-dark-finish-200-x-80-cm-fsc-mix-credit"
      },
      {
        image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Kavehome",
        collection: "Onix miegamojo komoda",
        material: "Riešutmedžio lukštas, tamsus apdailas, 3 stalčiai",
        colour: "Tamsiai ruda",
        dimensions: "1000 × 780 × —",
        care: "Valyti sausai arba drėgna šluoste. FSC Mix Credit sertifikuotas.",
        link: "kavehome.com/en/en/p/onix-chest-of-drawers-with-3-drawers-walnut-veneer-dark-finish-100x78cm-fsc-mix-credit"
      },
      {
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Jasevičiaus Baldai",
        collection: "Sumo valgomojo kėdė",
        material: "Ąžuolo mediena, audinio apmušalas",
        colour: "Natūrali mediena",
        dimensions: "— × — × —",
        care: "Reguliariai dulkinti, esant reikalui valyti audinį.",
        link: "jaseviciausbaldai.lt/sumo",
        notes: "Reikia apgalvoti, kur padėti 2 papildomas kėdes svečiams"
      },
      {
        image: "https://images.unsplash.com/photo-1768946131535-b90bad125f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Veneks Boutique",
        collection: "Opera lova / Lecomfort Italy",
        material: "Minkštas galvūgalis, italų gamybos",
        colour: "—",
        dimensions: "— × — × —",
        care: "Reguliariai dulkinti minkštą galvūgalį.",
        link: "veneksboutique.lt/baldai/lovos/lova-opera-lecomfort-italy/"
      },
      {
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Finumedis",
        collection: "Baldų plokštė / Master Oak Natural Copper",
        material: "Medžio imitacija, natūralus vario atspalvis",
        colour: "Natūralus ąžuolas su vario atspalviu",
        dimensions: "—",
        care: "Valyti drėgna šluoste, vengti abrazyvų.",
        link: "www.finumedis.lt/lt/product/0h926-v2a-master-oak-natural-copper-0h926/1136",
        notes: "Atrodo labai natūraliai"
      },
      {
        image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Impeka Home",
        collection: "Durų rankenos",
        material: "Įvairios medžiagos (metalo, chromo)",
        colour: "Įvairių spalvų pasirinkimas",
        dimensions: "—",
        care: "Valyti drėgna šluoste.",
        link: "impekahome.lt/duru-rankenos"
      }
    ]
  },
  {
    room: "SANTECHNIKA",
    items: [
      {
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Cersanit",
        collection: "Desse Vortex WC / Pakabinamas",
        material: "Keramika, Soft Close dangtis",
        colour: "Balta",
        dimensions: "—",
        care: "Valyti standartinėmis vonios priemonėmis.",
        link: "www.muresta.lt/p/wc-puodas-pakab-su-soft-close-dangciu-cersanit-desse-vortex-s4024-001-147995"
      },
      {
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Focco",
        collection: "LED apvalus veidrodis Ø80 cm",
        material: "Veidrodis su LED apšvietimu, šildomas kilimėlis",
        colour: "—",
        dimensions: "Ø 800",
        care: "Valyti stiklo priemonėmis.",
        link: "www.laikasnamams.lt/vonios-iranga/vonios-baldai/veidrodziai/focco-led-apvalus-veidrodis-80-cm-skersmuo-priekinis-apsvietimas-3000-5700k-sildomas-kilimelis-dimeriavimas-18290.html",
        notes: "Priekinis apšvietimas 3000-5700K, dimeriavimas"
      }
    ]
  },
  {
    room: "APŠVIETIMAS",
    items: [
      {
        image: "https://images.unsplash.com/photo-1565530916786-c53be68b72c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Vibia",
        collection: "Kontorno pakabinamas šviestuvas",
        material: "Šiuolaikinis dizainas, LED",
        colour: "—",
        dimensions: "—",
        care: "Dulkinti reguliariai.",
        link: "vibia.com/en/int/collections/hanging-lamps-kontorno-hanging",
        quantity: "1 vnt.",
        notes: "Valgomojo šviestuvas"
      },
      {
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Eko Liumeną",
        collection: "Thora Black sieninis šviestuvas / 18W LED",
        material: "Metalo korpusas, LED šviesos šaltinis",
        colour: "Juoda",
        dimensions: "—",
        care: "Dulkinti reguliariai.",
        link: "ekoliumenas.lt/veidrodziu-paveikslu-sviestuvai/37181-18w-led-sieninis-sviestuvas-thora-black-dimerioojamas-ip44-w0421d.html",
        quantity: "2 vnt.",
        notes: "Miegamojo sieniniai šviestuvai, dimeriojamas, IP44"
      },
      {
        image: "https://images.unsplash.com/photo-1534105615256-13940a79e3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Eko Liumeną",
        collection: "Drill Black sieninis šviestuvas / 8W LED",
        material: "Metalo korpusas, LED šviesos šaltinis",
        colour: "Juoda",
        dimensions: "—",
        care: "Dulkinti reguliariai.",
        link: "ekoliumenas.lt/sieniniai-sviestuvai/35916-8w-led-sieninis-sviestuvas-drill-black-dimeriojumas-2700k-01-4437.html",
        quantity: "4 vnt.",
        notes: "Lubinis šviestuvas, dimeriojimas, 2700K"
      },
      {
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Eko Liumeną",
        collection: "Lumia Black lubinis šviestuvas Ø60 / 59W LED",
        material: "Metalo korpusas, LED šviesos šaltinis",
        colour: "Juoda",
        dimensions: "Ø 600",
        care: "Dulkinti reguliariai.",
        link: "ekoliumenas.lt/lubiniai-sviestuvai/35459-59w-led-lubinis-sviestuvas-lumia-black-o60-cct-dimeriojumas-9695195.html",
        quantity: "1 vnt.",
        notes: "CCT dimeriojimas"
      },
      {
        image: "https://images.unsplash.com/photo-1550177124-c2cad9b6d315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Eko Liumeną",
        collection: "Lumia Black lubinis šviestuvas Ø45 / 49W LED",
        material: "Metalo korpusas, LED šviesos šaltinis",
        colour: "Juoda",
        dimensions: "Ø 450",
        care: "Dulkinti reguliariai.",
        link: "ekoliumenas.lt/lubiniai-sviestuvai/35458-49w-led-lubinis-sviestuvas-lumia-black-o45-cct-dimeriojumas-9695193.html",
        quantity: "2 vnt.",
        notes: "Miegamojo lubinis šviestuvas, CCT dimeriojimas"
      },
      {
        image: "https://images.unsplash.com/photo-1541009524134-7e1f71d2e3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Eko Liumeną",
        collection: "Omeo Black stalinis šviestuvas / 5.5W LED",
        material: "Metalo korpusas, LED šviesos šaltinis",
        colour: "Juoda",
        dimensions: "—",
        care: "Dulkinti reguliariai.",
        link: "ekoliumenas.lt/stalo-sviestuvai/26880-55w-led-stalinis-sviestuvas-omeo-black-dimerioojamas-01-2213.html",
        quantity: "1 vnt.",
        notes: "Dimeriojamas"
      },
      {
        image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Eko Liumeną",
        collection: "Įmontuojama LED panelė / 10W",
        material: "LED šviesos šaltinis",
        colour: "Balta",
        dimensions: "Ø 95",
        care: "Dulkinti reguliariai.",
        link: "ekoliumenas.lt/montuojamos-led-paneles/31140-10w-led-imontojuoma-panele-white-cct-o95-ip44-10110u-w-v.html",
        quantity: "9 vnt.",
        notes: "CCT, IP44"
      },
      {
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        supplier: "Zara Home",
        collection: "Sendintas keraminis stalinis šviestuvas",
        material: "Keramika",
        colour: "Sendintas apdailas",
        dimensions: "—",
        care: "Dulkinti sausai.",
        link: "www.zarahome.com/lt/sendintas-keraminis-stalinis-sviestuvas-l48323047",
        quantity: "1 vnt."
      }
    ]
  }
];

function FurnitureSpecItem({ item }: { item: FurnitureItem }) {
  return (
    <div className="flex gap-5 py-5 border-b border-gray-200 last:border-b-0 page-break-inside-avoid">
      <div className="flex-shrink-0">
        <ImageWithFallback
          src={item.image}
          alt={item.collection}
          className="w-28 h-28 object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col gap-1.5">
        <div className="space-y-0.5">
          <div className="text-[10px] tracking-wider text-gray-500 uppercase">
            {item.supplier}
          </div>
          <div className="text-[13px] text-gray-900 leading-tight">
            {item.collection}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-1 text-[11px] mt-0.5">
          <div className="flex gap-2">
            <span className="text-gray-500 min-w-[70px]">Medžiaga</span>
            <span className="text-gray-900">{item.material}</span>
          </div>
          {item.colour && item.colour !== "—" && (
            <div className="flex gap-2">
              <span className="text-gray-500 min-w-[70px]">Spalva</span>
              <span className="text-gray-900">{item.colour}</span>
            </div>
          )}
          {item.dimensions && item.dimensions !== "—" && (
            <div className="flex gap-2">
              <span className="text-gray-500 min-w-[70px]">Matmenys</span>
              <span className="text-gray-900">{item.dimensions}</span>
            </div>
          )}
          {item.quantity && (
            <div className="flex gap-2">
              <span className="text-gray-500 min-w-[70px]">Kiekis</span>
              <span className="text-gray-900">{item.quantity}</span>
            </div>
          )}
          <div className="flex gap-2">
            <span className="text-gray-500 min-w-[70px]">Priežiūra</span>
            <span className="text-gray-900">{item.care}</span>
          </div>
        </div>

        {item.notes && (
          <div className="text-[10px] text-gray-600 italic mt-0.5">
            {item.notes}
          </div>
        )}

        <div className="text-[10px] text-gray-600 mt-0.5">
          <a
            href={`https://${item.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors underline"
          >
            {item.link}
          </a>
        </div>
      </div>
    </div>
  );
}

function CoverPage({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="w-[210mm] h-[297mm] bg-white flex flex-col items-center justify-center page-break-after-always print:shadow-none">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-[32px] tracking-[0.3em] uppercase text-gray-900">
            Baldų Pasiūlymas
          </h1>
          <div className="w-32 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="space-y-2 text-gray-600">
          <p className="text-[14px] tracking-wide">Interjero projektas</p>
          <p className="text-[13px]">2026 m. balandis</p>
        </div>

        <button
          onClick={onContinue}
          className="mt-16 px-8 py-3 border border-gray-300 text-[11px] tracking-widest uppercase text-gray-700 hover:bg-gray-50 transition-colors print:hidden"
        >
          Peržiūrėti specifikaciją
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [showCover, setShowCover] = useState(true);

  if (showCover) {
    return (
      <div className="min-h-full bg-gray-100 flex items-center justify-center p-8">
        <CoverPage onContinue={() => setShowCover(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gray-100 py-8 px-4">
      <div className="w-[210mm] mx-auto bg-white px-10 py-12 shadow-lg print:shadow-none">
        <header className="mb-12 pb-6 border-b border-gray-200 page-break-after-avoid">
          <h1 className="text-[11px] tracking-[0.2em] uppercase text-gray-900 mb-1.5">
            Baldų Pasiūlymas
          </h1>
          <p className="text-[12px] text-gray-500">
            Interjero projektas / 2026 m. balandis
          </p>
        </header>

        <div className="space-y-12">
          {furnitureData.map((section, idx) => (
            <section key={idx} className="page-break-inside-avoid">
              <h2 className="text-[11px] tracking-[0.2em] uppercase text-gray-900 mb-6 pb-2 border-b border-gray-300">
                {section.room}
              </h2>
              <div>
                {section.items.map((item, itemIdx) => (
                  <FurnitureSpecItem key={itemIdx} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-[10px] text-gray-400 text-center">
          Visi matmenys milimetrais (P × G × A)
        </footer>
      </div>

      <div className="w-[210mm] mx-auto mt-4 mb-8 print:hidden">
        <button
          onClick={() => setShowCover(true)}
          className="px-6 py-2 border border-gray-300 text-[10px] tracking-widest uppercase text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Grįžti į viršelį
        </button>
        <button
          onClick={() => window.print()}
          className="ml-3 px-6 py-2 bg-gray-900 text-white text-[10px] tracking-widest uppercase hover:bg-gray-800 transition-colors"
        >
          Spausdinti
        </button>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .page-break-after-always {
            page-break-after: always;
          }

          .page-break-inside-avoid {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}