const statesRegions = [
  { SR_PCODE: 'MMR012', SR: 'Rakhine', SR_MM3: 'ရခိုင်ပြည်နယ်' },
  { SR_PCODE: 'MMR017', SR: 'Ayeyarwady', SR_MM3: 'ဧရာဝတီတိုင်းဒေသကြီး' },
  { SR_PCODE: 'MMR009', SR: 'Magway', SR_MM3: 'မကွေးတိုင်းဒေသကြီး' },
  { SR_PCODE: 'MMR001', SR: 'Kachin', SR_MM3: 'ကချင်ပြည်နယ်' },
  { SR_PCODE: 'MMR006', SR: 'Tanintharyi', SR_MM3: 'တနင်္သာရီတိုင်းဒေသကြီး' },
  { SR_PCODE: 'MMR013', SR: 'Yangon', SR_MM3: 'ရန်ကုန်တိုင်းဒေသကြီး' },
  { SR_PCODE: 'MMR014', SR: 'Shan (South)', SR_MM3: 'ရှမ်းပြည်နယ် (တောင်ပိုင်း)' },
  { SR_PCODE: 'MMR015', SR: 'Shan (North)', SR_MM3: 'ရှမ်းပြည်နယ် (မြောက်ပိုင်း)' },
  {
    SR_PCODE: 'MMR007',
    SR: 'Bago (East)',
    SR_MM3: 'ပဲခူးတိုင်းဒေသကြီး (အရှေ့ပိုင်း)',
  },
  {
    SR_PCODE: 'MMR008',
    SR: 'Bago (West)',
    SR_MM3: 'ပဲခူးတိုင်းဒေသကြီး (အနောက်ပိုင်း)',
  },
  { SR_PCODE: 'MMR016', SR: 'Shan (East)', SR_MM3: 'ရှမ်းပြည်နယ် (အရှေ့ပိုင်း)' },
  { SR_PCODE: 'MMR005', SR: 'Sagaing', SR_MM3: 'စစ်ကိုင်းတိုင်းဒေသကြီး' },
  { SR_PCODE: 'MMR011', SR: 'Mon', SR_MM3: 'မွန်ပြည်နယ်' },
  { SR_PCODE: 'MMR018', SR: 'Nay Pyi Taw', SR_MM3: 'နေပြည်တော်' },
  { SR_PCODE: 'MMR004', SR: 'Chin', SR_MM3: 'ချင်းပြည်နယ်' },
  { SR_PCODE: 'MMR010', SR: 'Mandalay', SR_MM3: 'မန္တလေးတိုင်းဒေသကြီး' },
  { SR_PCODE: 'MMR003', SR: 'Kayin', SR_MM3: 'ကရင်ပြည်နယ်' },
  { SR_PCODE: 'MMR002', SR: 'Kayah', SR_MM3: 'ကယားပြည်နယ်' },
];

