import { GrammarCategory } from '../types';

export interface QuickTipData {
  category: GrammarCategory;
  titleEn: string;
  titleGu: string;
  badgeColor: string;
  summaryEn: string;
  summaryGu: string;
  goldenRule: string;
  goldenRuleGu: string;
  formula?: string;
  commonMistakes: {
    wrong: string;
    right: string;
    note: string;
  }[];
  proTips: string[];
}

export const GRAMMAR_QUICK_TIPS: Record<GrammarCategory, QuickTipData> = {
  'subject-verb': {
    category: 'subject-verb',
    titleEn: 'Subject-Verb Agreement',
    titleGu: 'કર્તા અને ક્રિયાપદનો સંબંધ',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    summaryEn: 'The verb must always match its subject in number (singular vs plural) and person.',
    summaryGu: 'વાક્યમાં કર્તા એકવચન હોય તો ક્રિયાપદ પણ એકવચનનું હોવું જોઈએ, અને બહુવચન હોય તો બહુવચનનું.',
    goldenRule: 'Singular subjects (He, She, It, John) take verbs ending in -s or -es in present simple. Plural subjects (They, We, You) and "I" take base verbs.',
    goldenRuleGu: 'ત્રીજો પુરુષ એકવચન (He, She, It, એકવચન નામ) સાથે સાદા વર્તમાનકાળમાં ક્રિયાપદને -s કે -es લાગે છે.',
    formula: 'He/She/It + Verb-s/es  |  I/You/We/They + Verb-base',
    commonMistakes: [
      {
        wrong: 'She go to school everyday.',
        right: 'She goes to school everyday.',
        note: '"She" is singular third-person, so verb needs -es.',
      },
      {
        wrong: 'The students is studying in the library.',
        right: 'The students are studying in the library.',
        note: '"Students" is plural, so use "are", not "is".',
      },
      {
        wrong: 'Everybody like ice cream.',
        right: 'Everybody likes ice cream.',
        note: 'Indefinite pronouns (everybody, everyone, somebody) are grammatically singular!',
      },
    ],
    proTips: [
      'Words like "everyone", "everybody", "nobody", "each" are ALWAYS singular.',
      'Ignore words coming between subject and verb: "The box of chocolates IS heavy" ("box" is singular).',
      'Collective nouns (family, team, jury) usually take singular verbs in American English.',
    ],
  },

  tenses: {
    category: 'tenses',
    titleEn: 'Verb Tenses & Irregular Past',
    titleGu: 'કાળ અને ભૂતકાળના રૂપો',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    summaryEn: 'Ensure past actions use correct past tense forms. Watch out for irregular verbs and double past tense.',
    summaryGu: 'ભૂતકાળની ઘટના દર્શાવવા ક્રિયાપદનું સાચું ભૂતકાળનું રૂપ (V2) વાપરો. અનિયમિત રૂપોમાં -ed નથી લાગતું.',
    goldenRule: 'Never use a past tense verb after "did" or "didn\'t". "Did" already carries the past tense!',
    goldenRuleGu: 'did અથવા didn\'t પછી હંમેશા ક્રિયાપદનું મૂળ રૂપ (V1) જ આવે, ક્યારેય ભૂતકાળનું રૂપ (V2) ન આવે.',
    formula: "didn't + Verb-base (V1)  |  Never: didn't + V2",
    commonMistakes: [
      {
        wrong: 'I did not went to the market yesterday.',
        right: 'I did not go to the market yesterday.',
        note: 'After "did not", always use base form "go", not "went".',
      },
      {
        wrong: 'She buyed a new car last week.',
        right: 'She bought a new car last week.',
        note: '"Buy" is an irregular verb. Past form is "bought", never "buyed".',
      },
      {
        wrong: 'He has wrote three letters.',
        right: 'He has written three letters.',
        note: 'After "has/have/had", use past participle V3 ("written", not "wrote").',
      },
    ],
    proTips: [
      'Irregular verb patterns: go → went → gone, see → saw → seen, write → wrote → written.',
      'Time words like "yesterday", "last night", "in 2020", "ago" require Simple Past tense (V2).',
      'Continuous tenses always require a helping verb: "He is playing", not "He playing".',
    ],
  },

  articles: {
    category: 'articles',
    titleEn: 'Articles (A, An, The)',
    titleGu: 'આર્ટિકલ્સ (A, An, The) ના નિયમો',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    summaryEn: 'Use "a" or "an" for singular countable nouns. Use "an" before vowel sounds (not just letters).',
    summaryGu: 'સ્વરના ઉચ્ચાર (અ, આ, ઇ, ઉ, એ...) થી શરૂ થતા શબ્દો આગળ "an" અને વ્યંજનના ઉચ્ચાર આગળ "a" વપરાય છે.',
    goldenRule: 'Sound matters, not the spelling letter! "An honest man" (silent h = vowel sound), but "A university" (yoo- sound = consonant).',
    goldenRuleGu: 'નિયમ સ્પેલિંગનો નથી પણ ઉચ્ચારનો છે! "honest" માં h સાઇલન્ટ હોવાથી "an honest" થાય.',
    formula: 'Vowel Sound (a, e, i, o, u) → "An"  |  Consonant Sound → "A"',
    commonMistakes: [
      {
        wrong: 'He is a honest police officer.',
        right: 'He is an honest police officer.',
        note: '"Honest" starts with an "o" vowel sound, so it takes "an".',
      },
      {
        wrong: 'She is an university professor.',
        right: 'She is a university professor.',
        note: '"University" starts with consonant "yu" sound, so it takes "a".',
      },
      {
        wrong: 'I saw an apple on the table. A apple was red.',
        right: 'I saw an apple on the table. The apple was red.',
        note: 'When mentioning a specific item the second time, use "the".',
      },
    ],
    proTips: [
      'Do not use "a" or "an" with uncountable nouns: "information", "water", "advice", "furniture".',
      'Use "The" for unique things: The sun, the moon, the earth, the sky.',
      'Use "The" with superlative degrees: "the tallest", "the best", "the most expensive".',
    ],
  },

  prepositions: {
    category: 'prepositions',
    titleEn: 'Prepositions (In, On, At, To, With)',
    titleGu: 'નામયોગી અવ્યય (Prepositions)',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    summaryEn: 'Prepositions link nouns to other words. Common errors involve translating literally from regional languages.',
    summaryGu: 'ગુજરાતીમાંથી સીધો અનુવાદ કરતી વખતે prepositions માં ભૂલો થાય છે (જેમ કે સંગીત સાંભળવું = listen TO music).',
    goldenRule: 'Time: AT for exact times, ON for days/dates, IN for months/years/seasons.',
    goldenRuleGu: 'સમય માટે: ચોક્કસ સમય માટે at 5 PM, વાર/તારીખ માટે on Monday/on 15th, મહિના/વર્ષ માટે in June/in 2024.',
    formula: 'AT (Clock time)  |  ON (Days & Dates)  |  IN (Months, Years, Centuries)',
    commonMistakes: [
      {
        wrong: 'She is listening music in her room.',
        right: 'She is listening to music in her room.',
        note: 'Always say "listen TO" someone or something.',
      },
      {
        wrong: 'He is good in playing cricket.',
        right: 'He is good at playing cricket.',
        note: 'Use "good AT" for skills and abilities, not "good in".',
      },
      {
        wrong: 'We will meet in Monday morning.',
        right: 'We will meet on Monday morning.',
        note: 'Days of the week always take "on".',
      },
    ],
    proTips: [
      'Collocations: Married TO (not with), Depend ON (not in), Congratulate ON (not for).',
      '"Between" is used for two items; "Among" is used for three or more items.',
      'Transport: "on a bus", "on a train", "on a plane", but "in a car", "in a taxi".',
    ],
  },

  plurals: {
    category: 'plurals',
    titleEn: 'Irregular & Plural Nouns',
    titleGu: 'બહુવચનના અનિયમિત રૂપો',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
    summaryEn: 'Not all plural nouns end in -s. Irregular plurals change vowels or keep the same form.',
    summaryGu: 'બધા બહુવચનમાં -s કે -es નથી લાગતું. કેટલાક શબ્દોના રૂપ બદલાય છે (child → children, tooth → teeth).',
    goldenRule: 'Never add -s to irregular plurals that already denote multiple items (no "childrens", no "peoples", no "womans").',
    goldenRuleGu: 'જે શબ્દો પહેલેથી જ બહુવચનમાં છે તેને ફરીથી -s ન લગાવો ("childrens" ક્યારેય ન લખાય).',
    formula: 'child → children  |  foot → feet  |  tooth → teeth  |  man → men  |  woman → women',
    commonMistakes: [
      {
        wrong: 'The childrens are playing outside in the rain.',
        right: 'The children are playing outside in the rain.',
        note: '"Children" is already plural of "child". Never write "childrens".',
      },
      {
        wrong: 'I have three tooths that need cleaning.',
        right: 'I have three teeth that need cleaning.',
        note: 'Plural of "tooth" is "teeth".',
      },
      {
        wrong: 'The sheep are grazing. A flock of sheeps.',
        right: 'The sheep are grazing. A flock of sheep.',
        note: '"Sheep", "deer", and "fish" have the same singular and plural form.',
      },
    ],
    proTips: [
      'Zero plurals: sheep → sheep, deer → deer, aircraft → aircraft.',
      '-f to -ves: leaf → leaves, life → lives, wife → wives, knife → knives.',
      'Uncountable nouns take no plural: "advices" (wrong) → "pieces of advice" (correct).',
    ],
  },

  pronouns: {
    category: 'pronouns',
    titleEn: 'Pronoun Case & Agreement',
    titleGu: 'સર્વનામ (Pronouns) ના સાચા રૂપો',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    summaryEn: 'Use subjective pronouns (I, he, she, they) as subjects, and objective pronouns (me, him, her, them) as objects.',
    summaryGu: 'ક્રિયા કરનાર કર્તા સ્થાને I/he/she/they અને કર્મ સ્થાને me/him/her/them વપરાય છે.',
    goldenRule: 'Test compound subjects by removing the other person: "Between you and me" (prepositions take object case "me", not "I").',
    goldenRuleGu: 'Prepositions પછી હંમેશા કર્મ વિભક્તિ (objective case: me, him, her, us, them) આવે છે.',
    formula: 'Subject: I, He, She, We, They  |  Object: Me, Him, Her, Us, Them',
    commonMistakes: [
      {
        wrong: 'Him and I went to the market yesterday.',
        right: 'He and I went to the market yesterday.',
        note: 'Subject position requires "He", not "Him".',
      },
      {
        wrong: 'This secret is strictly between you and I.',
        right: 'This secret is strictly between you and me.',
        note: '"Between" is a preposition, so use object pronoun "me".',
      },
      {
        wrong: 'Everyone should do their own work properly.',
        right: 'Everyone should do his or her own work properly.',
        note: 'Traditional formal grammar matches singular "everyone" with singular pronouns.',
      },
    ],
    proTips: [
      'Politeness rule in compound subjects: put yourself last ("My friend and I", not "I and my friend").',
      '"Who" is used for subjects (he/she); "Whom" is used for objects (him/her).',
      'Reflexive pronouns (myself, himself) cannot stand alone as a subject: "John and myself did it" is incorrect.',
    ],
  },

  'adjectives-adverbs': {
    category: 'adjectives-adverbs',
    titleEn: 'Adjectives vs Adverbs',
    titleGu: 'વિશેષણ (Adjective) અને ક્રિયાવિશેષણ (Adverb)',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    summaryEn: 'Adjectives describe nouns (things/people). Adverbs describe verbs (how actions happen), adjectives, or other adverbs.',
    summaryGu: 'નામની વિશેષતા દર્શાવવા Adjective (ગુણ) અને ક્રિયા કેવી રીતે થાય છે તે દર્શાવવા Adverb (-ly વાળું રૂપ) વપરાય છે.',
    goldenRule: 'Ask: Am I describing a NOUN or an ACTION? "He speaks fluent English" (fluent modifies English) vs "He speaks English fluently" (fluently modifies speaks).',
    goldenRuleGu: 'ક્રિયાપદનું વર્ણન કરતા હોવ તો -ly વાળું Adverb વાપરો: "Drive carefully", "Walk slowly".',
    formula: 'Adjective + -ly = Adverb  (Quick → Quickly, Careful → Carefully, Fluent → Fluently)',
    commonMistakes: [
      {
        wrong: 'He did very good in his mathematics exam.',
        right: 'He did very well in his mathematics exam.',
        note: '"Good" is an adjective; "well" is the adverb describing the action "did".',
      },
      {
        wrong: 'She speaks English very fluent.',
        right: 'She speaks English very fluently.',
        note: 'Modifying how she speaks (verb) requires adverb "fluently".',
      },
      {
        wrong: 'This mango tastes sweetly.',
        right: 'This mango tastes sweet.',
        note: 'Sensory linking verbs (taste, smell, look, feel, sound) take adjectives, not adverbs!',
      },
    ],
    proTips: [
      'Exceptions that do not take -ly: fast → fast (never "fastly"), hard → hard, late → late.',
      'Sensory verbs: "It smells bad" (not badly), "She looks happy" (not happily).',
      'Comparative rules: "taller than", "more beautiful than" (never "more taller").',
    ],
  },

  conditionals: {
    category: 'conditionals',
    titleEn: 'Conditionals & Subjunctive',
    titleGu: 'શરતી વાક્યો (Conditionals)',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    summaryEn: 'Hypothetical or unreal conditions require specific tense pairings. Notice the use of "were" instead of "was" for imaginary situations.',
    summaryGu: 'કાલ્પનિક પરિસ્થિતિ માટે "If I were..." વપરાય છે (ક્યારેય "If I was" નહીં).',
    goldenRule: 'In unreal hypothetical conditionals (Second Conditional), use "were" for ALL subjects (If I were you, If he were king).',
    goldenRuleGu: 'જ્યારે પરિસ્થિતિ માત્ર કલ્પના કે અવાસ્તવિક હોય ત્યારે He/She/I સાથે પણ "were" વપરાય છે.',
    formula: 'Unreal: If + Past Simple (were) ... would + base verb',
    commonMistakes: [
      {
        wrong: 'If I was the bird, I would fly across the ocean.',
        right: 'If I were a bird, I would fly across the ocean.',
        note: 'Subjunctive mood for unreal wishes requires "were", not "was".',
      },
      {
        wrong: 'If you will come tomorrow, I will help you.',
        right: 'If you come tomorrow, I will help you.',
        note: 'Never put "will" in the "if" clause! Use simple present in if-clause.',
      },
      {
        wrong: 'If I had known, I would tell you.',
        right: 'If I had known, I would have told you.',
        note: 'Third conditional requires "would have + past participle (V3)".',
      },
    ],
    proTips: [
      'First Conditional (Real Future): If + Present Simple, will + Verb.',
      'Second Conditional (Unreal Present): If + Past (were), would + Verb.',
      'Third Conditional (Unreal Past): If + had + V3, would have + V3.',
    ],
  },

  homophones: {
    category: 'homophones',
    titleEn: 'Tricky Homophones (Sound-alikes)',
    titleGu: 'સરખા ઉચ્ચાર વાળા ગૂંચવણભર્યા શબ્દો',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    summaryEn: 'Homophones sound identical but have different spellings and meanings.',
    summaryGu: 'સરખા ઉચ્ચાર થતા હોવા છતાં અર્થ અને સ્પેલિંગ તદ્દન અલગ હોય છે (There / Their / They\'re).',
    goldenRule: 'Break contractions down: They\'re = They are, It\'s = It is. If "they are" doesn\'t fit, you need "their" or "there"!',
    goldenRuleGu: 'They\'re એટલે "They are". Their એટલે "તેઓનું" (માલિકી). There એટલે "ત્યાં" (સ્થળ).',
    formula: "They're = They are  |  Their = Possession  |  There = Place/Location",
    commonMistakes: [
      {
        wrong: 'They went to visit there grandparents yesterday.',
        right: 'They went to visit their grandparents yesterday.',
        note: '"Their" indicates possession (belonging to them), while "there" indicates location.',
      },
      {
        wrong: 'The dog wagged it\'s tail happily.',
        right: 'The dog wagged its tail happily.',
        note: '"It\'s" is short for "it is". "Its" without apostrophe is the possessive pronoun.',
      },
      {
        wrong: 'Your going to love this new book.',
        right: "You're going to love this new book.",
        note: 'Contracted form "You are" requires apostrophe: "You\'re".',
      },
    ],
    proTips: [
      'To / Too / Two: "To" is preposition/direction, "Too" means also/excessive, "Two" is the number 2.',
      'Accept vs Except: "Accept" is to receive; "Except" means excluding.',
      'Affect vs Effect: "Affect" is usually a Verb (action); "Effect" is usually a Noun (result).',
    ],
  },

  'capitalization-punctuation': {
    category: 'capitalization-punctuation',
    titleEn: 'Capitalization & Punctuation',
    titleGu: 'કેપિટલ અક્ષરો અને વિરામચિહ્નો',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    summaryEn: 'Capitalize proper nouns, the pronoun "I", and the first letter of sentences. Ensure proper ending punctuation.',
    summaryGu: 'વાક્યની શરૂઆતનો અક્ષર હંમેશા કેપિટલ હોવો જોઈએ, યોગ્ય નામો કેપિટલ થાય અને છેલ્લે પૂર્ણવિરામ (.) હોવું જરૂરી છે.',
    goldenRule: 'The pronoun "I" is ALWAYS capitalized in English, no matter where it appears in a sentence.',
    goldenRuleGu: 'અંગ્રેજીમાં "I" (હું) ગમે ત્યાં આવે તો પણ હંમેશા કેપિટલ (I) જ લખાય છે, ક્યારેય નાનો (i) ન લખાય.',
    formula: 'Sentence Start: Capital  |  Pronoun: "I" (Always)  |  Ending: . / ? / !',
    commonMistakes: [
      {
        wrong: 'she lives in ahmedabad with her family',
        right: 'She lives in Ahmedabad with her family.',
        note: 'Capitalize sentence start, proper city name "Ahmedabad", and add period at end.',
      },
      {
        wrong: 'Yesterday i met Dr. Sharma.',
        right: 'Yesterday I met Dr. Sharma.',
        note: 'The standalone pronoun "I" must always be capital.',
      },
      {
        wrong: 'Where are you going tomorrow.',
        right: 'Where are you going tomorrow?',
        note: 'Direct questions must end with a question mark (?), not a period.',
      },
    ],
    proTips: [
      'Capitalize days of the week and months: Monday, August (not monday, august).',
      'Capitalize languages and nationalities: Gujarati, English, Indian, American.',
      'Every complete sentence must conclude with a terminal punctuation mark (. / ? / !).',
    ],
  },
};
