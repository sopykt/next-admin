const g_eras = [
  //-------------------------------------------------------------------------
  //The first era (the era of Myanmar kings: ME1216 and before)
  //Makaranta system 1 (ME 0 - 797)
  {
    eid: 1.1, //era id
    begin: -999, //beginning Myanmar year
    end: 797, //ending Myanmar year
    WO: -1.1, // watat offset to compensate
    NM: -1, //number of months to find excess days
    fme: [
      [205, 1],
      [246, 1],
      [471, 1],
      [572, -1],
      [651, 1],
      [653, 2],
      [656, 1],
      [672, 1],
      [729, 1],
      [767, -1],
    ],
    //exceptions for full moon days
    wte: [], //exceptions for watat years
  },
  //Makaranta system 2 (ME 798 - 1099)
  {
    eid: 1.2, //era id
    begin: 798, //beginning Myanmar year
    end: 1099, //ending Myanmar year
    WO: -1.1, // watat offset to compensate
    NM: -1, //number of months to find excess days
    fme: [
      [813, -1],
      [849, -1],
      [851, -1],
      [854, -1],
      [927, -1],
      [933, -1],
      [936, -1],
      [938, -1],
      [949, -1],
      [952, -1],
      [963, -1],
      [968, -1],
      [1039, -1],
    ],
    //exceptions for full moon days
    wte: [], //exceptions for watat years
  },
  //Thandeikta (ME 1100 - 1216)
  {
    eid: 1.3, //era id
    begin: 1100, //beginning Myanmar year
    end: 1216, //ending Myanmar year
    WO: -0.85, // watat offset to compensate
    NM: -1, //number of months to find excess days
    fme: [
      [1120, 1],
      [1126, -1],
      [1150, 1],
      [1172, -1],
      [1207, 1],
    ],
    //exceptions for full moon days
    wte: [
      [1201, 1],
      [1202, 0],
    ], //exceptions for watat years
  },
  //---------------------------------------------------------
  //The second era (the era under British colony: 1217 ME - 1311 ME)
  {
    eid: 2, //era id
    begin: 1217, //beginning Myanmar year
    end: 1311, //ending Myanmar year
    WO: -1, // watat offset to compensate
    NM: 4, //number of months to find excess days
    fme: [
      [1234, 1],
      [1261, -1],
    ], //exceptions for full moon days
    wte: [
      [1263, 1],
      [1264, 0],
    ], //exceptions for watat years
  },
  //---------------------------------------------------------
  //The third era (the era after Independence	1312 ME and after)
  {
    eid: 3, //era id
    begin: 1312, //beginning Myanmar year
    end: 9999, //ending Myanmar year
    WO: -0.5, // watat offset to compensate
    NM: 8, //number of months to find excess days
    fme: [[1377, 1]], //exceptions for full moon days
    wte: [
      [1344, 1],
      [1345, 0],
    ], //exceptions for watat years
  },
];

const chk_watat = (my: number) => {
  let i;
  for (i = g_eras.length - 1; i > 0; i--) if (my >= g_eras[i].begin) break;
  const era = g_eras[i];
  const NM = era.NM,
    WO = era.WO;
  const SY = 1577917828 / 4320000; // solar year (365.2587565)
  const LM = 1577917828 / 53433336; // lunar month (29.53058795)
  const MO = 1954168.050623; // beginning of 0 ME

  const TA = (SY / 12 - LM) * (12 - NM); // threshold to adjust
  let ed = (SY * (my + 3739)) % LM; // excess day
  if (ed < TA) ed += LM; // adjust excess days
  let fm = Math.round(SY * my + MO - ed + 4.5 * LM + WO); // full moon day of 2nd Waso
  let TW = 0,
    watat = 0; // find watat
  if (era.eid >= 2) {
    TW = LM - (SY / 12 - LM) * NM;
    if (ed >= TW) watat = 1;
  } else {
    watat = (my * 7 + 2) % 19;
    if (watat < 0) watat += 19;
    watat = Math.floor(watat / 12);
  }
  i = bSearch(my, era.wte);
  if (i >= 0) watat = era.wte[i][1];
  if (watat) {
    i = bSearch(my, era.fme);
    if (i >= 0) fm += era.fme[i][1];
  }
  return { fm, watat };
};