const districts = {
  MMR012: [
    { DT_PCODE: 'MMR012D002', DT: 'Maungdaw', DT_MM3: 'မောင်တောခရိုင်' },
    { DT_PCODE: 'MMR012D003', DT: 'Kyaukpyu', DT_MM3: 'ကျောက်ဖြူခရိုင်' },
    { DT_PCODE: 'MMR012D001', DT: 'Sittwe', DT_MM3: 'စစ်တွေခရိုင်' },
    { DT_PCODE: 'MMR012D005', DT: 'Mrauk-U', DT_MM3: 'မြောက်ဦးခရိုင်' },
    { DT_PCODE: 'MMR012D004', DT: 'Thandwe', DT_MM3: 'သံတွဲခရိုင်' },
  ],
  MMR017: [
    { DT_PCODE: 'MMR017D004', DT: 'Labutta', DT_MM3: 'လပွတ္တာခရိုင်' },
    { DT_PCODE: 'MMR017D001', DT: 'Pathein', DT_MM3: 'ပုသိမ်ခရိုင်' },
    { DT_PCODE: 'MMR017D002', DT: 'Hinthada', DT_MM3: 'ဟင်္သာတခရိုင်' },
    { DT_PCODE: 'MMR017D005', DT: 'Maubin', DT_MM3: 'မအူပင်ခရိုင်' },
    { DT_PCODE: 'MMR017D006', DT: 'Pyapon', DT_MM3: 'ဖျာပုံခရိုင်' },
    { DT_PCODE: 'MMR017D003', DT: 'Myaungmya', DT_MM3: 'မြောင်းမြခရိုင်' },
  ],
  MMR009: [
    { DT_PCODE: 'MMR009D001', DT: 'Magway', DT_MM3: 'မကွေးခရိုင်' },
    { DT_PCODE: 'MMR009D003', DT: 'Thayet', DT_MM3: 'သရက်ခရိုင်' },
    { DT_PCODE: 'MMR009D002', DT: 'Minbu', DT_MM3: 'မင်းဘူးခရိုင်' },
    { DT_PCODE: 'MMR009D005', DT: 'Gangaw', DT_MM3: 'ဂန့်ဂေါခရိုင်' },
    { DT_PCODE: 'MMR009D004', DT: 'Pakokku', DT_MM3: 'ပခုက္ကူခရိုင်' },
  ],
  MMR001: [
    { DT_PCODE: 'MMR001D001', DT: 'Myitkyina', DT_MM3: 'မြစ်ကြီးနားခရိုင်' },
    { DT_PCODE: 'MMR001D003', DT: 'Bhamo', DT_MM3: 'ဗန်းမော်ခရိုင်' },
    { DT_PCODE: 'MMR001D002', DT: 'Mohnyin', DT_MM3: 'မိုးညှင်းခရိုင်' },
    { DT_PCODE: 'MMR001D004', DT: 'Puta-O', DT_MM3: 'ပူတာအိုခရိုင်' },
  ],
  MMR006: [
    { DT_PCODE: 'MMR006D001', DT: 'Dawei', DT_MM3: 'ထားဝယ်ခရိုင်' },
    { DT_PCODE: 'MMR006D003', DT: 'Kawthoung', DT_MM3: 'ကော့သောင်းခရိုင်' },
    { DT_PCODE: 'MMR006D002', DT: 'Myeik', DT_MM3: 'မြိတ်ခရိုင်' },
  ],
  MMR013: [
    {
      DT_PCODE: 'MMR013D004',
      DT: 'Yangon (West)',
      DT_MM3: 'ရန်ကုန်(အနောက်ပိုင်း)ခရိုင်',
    },
    {
      DT_PCODE: 'MMR013D002',
      DT: 'Yangon (East)',
      DT_MM3: 'ရန်ကုန်(အရှေ့ပိုင်း)ခရိုင်',
    },
    {
      DT_PCODE: 'MMR013D003',
      DT: 'Yangon (South)',
      DT_MM3: 'ရန်ကုန်(တောင်ပိုင်း)ခရိုင်',
    },
    {
      DT_PCODE: 'MMR013D001',
      DT: 'Yangon (North)',
      DT_MM3: 'ရန်ကုန်(မြောက်ပိုင်း)ခရိုင်',
    },
  ],
  MMR014: [
    { DT_PCODE: 'MMR014D003', DT: 'Langkho', DT_MM3: 'လင်းခေးခရိုင်' },
    { DT_PCODE: 'MMR014D002', DT: 'Loilen', DT_MM3: 'လွိုင်လင်ခရိုင်' },
    {
      DT_PCODE: 'MMR014S002',
      DT: 'Pa-O Self-Administered Zone',
      DT_MM3: 'ပအို့ဝ်ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ',
    },
    { DT_PCODE: 'MMR014D001', DT: 'Taunggyi', DT_MM3: 'တောင်ကြီးခရိုင်' },
    {
      DT_PCODE: 'MMR014S001',
      DT: 'Danu Self-Administered Zone',
      DT_MM3: 'ဓနုကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ',
    },
  ],
  MMR015: [
    { DT_PCODE: 'MMR015D008', DT: 'Mongmit', DT_MM3: 'မိုးမိတ်ခရိုင်' },
    { DT_PCODE: 'MMR015D001', DT: 'Lashio', DT_MM3: 'လားရှိုးခရိုင်' },
    { DT_PCODE: 'MMR015D003', DT: 'Kyaukme', DT_MM3: 'ကျောက်မဲခရိုင်' },
    { DT_PCODE: 'MMR015D007', DT: 'Matman', DT_MM3: 'မက်မန်းခရိုင်' },
    { DT_PCODE: 'MMR015D006', DT: 'Hopang', DT_MM3: 'ဟိုပန်ခရိုင်' },
    {
      DT_PCODE: 'MMR015S001',
      DT: 'Pa Laung Self-Administered Zone',
      DT_MM3: 'ပလောင်ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ',
    },
    { DT_PCODE: 'MMR015D002', DT: 'Muse', DT_MM3: 'မူဆယ်ခရိုင်' },
    {
      DT_PCODE: 'MMR015S002',
      DT: 'Kokang Self-Administered Zone',
      DT_MM3: 'ကိုးကန့်ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ',
    },
  ],
  MMR007: [
    { DT_PCODE: 'MMR007D002', DT: 'Taungoo', DT_MM3: 'တောင်ငူခရိုင်' },
    { DT_PCODE: 'MMR007D001', DT: 'Bago', DT_MM3: 'ပဲခူးခရိုင်' },
  ],
  MMR008: [
    { DT_PCODE: 'MMR008D001', DT: 'Pyay', DT_MM3: 'ပြည်ခရိုင်' },
    { DT_PCODE: 'MMR008D002', DT: 'Thayarwady', DT_MM3: 'သာယာဝတီခရိုင်' },
  ],
  MMR016: [
    { DT_PCODE: 'MMR016D001', DT: 'Kengtung', DT_MM3: 'ကျိုင်းတုံခရိုင်' },
    { DT_PCODE: 'MMR016D002', DT: 'Monghsat', DT_MM3: 'မိုင်းဆတ်ခရိုင်' },
    { DT_PCODE: 'MMR016D003', DT: 'Tachileik', DT_MM3: 'တာချီလိတ်ခရိုင်' },
  ],
  MMR005: [
    { DT_PCODE: 'MMR005D001', DT: 'Sagaing', DT_MM3: 'စစ်ကိုင်းခရိုင်' },
    { DT_PCODE: 'MMR005D003', DT: 'Monywa', DT_MM3: 'မုံရွာခရိုင်' },
    { DT_PCODE: 'MMR005D010', DT: 'Kanbalu', DT_MM3: 'ကန့်ဘလူခရိုင်' },
    { DT_PCODE: 'MMR005D007', DT: 'Mawlaik', DT_MM3: 'မော်လိုက်ခရိုင်' },
    { DT_PCODE: 'MMR005D008', DT: 'Hkamti', DT_MM3: 'ခန္တီးခရိုင်' },
    {
      DT_PCODE: 'MMR005S001',
      DT: 'Naga Self-Administered Zone',
      DT_MM3: 'နာဂကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ',
    },
    { DT_PCODE: 'MMR005D002', DT: 'Shwebo', DT_MM3: 'ရွှေဘိုခရိုင်' },
    { DT_PCODE: 'MMR005D009', DT: 'Yinmarbin', DT_MM3: 'ယင်းမာပင်ခရိုင်' },
    { DT_PCODE: 'MMR005D004', DT: 'Katha', DT_MM3: 'ကသာခရိုင်' },
    { DT_PCODE: 'MMR005D005', DT: 'Kale', DT_MM3: 'ကလေးခရိုင်' },
    { DT_PCODE: 'MMR005D011', DT: 'Kawlin', DT_MM3: 'ကောလင်းခရိုင်' },
    { DT_PCODE: 'MMR005D006', DT: 'Tamu', DT_MM3: 'တမူးခရိုင်' },
  ],
  MMR011: [
    { DT_PCODE: 'MMR011D001', DT: 'Mawlamyine', DT_MM3: 'မော်လမြိုင်ခရိုင်' },
    { DT_PCODE: 'MMR011D002', DT: 'Thaton', DT_MM3: 'သထုံခရိုင်' },
  ],
  MMR018: [
    { DT_PCODE: 'MMR018D002', DT: 'Det Khi Na', DT_MM3: 'ဒက္ခိဏခရိုင်' },
    { DT_PCODE: 'MMR018D001', DT: 'Oke Ta Ra', DT_MM3: 'ဥတ္တရခရိုင်' },
  ],
  MMR004: [
    { DT_PCODE: 'MMR004D001', DT: 'Falam', DT_MM3: 'ဖလမ်းခရိုင်' },
    { DT_PCODE: 'MMR004D002', DT: 'Mindat', DT_MM3: 'မင်းတပ်ခရိုင်' },
    { DT_PCODE: 'MMR004D003', DT: 'Hakha', DT_MM3: 'ဟားခါးခရိုင်' },
  ],
  MMR010: [
    { DT_PCODE: 'MMR010D007', DT: 'Meiktila', DT_MM3: 'မိတ္ထီလာခရိုင်' },
    { DT_PCODE: 'MMR010D005', DT: 'Nyaung-U', DT_MM3: 'ညောင်ဦးခရိုင်' },
    { DT_PCODE: 'MMR010D003', DT: 'Kyaukse', DT_MM3: 'ကျောက်ဆည်ခရိုင်' },
    { DT_PCODE: 'MMR010D002', DT: 'Pyinoolwin', DT_MM3: 'ပြင်ဦးလွင်ခရိုင်' },
    { DT_PCODE: 'MMR010D004', DT: 'Myingyan', DT_MM3: 'မြင်းခြံခရိုင်' },
    { DT_PCODE: 'MMR010D006', DT: 'Yamethin', DT_MM3: 'ရမည်းသင်းခရိုင်' },
    { DT_PCODE: 'MMR010D001', DT: 'Mandalay', DT_MM3: 'မန္တလေးခရိုင်' },
  ],
  MMR003: [
    { DT_PCODE: 'MMR003D001', DT: 'Hpa-An', DT_MM3: 'ဘားအံခရိုင်' },
    { DT_PCODE: 'MMR003D003', DT: 'Kawkareik', DT_MM3: 'ကော့ကရိတ်ခရိုင်' },
    { DT_PCODE: 'MMR003D002', DT: 'Myawaddy', DT_MM3: 'မြဝတီခရိုင်' },
    { DT_PCODE: 'MMR003D004', DT: 'Hpapun', DT_MM3: 'ဖာပွန်ခရိုင်' },
  ],
  MMR002: [
    { DT_PCODE: 'MMR002D001', DT: 'Loikaw', DT_MM3: 'လွိုင်ကော်ခရိုင်' },
    { DT_PCODE: 'MMR002D002', DT: 'Bawlake', DT_MM3: 'ဘောလခဲခရိုင်' },
  ],
};

