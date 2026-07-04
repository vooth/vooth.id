import type { Locale } from './utils/i18n';

export interface LandingCopy {
  /** Prefilled WhatsApp message for this locale. */
  bookingMessage: string;
  hero: {
    badge: string;
    taglineLead: string;
    taglineAccent: string;
    sub: string;
    ctaBook: string;
    ctaKonteks: string;
  };
  pitch: {
    title: string;
    body: string;
    points: { title: string; detail: string }[];
  };
  konteks: {
    kicker: string;
    title: string;
    body: string;
    rules: { title: string; detail: string }[];
    card: { style: string; caption: string; date: string };
  };
  gallery: {
    title: string;
    sub: string;
    cards: { style: string; caption: string; date: string }[];
  };
  flow: {
    title: string;
    steps: { n: string; title: string; detail: string }[];
  };
  packages: {
    title: string;
    sub: string;
    items: { name: string; price: string; desc: string; features: string[] }[];
    note: string;
  };
  finalCta: {
    title: string;
    body: string;
    button: string;
  };
}

export const landingCopy: Record<Locale, LandingCopy> = {
  id: {
    bookingMessage: 'Halo Vooth, saya mau booking photobooth untuk acara saya.',
    hero: {
      badge: 'Photobooth keliling di motor',
      taglineLead: 'Rekam Sekarang,',
      taglineAccent: 'Cerita Nanti',
      sub: 'Vooth datang ke acaramu, cetak foto 4R di tempat, dan menuliskan konteks momen di baliknya — biar ada yang diceritakan bertahun kemudian.',
      ctaBook: 'Booking via WhatsApp',
      ctaKonteks: 'Lihat Konteks Momen',
    },
    pitch: {
      title: 'Bukan photobooth biasa',
      body: 'Kebanyakan photobooth berhenti di cetakan. Vooth merekam momennya — cepat, lincah, dan datang ke tempatmu.',
      points: [
        {
          title: 'Punya jiwa',
          detail: 'Setiap cetakan membawa konteks momen, bukan sekadar wajah dan bingkai.',
        },
        {
          title: 'Cepat, anti-antre',
          detail: 'Alur ringkas 3-2-1. Pilihan dibatasi supaya antrean tetap jalan.',
        },
        {
          title: 'Mobile & lincah',
          detail: 'Terpasang di motor, masuk ke gang sempit maupun halaman acara.',
        },
      ],
    },
    konteks: {
      kicker: 'Jantungnya Vooth',
      title: 'Konteks Momen',
      body: 'Selembar foto jadi kapsul waktu. Satu catatan singkat tercetak di balik kartu 4R dan ikut melekat pada file digital — jejak yang bisa dibaca ulang bertahun kemudian.',
      rules: [
        {
          title: 'Terisi otomatis',
          detail: 'Nama acara, tanggal, dan lokasi terisi sendiri supaya tak memperlambat antrean.',
        },
        {
          title: 'Satu kalimat personal',
          detail: 'Kamu boleh menambah satu baris — bebas, opsional, secukupnya.',
        },
        {
          title: 'Tercetak di balik 4R',
          detail: 'Bukan di pojok foto, tapi di balik kartu sebagai catatan utuh.',
        },
        {
          title: 'Melekat di versi digital',
          detail: 'Konteks ikut tersimpan pada file, bukan hanya pada cetakan.',
        },
      ],
      card: {
        style: 'Senja',
        caption: 'akhirnya kumpul juga...',
        date: '23 Juni 2026 · Reuni Angkatan',
      },
    },
    gallery: {
      title: 'Gaya yang terkurasi',
      sub: 'Setiap paket menggabungkan filter dan bingkai serasi. Bukan “Filter 1, 2, 3” — tiap gaya punya nama dan rasa.',
      cards: [
        { style: 'Niskala', caption: 'senyum yang nggak dibuat-buat', date: '2 Mei 2026 · Wisuda' },
        { style: 'Senja', caption: 'sampai ketemu lagi ya', date: '17 Agustus 2026 · Kondangan' },
        {
          style: 'Klasik',
          caption: 'geng lengkap, langka banget',
          date: '30 Nov 2026 · Ulang Tahun',
        },
      ],
    },
    flow: {
      title: 'Alurnya ringkas',
      steps: [
        { n: '1', title: 'Pilih layout', detail: 'Tata letak 4R: 1, 2, atau 4 foto.' },
        { n: '2', title: 'Pilih gaya', detail: 'Paket filter + bingkai bernama.' },
        { n: '3', title: 'Ambil foto', detail: 'Hitung mundur 3-2-1, pratinjau besar.' },
        { n: '4', title: 'Konteks momen', detail: 'Catatan singkat untuk di balik foto.' },
        { n: '5', title: 'Cetak + digital', detail: 'Cetak 4R plus QR versi digital.' },
      ],
    },
    packages: {
      title: 'Paket',
      sub: 'Harga final menyesuaikan durasi dan lokasi acara. Kabari kami lewat WhatsApp untuk penawaran.',
      items: [
        {
          name: 'Sesi Acara',
          price: 'Per acara',
          desc: 'Untuk ulang tahun, kondangan, reuni, atau gathering.',
          features: [
            'Operator standby sepanjang acara',
            'Cetak 4R tanpa batas sesi',
            'Konteks momen di tiap cetakan',
            'Versi digital via QR',
          ],
        },
        {
          name: 'Self-Service',
          price: 'Per acara',
          desc: 'Booth ditinggal, tamu pakai layar box langsung.',
          features: [
            'Pengaturan terkunci, hanya alur foto',
            'Timeout otomatis kembali ke awal',
            'Cetak 4R + konteks momen',
            'Versi digital via QR',
          ],
        },
      ],
      note: 'Nomor WhatsApp dan detail harga dikonfirmasi saat pemesanan.',
    },
    finalCta: {
      title: 'Siap rekam momenmu?',
      body: 'Ceritakan acaramu lewat WhatsApp — tanggal, lokasi, dan perkiraan tamu. Kami balas dengan penawaran.',
      button: 'Booking via WhatsApp',
    },
  },
  en: {
    bookingMessage: 'Hi Vooth, I’d like to book the photobooth for my event.',
    hero: {
      badge: 'A photobooth on a motorbike',
      taglineLead: 'Capture Now,',
      taglineAccent: 'Tell the Story Later',
      sub: 'Vooth comes to your event, prints a 4R photo on the spot, and writes the moment’s context on the back — so there’s a story to tell years from now.',
      ctaBook: 'Book via WhatsApp',
      ctaKonteks: 'See Konteks Momen',
    },
    pitch: {
      title: 'Not your usual photobooth',
      body: 'Most photobooths stop at the print. Vooth records the moment — fast, nimble, and it comes to you.',
      points: [
        {
          title: 'Has a soul',
          detail: 'Every print carries the moment’s context, not just a face and a frame.',
        },
        {
          title: 'Fast, no queues',
          detail: 'A tight 3-2-1 flow. Choices are limited so the line keeps moving.',
        },
        {
          title: 'Mobile & nimble',
          detail: 'Mounted on a motorbike — into tight alleys or open event yards.',
        },
      ],
    },
    konteks: {
      kicker: 'The heart of Vooth',
      title: 'Konteks Momen',
      body: 'A single photo becomes a time capsule. A short note is printed on the back of the 4R card and travels with the digital file — a trace you can reread years later.',
      rules: [
        {
          title: 'Auto-filled',
          detail: 'Event name, date, and location fill in automatically so the queue keeps moving.',
        },
        {
          title: 'One personal line',
          detail: 'Add a single line if you want — free-form, optional, just enough.',
        },
        {
          title: 'Printed on the 4R back',
          detail: 'Not tucked in a photo corner, but on the back as a full note.',
        },
        {
          title: 'Embedded in the digital copy',
          detail: 'The context is saved into the file, not only the print.',
        },
      ],
      card: {
        style: 'Senja',
        caption: 'finally all together...',
        date: '23 June 2026 · Class Reunion',
      },
    },
    gallery: {
      title: 'Curated styles',
      sub: 'Each package pairs a filter with a matching frame. Not “Filter 1, 2, 3” — every style has a name and a feel.',
      cards: [
        {
          style: 'Niskala',
          caption: 'a smile that wasn’t staged',
          date: '2 May 2026 · Graduation',
        },
        { style: 'Senja', caption: 'see you again soon', date: '17 Aug 2026 · Wedding' },
        { style: 'Klasik', caption: 'the whole crew, a rare one', date: '30 Nov 2026 · Birthday' },
      ],
    },
    flow: {
      title: 'A short flow',
      steps: [
        { n: '1', title: 'Pick a layout', detail: '4R layouts: 1, 2, or 4 photos.' },
        { n: '2', title: 'Pick a style', detail: 'Named filter + frame packages.' },
        { n: '3', title: 'Take the shot', detail: '3-2-1 countdown, large preview.' },
        { n: '4', title: 'Konteks momen', detail: 'A short note for the back.' },
        { n: '5', title: 'Print + digital', detail: '4R print plus a QR for the digital copy.' },
      ],
    },
    packages: {
      title: 'Packages',
      sub: 'Final pricing depends on event duration and location. Message us on WhatsApp for a quote.',
      items: [
        {
          name: 'Event Session',
          price: 'Per event',
          desc: 'For birthdays, weddings, reunions, or gatherings.',
          features: [
            'Operator on standby throughout',
            'Unlimited 4R prints per session',
            'Konteks Momen on every print',
            'Digital copy via QR',
          ],
        },
        {
          name: 'Self-Service',
          price: 'Per event',
          desc: 'Booth left unattended, guests use the box screen directly.',
          features: [
            'Settings locked, photo flow only',
            'Auto timeout back to start',
            '4R print + Konteks Momen',
            'Digital copy via QR',
          ],
        },
      ],
      note: 'WhatsApp number and pricing details are confirmed at booking.',
    },
    finalCta: {
      title: 'Ready to capture your moment?',
      body: 'Tell us about your event on WhatsApp — date, location, and rough headcount. We’ll reply with a quote.',
      button: 'Book via WhatsApp',
    },
  },
};