// const chk_my = (my: number) => {
//   const yd = 0,
//     y1,
//     nd = 0,
//     werr = 0,
//     fm = 0;
//   const y2 = chk_watat(my);
//   const myt = y2.watat;
//   do {
//     yd++;
//     y1 = chk_watat(my - yd);
//   } while (y1.watat == 0 && yd < 3);
//   if (myt) {
//     nd = (y2.fm - y1.fm) % 354;
//     myt = Math.floor(nd / 31) + 1;
//     fm = y2.fm;
//     if (nd != 30 && nd != 31) {
//       werr = 1;
//     }
//   } else fm = y1.fm + 354 * yd;
//   const tg1 = y1.fm + 354 * yd - 102;
//   return { myt, tg1, fm, werr };
// };

const chk_my = (my: number) => {
  let yd = 0;
  let y1: { watat: number; fm: number };
  let nd = 0;
  let werr = 0;
  let fm = 0;
  const y2 = chk_watat(my);
  let myt = y2.watat;

  do {
    yd++;
    y1 = chk_watat(my - yd);
  } while (y1.watat === 0 && yd < 3);

  if (myt) {
    nd = (y2.fm - y1.fm) % 354;
    myt = Math.floor(nd / 31) + 1;
    fm = y2.fm;
    if (nd !== 30 && nd !== 31) {
      werr = 1;
    }
  } else {
    fm = y1.fm + 354 * yd;
  }

  const tg1 = y1.fm + 354 * yd - 102;
  return { myt, tg1, fm, werr };
};

const w2j = (y: number, m: number, d: number, ct: number = 0, SG: number = 2361222) => {
  let jd;
  ct = ct || 0;
  SG = SG || 2361222; // Gregorian start in English calendar (1752/Sep/14)
  const a = Math.floor((14 - m) / 12);
  y = y + 4800 - a;
  m = m + 12 * a - 3;
  jd = d + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4);

  if (ct === 1) {
    jd = jd - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  } else if (ct === 2) {
    jd = jd - 32083;
  } else {
    jd = jd - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    if (jd < SG) {
      jd = d + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
      if (jd > SG) {
        jd = SG;
      }
    }
  }
  return jd;
};

const bSearch = (k: number, A: number[][]) => {
  let i = 0;
  let l = 0;
  let u = A.length - 1;

  while (u >= l) {
    i = Math.floor((l + u) / 2);
    if (A[i][0] > k) u = i - 1;
    else if (A[i][0] < k) l = i + 1;
    else return i;
  }
  return -1;
};

const j2m = (jd: number) => {
  const SY = 1577917828 / 4320000; // solar year (365.2587565)
  const MO = 1954168.050623; // beginning of 0 ME
  // const jdn, my, yo, dd, myl, mmt, a, b, c, e, f, mm, md, mml, mp, fd, wd;
  const jdn = Math.round(jd); // convert jd to jdn
  const my = Math.floor((jdn - 0.5 - MO) / SY); // Myanmar year
  const yo = chk_my(my); // check year
  let dd = jdn - yo.tg1 + 1; // day count
  const b = Math.floor(yo.myt / 2);
  const c = Math.floor(1 / (yo.myt + 1)); // big wa and common yr
  const myl = 354 + (1 - c) * 30; // year length
  const mmt = Math.floor((dd - 1) / myl); // month type: Hnaung =1 or Oo = 0
  dd -= mmt * myl;
  const a = Math.floor((dd + 423) / 512); // adjust day count and threshold
  let mm = Math.floor((dd - b * a + c * a * 30 + 29.26) / 29.544); // month
  const e = Math.floor((mm + 12) / 16);
  const f = Math.floor((mm + 11) / 16);
  const md = dd - Math.floor(29.544 * mm - 29.26) - b * e + c * f * 30; // day
  mm += f * 3 - e * 4;
  let mml = 30 - (mm % 2); // adjust month and month length
  if (mm === 3) mml += b; // adjust if Nayon in big watat
  const mp = Math.floor((md + 1) / 16) + Math.floor(md / 16) + Math.floor(md / mml);
  const fd = md - 15 * Math.floor(md / 16); // waxing or waning day
  const wd = (jdn + 2) % 7; // week day
  return {
    my,
    myt: yo.myt,
    myl,
    mm,
    mmt,
    mml,
    md,
    mp,
    fd,
    wd,
  };
};