const townships = {
  MMR012D002: [
    { TS_PCODE: 'MMR012009', TS: 'Maungdaw', TS_MM3: 'မောင်တော' },
    { TS_PCODE: 'MMR012010', TS: 'Buthidaung', TS_MM3: 'ဘူးသီးတောင်' },
  ],
  MMR017D004: [
    {
      TS_PCODE: 'MMR017018',
      TS: 'Mawlamyinegyun',
      TS_MM3: 'မော်လမြိုင်ကျွန်း',
    },
    { TS_PCODE: 'MMR017016', TS: 'Labutta', TS_MM3: 'လပွတ္တာ' },
  ],
  MMR017D001: [
    { TS_PCODE: 'MMR017001', TS: 'Pathein', TS_MM3: 'ပုသိမ်' },
    { TS_PCODE: 'MMR017002', TS: 'Kangyidaunt', TS_MM3: 'ကန်ကြီးထောင့်' },
    { TS_PCODE: 'MMR017005', TS: 'Kyonpyaw', TS_MM3: 'ကျုံပျော်' },
    { TS_PCODE: 'MMR017006', TS: 'Yegyi', TS_MM3: 'ရေကြည်' },
    { TS_PCODE: 'MMR017004', TS: 'Ngapudaw', TS_MM3: 'ငပုတော' },
    { TS_PCODE: 'MMR017007', TS: 'Kyaunggon', TS_MM3: 'ကျောင်းကုန်း' },
    { TS_PCODE: 'MMR017003', TS: 'Thabaung', TS_MM3: 'သာပေါင်း' },
  ],
  MMR017D002: [
    { TS_PCODE: 'MMR017011', TS: 'Myanaung', TS_MM3: 'မြန်အောင်' },
    { TS_PCODE: 'MMR017008', TS: 'Hinthada', TS_MM3: 'ဟင်္သာတ' },
    { TS_PCODE: 'MMR017013', TS: 'Ingapu', TS_MM3: 'အင်္ဂပူ' },
    { TS_PCODE: 'MMR017012', TS: 'Kyangin', TS_MM3: 'ကြံခင်း' },
    { TS_PCODE: 'MMR017010', TS: 'Lemyethna', TS_MM3: 'လေးမျက်နှာ' },
    { TS_PCODE: 'MMR017009', TS: 'Zalun', TS_MM3: 'ဇလွန်' },
  ],
  MMR012D003: [
    { TS_PCODE: 'MMR012014', TS: 'Ann', TS_MM3: 'အမ်း' },
    { TS_PCODE: 'MMR012013', TS: 'Ramree', TS_MM3: 'ရမ်းဗြဲ' },
    { TS_PCODE: 'MMR012012', TS: 'Munaung', TS_MM3: 'မာန်အောင်' },
    { TS_PCODE: 'MMR012011', TS: 'Kyaukpyu', TS_MM3: 'ကျောက်ဖြူ' },
  ],
  MMR009D001: [
    { TS_PCODE: 'MMR009001', TS: 'Magway', TS_MM3: 'မကွေး' },
    { TS_PCODE: 'MMR009006', TS: 'Natmauk', TS_MM3: 'နတ်မောက်' },
    { TS_PCODE: 'MMR009005', TS: 'Myothit', TS_MM3: 'မြို့သစ်' },
    { TS_PCODE: 'MMR009004', TS: 'Taungdwingyi', TS_MM3: 'တောင်တွင်းကြီး' },
    { TS_PCODE: 'MMR009002', TS: 'Yenangyaung', TS_MM3: 'ရေနံချောင်း' },
    { TS_PCODE: 'MMR009003', TS: 'Chauk', TS_MM3: 'ချောက်' },
  ],
  MMR001D001: [
    { TS_PCODE: 'MMR001001', TS: 'Myitkyina', TS_MM3: 'မြစ်ကြီးနား' },
    { TS_PCODE: 'MMR001002', TS: 'Waingmaw', TS_MM3: 'ဝိုင်းမော်' },
    { TS_PCODE: 'MMR001003', TS: 'Injangyang', TS_MM3: 'အင်ဂျန်းယန်' },
    { TS_PCODE: 'MMR001004', TS: 'Tanai', TS_MM3: 'တနိုင်း' },
    { TS_PCODE: 'MMR001006', TS: 'Tsawlaw', TS_MM3: 'ဆော့လော်' },
    { TS_PCODE: 'MMR001005', TS: 'Chipwi', TS_MM3: 'ချီ\u200bဖွေ' },
  ],
  MMR017D005: [
    { TS_PCODE: 'MMR017022', TS: 'Danubyu', TS_MM3: 'ဓနုဖြူ' },
    { TS_PCODE: 'MMR017019', TS: 'Maubin', TS_MM3: 'မအူပင်' },
    { TS_PCODE: 'MMR017021', TS: 'Nyaungdon', TS_MM3: 'ညောင်တုန်း' },
    { TS_PCODE: 'MMR017020', TS: 'Pantanaw', TS_MM3: 'ပန်းတနော်' },
  ],
  MMR012D001: [
    { TS_PCODE: 'MMR012008', TS: 'Rathedaung', TS_MM3: 'ရသေ့တောင်' },
    { TS_PCODE: 'MMR012002', TS: 'Ponnagyun', TS_MM3: 'ပုဏ္ဏားကျွန်း' },
    { TS_PCODE: 'MMR012001', TS: 'Sittwe', TS_MM3: 'စစ်တွေ' },
    { TS_PCODE: 'MMR012007', TS: 'Pauktaw', TS_MM3: 'ပေါက်တော' },
  ],
  MMR006D001: [
    { TS_PCODE: 'MMR006001', TS: 'Dawei', TS_MM3: 'ထားဝယ်' },
    { TS_PCODE: 'MMR006003', TS: 'Thayetchaung', TS_MM3: 'သရက်ချောင်း' },
    { TS_PCODE: 'MMR006002', TS: 'Launglon', TS_MM3: 'လောင်းလုံး' },
    { TS_PCODE: 'MMR006004', TS: 'Yebyu', TS_MM3: 'ရေဖြူ' },
  ],
  MMR006D003: [
    { TS_PCODE: 'MMR006009', TS: 'Kawthoung', TS_MM3: 'ကော့သောင်း' },
    { TS_PCODE: 'MMR006010', TS: 'Bokpyin', TS_MM3: 'ဘုတ်ပြင်း' },
  ],
  MMR013D004: [
    { TS_PCODE: 'MMR013035', TS: 'Lanmadaw', TS_MM3: 'လမ်းမတော်' },
    { TS_PCODE: 'MMR013044', TS: 'Bahan', TS_MM3: 'ဗဟန်း' },
    { TS_PCODE: 'MMR013043', TS: 'Dagon', TS_MM3: 'ဒဂုံ' },
    { TS_PCODE: 'MMR013036', TS: 'Latha', TS_MM3: 'လသာ' },
    { TS_PCODE: 'MMR013039', TS: 'Sanchaung', TS_MM3: 'စမ်းချောင်း' },
    { TS_PCODE: 'MMR013034', TS: 'Pabedan', TS_MM3: 'ပန်းဘဲတန်း' },
    { TS_PCODE: 'MMR013040', TS: 'Hlaing', TS_MM3: 'လှိုင်' },
    { TS_PCODE: 'MMR013041', TS: 'Kamaryut', TS_MM3: 'ကမာရွတ်' },
    { TS_PCODE: 'MMR013042', TS: 'Mayangone', TS_MM3: 'မရမ်းကုန်း' },
    { TS_PCODE: 'MMR013037', TS: 'Ahlone', TS_MM3: 'အလုံ' },
    { TS_PCODE: 'MMR013038', TS: 'Kyeemyindaing', TS_MM3: 'ကြည့်မြင်တိုင်' },
    { TS_PCODE: 'MMR013033', TS: 'Kyauktada', TS_MM3: 'ကျောက်တံတား' },
  ],
  MMR014D003: [
    { TS_PCODE: 'MMR014018', TS: 'Langkho', TS_MM3: 'လင်းခေး' },
    { TS_PCODE: 'MMR014021', TS: 'Mongpan', TS_MM3: 'မိုင်းပန်' },
    { TS_PCODE: 'MMR014019', TS: 'Mongnai', TS_MM3: 'မိုးနဲ' },
    { TS_PCODE: 'MMR014020', TS: 'Mawkmai', TS_MM3: 'မောက်မယ်' },
  ],
  MMR006D002: [
    { TS_PCODE: 'MMR006005', TS: 'Myeik', TS_MM3: 'မြိတ်' },
    { TS_PCODE: 'MMR006006', TS: 'Kyunsu', TS_MM3: 'ကျွန်းစု' },
    { TS_PCODE: 'MMR006007', TS: 'Palaw', TS_MM3: 'ပုလော' },
    { TS_PCODE: 'MMR006008', TS: 'Tanintharyi', TS_MM3: 'တနင်္သာရီ' },
  ],
  MMR015D008: [
    { TS_PCODE: 'MMR015018', TS: 'Mabein', TS_MM3: 'မဘိမ်း' },
    { TS_PCODE: 'MMR015017', TS: 'Mongmit', TS_MM3: 'မိုးမိတ်' },
  ],
  MMR014D002: [
    { TS_PCODE: 'MMR014013', TS: 'Nansang', TS_MM3: 'နမ့်စန်' },
    { TS_PCODE: 'MMR014017', TS: 'Monghsu', TS_MM3: 'မိုင်းရှူး' },
    { TS_PCODE: 'MMR014012', TS: 'Laihka', TS_MM3: 'လဲချား' },
    { TS_PCODE: 'MMR014016', TS: 'Mongkaing', TS_MM3: 'မိုင်းကိုင်' },
    { TS_PCODE: 'MMR014014', TS: 'Kunhing', TS_MM3: 'ကွန်ဟိန်း' },
    { TS_PCODE: 'MMR014011', TS: 'Loilen', TS_MM3: 'လွိုင်လင်' },
    { TS_PCODE: 'MMR014015', TS: 'Kyethi', TS_MM3: 'ကျေးသီး' },
  ],
  MMR015D001: [
    { TS_PCODE: 'MMR015002', TS: 'Hseni', TS_MM3: 'သိန္နီ' },
    { TS_PCODE: 'MMR015003', TS: 'Mongyai', TS_MM3: 'မိုင်းရယ်' },
    { TS_PCODE: 'MMR015004', TS: 'Tangyan', TS_MM3: 'တန့်ယန်း' },
    { TS_PCODE: 'MMR015001', TS: 'Lashio', TS_MM3: 'လားရှိုး' },
    { TS_PCODE: 'MMR015020', TS: 'Kunlong', TS_MM3: 'ကွမ်းလုံ' },
  ],
  MMR009D003: [
    { TS_PCODE: 'MMR009013', TS: 'Minhla (Thayet)', TS_MM3: 'မင်းလှ (သရက်)' },
    { TS_PCODE: 'MMR009016', TS: 'Aunglan', TS_MM3: 'အောင်လံ' },
    { TS_PCODE: 'MMR009017', TS: 'Sinbaungwe', TS_MM3: 'ဆင်ပေါင်ဝဲ' },
    { TS_PCODE: 'MMR009015', TS: 'Kamma', TS_MM3: 'ကံမ' },
    { TS_PCODE: 'MMR009014', TS: 'Mindon', TS_MM3: 'မင်းတုန်း' },
    { TS_PCODE: 'MMR009012', TS: 'Thayet', TS_MM3: 'သရက်' },
  ],
  MMR009D002: [
    { TS_PCODE: 'MMR009008', TS: 'Pwintbyu', TS_MM3: 'ပွင့်ဖြူ' },
    { TS_PCODE: 'MMR009010', TS: 'Salin', TS_MM3: 'စလင်း' },
    { TS_PCODE: 'MMR009011', TS: 'Sidoktaya', TS_MM3: 'စေတုတ္ထရာ' },
    { TS_PCODE: 'MMR009009', TS: 'Ngape', TS_MM3: 'ငဖဲ' },
    { TS_PCODE: 'MMR009007', TS: 'Minbu', TS_MM3: 'မင်းဘူး' },
  ],
  MMR009D005: [
    { TS_PCODE: 'MMR009023', TS: 'Gangaw', TS_MM3: 'ဂန့်ဂေါ' },
    { TS_PCODE: 'MMR009025', TS: 'Saw', TS_MM3: 'ဆော' },
    { TS_PCODE: 'MMR009024', TS: 'Tilin', TS_MM3: 'ထီးလင်း' },
  ],
  MMR012D005: [
    { TS_PCODE: 'MMR012005', TS: 'Minbya', TS_MM3: 'မင်းပြား' },
    { TS_PCODE: 'MMR012003', TS: 'Mrauk-U', TS_MM3: 'မြောက်ဦး' },
    { TS_PCODE: 'MMR012006', TS: 'Myebon', TS_MM3: 'မြေပုံ' },
    { TS_PCODE: 'MMR012004', TS: 'Kyauktaw', TS_MM3: 'ကျောက်တော်' },
  ],
  MMR012D004: [
    { TS_PCODE: 'MMR012017', TS: 'Gwa', TS_MM3: 'ဂွ' },
    { TS_PCODE: 'MMR012015', TS: 'Thandwe', TS_MM3: 'သံတွဲ' },
    { TS_PCODE: 'MMR012016', TS: 'Toungup', TS_MM3: 'တောင်ကုတ်' },
  ],
  MMR017D006: [
    { TS_PCODE: 'MMR017024', TS: 'Bogale', TS_MM3: 'ဘိုကလေး' },
    { TS_PCODE: 'MMR017026', TS: 'Dedaye', TS_MM3: 'ဒေးဒရဲ' },
    { TS_PCODE: 'MMR017023', TS: 'Pyapon', TS_MM3: 'ဖျာပုံ' },
    { TS_PCODE: 'MMR017025', TS: 'Kyaiklat', TS_MM3: 'ကျိုက်လတ်' },
  ],
  MMR007D002: [
    { TS_PCODE: 'MMR007009', TS: 'Taungoo', TS_MM3: 'တောင်ငူ' },
    { TS_PCODE: 'MMR007011', TS: 'Kyaukkyi', TS_MM3: 'ကျောက်ကြီး' },
    { TS_PCODE: 'MMR007013', TS: 'Oktwin', TS_MM3: 'အုတ်တွင်း' },
    { TS_PCODE: 'MMR007012', TS: 'Phyu', TS_MM3: 'ဖြူး' },
    {
      TS_PCODE: 'MMR007014',
      TS: 'Htantabin (Taungoo)',
      TS_MM3: 'ထန်းတပင် (တောင်ငူ)',
    },
    { TS_PCODE: 'MMR007010', TS: 'Yedashe', TS_MM3: 'ရေတာရှည်' },
  ],
  MMR008D001: [
    { TS_PCODE: 'MMR008003', TS: 'Padaung', TS_MM3: 'ပန်းတောင်း' },
    { TS_PCODE: 'MMR008005', TS: 'Thegon', TS_MM3: 'သဲကုန်း' },
    { TS_PCODE: 'MMR008002', TS: 'Paukkhaung', TS_MM3: 'ပေါက်ခေါင်း' },
    { TS_PCODE: 'MMR008006', TS: 'Shwedaung', TS_MM3: 'ရွှေတောင်' },
    { TS_PCODE: 'MMR008004', TS: 'Paungde', TS_MM3: 'ပေါင်းတည်' },
    { TS_PCODE: 'MMR008001', TS: 'Pyay', TS_MM3: 'ပြည်' },
  ],
  MMR013D002: [
    {
      TS_PCODE: 'MMR013020',
      TS: 'Dagon Myothit (East)',
      TS_MM3: 'ဒဂုံမြို့သစ် (အရှေ့ပိုင်း)',
    },
    { TS_PCODE: 'MMR013016', TS: 'Pazundaung', TS_MM3: 'ပုဇွန်တောင်' },
    { TS_PCODE: 'MMR013015', TS: 'Tamwe', TS_MM3: 'တာမွေ' },
    { TS_PCODE: 'MMR013011', TS: 'South Okkalapa', TS_MM3: 'တောင်ဥက္ကလာပ' },
    { TS_PCODE: 'MMR013009', TS: 'Thingangyun', TS_MM3: 'သင်္ဃန်းကျွန်း' },
    { TS_PCODE: 'MMR013010', TS: 'Yankin', TS_MM3: 'ရန်ကင်း' },
    { TS_PCODE: 'MMR013017', TS: 'Botahtaung', TS_MM3: 'ဗိုလ်တထောင်' },
    {
      TS_PCODE: 'MMR013022',
      TS: 'Mingalartaungnyunt',
      TS_MM3: 'မင်္ဂလာတောင်ညွန့်',
    },
    { TS_PCODE: 'MMR013014', TS: 'Dawbon', TS_MM3: 'ဒေါပုံ' },
    { TS_PCODE: 'MMR013013', TS: 'Thaketa', TS_MM3: 'သာကေတ' },
    { TS_PCODE: 'MMR013012', TS: 'North Okkalapa', TS_MM3: 'မြောက်ဥက္ကလာပ' },
    {
      TS_PCODE: 'MMR013019',
      TS: 'Dagon Myothit (North)',
      TS_MM3: 'ဒဂုံမြို့သစ် (မြောက်ပိုင်း)',
    },
    {
      TS_PCODE: 'MMR013018',
      TS: 'Dagon Myothit (South)',
      TS_MM3: 'ဒဂုံမြို့သစ် (တောင်ပိုင်း)',
    },
    {
      TS_PCODE: 'MMR013021',
      TS: 'Dagon Myothit (Seikkan)',
      TS_MM3: 'ဒဂုံမြို့သစ် (ဆိပ်ကမ်း)',
    },
  ],
  MMR016D001: [
    { TS_PCODE: 'MMR016002', TS: 'Mongkhet', TS_MM3: 'မိုင်းခတ်' },
    { TS_PCODE: 'MMR016007', TS: 'Mongping', TS_MM3: 'မိုင်းပျဉ်း' },
    { TS_PCODE: 'MMR016001', TS: 'Kengtung', TS_MM3: 'ကျိုင်းတုံ' },
    { TS_PCODE: 'MMR016003', TS: 'Mongyang', TS_MM3: 'မိုင်းယန်း' },
    { TS_PCODE: 'MMR016005', TS: 'Mongla', TS_MM3: 'မိုင်းလား' },
  ],
  MMR005D001: [
    { TS_PCODE: 'MMR005001', TS: 'Sagaing', TS_MM3: 'စစ်ကိုင်း' },
    { TS_PCODE: 'MMR005002', TS: 'Myinmu', TS_MM3: 'မြင်းမူ' },
    { TS_PCODE: 'MMR005003', TS: 'Myaung', TS_MM3: 'မြောင်' },
  ],
  MMR011D001: [
    { TS_PCODE: 'MMR011003', TS: 'Chaungzon', TS_MM3: 'ချောင်းဆုံ' },
    { TS_PCODE: 'MMR011001', TS: 'Mawlamyine', TS_MM3: 'မော်လမြိုင်' },
    { TS_PCODE: 'MMR011004', TS: 'Thanbyuzayat', TS_MM3: 'သံဖြူဇရပ်' },
    { TS_PCODE: 'MMR011002', TS: 'Kyaikmaraw', TS_MM3: 'ကျိုက်မရော' },
    { TS_PCODE: 'MMR011005', TS: 'Mudon', TS_MM3: 'မုဒုံ' },
    { TS_PCODE: 'MMR011006', TS: 'Ye', TS_MM3: 'ရေး' },
  ],
  MMR011D002: [
    { TS_PCODE: 'MMR011010', TS: 'Bilin', TS_MM3: 'ဘီးလင်း' },
    { TS_PCODE: 'MMR011009', TS: 'Kyaikto', TS_MM3: 'ကျိုက်ထို' },
    { TS_PCODE: 'MMR011008', TS: 'Paung', TS_MM3: 'ပေါင်' },
    { TS_PCODE: 'MMR011007', TS: 'Thaton', TS_MM3: 'သထုံ' },
  ],
  MMR018D002: [
    { TS_PCODE: 'MMR018004', TS: 'Det Khi Na Thi Ri', TS_MM3: 'ဒက္ခိဏသီရိ' },
    { TS_PCODE: 'MMR018007', TS: 'Lewe', TS_MM3: 'လယ်ဝေး' },
    { TS_PCODE: 'MMR018006', TS: 'Pyinmana', TS_MM3: 'ပျဉ်းမနား' },
    { TS_PCODE: 'MMR018002', TS: 'Za Bu Thi Ri', TS_MM3: 'ဇမ္ဗူသီရိ' },
  ],
  MMR004D001: [
    { TS_PCODE: 'MMR004001', TS: 'Falam', TS_MM3: 'ဖလမ်း' },
    { TS_PCODE: 'MMR004004', TS: 'Tedim', TS_MM3: 'တီးတိန်' },
    { TS_PCODE: 'MMR004005', TS: 'Tonzang', TS_MM3: 'တွန်းဇန်' },
  ],
  MMR007D001: [
    { TS_PCODE: 'MMR007006', TS: 'Kyauktaga', TS_MM3: 'ကျောက်တံခါး' },
    { TS_PCODE: 'MMR007004', TS: 'Waw', TS_MM3: 'ဝေါ' },
    { TS_PCODE: 'MMR007005', TS: 'Nyaunglebin', TS_MM3: 'ညောင်လေးပင်' },
    { TS_PCODE: 'MMR007007', TS: 'Daik-U', TS_MM3: 'ဒိုက်ဦး' },
    { TS_PCODE: 'MMR007008', TS: 'Shwegyin', TS_MM3: 'ရွှေကျင်' },
    { TS_PCODE: 'MMR007003', TS: 'Kawa', TS_MM3: 'ကဝ' },
    { TS_PCODE: 'MMR007002', TS: 'Thanatpin', TS_MM3: 'သနပ်ပင်' },
    { TS_PCODE: 'MMR007001', TS: 'Bago', TS_MM3: 'ပဲခူး' },
  ],
  MMR010D007: [
    { TS_PCODE: 'MMR010031', TS: 'Wundwin', TS_MM3: 'ဝမ်းတွင်း' },
    { TS_PCODE: 'MMR010029', TS: 'Mahlaing', TS_MM3: 'မလှိုင်' },
    { TS_PCODE: 'MMR010030', TS: 'Thazi', TS_MM3: 'သာစည်' },
    { TS_PCODE: 'MMR010028', TS: 'Meiktila', TS_MM3: 'မိတ္ထီလာ' },
  ],
  MMR004D002: [
    { TS_PCODE: 'MMR004007', TS: 'Matupi', TS_MM3: 'မတူပီ' },
    { TS_PCODE: 'MMR004009', TS: 'Paletwa', TS_MM3: 'ပလက်ဝ' },
    { TS_PCODE: 'MMR004006', TS: 'Mindat', TS_MM3: 'မင်းတပ်' },
    { TS_PCODE: 'MMR004008', TS: 'Kanpetlet', TS_MM3: 'ကန်ပက်လက်' },
  ],
  MMR013D003: [
    { TS_PCODE: 'MMR013030', TS: 'Dala', TS_MM3: 'ဒလ' },
    {
      TS_PCODE: 'MMR013031',
      TS: 'Seikgyikanaungto',
      TS_MM3: 'ဆိပ်ကြီး/ခနောင်တို',
    },
    { TS_PCODE: 'MMR013024', TS: 'Kyauktan', TS_MM3: 'ကျောက်တန်း' },
    { TS_PCODE: 'MMR013029', TS: 'Kungyangon', TS_MM3: 'ကွမ်းခြံကုန်း' },
    { TS_PCODE: 'MMR013027', TS: 'Twantay', TS_MM3: 'တွံတေး' },
    { TS_PCODE: 'MMR013028', TS: 'Kawhmu', TS_MM3: 'ကော့မှူး' },
    { TS_PCODE: 'MMR013025', TS: 'Thongwa', TS_MM3: 'သုံးခွ' },
    { TS_PCODE: 'MMR013023', TS: 'Thanlyin', TS_MM3: 'သန်လျင်' },
    { TS_PCODE: 'MMR013026', TS: 'Kayan', TS_MM3: 'ခရမ်း' },
    { TS_PCODE: 'MMR013032', TS: 'Cocokyun', TS_MM3: 'ကိုကိုးကျွန်း' },
  ],
  MMR009D004: [
    { TS_PCODE: 'MMR009019', TS: 'Yesagyo', TS_MM3: 'ရေစကြို' },
    { TS_PCODE: 'MMR009020', TS: 'Myaing', TS_MM3: 'မြိုင်' },
    { TS_PCODE: 'MMR009022', TS: 'Seikphyu', TS_MM3: 'ဆိပ်ဖြူ' },
    { TS_PCODE: 'MMR009018', TS: 'Pakokku', TS_MM3: 'ပခုက္ကူ' },
    { TS_PCODE: 'MMR009021', TS: 'Pauk', TS_MM3: 'ပေါက်' },
  ],
  MMR013D001: [
    { TS_PCODE: 'MMR013001', TS: 'Insein', TS_MM3: 'အင်းစိန်' },
    { TS_PCODE: 'MMR013007', TS: 'Shwepyithar', TS_MM3: 'ရွှေပြည်သာ' },
    {
      TS_PCODE: 'MMR013046',
      TS: 'Hlaingtharya (East)',
      TS_MM3: 'လှိုင်သာယာ (အရှေ့ပိုင်း)',
    },
    {
      TS_PCODE: 'MMR013047',
      TS: 'Hlaingtharya (West)',
      TS_MM3: 'လှိုင်သာယာ (အနောက်ပိုင်း)',
    },
    { TS_PCODE: 'MMR013002', TS: 'Mingaladon', TS_MM3: 'မင်္ဂလာဒုံ' },
    { TS_PCODE: 'MMR013004', TS: 'Hlegu', TS_MM3: 'လှည်းကူး' },
    { TS_PCODE: 'MMR013005', TS: 'Taikkyi', TS_MM3: 'တိုက်ကြီး' },
    {
      TS_PCODE: 'MMR013006',
      TS: 'Htantabin (Yangon)',
      TS_MM3: 'ထန်းတပင် (ရန်ကုန်)',
    },
    { TS_PCODE: 'MMR013003', TS: 'Hmawbi', TS_MM3: 'မှော်ဘီ' },
  ],
  MMR003D001: [
    { TS_PCODE: 'MMR003001', TS: 'Hpa-An', TS_MM3: 'ဘားအံ' },
    { TS_PCODE: 'MMR003002', TS: 'Hlaingbwe', TS_MM3: 'လှိုင်းဘွဲ့' },
    { TS_PCODE: 'MMR003004', TS: 'Thandaunggyi', TS_MM3: 'သံတောင်ကြီး' },
  ],
  MMR002D001: [
    { TS_PCODE: 'MMR002004', TS: 'Shadaw', TS_MM3: 'ရှားတော' },
    { TS_PCODE: 'MMR002003', TS: 'Hpruso', TS_MM3: 'ဖရူဆို' },
    { TS_PCODE: 'MMR002001', TS: 'Loikaw', TS_MM3: 'လွိုင်ကော်' },
    { TS_PCODE: 'MMR002002', TS: 'Demoso', TS_MM3: 'ဒီးမော့ဆို' },
  ],
  MMR005D003: [
    { TS_PCODE: 'MMR005013', TS: 'Budalin', TS_MM3: 'ဘုတလင်' },
    { TS_PCODE: 'MMR005015', TS: 'Chaung-U', TS_MM3: 'ချောင်းဦး' },
    { TS_PCODE: 'MMR005014', TS: 'Ayadaw', TS_MM3: 'အရာတော်' },
    { TS_PCODE: 'MMR005012', TS: 'Monywa', TS_MM3: 'မုံရွာ' },
  ],
  MMR017D003: [
    { TS_PCODE: 'MMR017015', TS: 'Einme', TS_MM3: 'အိမ်မဲ' },
    { TS_PCODE: 'MMR017017', TS: 'Wakema', TS_MM3: 'ဝါးခယ်မ' },
    { TS_PCODE: 'MMR017014', TS: 'Myaungmya', TS_MM3: 'မြောင်းမြ' },
  ],
  MMR001D003: [
    { TS_PCODE: 'MMR001013', TS: 'Mansi', TS_MM3: 'မံစီ' },
    { TS_PCODE: 'MMR001012', TS: 'Momauk', TS_MM3: 'မိုးမောက်' },
    { TS_PCODE: 'MMR001011', TS: 'Shwegu', TS_MM3: 'ရွှေကူ' },
    { TS_PCODE: 'MMR001010', TS: 'Bhamo', TS_MM3: 'ဗန်းမော်' },
  ],
  MMR001D002: [
    { TS_PCODE: 'MMR001008', TS: 'Mogaung', TS_MM3: 'မိုးကောင်း' },
    { TS_PCODE: 'MMR001007', TS: 'Mohnyin', TS_MM3: 'မိုးညှင်း' },
    { TS_PCODE: 'MMR001009', TS: 'Hpakant', TS_MM3: 'ဖားကန့်' },
  ],
  MMR008D002: [
    { TS_PCODE: 'MMR008007', TS: 'Thayarwady', TS_MM3: 'သာယာဝတီ' },
    { TS_PCODE: 'MMR008008', TS: 'Letpadan', TS_MM3: 'လက်ပံတန်း' },
    {
      TS_PCODE: 'MMR008009',
      TS: 'Minhla (Thayarwady)',
      TS_MM3: 'မင်းလှ (သာယာဝတီ)',
    },
    { TS_PCODE: 'MMR008010', TS: 'Okpho', TS_MM3: 'အုတ်ဖို' },
    { TS_PCODE: 'MMR008014', TS: 'Gyobingauk', TS_MM3: 'ကြို့ပင်ကောက်' },
    { TS_PCODE: 'MMR008013', TS: 'Monyo', TS_MM3: 'မိုးညို' },
    { TS_PCODE: 'MMR008012', TS: 'Nattalin', TS_MM3: 'နတ်တလင်း' },
    { TS_PCODE: 'MMR008011', TS: 'Zigon', TS_MM3: 'ဇီးကုန်း' },
  ],
  MMR001D004: [
    { TS_PCODE: 'MMR001016', TS: 'Machanbaw', TS_MM3: 'မချမ်းဘော' },
    { TS_PCODE: 'MMR001015', TS: 'Sumprabum', TS_MM3: 'ဆွမ်ပရာဘွမ်' },
    { TS_PCODE: 'MMR001017', TS: 'Nawngmun', TS_MM3: 'နောင်မွန်း' },
    { TS_PCODE: 'MMR001014', TS: 'Puta-O', TS_MM3: 'ပူတာအို' },
    { TS_PCODE: 'MMR001018', TS: 'Khaunglanhpu', TS_MM3: 'ခေါင်လန်ဖူး' },
  ],
  MMR003D003: [
    { TS_PCODE: 'MMR003007', TS: 'Kyainseikgyi', TS_MM3: 'ကြာအင်းဆိပ်ကြီး' },
    { TS_PCODE: 'MMR003006', TS: 'Kawkareik', TS_MM3: 'ကော့ကရိတ်' },
  ],
  MMR002D002: [
    { TS_PCODE: 'MMR002006', TS: 'Hpasawng', TS_MM3: 'ဖားဆောင်း' },
    { TS_PCODE: 'MMR002007', TS: 'Mese', TS_MM3: 'မယ်စဲ' },
    { TS_PCODE: 'MMR002005', TS: 'Bawlake', TS_MM3: 'ဘောလခဲ' },
  ],
  MMR010D005: [
    { TS_PCODE: 'MMR010020', TS: 'Kyaukpadaung', TS_MM3: 'ကျောက်ပန်းတောင်း' },
    { TS_PCODE: 'MMR010022', TS: 'Nyaung-U', TS_MM3: 'ညောင်ဦး' },
  ],
  MMR010D003: [
    { TS_PCODE: 'MMR010015', TS: 'Myittha', TS_MM3: 'မြစ်သား' },
    { TS_PCODE: 'MMR010013', TS: 'Kyaukse', TS_MM3: 'ကျောက်ဆည်' },
    { TS_PCODE: 'MMR010016', TS: 'Tada-U', TS_MM3: 'တံတားဦး' },
    { TS_PCODE: 'MMR010014', TS: 'Sintgaing', TS_MM3: 'စဉ့်ကိုင်' },
  ],
  MMR010D002: [
    { TS_PCODE: 'MMR010009', TS: 'Madaya', TS_MM3: 'မတ္တရာ' },
    { TS_PCODE: 'MMR010010', TS: 'Singu', TS_MM3: 'စဉ့်ကူး' },
    { TS_PCODE: 'MMR010008', TS: 'Pyinoolwin', TS_MM3: 'ပြင်ဦးလွင်' },
    { TS_PCODE: 'MMR010012', TS: 'Thabeikkyin', TS_MM3: 'သပိတ်ကျင်း' },
    { TS_PCODE: 'MMR010011', TS: 'Mogoke', TS_MM3: 'မိုးကုတ်' },
  ],
  MMR010D004: [
    { TS_PCODE: 'MMR010017', TS: 'Myingyan', TS_MM3: 'မြင်းခြံ' },
    { TS_PCODE: 'MMR010019', TS: 'Natogyi', TS_MM3: 'နွားထိုးကြီး' },
    { TS_PCODE: 'MMR010021', TS: 'Ngazun', TS_MM3: 'ငါန်းဇွန်' },
    { TS_PCODE: 'MMR010018', TS: 'Taungtha', TS_MM3: 'တောင်သာ' },
  ],
  MMR010D006: [
    { TS_PCODE: 'MMR010024', TS: 'Pyawbwe', TS_MM3: 'ပျော်ဘွယ်' },
    { TS_PCODE: 'MMR010023', TS: 'Yamethin', TS_MM3: 'ရမည်းသင်း' },
  ],
  MMR018D001: [
    { TS_PCODE: 'MMR018003', TS: 'Tatkon', TS_MM3: 'တပ်ကုန်း' },
    { TS_PCODE: 'MMR018001', TS: 'Zay Yar Thi Ri', TS_MM3: 'ဇေယျာသီရိ' },
    { TS_PCODE: 'MMR018008', TS: 'Oke Ta Ra Thi Ri', TS_MM3: 'ဥတ္တရသီရိ' },
    { TS_PCODE: 'MMR018005', TS: 'Poke Ba Thi Ri', TS_MM3: 'ပုဗ္ဗသီရိ' },
  ],
  MMR014S002: [
    { TS_PCODE: 'MMR014009', TS: 'Pinlaung', TS_MM3: 'ပင်လောင်း' },
    { TS_PCODE: 'MMR014004', TS: 'Hsihseng', TS_MM3: 'ဆီဆိုင်' },
    { TS_PCODE: 'MMR014003', TS: 'Hopong', TS_MM3: 'ဟိုပုံး' },
  ],
  MMR016D002: [
    { TS_PCODE: 'MMR016006', TS: 'Monghsat', TS_MM3: 'မိုင်းဆတ်' },
    { TS_PCODE: 'MMR016008', TS: 'Mongton', TS_MM3: 'မိုင်းတုံ' },
  ],
  MMR014D001: [
    { TS_PCODE: 'MMR014001', TS: 'Taunggyi', TS_MM3: 'တောင်ကြီး' },
    { TS_PCODE: 'MMR014010', TS: 'Pekon', TS_MM3: 'ဖယ်ခုံ' },
    { TS_PCODE: 'MMR014002', TS: 'Nyaungshwe', TS_MM3: 'ညောင်ရွှေ' },
    { TS_PCODE: 'MMR014005', TS: 'Kalaw', TS_MM3: 'ကလော' },
    { TS_PCODE: 'MMR014008', TS: 'Lawksawk', TS_MM3: 'ရပ်စောက်' },
  ],
  MMR016D003: [
    { TS_PCODE: 'MMR016009', TS: 'Tachileik', TS_MM3: 'တာချီလိတ်' },
    { TS_PCODE: 'MMR016010', TS: 'Monghpyak', TS_MM3: 'မိုင်းဖြတ်' },
    { TS_PCODE: 'MMR016011', TS: 'Mongyawng', TS_MM3: 'မိုင်းယောင်း' },
  ],
  MMR015D003: [
    { TS_PCODE: 'MMR015013', TS: 'Nawnghkio', TS_MM3: 'နောင်ချို' },
    { TS_PCODE: 'MMR015012', TS: 'Kyaukme', TS_MM3: 'ကျောက်မဲ' },
    { TS_PCODE: 'MMR015014', TS: 'Hsipaw', TS_MM3: 'သီပေါ' },
    { TS_PCODE: 'MMR015015', TS: 'Namtu', TS_MM3: 'နမ္မတူ' },
  ],
  MMR015D007: [
    { TS_PCODE: 'MMR015005', TS: 'Pangsang', TS_MM3: 'ပန်ဆန်း (ပန်ခမ်း)' },
    { TS_PCODE: 'MMR015024', TS: 'Matman', TS_MM3: 'မက်မန်း' },
    { TS_PCODE: 'MMR015006', TS: 'Narphan', TS_MM3: 'နားဖန်း' },
  ],
  MMR014S001: [
    { TS_PCODE: 'MMR014007', TS: 'Ywangan', TS_MM3: 'ရွာငံ' },
    { TS_PCODE: 'MMR014006', TS: 'Pindaya', TS_MM3: 'ပင်းတယ' },
  ],
  MMR015D006: [
    { TS_PCODE: 'MMR015008', TS: 'Mongmao', TS_MM3: 'မိုင်းမော' },
    { TS_PCODE: 'MMR015007', TS: 'Pangwaun', TS_MM3: 'ပန်ဝိုင်' },
    { TS_PCODE: 'MMR015021', TS: 'Hopang', TS_MM3: 'ဟိုပန်' },
  ],
  MMR015S001: [
    { TS_PCODE: 'MMR015016', TS: 'Namhsan', TS_MM3: 'နမ့်ဆန်' },
    { TS_PCODE: 'MMR015019', TS: 'Manton', TS_MM3: 'မန်တုံ' },
  ],
  MMR015D002: [
    { TS_PCODE: 'MMR015010', TS: 'Namhkan', TS_MM3: 'နမ့်ခမ်း' },
    { TS_PCODE: 'MMR015011', TS: 'Kutkai', TS_MM3: 'ကွတ်ခိုင်' },
    { TS_PCODE: 'MMR015009', TS: 'Muse', TS_MM3: 'မူဆယ်' },
  ],
  MMR015S002: [
    { TS_PCODE: 'MMR015022', TS: 'Laukkaing', TS_MM3: 'လောက်ကိုင်' },
    { TS_PCODE: 'MMR015023', TS: 'Konkyan', TS_MM3: 'ကုန်းကြမ်း' },
  ],
  MMR003D002: [{ TS_PCODE: 'MMR003005', TS: 'Myawaddy', TS_MM3: 'မြဝတီ' }],
  MMR003D004: [{ TS_PCODE: 'MMR003003', TS: 'Hpapun', TS_MM3: 'ဖာပွန်' }],
  MMR005D010: [
    { TS_PCODE: 'MMR005007', TS: 'Kanbalu', TS_MM3: 'ကန့်ဘလူ' },
    { TS_PCODE: 'MMR005008', TS: 'Kyunhla', TS_MM3: 'ကျွန်းလှ' },
  ],
  MMR005D007: [
    { TS_PCODE: 'MMR005032', TS: 'Paungbyin', TS_MM3: 'ဖောင်းပြင်' },
    { TS_PCODE: 'MMR005031', TS: 'Mawlaik', TS_MM3: 'မော်လိုက်' },
  ],
  MMR005D008: [
    { TS_PCODE: 'MMR005033', TS: 'Hkamti', TS_MM3: 'ခန္တီး' },
    { TS_PCODE: 'MMR005034', TS: 'Homalin', TS_MM3: 'ဟုမ္မလင်း' },
  ],
  MMR005S001: [
    { TS_PCODE: 'MMR005036', TS: 'Lahe', TS_MM3: 'လဟယ်' },
    { TS_PCODE: 'MMR005037', TS: 'Nanyun', TS_MM3: 'နန်းယွန်း' },
    { TS_PCODE: 'MMR005035', TS: 'Lay Shi', TS_MM3: 'လေရှီး' },
  ],
  MMR005D002: [
    { TS_PCODE: 'MMR005010', TS: 'Tabayin', TS_MM3: 'ဒီပဲယင်း' },
    { TS_PCODE: 'MMR005006', TS: 'Wetlet', TS_MM3: 'ဝက်လက်' },
    { TS_PCODE: 'MMR005004', TS: 'Shwebo', TS_MM3: 'ရွှေဘို' },
    { TS_PCODE: 'MMR005009', TS: 'Ye-U', TS_MM3: 'ရေဦး' },
    { TS_PCODE: 'MMR005005', TS: 'Khin-U', TS_MM3: 'ခင်ဦး' },
    { TS_PCODE: 'MMR005011', TS: 'Taze', TS_MM3: 'တန့်ဆည်' },
  ],
  MMR005D009: [
    { TS_PCODE: 'MMR005018', TS: 'Salingyi', TS_MM3: 'ဆားလင်းကြီး' },
    { TS_PCODE: 'MMR005019', TS: 'Pale', TS_MM3: 'ပုလဲ' },
    { TS_PCODE: 'MMR005017', TS: 'Kani', TS_MM3: 'ကနီ' },
    { TS_PCODE: 'MMR005016', TS: 'Yinmarbin', TS_MM3: 'ယင်းမာပင်' },
  ],
  MMR005D004: [
    { TS_PCODE: 'MMR005020', TS: 'Katha', TS_MM3: 'ကသာ' },
    { TS_PCODE: 'MMR005022', TS: 'Tigyaing', TS_MM3: 'ထီးချိုင့်' },
    { TS_PCODE: 'MMR005021', TS: 'Indaw', TS_MM3: 'အင်းတော်' },
    { TS_PCODE: 'MMR005023', TS: 'Banmauk', TS_MM3: 'ဗန်းမောက်' },
  ],
  MMR005D005: [
    { TS_PCODE: 'MMR005029', TS: 'Mingin', TS_MM3: 'မင်းကင်း' },
    { TS_PCODE: 'MMR005027', TS: 'Kale', TS_MM3: 'ကလေး' },
    { TS_PCODE: 'MMR005028', TS: 'Kalewa', TS_MM3: 'ကလေးဝ' },
  ],
  MMR005D011: [
    { TS_PCODE: 'MMR005026', TS: 'Pinlebu', TS_MM3: 'ပင်လည်ဘူး' },
    { TS_PCODE: 'MMR005024', TS: 'Kawlin', TS_MM3: 'ကောလင်း' },
    { TS_PCODE: 'MMR005025', TS: 'Wuntho', TS_MM3: 'ဝန်းသို' },
  ],
  MMR005D006: [{ TS_PCODE: 'MMR005030', TS: 'Tamu', TS_MM3: 'တမူး' }],
  MMR004D003: [
    { TS_PCODE: 'MMR004003', TS: 'Thantlang', TS_MM3: 'ထန်တလန်' },
    { TS_PCODE: 'MMR004002', TS: 'Hakha', TS_MM3: 'ဟားခါး' },
  ],
  MMR010D001: [
    { TS_PCODE: 'MMR010006', TS: 'Amarapura', TS_MM3: 'အမရပူရ' },
    { TS_PCODE: 'MMR010001', TS: 'Aungmyaythazan', TS_MM3: 'အောင်မြေသာစံ' },
    { TS_PCODE: 'MMR010002', TS: 'Chanayethazan', TS_MM3: 'ချမ်းအေးသာစံ' },
    { TS_PCODE: 'MMR010007', TS: 'Patheingyi', TS_MM3: 'ပုသိမ်ကြီး' },
    { TS_PCODE: 'MMR010004', TS: 'Chanmyathazi', TS_MM3: 'ချမ်းမြသာစည်' },
    { TS_PCODE: 'MMR010003', TS: 'Mahaaungmyay', TS_MM3: 'မဟာအောင်မြေ' },
    { TS_PCODE: 'MMR010005', TS: 'Pyigyitagon', TS_MM3: 'ပြည်ကြီးတံခွန်' },
  ],
};

