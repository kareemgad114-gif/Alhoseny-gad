(function(){
  var translations = {
    en: {
      brand: "Al-Hosseiny",
      "nav.home":"Home","nav.about":"About","nav.resume":"Resume","nav.skills":"Skills",
      "nav.certificates":"Certificates","nav.projects":"More","nav.contact":"Contact",
      "nav.cta":"WhatsApp","nav.menu":"Menu","nav.top":"Back to top",
      "lang.aria":"Toggle language","theme.aria":"Toggle theme",

      "hero.eyebrow":"I am Al-Hosseiny",
      "hero.title1":"Software Engineer",
      "hero.title2":"Flutter & Embedded",
      "hero.tagline":"Software engineering graduate (2026) focused on building mobile apps with Flutter and working close to hardware with C and embedded systems. Comfortable moving between a phone screen and a circuit board.",
      "hero.cta1":"View certificates",
      "hero.cta2":"Get in touch",
      "hero.cta3":"Download Resume / CV",
      "hero.location":"El-Minya, Egypt",
      "hero.gradyear":"Class of 2026",
      "hero.chip1":"Flutter Developer",
      "hero.chip2":"Embedded Systems",
      "hero.photoAlt":"Al-Hosseiny Gad Abbas Ezz El-Arab, Software Engineer",

      "stat.age":"Years old","stat.grad":"Class of","stat.certs":"Certificates","stat.hours":"Training hours",

      "about.title1":"What I","about.title2":"Do",
      "about.sub":"I'm a software engineer from El-Minya, Egypt, working between mobile interfaces and the hardware underneath them.",
      "about.p1":"I'm a software engineer based in El-Minya, Egypt. I graduated in 2026 with a professional bachelor's degree in technology, specialising in Software Engineering.",
      "about.p2":"My hands-on focus sits where mobile development meets embedded hardware: I build interfaces in Flutter, then wire them to the C code running on the device itself. I work just as comfortably in C++, Java and the core web stack — HTML, CSS and JavaScript.",
      "do.1.title":"Mobile Development",
      "do.1.body":"I build cross-platform mobile apps with Flutter and Dart — from layout and state to talking to a real backend.",
      "do.2.title":"Embedded Systems & IoT",
      "do.2.body":"I work close to the hardware in C: microcontrollers, sensors, and the logic that runs on the device itself.",
      "do.3.title":"Programming Languages",
      "do.3.body":"I solve problems with object-oriented fundamentals in C++ and Java, backed by formal training.",
      "do.4.title":"Web Development",
      "do.4.body":"I use the core web stack — semantic HTML, modern CSS and vanilla JavaScript — to build responsive, accessible interfaces.",

      "resume.edu1":"My","resume.edu2":"Education",
      "resume.tr1":"My","resume.tr2":"Training",
      "edu.date":"2026",
      "education.degree":"Professional Bachelor's Degree in Technology",
      "education.uni":"New Assiut Technological University",
      "education.facultyLabel":"Faculty:","education.faculty":"Industrial and Energy Technology",
      "education.deptLabel":"Department:","education.dept":"Information Technology",
      "education.trackLabel":"Specialization:","education.track":"Software Engineering",
      "education.gradeline":"Graduated 2026 — Grade: Good (74.5%)",
      "tr.nodate":"Diploma",
      "tr.hcia.org":"Huawei Talent",
      "tr.ai.org":"NTI · Huawei Egyptian Talent Academy — 80 hrs",
      "tr.java.org":"Information Technology Institute (ITI) — 30 hrs",
      "tr.ccna.org":"WE Telecom Egypt",
      "tr.flutter.org":"Route IT Training Center — 120 hrs",

      "skills.title1":"My","skills.title2":"Skills",
      "skills.embeddedSystems":"Embedded Systems",
      "skills.lvl.verygood":"Very good","skills.lvl.good":"Good",

      "certs.title1":"My","certs.title2":"Certificates",
      "certs.item.grad.title":"Graduation Certificate",
      "certs.item.grad.meta":"New Assiut Technological University, 2026 - Grade: Good (74.5%)",
      "certs.item.grad.alt":"Graduation certificate from New Assiut Technological University, Faculty of Industrial and Energy Technology",
      "certs.sub":"My degree and training certificates. Open any card to view the full certificate.",
      "certs.hint":"Click to enlarge",
      "certs.close":"Close",
      "certs.item.flutter.title":"Flutter Development Diploma",
      "certs.item.flutter.meta":"Route IT Training Center · 120 hrs",
      "certs.item.flutter.alt":"Flutter development diploma certificate from Route IT Training Center",
      "certs.item.ai.title":"Artificial Intelligence (AI)",
      "certs.item.ai.meta":"NTI · Huawei Egyptian Talent Academy · 80 hrs · 2025",
      "certs.item.ai.alt":"Artificial Intelligence track certificate from NTI and the Huawei Egyptian Talent Academy",
      "certs.item.hcia.title":"HCIA-AI V3.5",
      "certs.item.hcia.meta":"Huawei Talent · 2025",
      "certs.item.hcia.alt":"HCIA-AI V3.5 certificate of completion from Huawei Talent",
      "certs.item.java.title":"Introduction to Programming using Java",
      "certs.item.java.meta":"Information Technology Institute (ITI) · 30 hrs · 2024",
      "certs.item.java.alt":"Introduction to Programming using Java certificate from the Information Technology Institute",
      "certs.item.ccna.title":"Cisco CCNA",
      "certs.item.ccna.meta":"WE Telecom Egypt · 2023",
      "certs.item.ccna.alt":"Cisco CCNA training course certificate from WE Telecom Egypt",

      "nav.graduation":"Project",
      "grad.title1":"Graduation","grad.title2":"Project",
      "grad.sub":"The capstone project for my degree \u2014 and the part of it I built.",
      "grad.kicker":"IoT precision-agriculture platform \u00b7 Graduation project, 2026",
      "grad.grade":"Project grade: Excellent",
      "grad.role":"My role: Flutter app",
      "grad.p1":"Smart Farming monitors a real farm through four field sensors \u2014 soil temperature, soil moisture, air temperature and air humidity \u2014 and turns those readings into decisions a farmer can act on. Sensor logs land in Firebase Firestore, and the app reads them live.",
      "grad.p2":"I built the Flutter mobile application: the full interface, the Firestore data layer, the live dashboard and charts, remote pump control, the alert system, and the screens that present the machine-learning output \u2014 a Random Forest model that recommends a crop and scores plant-disease risk. The app ships bilingual (Arabic / English) with a dark mode.",
      "grad.stack":"Built with",
      "grad.screens":"Inside the app",
      "grad.screensHint":"Tap any screen to view it full size.",
      "feat.live.title":"Live sensor dashboard",
      "feat.live.body":"Four field sensors \u2014 soil temperature and moisture, air temperature and humidity \u2014 read live from Firestore, each with its own status indicator and ideal range.",
      "feat.pump.title":"Remote pump control",
      "feat.pump.body":"Switch the irrigation pump on or off from the phone, with its current state shown on the dashboard.",
      "feat.history.title":"History and reports",
      "feat.history.body":"A time-series chart per sensor with max, min and average, plus a day-by-day report sheet covering the last 15 days.",
      "feat.weather.title":"Weather forecast",
      "feat.weather.body":"Current conditions for the farm location and a five-day outlook, sitting next to the sensor data.",
      "feat.ai.title":"AI crop and disease insights",
      "feat.ai.body":"Screens for a Random Forest model: a crop recommendation with match confidence and feature weights, and a plant-disease risk monitor with a 14-day forecast.",
      "feat.alerts.title":"Threshold alerts",
      "feat.alerts.body":"Notifications when a reading leaves its recommended range, filterable by unread and critical.",
      "shot.home":"Dashboard",
      "shot.home.alt":"Smart Farming dashboard with four live sensor cards and the pump control",
      "shot.sensor":"Sensor detail",
      "shot.sensor.alt":"Soil temperature detail screen with a circular gauge, ideal range and live reading",
      "shot.history":"History chart",
      "shot.history.alt":"Soil temperature history chart with max, min and average values",
      "shot.report":"Daily report",
      "shot.report.alt":"Daily sensor report listing average, minimum and maximum per day",
      "shot.weather":"Weather",
      "shot.weather.alt":"Weather tab showing current conditions and a five-day forecast",
      "shot.crop":"Crop recommendation",
      "shot.crop.alt":"AI crop recommendation with feature importance bars and match confidence",
      "shot.disease":"Disease risk",
      "shot.disease.alt":"Plant disease risk monitor with current risk, 14-day average and logged readings",
      "shot.alerts":"Alerts",
      "shot.alerts.alt":"Alerts screen with a critical soil moisture notification",
      "shot.settings":"Settings",
      "shot.settings.alt":"Settings screen with dark mode, Arabic and English language options and notifications",
      "projects.title1":"More","projects.title2":"Work",
      "projects.ph.title":"More projects coming soon",
      "projects.ph.body":"Real project write-ups — Flutter apps, embedded builds and web work — will be added here shortly.",

      "contact.title1":"Let's work","contact.title2":"together!",
      "contact.sub":"Just simple like that.",
      "contact.locLabel":"Location","contact.emailLabel":"Email","contact.phoneLabel":"Phone / WhatsApp",
      "contact.note":"Social links (LinkedIn, GitHub) will be added here once shared.",
      "form.name":"Your name","form.subject":"Subject","form.message":"Your message",
      "form.opt.job":"Job opportunity","form.opt.freelance":"Freelance project","form.opt.other":"Something else",
      "form.send":"Send via WhatsApp",
      "form.note":"This opens WhatsApp with your message ready to send — nothing is stored on this site.",
      "form.error":"Please add your name and a message first.",

      "footer.blurb":"I'm a software engineer working between Flutter interfaces and the embedded systems underneath them.",
      "footer.links":"Quick Links","footer.more":"More","footer.reach":"Reach out",
      "footer.rights":"© 2026 Al-Hosseiny Gad Abbas Ezz El-Arab",
      "footer.tag":"Software Engineer · Flutter · Embedded Systems"
    },
    ar: {
      brand: "الحسيني",
      "nav.home":"الرئيسية","nav.about":"نبذة","nav.resume":"السيرة","nav.skills":"المهارات",
      "nav.certificates":"الشهادات","nav.projects":"المزيد","nav.contact":"تواصل",
      "nav.cta":"واتساب","nav.menu":"القائمة","nav.top":"العودة لأعلى",
      "lang.aria":"تغيير اللغة","theme.aria":"تغيير المظهر",

      "hero.eyebrow":"أنا الحسيني",
      "hero.title1":"مهندس برمجيات",
      "hero.title2":"Flutter وأنظمة مدمجة",
      "hero.tagline":"خريج هندسة برمجيات (٢٠٢٦)، مهتم ببناء تطبيقات الموبايل باستخدام Flutter، والعمل بالقرب من الهاردوير باستخدام لغة C والأنظمة المدمجة. مرتاح في التنقل بين شاشة الموبايل ولوحة الدوائر الإلكترونية.",
      "hero.cta1":"عرض الشهادات",
      "hero.cta2":"تواصل معايا",
      "hero.cta3":"تحميل السيرة الذاتية",
      "hero.location":"المنيا، مصر",
      "hero.gradyear":"دفعة ٢٠٢٦",
      "hero.chip1":"مطوّر Flutter",
      "hero.chip2":"أنظمة مدمجة",
      "hero.photoAlt":"الحسيني جاد عباس عز العرب، مهندس برمجيات",

      "stat.age":"السن","stat.grad":"سنة التخرج","stat.certs":"شهادة","stat.hours":"ساعة تدريب",

      "about.title1":"اللي","about.title2":"بعمله",
      "about.sub":"أنا مهندس برمجيات من المنيا، بشتغل بين واجهات الموبايل والهاردوير اللي تحتها.",
      "about.p1":"أنا مهندس برمجيات من محافظة المنيا، اتخرجت في ٢٠٢٦ وحاصل على بكالوريوس مهني في التكنولوجيا، تخصص هندسة البرمجيات.",
      "about.p2":"تركيزي العملي بين تطوير تطبيقات الموبايل والهاردوير المدمج: ببني الواجهات بـ Flutter، وبعدين بربطها بكود C اللي شغال على الجهاز نفسه. وبشتغل كمان براحة في: C++، Java، وأساسيات الويب: HTML، CSS، JavaScript.",
      "do.1.title":"تطوير تطبيقات الموبايل",
      "do.1.body":"ببني تطبيقات موبايل تشتغل على أكتر من نظام بـ Flutter وDart — من تصميم الواجهة وإدارة الحالة لحد الربط بالـbackend.",
      "do.2.title":"الأنظمة المدمجة وإنترنت الأشياء",
      "do.2.body":"بشتغل قريب من الهاردوير بلغة C: متحكمات دقيقة، حساسات، والمنطق اللي بيشتغل على الجهاز نفسه.",
      "do.3.title":"لغات البرمجة",
      "do.3.body":"بحل المشكلات بأساسيات البرمجة الكائنية في C++ وJava، مدعوم بتدريب رسمي.",
      "do.4.title":"تطوير الويب",
      "do.4.body":"بستخدم أساسيات الويب — HTML وCSS الحديثة وJavaScript — عشان أبني واجهات متجاوبة وسهلة الوصول.",

      "resume.edu1":"مؤهلي","resume.edu2":"الدراسي",
      "resume.tr1":"دوراتي","resume.tr2":"التدريبية",
      "edu.date":"٢٠٢٦",
      "education.degree":"بكالوريوس مهني في التكنولوجيا",
      "education.uni":"جامعة أسيوط الجديدة التكنولوجية",
      "education.facultyLabel":"الكلية:","education.faculty":"تكنولوجيا الصناعة والطاقة",
      "education.deptLabel":"القسم:","education.dept":"تكنولوجيا المعلومات",
      "education.trackLabel":"التخصص:","education.track":"هندسة البرمجيات",
      "education.gradeline":"تخرجت ٢٠٢٦ — التقدير: جيد (٧٤٫٥٪)",
      "tr.nodate":"دبلومة",
      "tr.hcia.org":"Huawei Talent",
      "tr.ai.org":"NTI · أكاديمية هواوي المصرية للمواهب — ٨٠ ساعة",
      "tr.java.org":"معهد تكنولوجيا المعلومات (ITI) — ٣٠ ساعة",
      "tr.ccna.org":"WE المصرية للاتصالات",
      "tr.flutter.org":"Route IT Training Center — ١٢٠ ساعة",

      "skills.title1":"مهاراتي","skills.title2":"التقنية",
      "skills.embeddedSystems":"الأنظمة المدمجة",
      "skills.lvl.verygood":"جيد جدًا","skills.lvl.good":"جيد",

      "certs.title1":"شهاداتي","certs.title2":"المعتمدة",
      "certs.item.grad.title":"شهادة التخرج",
      "certs.item.grad.meta":"جامعة أسيوط الجديدة التكنولوجية، ٢٠٢٦ - تقدير جيد (٧٤٫٥٪)",
      "certs.item.grad.alt":"شهادة تخرج من جامعة أسيوط الجديدة التكنولوجية، كلية تكنولوجيا الصناعة والطاقة",
      "certs.sub":"شهادة تخرجي وشهاداتي التدريبية. افتح أي بطاقة لعرض الشهادة كاملة.",
      "certs.hint":"اضغط للتكبير",
      "certs.close":"إغلاق",
      "certs.item.flutter.title":"دبلومة تطوير تطبيقات Flutter",
      "certs.item.flutter.meta":"Route IT Training Center · ١٢٠ ساعة",
      "certs.item.flutter.alt":"شهادة دبلومة تطوير Flutter من مركز Route IT للتدريب",
      "certs.item.ai.title":"الذكاء الاصطناعي (AI)",
      "certs.item.ai.meta":"NTI · أكاديمية هواوي المصرية للمواهب · ٨٠ ساعة · ٢٠٢٥",
      "certs.item.ai.alt":"شهادة مسار الذكاء الاصطناعي من NTI وأكاديمية هواوي المصرية للمواهب",
      "certs.item.hcia.title":"HCIA-AI V3.5",
      "certs.item.hcia.meta":"Huawei Talent · ٢٠٢٥",
      "certs.item.hcia.alt":"شهادة إتمام HCIA-AI V3.5 من Huawei Talent",
      "certs.item.java.title":"مقدمة في البرمجة باستخدام Java",
      "certs.item.java.meta":"معهد تكنولوجيا المعلومات (ITI) · ٣٠ ساعة · ٢٠٢٤",
      "certs.item.java.alt":"شهادة مقدمة في البرمجة باستخدام Java من معهد تكنولوجيا المعلومات",
      "certs.item.ccna.title":"Cisco CCNA",
      "certs.item.ccna.meta":"WE المصرية للاتصالات · ٢٠٢٣",
      "certs.item.ccna.alt":"شهادة دورة Cisco CCNA التدريبية من WE المصرية للاتصالات",

      "nav.graduation":"المشروع",
      "grad.title1":"مشروع","grad.title2":"التخرج",
      "grad.sub":"مشروع تخرجي — والجزء اللي أنا عملته فيه.",
      "grad.kicker":"منصة زراعة ذكية بإنترنت الأشياء · مشروع تخرج ٢٠٢٦",
      "grad.grade":"تقدير المشروع: ممتاز",
      "grad.role":"دوري: تطبيق Flutter",
      "grad.p1":"تطبيق Smart Farming بيراقب مزرعة حقيقية من خلال أربع حساسات في الأرض — حرارة التربة، رطوبة التربة، حرارة الهواء، ورطوبة الهواء — ويحوّل القراءات دي لقرارات المزارع يقدر يتصرف على أساسها. قراءات الحساسات بتتخزن في Firebase Firestore، والتطبيق بيقراها لحظيًا.",
      "grad.p2":"أنا اللي عملت تطبيق الموبايل بـ Flutter: الواجهة كاملة، طبقة البيانات مع Firestore، لوحة المتابعة اللحظية والرسوم البيانية، التحكم في المضخة عن بُعد، نظام التنبيهات، والشاشات اللي بتعرض مخرجات نموذج التعلم الآلي — موديل Random Forest بيرشّح المحصول ويقيس خطر أمراض النبات. التطبيق شغال بالعربي والإنجليزي، وفيه وضع ليلي.",
      "grad.stack":"الأدوات",
      "grad.screens":"من جوه التطبيق",
      "grad.screensHint":"اضغط على أي شاشة لعرضها بالحجم الكامل.",
      "feat.live.title":"لوحة متابعة لحظية",
      "feat.live.body":"أربع حساسات في الأرض — حرارة ورطوبة التربة، وحرارة ورطوبة الهواء — بتتقرا لحظيًا من Firestore، وكل واحد ليه مؤشر حالة ومدى مثالي.",
      "feat.pump.title":"تحكم في المضخة عن بُعد",
      "feat.pump.body":"تشغيل وإطفاء مضخة الري من الموبايل، وحالتها الحالية ظاهرة في لوحة المتابعة.",
      "feat.history.title":"السجل والتقارير",
      "feat.history.body":"رسم بياني زمني لكل حساس بأعلى وأقل ومتوسط قراءة، وكمان تقرير يومي بيغطي آخر ١٥ يوم.",
      "feat.weather.title":"توقعات الطقس",
      "feat.weather.body":"حالة الطقس الحالية لموقع المزرعة وتوقعات خمس أيام، جنب بيانات الحساسات.",
      "feat.ai.title":"تحليلات الذكاء الاصطناعي",
      "feat.ai.body":"شاشات لموديل Random Forest: ترشيح المحصول بنسبة تطابق ووزن كل عامل، ومراقب لخطر أمراض النبات مع توقع ١٤ يوم.",
      "feat.alerts.title":"تنبيهات الحدود",
      "feat.alerts.body":"إشعارات لما أي قراءة تخرج عن المدى الموصى به، مع فلترة حسب غير المقروء والحرج.",
      "shot.home":"لوحة المتابعة",
      "shot.home.alt":"لوحة متابعة Smart Farming بأربع بطاقات حساسات لحظية والتحكم في المضخة",
      "shot.sensor":"تفاصيل الحساس",
      "shot.sensor.alt":"شاشة تفاصيل حرارة التربة بمؤشر دائري والمدى المثالي والقراءة اللحظية",
      "shot.history":"الرسم البياني",
      "shot.history.alt":"رسم بياني لسجل حرارة التربة بأعلى وأقل ومتوسط قراءة",
      "shot.report":"التقرير اليومي",
      "shot.report.alt":"تقرير يومي للحساسات بمتوسط وأقل وأعلى قراءة لكل يوم",
      "shot.weather":"الطقس",
      "shot.weather.alt":"تبويب الطقس بالحالة الحالية وتوقعات خمس أيام",
      "shot.crop":"ترشيح المحصول",
      "shot.crop.alt":"ترشيح المحصول بالذكاء الاصطناعي مع أوزان العوامل ونسبة التطابق",
      "shot.disease":"خطر الأمراض",
      "shot.disease.alt":"مراقب خطر أمراض النبات بالخطر الحالي ومتوسط ١٤ يوم والقراءات المسجلة",
      "shot.alerts":"التنبيهات",
      "shot.alerts.alt":"شاشة التنبيهات بإشعار حرج عن انخفاض رطوبة التربة",
      "shot.settings":"الإعدادات",
      "shot.settings.alt":"شاشة الإعدادات بالوضع الليلي وخيارات اللغة العربية والإنجليزية والإشعارات",
      "projects.title1":"أعمال","projects.title2":"أخرى",
      "projects.ph.title":"مشاريع تانية قريبًا",
      "projects.ph.body":"هيتم إضافة تفاصيل مشاريع حقيقية هنا — تطبيقات Flutter، أنظمة مدمجة، وأعمال ويب.",

      "contact.title1":"يلا نشتغل","contact.title2":"مع بعض!",
      "contact.sub":"بكل بساطة كده.",
      "contact.locLabel":"الموقع","contact.emailLabel":"البريد الإلكتروني","contact.phoneLabel":"تليفون / واتساب",
      "contact.note":"روابط التواصل الاجتماعي (LinkedIn، GitHub) هتتضاف هنا بعد إرسالها.",
      "form.name":"اسمك","form.subject":"الموضوع","form.message":"رسالتك",
      "form.opt.job":"فرصة عمل","form.opt.freelance":"مشروع فريلانس","form.opt.other":"حاجة تانية",
      "form.send":"ابعت على واتساب",
      "form.note":"ده هيفتح واتساب برسالتك جاهزة للإرسال — مفيش أي بيانات بتتخزن على الموقع.",
      "form.error":"من فضلك اكتب اسمك ورسالتك الأول.",

      "footer.blurb":"أنا مهندس برمجيات بشتغل بين واجهات Flutter والأنظمة المدمجة اللي تحتها.",
      "footer.links":"روابط سريعة","footer.more":"المزيد","footer.reach":"تواصل معايا",
      "footer.rights":"© ٢٠٢٦ الحسيني جاد عباس عز العرب",
      "footer.tag":"مهندس برمجيات · Flutter · أنظمة مدمجة"
    }
  };

  var WHATSAPP = "201044603980";
  var root = document.documentElement;
  var STORAGE_LANG = "ah-portfolio-lang";
  var STORAGE_THEME = "ah-portfolio-theme";
  var currentLang = "en";

  function safeGet(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }
  function safeSet(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }

  /* ---------- i18n ---------- */
  function applyAttr(dict, dataAttr, targetAttr){
    document.querySelectorAll('[' + dataAttr + ']').forEach(function(el){
      var key = el.getAttribute(dataAttr);
      if(dict[key]) el.setAttribute(targetAttr, dict[key]);
    });
  }

  function applyLang(lang){
    var dict = translations[lang] || translations.en;
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    applyAttr(dict, 'data-i18n-alt', 'alt');
    applyAttr(dict, 'data-i18n-aria-label', 'aria-label');
    applyAttr(dict, 'data-i18n-placeholder', 'placeholder');
    syncLightboxText();
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    var btn = document.getElementById('lang-toggle');
    if(btn) btn.textContent = lang === 'ar' ? 'AR / EN' : 'EN / AR';
    // serve the CV in whichever language the visitor is reading
    var cvBtn = document.getElementById('cv-btn');
    if(cvBtn){
      var cvFile = lang === 'ar' ? 'Al-Hosseiny-Gad-CV-AR.pdf' : 'Al-Hosseiny-Gad-CV-EN.pdf';
      cvBtn.setAttribute('href', 'assets/cv/' + cvFile);
      cvBtn.setAttribute('download', cvFile);
    }
    safeSet(STORAGE_LANG, lang);
  }

  function applyTheme(theme){
    if(theme === 'light' || theme === 'dark'){ root.setAttribute('data-theme', theme); }
    else { root.removeAttribute('data-theme'); }
    safeSet(STORAGE_THEME, theme || 'auto');
  }

  applyLang(safeGet(STORAGE_LANG) || 'en');
  var startTheme = safeGet(STORAGE_THEME);
  if(startTheme && startTheme !== 'auto') applyTheme(startTheme);

  var langBtn = document.getElementById('lang-toggle');
  if(langBtn) langBtn.addEventListener('click', function(){
    applyLang(currentLang === 'ar' ? 'en' : 'ar');
  });

  var themeBtn = document.getElementById('theme-toggle');
  if(themeBtn) themeBtn.addEventListener('click', function(){
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById('nav-burger');
  var navLinks = document.getElementById('nav-links');
  if(burger && navLinks){
    burger.addEventListener('click', function(){
      var open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.addEventListener('click', function(e){
      if(e.target.tagName === 'A'){
        navLinks.classList.remove('open');
        burger.setAttribute('aria-expanded','false');
      }
    });
  }

  /* ---------- scroll: progress, nav state, active link, back-to-top ---------- */
  var progressBar = document.getElementById('progress-top');
  var nav = document.getElementById('nav');
  var toTop = document.getElementById('to-top');
  var sections = [].slice.call(document.querySelectorAll('main section, main header[id]'));
  var navAnchors = [].slice.call(document.querySelectorAll('.nav-links a'));

  function onScroll(){
    var h = document.documentElement;
    var top = h.scrollTop || document.body.scrollTop;
    var height = h.scrollHeight - h.clientHeight;
    if(progressBar) progressBar.style.width = (height > 0 ? (top / height) * 100 : 0) + '%';
    if(nav) nav.classList.toggle('scrolled', top > 12);
    if(toTop) toTop.classList.toggle('show', top > 520);

    var id = '';
    for(var i = 0; i < sections.length; i++){
      if(sections[i].getBoundingClientRect().top <= 140) id = sections[i].id;
    }
    navAnchors.forEach(function(a){
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  if(toTop) toTop.addEventListener('click', function(){
    window.scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---------- WhatsApp composer (no backend; opens a prefilled chat) ---------- */
  var waForm = document.getElementById('wa-form');
  if(waForm){
    waForm.addEventListener('submit', function(e){
      e.preventDefault();
      var dict = translations[currentLang] || translations.en;
      var name = (document.getElementById('wa-name').value || '').trim();
      var msg = (document.getElementById('wa-message').value || '').trim();
      if(!name || !msg){ window.alert(dict['form.error']); return; }
      var sel = document.getElementById('wa-subject');
      var subject = sel.options[sel.selectedIndex].textContent;
      var body = dict['form.name'] + ': ' + name + '\n' +
                 dict['form.subject'] + ': ' + subject + '\n\n' + msg;
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(body), '_blank', 'noopener');
    });
  }

  /* ---------- count-up for the stat cards ---------- */
  function countUp(el){
    var target = parseInt(el.getAttribute('data-count'), 10);
    if(isNaN(target)) return;
    var suffix = el.getAttribute('data-suffix') || '';
    // a year is not a quantity — show it as-is rather than counting from zero
    if(el.getAttribute('data-plain')){ el.textContent = target + suffix; return; }
    var start = performance.now(), dur = 1400;
    function tick(now){
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- reveal on scroll (JS-gated; page is visible without JS) ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(!reduceMotion && 'IntersectionObserver' in window){
    root.classList.add('js');

    var hero = document.getElementById('home');
    if(hero){
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){ hero.classList.add('hero-ready'); });
      });
    }

    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        var counter = entry.target.querySelector('[data-count]');
        if(counter) countUp(counter);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
  }

  /* ---------- certificate lightbox ---------- */
  var lightbox = document.getElementById('cert-lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbCaption = document.getElementById('lightbox-caption');
  var lbClose = document.getElementById('lightbox-close');
  var openCard = null;

  function syncLightboxText(){
    if(!openCard || !lbCaption || !lbImg) return;
    var title = openCard.querySelector('[data-lightbox-caption]');
    var thumb = openCard.querySelector('img');
    lbCaption.textContent = title ? title.textContent : '';
    lbImg.setAttribute('alt', thumb ? (thumb.getAttribute('alt') || '') : '');
  }

  if(lightbox && lbImg && lbCaption && lbClose){
    var onLightboxKeydown = function(e){
      if(e.key === 'Escape' || e.key === 'Esc'){ closeLightbox(); return; }
      // the close button is the only focusable control inside, so keep focus on it
      if(e.key === 'Tab'){ e.preventDefault(); lbClose.focus(); }
    };

    var openLightbox = function(card){
      openCard = card;
      lbImg.setAttribute('src', card.getAttribute('data-lightbox-full'));
      syncLightboxText();
      lightbox.hidden = false;
      document.body.classList.add('lb-open');
      lbClose.focus();
      document.addEventListener('keydown', onLightboxKeydown);
    };

    var closeLightbox = function(){
      if(lightbox.hidden) return;
      lightbox.hidden = true;
      document.body.classList.remove('lb-open');
      lbImg.removeAttribute('src');
      document.removeEventListener('keydown', onLightboxKeydown);
      if(openCard) openCard.focus();
      openCard = null;
    };

    // certificates and app screenshots share one lightbox
    document.querySelectorAll('[data-lightbox-full]').forEach(function(card){
      card.addEventListener('click', function(){ openLightbox(card); });
    });

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e){
      if(e.target === lightbox || e.target.hasAttribute('data-lightbox-close')) closeLightbox();
    });
  }
})();