const engToMm = (year: number, month: number, date: number) => {
  const j = w2j(year, month, date);
  // console.log(j);
  const M = j2m(j);
  return M;
};

const myNumbers = (str: string, toLanguage: string = 'en') => {
  str += '';
  toLanguage = (toLanguage || 'en').toLowerCase();

  const replaceNumbers = (txt: string) => {
    const numbers = {
      // Myanmar and Shan numbers
      '๐': 0, // Thai zero
      ဝ: 0, // Myanmar letter "wa" sometimes used as zero
      '၀': 0,
      '၁': 1,
      '၂': 2,
      '၃': 3,
      '၄': 4,
      '၅': 5,
      '၆': 6,
      '၇': 7,
      '၈': 8,
      '၉': 9,
      '႐': 0,
      '႑': 1,
      '႒': 2,
      '႓': 3,
      '႔': 4,
      '႕': 5,
      '႖': 6,
      '႗': 7,
      '႘': 8,
      '႙': 9,
    };

    const keys = Object.keys(numbers) as (keyof typeof numbers)[];
    if (toLanguage === 'my') {
      // Myanmar
      for (let n = 2; n <= 11; n++) {
        const re = new RegExp(numbers[keys[n]] + '', 'g');
        txt = txt.replace(re, keys[n]);
      }
    } else if (toLanguage === 'shan') {
      // Shan numerals - convert any Myanmar numbers to international first
      txt = myNumbers(txt) + '';
      for (let n = 12; n < keys.length; n++) {
        const re = new RegExp(numbers[keys[n]] + '', 'g');
        txt = txt.replace(re, keys[n]);
      }
    } else {
      for (let n = 0; n < keys.length; n++) {
        // default
        if (n === 1) {
          txt = txt.replace(/([၁၂၃၄၅၆၇၈၉])ဝ/g, '$10');
          txt = txt.replace(/ဝ([၁၂၃၄၅၆၇၈၉])/g, '0$1');
          while (txt.match(/ဝ(\d)/)) {
            txt = txt.replace(/ဝ(\d)/g, '0$1');
          }
          while (txt.match(/(\d)ဝ/)) {
            txt = txt.replace(/(\d)ဝ/g, '$10');
          }
        } else {
          const re = new RegExp(keys[n], 'g');
          txt = txt.replace(re, numbers[keys[n]].toString());
        }
      }
    }
    return txt;
  };

  return replaceNumbers(str);
};

const monthsMM = [
  'ပဝါဆို',
  'တန်ခူး',
  'ကဆုန်',
  'နယုန်',
  'ဝါဆို',
  'ဝါခေါင်',
  'တော်သလင်း',
  'သီတင်းကျွတ်',
  'တန်ဆောင်မုန်း',
  'နတ်တော်',
  'ပြာသို',
  'တပို့တွဲ',
  'တပေါင်း',
];

const mpDefinations = ['လဆန်း', 'လပြည့်', 'လပြည့်ကျော်', 'လကွယ်'];

const weekDay = ['စနေ', 'တနင်္ဂ‌နွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသာပတေး', 'သောကြာ'];

const formatDate = (date: Date) => {
  if (!date || !(date instanceof Date)) {
    return 'Invalid Date';
  }
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const [month, day, year] = formattedDate.split(' ');
  return `${year} - ${month} - ${day.replace(',', '')}`;
};

const calculateAgeFromDate = (birthDate: Date) => {
  const today = new Date();

  // Extract the current date components
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Month is 0-indexed in JS Date
  const currentDay = today.getDate();

  // Extract birth date components
  // const { y: birthYear, m: birthMonth, d: birthDay } = birthDate;
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  // Calculate age in years
  let age = currentYear - birthYear;

  // Adjust age if the current date is before the birth date in the year
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
};

export {
  g_eras,
  chk_watat,
  chk_my,
  w2j,
  bSearch,
  j2m,
  engToMm,
  myNumbers,
  monthsMM,
  mpDefinations,
  weekDay,
  formatDate,
  calculateAgeFromDate,
};