// /**
//  * Get formatted string in the format TS_MM3 - DT_MM3 - SR_MM3
//  * @param {string} tsPCode - The TS_PCODE of the township
//  * @returns {string} - Formatted string or an error message if not found
//  */
// const getFormattedLocation = (tsPCode: string) => {
//   for (const [districtPCode, townshipList] of Object.entries(townships)) {
//     const township = townshipList.find((ts) => ts.TS_PCODE === tsPCode);
//     if (township) {
//       const district = Object.entries(districts).find(([_, districtList]) =>
//         districtList.some((dt) => dt.DT_PCODE === districtPCode)
//       );
//       if (district) {
//         const [statePCode, districtList] = district;
//         const state = statesRegions.find((sr) => sr.SR_PCODE === statePCode);
//         if (state) {
//           const dt = districtList.find((d) => d.DT_PCODE === districtPCode);
//           return `${township.TS_MM3} မြို့နယ်၊ ${dt.DT_MM3} ခရိုင်၊ ${state.SR_MM3}။`;
//         }
//       }
//     }
//   }
//   return 'Location not found';
// };

/**
 * Get formatted string in the format TS_MM3 - DT_MM3 - SR_MM3
 * @param {string} tsPCode - The TS_PCODE of the township
 * @returns {string} - Formatted string or an error message if not found
 */
