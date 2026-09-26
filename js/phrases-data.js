/* ==========================================================================
   Ministry Books Terminology — Phrases Data
   --------------------------------------------------------------------------
   Full-sentence / prayer-line content for advanced-level trilingual practice,
   once a learner is comfortable with individual terms. Sourced from the ministry's
   prayer exercise sheets and merged the same way as data.js.

   Fields per entry:
     id       — stable numeric id
     category — one of the four practice sections (see PHRASE_CATEGORIES)
     num      — original position within its category (1-25)
     en / de / ru — the sentence in each language
   ========================================================================== */

const PHRASES = [
  {
    "id": 1,
    "category": "General Exercise",
    "num": 1,
    "en": "Lord Jesus, I come to You and open to You!",
    "de": "Herr Jesus, ich komme zu Dir und öffne mich Dir!",
    "ru": "Господь Иисус, я прихожу к Тебе и открываюсь для Тебя"
  },
  {
    "id": 2,
    "category": "General Exercise",
    "num": 2,
    "en": "I’m wide open to You without any reservation.",
    "de": "Ich öffne mich Dir weit, ohne jegliche Vorbehalte",
    "ru": "Я широко открыт для Тебя без каких-либо ограничений"
  },
  {
    "id": 3,
    "category": "General Exercise",
    "num": 3,
    "en": "Lord, I love You, and we love You. I love You with all my heart.",
    "de": "Herr, ich liebe Dich und wir lieben Dich. Ich liebe Dich von ganzem Herzen.",
    "ru": "Господь, я люблю Тебя, и мы любим Тебя. Я люблю Тебя всем своим сердцем."
  },
  {
    "id": 4,
    "category": "General Exercise",
    "num": 4,
    "en": "I praise You! Lord, we are so thankful to You!",
    "de": "Ich lobe Dich! Herr, wir sind Dir sehr dankbar!",
    "ru": "Я хвалю Тебя! Господь, мы очень благодарны Тебе!"
  },
  {
    "id": 5,
    "category": "General Exercise",
    "num": 5,
    "en": "Lord, how much I need You!",
    "de": "Herr, wie sehr brauche ich Dich!",
    "ru": "Господь, я очень сильно нуждаюсь в Тебе!"
  },
  {
    "id": 6,
    "category": "General Exercise",
    "num": 6,
    "en": "I turn my heart to You.",
    "de": "Ich wende mein Herz Dir zu.",
    "ru": "Я обращаю моё сердце к Тебе."
  },
  {
    "id": 7,
    "category": "General Exercise",
    "num": 7,
    "en": "Lord, I turn my being completely to You.",
    "de": "Herr, ich wende mein Sein vollständig Dir zu.",
    "ru": "Господь, я обращаю моё существо полностью к Тебе."
  },
  {
    "id": 8,
    "category": "General Exercise",
    "num": 8,
    "en": "Lord Jesus, I exercise my spirit to touch You.",
    "de": "Herr Jesus, ich übe meinen Geist, um Dich zu berühren.",
    "ru": "Господь Иисус, я упражняю мой дух, чтобы соприкасаться с Тобой."
  },
  {
    "id": 9,
    "category": "General Exercise",
    "num": 9,
    "en": "I join to You to be one spirit with You.",
    "de": "Ich hänge Dir an, um ein Geist mit Dir zu sein.",
    "ru": "Я соединяюсь с Тобой, чтобы быть одним духом с Тобой."
  },
  {
    "id": 10,
    "category": "General Exercise",
    "num": 10,
    "en": "Lord, shine on us! Speak to us!",
    "de": "Herr, scheine auf uns! Sprich zu uns.",
    "ru": "Господь, сияй на нас! Говорим нам!"
  },
  {
    "id": 11,
    "category": "General Exercise",
    "num": 11,
    "en": "Lord! We are open to Your enlightening!",
    "de": "Herr! Wir sind offen für Deine Erleuchtung!",
    "ru": "Господь, мы открыты для Твоего озарения!"
  },
  {
    "id": 12,
    "category": "General Exercise",
    "num": 12,
    "en": "Lord, we pray that You will have a thoroughfare within us!",
    "de": "Herr, wir beten, dass Du einen freien Durchgang in uns hast",
    "ru": "Господь, мы молимся о том, чтобы у Тебя был просторный путь в нас!"
  },
  {
    "id": 13,
    "category": "General Exercise",
    "num": 13,
    "en": "Lord, attract us and we will run after You.",
    "de": "Herr, zieh uns und wir laufen Dir nach.",
    "ru": "Господь, влеки нас и мы побежим за Тобой."
  },
  {
    "id": 14,
    "category": "General Exercise",
    "num": 14,
    "en": "Lord! Have Your free way among us!",
    "de": "Herr! Habe freien Lauf unter uns!",
    "ru": "Господь! Двигайся среди нас беспрепятственно!"
  },
  {
    "id": 15,
    "category": "General Exercise",
    "num": 15,
    "en": "Lord, we give You full freedom to do whatever You want to do!",
    "de": "Herr, wir geben Dir die volle Freiheit, alles zu tun, was Du willst!",
    "ru": "Господь, мы предоставляем Тебе полную свободу делать всё, что Ты хочешь сделать!"
  },
  {
    "id": 16,
    "category": "General Exercise",
    "num": 16,
    "en": "We are open for Your adjustment and recalibration.",
    "de": "Wir sind offen für Deine Korrektur und Neuausrichtung.",
    "ru": "Мы открыты для Твоего исправления и поправления."
  },
  {
    "id": 17,
    "category": "General Exercise",
    "num": 17,
    "en": "Lord, deal with us and purify us that You may have Your way!",
    "de": "Herr, behandle und reinige uns, damit Du Deinen Weg haben kannst!",
    "ru": "Господь, работай над нами и очищай нас, чтобы Ты мог идти Своим путём!"
  },
  {
    "id": 18,
    "category": "General Exercise",
    "num": 18,
    "en": "Lord, grow in us day by day!",
    "de": "Herr, wachse Tag für Tag in uns.",
    "ru": "Господь, расти внас день за днём!"
  },
  {
    "id": 19,
    "category": "General Exercise",
    "num": 19,
    "en": "Lord, show us Your heart’s desire!",
    "de": "Herr, zeige uns Deinen Herzenswusch",
    "ru": "Господь, покажи нам Своё сердечное желание!"
  },
  {
    "id": 20,
    "category": "General Exercise",
    "num": 20,
    "en": "Lord, we seek Your leading! Lord, lead us!",
    "de": "Herr, wir suchen Deine Leitung! Herr, leite uns!",
    "ru": "Господь, мы ищим Твоего водительства. Господь, веди нас!"
  },
  {
    "id": 21,
    "category": "General Exercise",
    "num": 21,
    "en": "Lord, make us one with You in every way! We declare we are one with You.",
    "de": "Herr, mach uns auf jede Weise eins mit Dir! Wir verkünden: Wir sind eins mit Dir.",
    "ru": "Господь, сделай нас едиными с Тобой во всём! Мы провозглашаем, что мы одно с Тобой!"
  },
  {
    "id": 22,
    "category": "General Exercise",
    "num": 22,
    "en": "Forgive our sins, wash us, cleanse us and cover us!",
    "de": "Vergib uns unsere Sünden, wasch uns und reinige uns. Bedeck uns!",
    "ru": "Прости наши грехи, омой нас, очисти нас и покрой!"
  },
  {
    "id": 23,
    "category": "General Exercise",
    "num": 23,
    "en": "Thank You for Your precious and prevailing blood!",
    "de": "Danke für Dein kostbares und siegreiches Blut!",
    "ru": "Благодарим Тебя за Твою драгоценную и побеждающую кровь!"
  },
  {
    "id": 24,
    "category": "General Exercise",
    "num": 24,
    "en": "Lord, I give myself to You. I consecrate myself to You completely!",
    "de": "Herr, ich gebe mich Dir. Ich gebe mich Dir vollständig hin!",
    "ru": "Господь, я отдаю себя Тебе, я полностью посвящаю себя Тебе!"
  },
  {
    "id": 25,
    "category": "General Exercise",
    "num": 25,
    "en": "Lord, lead us on! We want to go on with You.",
    "de": "Herr, bring uns voran! Wir wollen mit Dir vorangehen.",
    "ru": "Господь, веди нас! Мы хотим идти дальше с Тобой!"
  },
  {
    "id": 26,
    "category": "Praising",
    "num": 1,
    "en": "Lord, we praise You for all that You are!",
    "de": "Herr, wir loben Dich für alles, was Du bist!",
    "ru": "Господь, мы хвалим Тебя за всё, кем Ты являешься!"
  },
  {
    "id": 27,
    "category": "Praising",
    "num": 2,
    "en": "We praise You for what You have done for us!",
    "de": "Wir loben Dich für das, was Du für uns getan hast!",
    "ru": "Мы хвалим Тебя за то, что Ты сделал для нас!"
  },
  {
    "id": 28,
    "category": "Praising",
    "num": 3,
    "en": "We praise Your person! We praise Your work!",
    "de": "Wir loben Deine Person! Wir loben Dein Werk!",
    "ru": "Мы восхваляем Твою Личность! Мы восхваляем Твою работу!"
  },
  {
    "id": 29,
    "category": "Praising",
    "num": 4,
    "en": "You are such a unique One!",
    "de": "Du bist so einzigartig!",
    "ru": "Ты такой уникальный!"
  },
  {
    "id": 30,
    "category": "Praising",
    "num": 5,
    "en": "Thanks be to You! You are so worthy! Worthy of our praises!",
    "de": "Dank sei Dir! Du bist so würdig! Würdig unseres Lobpreises!",
    "ru": "Мы благодарим Тебя! Ты достоин! Ты достоин нашей хвалы!"
  },
  {
    "id": 31,
    "category": "Praising",
    "num": 6,
    "en": "You are the Son of God and the Son of Man.",
    "de": "Du bist der Sohn Gottes und der Sohn des Menschen.",
    "ru": "Ты Сын Божий и Сын Человеческий."
  },
  {
    "id": 32,
    "category": "Praising",
    "num": 7,
    "en": "You are the life giving Spirit!",
    "de": "Du bist der lebengebende Geist.",
    "ru": "Ты животворящий Дух!"
  },
  {
    "id": 33,
    "category": "Praising",
    "num": 8,
    "en": "We know that You are now the Spirit dwelling in us.",
    "de": "Wir wissen, dass Du jetzt der Geist bist, der in uns wohnt.",
    "ru": "Мы знаем, сейчас Ты Дух, обитающий в нас."
  },
  {
    "id": 34,
    "category": "Praising",
    "num": 9,
    "en": "Thank You for dying for us on the cross. Praise You for Your redemption.",
    "de": "Danke, dass Du am Kreuz für uns gestorben bist. Wir loben Dich für Deine Erlösung.",
    "ru": "Мы благодарим Тебя, за то, что Ты умер за нас на кресте. Мы хвалим Тебя за Твоё искупление."
  },
  {
    "id": 35,
    "category": "Praising",
    "num": 10,
    "en": "Thank You for saving us and dispensing Your life into us.",
    "de": "Danke, dass Du uns rettest und uns Dein Leben austeilst.",
    "ru": "Мы благодарим Тебя за то, что Ты спасаешь нас и роздаёшь Свою жизнь в нас."
  },
  {
    "id": 36,
    "category": "Praising",
    "num": 11,
    "en": "Praise You for Your human living on earth!",
    "de": "Wir loben Dich für Deinen menschlichen Lebenswandel auf der Erde!",
    "ru": "Хвала Тебе за Твоё человеческое житие на земле!"
  },
  {
    "id": 37,
    "category": "Praising",
    "num": 12,
    "en": "Praise You for Your crucifixion, resurrection and ascension!",
    "de": "Wir loben Dich für Deine Kreuzigung, Auferstehung und Auffahrt!",
    "ru": "Хвала Тебе за Твоё распятие, воскресение и вознесение!"
  },
  {
    "id": 38,
    "category": "Praising",
    "num": 13,
    "en": "Now You are on the throne!",
    "de": "Jetzt bist Du auf dem Thron!",
    "ru": "Сейчас Ты на престоле!"
  },
  {
    "id": 39,
    "category": "Praising",
    "num": 14,
    "en": "You are the Lord of the church and You are the Head of the Body.",
    "de": "Du bist der Herr der Gemeinde und Du bist das Haupt des Leibes.",
    "ru": "Ты Господь церкви, и Ты Глава Тела!"
  },
  {
    "id": 40,
    "category": "Praising",
    "num": 15,
    "en": "Praise You for Your victory!",
    "de": "Wir loben Dich für Deinen Sieg!",
    "ru": "Хвала Тебе за Твою победу!"
  },
  {
    "id": 41,
    "category": "Praising",
    "num": 16,
    "en": "You overcame Satan and annihilated death!",
    "de": "Du hast Satan überwunden und den Tod zunichte gemacht!",
    "ru": "Ты победил Сатану и уничтожил смерть!"
  },
  {
    "id": 42,
    "category": "Praising",
    "num": 17,
    "en": "Praise You that You are the reality of all positive things in the universe.",
    "de": "Wir loben Dich dafür, dass Du die Wirklichkeit aller positiven Dinge im Universum bist.",
    "ru": "Хвала Тебе за то, что Ты являешься действительностью всего положительного во вселенной."
  },
  {
    "id": 43,
    "category": "Praising",
    "num": 18,
    "en": "You are the reality of all the offerings.",
    "de": "Du bist die Wirklichkeit aller Opfer.",
    "ru": "Ты действительность всех приношений."
  },
  {
    "id": 44,
    "category": "Praising",
    "num": 19,
    "en": "Father, we worship You. We adore You.",
    "de": "Vater, wir beten Dich an. Wir verehren Dich.",
    "ru": "Отец, мы покланяемся Тебе. Мы восхищаемся Тобой."
  },
  {
    "id": 45,
    "category": "Praising",
    "num": 20,
    "en": "You are the source of love, life and light.",
    "de": "Du bist die Quelle der Liebe, des Lebens und des Lichts.",
    "ru": "Ты источник любви, света и жизни!"
  },
  {
    "id": 46,
    "category": "Praising",
    "num": 21,
    "en": "Thank You for giving us Your son that we can be Your many sons!",
    "de": "Danke, dass Du uns Deinen Sohn gegeben hast, damit wir Deine vielen Söhne sein können!",
    "ru": "Благодарим Тебя за то, что Ты дал нам Своего Сына, чтобы были Твоими многими сыновьями!"
  },
  {
    "id": 47,
    "category": "Praising",
    "num": 22,
    "en": "Thank You for the spirit of sonship that we can call You Abba Father.",
    "de": "Danke für den Geist der Sohnschaft, damit wir Dich Abba Vater nennen können.",
    "ru": "Благодарим Тебя за духа сыновства, благодаря которому мы можем называть Тебя: «Авва Отец»!"
  },
  {
    "id": 48,
    "category": "Praising",
    "num": 23,
    "en": "Praise You for Your eternal purpose and plan.",
    "de": "Wir loben Dich für Deinen ewigen Vorsatz und Plan.",
    "ru": "Хвала Тебе за Твой вечный замысел и план."
  },
  {
    "id": 49,
    "category": "Praising",
    "num": 24,
    "en": "We give glory to You forever!",
    "de": "Wir geben Dir die Herrlichkeit in Ewigkeit!",
    "ru": "Мы воздаём Тебе славу вовеки!"
  },
  {
    "id": 50,
    "category": "Praising",
    "num": 25,
    "en": "Lord, You are so wonderful!",
    "de": "Herr, Du bist so wunderbar!",
    "ru": "Господь, Ты так чудесен!"
  },
  {
    "id": 51,
    "category": "Meeting",
    "num": 1,
    "en": "Lord, we come to You, we come forward to the throne of grace.",
    "de": "Herr, wir kommen zu Dir, wir treten hinzu zum Thron der Gnade.",
    "ru": "Господь, мы приходим к Тебе, мы приступаем к престолу благодати."
  },
  {
    "id": 52,
    "category": "Meeting",
    "num": 2,
    "en": "Lord, we seek You in a genuine way!",
    "de": "Herr, wir suchen Dich auf echte Weise!",
    "ru": "Господь, мы икренне ищем Тебя!"
  },
  {
    "id": 53,
    "category": "Meeting",
    "num": 3,
    "en": "Make us pure in heart and poor in spirit.",
    "de": "Mach uns rein im Herzen und arm im Geist.",
    "ru": "Сделай нас чистыми сердцем и нищими духом!"
  },
  {
    "id": 54,
    "category": "Meeting",
    "num": 4,
    "en": "We open our being to You and we want to be filled with You!",
    "de": "Wir öffnen Dir unser Sein und wir wollen mit Dir erfüllt sein!",
    "ru": "Мы открываем своё существо Тебе и хотим быть наполнены Тобой!"
  },
  {
    "id": 55,
    "category": "Meeting",
    "num": 5,
    "en": "We give this meeting to You! We pray for Your presence!",
    "de": "Wir geben Dir diese Versammlung! Wir beten um Deine Gegenwart!",
    "ru": "Мы отдаём собрание Тебе! Мы молимся о Твоём присутствии!"
  },
  {
    "id": 56,
    "category": "Meeting",
    "num": 6,
    "en": "We want to exercise our spirit to mingle with You.",
    "de": "Wir wollen unseren Geist üben, um uns mit Dir zu vermengen.",
    "ru": "Мы хотим упражнять наш дух, чтобы сливаться с Тобой."
  },
  {
    "id": 57,
    "category": "Meeting",
    "num": 7,
    "en": "Refresh us and renew us!",
    "de": "Erfrische uns und erneuere uns!",
    "ru": "Освежи и обнови нас!"
  },
  {
    "id": 58,
    "category": "Meeting",
    "num": 8,
    "en": "We want to empty ourselves and unload ourselves!",
    "de": "Wir wollen uns selbst leer machen und alles bei Dir ablegen",
    "ru": "Мы хотим опустошиться и разгрузиться!"
  },
  {
    "id": 59,
    "category": "Meeting",
    "num": 9,
    "en": "Lord, bless this time! Bless this fellowship! Bless this meeting!",
    "de": "Herr, segne diese Zeit! Segne diese Gemeinschaft! Segne diese Versammlung!",
    "ru": "Господь, благослови это время! Благослови это общение! Благослови это собрание!"
  },
  {
    "id": 60,
    "category": "Meeting",
    "num": 10,
    "en": "We pray that the Holy Spirit will have full freedom flowing among us!",
    "de": "Wir beten, dass der Heilige Geist die volle Freiheit hat, unter uns zu fließen!",
    "ru": "Мы молимся о том, чтобы Святой Дух имел полную свободу течь среди нас!"
  },
  {
    "id": 61,
    "category": "Meeting",
    "num": 11,
    "en": "Break through in each one of us! Get through among us!",
    "de": "Brich in einem jeden von uns durch! Kommt durch unter uns!",
    "ru": "Прорвись в каждом из нас! Преодолей всё среди нас!"
  },
  {
    "id": 62,
    "category": "Meeting",
    "num": 12,
    "en": "We want to forget the things which are behind and stretch forward to the things which are before.",
    "de": "Wir wollen die Dinge vergessen, die hinter uns liegen, und uns ausstrecken nach den Dingen, die vor uns liegen.",
    "ru": "Мы хотим забывать то, что позади и вытягиваться к тому, что впереди."
  },
  {
    "id": 63,
    "category": "Meeting",
    "num": 13,
    "en": "Lord, we give You the preeminence. We give You the first place!",
    "de": "Herr, wir geben Dir den Vorrang. Wir geben Dir den ersten Platz!",
    "ru": "Господь, мы отдаём Тебе первенство. Мы отдаём Тебе первое место!"
  },
  {
    "id": 64,
    "category": "Meeting",
    "num": 14,
    "en": "Lord, grant us much prayer and thorough fellowship!",
    "de": "Herr, gib uns viel Gebet und gründliche Gemeinschaft!",
    "ru": "Господь, даруй нам обильную молитву и тщательное общение!"
  },
  {
    "id": 65,
    "category": "Meeting",
    "num": 15,
    "en": "We pray that You move and operate in this situation!",
    "de": "Wir beten, dass Du Dich in dieser Situation bewegst und wirkst!",
    "ru": "Мы молимся о том, чтобы Ты двигался в этой ситуации и Твой Дух действовал!"
  },
  {
    "id": 66,
    "category": "Meeting",
    "num": 16,
    "en": "Carry this out for Your purpose!",
    "de": "Führ dies für Deinen Vorsatz aus!",
    "ru": "Осуществи это для Своего замысла!"
  },
  {
    "id": 67,
    "category": "Meeting",
    "num": 17,
    "en": "Make us hungry and thirsty for You! We want to know You and Your truth!",
    "de": "Mach uns hungrig und durstig nach Dir! Wir wollen Dich und Deine Wahrheit kennen!",
    "ru": "Дай нам голод и жажду по Тебе! Мы хотим знать Тебя и Твою истину!"
  },
  {
    "id": 68,
    "category": "Meeting",
    "num": 18,
    "en": "We are here for Your purpose! Carry out Your economy!",
    "de": "Wir sind hier für Deinen Vorsatz! Führe Deine Ökonomie aus!",
    "ru": "Мы здесь для Твоего замысла! Осуществляй Твоё домостроительство!"
  },
  {
    "id": 69,
    "category": "Meeting",
    "num": 19,
    "en": "We pray that we will have the genuine oneness and one accord!",
    "de": "Wir beten, dass wir die echte Einheit und Einmütigkeit haben!",
    "ru": "Мы молимся о подлинном единстве и единодушии!"
  },
  {
    "id": 70,
    "category": "Meeting",
    "num": 20,
    "en": "We pray for a good coordination in the mingled spirit!",
    "de": "Wir beten um eine gute Koordination im vermengten Geist!",
    "ru": "Мы молимся о хорошей координации в слитом духе!"
  },
  {
    "id": 71,
    "category": "Meeting",
    "num": 21,
    "en": "Lord, bind Your enemy! Shame the evil one! Satan will have no ground among us!",
    "de": "Herr, binde Deinen Feind! Beschäme den Bösen! Satan hat keinen Boden unter uns!",
    "ru": "Господь, свяжи Своего врага! Посрами лукавого! Сатане не будет места среди нас!"
  },
  {
    "id": 72,
    "category": "Meeting",
    "num": 22,
    "en": "We pray that You release much spirit and life! Release Your will.",
    "de": "Wir beten, dass Du viel Geist und Leben freisetzt! Befrei Deinen Willen.",
    "ru": "Мы молимся о том, чтобы Ты высвободил много Духа и жизни! Высвободи Твою волю!"
  },
  {
    "id": 73,
    "category": "Meeting",
    "num": 23,
    "en": "Your name be glorified! Your kingdom come and Your will be done!",
    "de": "Dein Name sei verherrlicht! Dein Königreich komme und Dein Wille geschehe!",
    "ru": "Пусть прославится Твоё имя! Пусть придёт Твоё царство и исполнится Твоя воля!"
  },
  {
    "id": 74,
    "category": "Meeting",
    "num": 24,
    "en": "Blend us together! We pray for much blending! Lord, gain Your corporate expression!",
    "de": "Vermenge uns miteinander! Wir beten um viel Vermengung! Herr, gewinne Deinen korporativen Ausdruck!",
    "ru": "Смешивай нас! Мы молимся о богатом смешивании! Господь, обрети Своё совокупное выражение!"
  },
  {
    "id": 75,
    "category": "Meeting",
    "num": 25,
    "en": "Build up Your church as the Body of Christ! Prepare Your Bride!",
    "de": "Baue Deine Gemeinde als den Leib Christi auf! Bereite Deine Braut vor!",
    "ru": "Созидай Свою церковь как Тело Христово! Приготовь Свою невесту!"
  },
  {
    "id": 76,
    "category": "Service",
    "num": 1,
    "en": "Lord, have mercy on us that we can serve You.",
    "de": "Herr, sei uns barmherzig, dass wir Dir dienen können.",
    "ru": "Господь, смилуйся над нами, чтобы мы могли служить тебе!"
  },
  {
    "id": 77,
    "category": "Service",
    "num": 2,
    "en": "Give us a learning spirit to learn how to serve You.",
    "de": "Gib uns einen lernenden Geist, dass wir lernen, wie wir Dir dienen können.",
    "ru": "Дай нам дух ученика, чтобы мы учились служить Тебе."
  },
  {
    "id": 78,
    "category": "Service",
    "num": 3,
    "en": "Make me a right person to serve You.",
    "de": "Mach mich zu einer rechten Person, die Dir dienen kann.",
    "ru": "Сделай меня соответствующим человеком, чтобы служить Тебе."
  },
  {
    "id": 79,
    "category": "Service",
    "num": 4,
    "en": "Make us serve You in a pure heart and with a good conscience.",
    "de": "Lass uns Dir mit reinem Herzen und mit gutem Gewissen dienen.",
    "ru": "Дай нам служить Тебе чистым сердцем и с доброй совестью."
  },
  {
    "id": 80,
    "category": "Service",
    "num": 5,
    "en": "We want to serve You according to the heavenly vision.",
    "de": "Wir wollen Dir gemäß der himmlischen Vision dienen.",
    "ru": "Мы хотим служить Тебе согласно небесному видению."
  },
  {
    "id": 81,
    "category": "Service",
    "num": 6,
    "en": "Thank You Lord for the process You went through, and now You have become the life giving Spirit.",
    "de": "Danke, Herr, für alle Prozessschritte, durch die Du gegangen bist, und jetzt bist Du zum Leben gebenen Geist geworden.",
    "ru": "Мы благодарим Тебя, Господь, за все процессы, которые Ты прошёл и за то, что теперь Ты стал животворящим Духом."
  },
  {
    "id": 82,
    "category": "Service",
    "num": 7,
    "en": "We serve You in the mingled spirit and in the Body.",
    "de": "Wir dienen Dir im vermengten Geist und im Leib.",
    "ru": "Мы служим Тебе в слитом Духе и в Теле."
  },
  {
    "id": 83,
    "category": "Service",
    "num": 8,
    "en": "We are here for Your interest and Your move on earth.",
    "de": "Wir sind hier für Deine Interessen und für Dein Vorangehen auf der Erde.",
    "ru": "Мы здесь для Твоих интересов и Твоего движения на земле."
  },
  {
    "id": 84,
    "category": "Service",
    "num": 9,
    "en": "Make us grow in life for the building up of the church as the Body of Christ.",
    "de": "Lass uns im Leben wachsen für den Aufbau der Gemeinde als des Leibes Christi.",
    "ru": "Дай нам расти в жизни для созидания церкви как Тела Христова."
  },
  {
    "id": 85,
    "category": "Service",
    "num": 10,
    "en": "Thank You for the vision of life and building. Life is for the building.",
    "de": "Danke für die Vision von Leben und Aufbau. Das Leben ist für den Aufbau.",
    "ru": "Мы благодарим Тебя за видение жизни и строения. Жизнь для строения."
  },
  {
    "id": 86,
    "category": "Service",
    "num": 11,
    "en": "We can’t do anything apart from You.",
    "de": "Ohne Dich können wir nichts tun.",
    "ru": "Мы ничего не можем без Тебя."
  },
  {
    "id": 87,
    "category": "Service",
    "num": 12,
    "en": "Lord, shine on us that we may see light in Your light.",
    "de": "Herr, scheine auf uns, damit wir das Licht in Deinem Licht sehen.",
    "ru": "Господь, сияй на нас, чтобы мы видели свет в Твоём свете."
  },
  {
    "id": 88,
    "category": "Service",
    "num": 13,
    "en": "Lord, we want to know our real situation that we can confess to You in a genuine way.",
    "de": "Herr, wir wollen unsere wahre Situation kennen, damit wir Dir auf echte Weise bekennen können.",
    "ru": "Господь, мы хотим видеть свою подлинную ситуацию, чтобы мы моги исповедоваться Тебе подлинным образом."
  },
  {
    "id": 89,
    "category": "Service",
    "num": 14,
    "en": "Show us that we know where we are and what we are in the Body.",
    "de": "Zeige uns, damit wir wissen, wo wir im Leib stehen und was wir im Leib sind.",
    "ru": "Покажи нам, чтобы мы знали, где мы находимся в Теле и чем мы являемся в Теле."
  },
  {
    "id": 90,
    "category": "Service",
    "num": 15,
    "en": "I want to serve You according to the measure You have appointed to me in the Body.",
    "de": "Ich will Dir dienen nach dem Maß, das Du mir im Leib zugeteilt hast.",
    "ru": "Я хочу служить Тебе согласно той мере, которую Ты назначил мне в Теле."
  },
  {
    "id": 91,
    "category": "Service",
    "num": 16,
    "en": "Join us together and knit us together in the Body.",
    "de": "Verbinde und verknüpfe uns miteinander im Leib.",
    "ru": "Соедини нас и свяжи нас вместе в Теле."
  },
  {
    "id": 92,
    "category": "Service",
    "num": 17,
    "en": "We pray all the saints will function according to each one’s measure in the Body.",
    "de": "Wir beten, dass alle Heiligen gemäß dem Maß eines jeden im Leib funktionieren.",
    "ru": "Мы молимся о том, чтобы все святые функционировали согласно их мере в Теле."
  },
  {
    "id": 93,
    "category": "Service",
    "num": 18,
    "en": "Build up the priesthood in the church.",
    "de": "Bau die Priesterschaft in der Gemeinde auf.",
    "ru": "Созидай священство в церкви."
  },
  {
    "id": 94,
    "category": "Service",
    "num": 19,
    "en": "Strengthen us into our inner man to serve You with faithfulness.",
    "de": "Stärke uns in unseren inneren Menschen hinein, damit wir Dir mit Treue dienen.",
    "ru": "Укрепи нас во внутреннего человека, чтобы мы верно служили Тебе."
  },
  {
    "id": 95,
    "category": "Service",
    "num": 20,
    "en": "Make us see the Body, know the Body, be conscious of the Body, care for the Body, and honor the Body.",
    "de": "Lass uns den Leib sehen, den Leib kennen, uns des Leibes bewusst sein, uns um den Leib kümmern und den Leib ehren.",
    "ru": "Дай нам видеть Тело, знать Тело иметь ощущение Тела, заботиться о Теле и чтить Тело."
  },
  {
    "id": 96,
    "category": "Service",
    "num": 21,
    "en": "Lord, make us blendable and buildable!",
    "de": "Mach uns vermengbar und aufbaufähig!",
    "ru": "Господь, сделай нас способными смешиваться и состраиваться."
  },
  {
    "id": 97,
    "category": "Service",
    "num": 22,
    "en": "Strengthen us to be real overcomes to keep all the principles of the Body.",
    "de": "Stärke uns, damit wir wahre Überwinder sind, die die Prinzipien des Leibes einhalten.",
    "ru": "Укрепи нас, чтобы мы были настоящими победителями и соблюдали все принципы Тела."
  },
  {
    "id": 98,
    "category": "Service",
    "num": 23,
    "en": "We pray that God’s ordained way can be carried out in the church.",
    "de": "Wir beten, dass der von Gott verordnete Weg in der Gemeinde ausgeführt werden kann.",
    "ru": "Мы молимся о том, чтобы предписанный Богом путь осуществлялся в церквях."
  },
  {
    "id": 99,
    "category": "Service",
    "num": 24,
    "en": "We pray much begetting, much nourishing, much perfecting and much building can be carried out in the church life.",
    "de": "Wir beten, dass viel Zeugen, viel Nähren, viel Zurüsten und viel Aufbau im Gemeindeleben ausgeführt werden kann.",
    "ru": "Мы молимся о том, чтобы в церковной жизни было много рождения, кормления, совершенствования и созидания."
  },
  {
    "id": 100,
    "category": "Service",
    "num": 25,
    "en": "Lord, gain much remaining fruit as building material for Your church.",
    "de": "Herr, gewinne viel bleibende Frucht als Baumaterial für Deine Gemeinde.",
    "ru": "Господь, обрети много остающегося плода в качестве строительного материала для Твоей церкви."
  }
];

/* Category order + i18n keys, so the UI can label them per interface language */
const PHRASE_CATEGORIES = [
  { id: "General Exercise", i18nKey: "phrase_cat_general" },
  { id: "Praising", i18nKey: "phrase_cat_praising" },
  { id: "Meeting", i18nKey: "phrase_cat_meeting" },
  { id: "Service", i18nKey: "phrase_cat_service" },
];