const getFormattedLocation = (tsPCode: string): string => {
  for (const [districtPCode, townshipList] of Object.entries(townships)) {
    const township = townshipList.find((ts) => ts.TS_PCODE === tsPCode);
    if (township) {
      const district = Object.entries(districts).find(([, districtList]) =>
        districtList.some((dt) => dt.DT_PCODE === districtPCode)
      );
      if (district) {
        const [statePCode, districtList] = district;
        const dt = districtList.find((d) => d.DT_PCODE === districtPCode);
        if (dt) {
          const state = statesRegions.find((sr) => sr.SR_PCODE === statePCode);
          if (state) {
            return `${township.TS_MM3}မြို့နယ်၊ ${dt.DT_MM3}၊ ${state.SR_MM3}။`;
          } else {
            return 'State/Region not found';
          }
        } else {
          return 'District not found';
        }
      }
    }
  }
  return 'Location not found';
};

const getLocationDetails = (tsPCode: string) => {
  for (const [districtPCode, townshipList] of Object.entries(townships)) {
    const township = townshipList.find((ts) => ts.TS_PCODE === tsPCode);
    if (township) {
      const district = Object.entries(districts).find(([, districtList]) =>
        districtList.some((dt) => dt.DT_PCODE === districtPCode)
      );
      if (district) {
        const [statePCode, districtList] = district;
        const dt = districtList.find((d) => d.DT_PCODE === districtPCode);
        if (dt) {
          const state = statesRegions.find((sr) => sr.SR_PCODE === statePCode);
          return {
            township: township.TS_MM3 || null,
            district: dt?.DT_MM3 || null,
            state: state?.SR_MM3 || null,
          };
        } else {
          return {
            township: township.TS_MM3 || null,
            district: null,
            state: null,
          };
        }
      }
    }
  }
  return { township: null, district: null, state: null }; // Default if not found
};

export { statesRegions, districts, townships, getFormattedLocation, getLocationDetails };
