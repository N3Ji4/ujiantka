import { Question } from '../types';

export const bahasaInggrisQuestions: Question[] = [
  {
    id: 'biq-1',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Choose the correct sentence with proper subjunctive mood:',
    options: [
      { id: 'A', text: 'The board recommended that the CEO resign immediately.' },
      { id: 'B', text: 'The board recommended that the CEO resigns immediately.' },
      { id: 'C', text: 'The board recommended the CEO to resign immediately.' },
      { id: 'D', text: 'The board recommended that the CEO resigning immediately.' }
    ],
    correctAnswer: 'A',
    explanation: 'After verbs of recommendation/demand (recommend, suggest, insist), the subjunctive base form (resign) is required without -s or -ing.'
  },
  {
    id: 'biq-2',
    subjectId: 'bahasa_inggris',
    topicTag: 'Error Recognition',
    difficulty: 'Sulit',
    question: 'Identify the error or correct form in: "Neither the professor nor her assistants was aware of the scheduling conflict."',
    options: [
      { id: 'A', text: 'Change "was" to "were"' },
      { id: 'B', text: 'Change "nor" to "or"' },
      { id: 'C', text: 'Change "her" to "their"' },
      { id: 'D', text: 'No error' }
    ],
    correctAnswer: 'A',
    explanation: 'With neither/nor, the verb agrees with the closer subject ("assistants", plural). Therefore, "was" must be changed to "were".'
  },
  {
    id: 'biq-3',
    subjectId: 'bahasa_inggris',
    topicTag: 'Reading',
    difficulty: 'Mudah',
    question: 'Contextual Vocabulary: "Despite the meticulous planning, unforeseen logistical hurdles impeded the expedition."',
    contextSnippet: 'What does "impeded" most nearly mean in this sentence?',
    options: [
      { id: 'A', text: 'Facilitated' },
      { id: 'B', text: 'Hindered or delayed' },
      { id: 'C', text: 'Accelerated' },
      { id: 'D', text: 'Funded' }
    ],
    correctAnswer: 'B',
    explanation: '"Impeded" means delayed, obstructed, or hindered progress.'
  },
  {
    id: 'biq-4',
    subjectId: 'bahasa_inggris',
    topicTag: 'Structure',
    difficulty: 'Sedang',
    question: 'Complete the sentence: "____ by strong winds, the vessel managed to dock safely."',
    options: [
      { id: 'A', text: 'Buffeted' },
      { id: 'B', text: 'Buffeting' },
      { id: 'C', text: 'To buffet' },
      { id: 'D', text: 'Having buffet' }
    ],
    correctAnswer: 'A',
    explanation: 'Reduced passive participle clause: "Although it was buffeted by strong winds" becomes "Buffeted by strong winds".'
  },
  {
    id: 'biq-5',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Select the sentence demonstrating correct parallel structure:',
    options: [
      { id: 'A', text: 'She enjoys hiking, to read novels, and swimming.' },
      { id: 'B', text: 'She enjoys hiking, reading novels, and swimming.' },
      { id: 'C', text: 'She enjoys to hike, reading, and swim.' },
      { id: 'D', text: 'She enjoys hiking, reading, and to swim.' }
    ],
    correctAnswer: 'B',
    explanation: 'Parallel structure requires matching grammatical forms in a series: hiking, reading, and swimming (all gerunds).'
  },
  {
    id: 'biq-6',
    subjectId: 'bahasa_inggris',
    topicTag: 'Conditionals',
    difficulty: 'Sedang',
    question: 'Choose the correct conditional form: "If she ____ about the traffic congestion, she would have taken the subway."',
    options: [
      { id: 'A', text: 'knows' },
      { id: 'B', text: 'knew' },
      { id: 'C', text: 'had known' },
      { id: 'D', text: 'would know' }
    ],
    correctAnswer: 'C',
    explanation: 'Third conditional (past hypothetical): If + past perfect (had known), would have + past participle.'
  },
  {
    id: 'biq-7',
    subjectId: 'bahasa_inggris',
    topicTag: 'Inversion',
    difficulty: 'Sulit',
    question: 'Choose the correctly inverted sentence:',
    options: [
      { id: 'A', text: 'Never before has the company experienced such rapid growth.' },
      { id: 'B', text: 'Never before the company has experienced such rapid growth.' },
      { id: 'C', text: 'Never before experienced the company such rapid growth.' },
      { id: 'D', text: 'Never before did the company has experienced such growth.' }
    ],
    correctAnswer: 'A',
    explanation: 'Negative adverbial at the start ("Never before") triggers subject-auxiliary inversion: "has the company experienced".'
  },
  {
    id: 'biq-8',
    subjectId: 'bahasa_inggris',
    topicTag: 'Vocabulary',
    difficulty: 'Mudah',
    question: 'Synonym test: The CEO’s speech was concise, delivering all key points in under five minutes.',
    options: [
      { id: 'A', text: 'Verbose' },
      { id: 'B', text: 'Succinct' },
      { id: 'C', text: 'Ambiguous' },
      { id: 'D', text: 'Tedious' }
    ],
    correctAnswer: 'B',
    explanation: '"Concise" means brief and clear; "succinct" is its direct synonym.'
  },
  {
    id: 'biq-9',
    subjectId: 'bahasa_inggris',
    topicTag: 'Passive Voice',
    difficulty: 'Sedang',
    question: 'Convert to passive: "They are currently reviewing the architectural blueprints."',
    options: [
      { id: 'A', text: 'The architectural blueprints are reviewed currently.' },
      { id: 'B', text: 'The architectural blueprints are being reviewed currently.' },
      { id: 'C', text: 'The architectural blueprints were being reviewed.' },
      { id: 'D', text: 'The architectural blueprints have been reviewed.' }
    ],
    correctAnswer: 'B',
    explanation: 'Present continuous active ("are reviewing") becomes present continuous passive ("are being reviewed").'
  },
  {
    id: 'biq-10',
    subjectId: 'bahasa_inggris',
    topicTag: 'Relative Clause',
    difficulty: 'Sedang',
    question: 'Choose the correct relative pronoun: "The scientist ____ research breakthrough revolutionized renewable energy was awarded the prize."',
    options: [
      { id: 'A', text: 'who' },
      { id: 'B', text: 'whom' },
      { id: 'C', text: 'whose' },
      { id: 'D', text: 'which' }
    ],
    correctAnswer: 'C',
    explanation: 'Showing possession ("research belonging to the scientist") requires the relative pronoun "whose".'
  },
  {
    id: 'biq-11',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Complete the sentence: "Hardly had the meeting started ____ the projector malfunctioned."',
    options: [
      { id: 'A', text: 'when' },
      { id: 'B', text: 'than' },
      { id: 'C', text: 'then' },
      { id: 'D', text: 'before' }
    ],
    correctAnswer: 'A',
    explanation: 'The correlative conjunction pair is "Hardly / Scarcely ... when" (or "No sooner ... than").'
  },
  {
    id: 'biq-12',
    subjectId: 'bahasa_inggris',
    topicTag: 'Error Recognition',
    difficulty: 'Sulit',
    question: 'Identify the error in: "Each of the candidates are required to submit their portfolio before Friday."',
    options: [
      { id: 'A', text: 'Change "Each" to "All"' },
      { id: 'B', text: 'Change "are" to "is"' },
      { id: 'C', text: 'Change "their" to "his or her"' },
      { id: 'D', text: 'Both B and C' }
    ],
    correctAnswer: 'D',
    explanation: '"Each" is singular, so it requires singular verb ("is") and traditional singular pronoun agreement (though singular "their" is common in modern casual English, formal TKA strictly tests singular verb agreement and pronoun consistency).'
  },
  {
    id: 'biq-13',
    subjectId: 'bahasa_inggris',
    topicTag: 'Reading',
    difficulty: 'Sedang',
    question: 'Contextual Inference: "The critic dismissed the modern art installation as derivative and devoid of originality."',
    contextSnippet: 'What does "derivative" imply about the art installation?',
    options: [
      { id: 'A', text: 'It is highly innovative and groundbreaking.' },
      { id: 'B', text: 'It imitates earlier styles without adding new ideas.' },
      { id: 'C', text: 'It relies heavily on mathematical equations.' },
      { id: 'D', text: 'It is extremely valuable and rare.' }
    ],
    correctAnswer: 'B',
    explanation: '"Derivative" means unoriginal, copied, or closely imitating previous works.'
  },
  {
    id: 'biq-14',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Choose the correct preposition: "Her success in the scientific field is attributed ____ rigorous dedication and peer collaboration."',
    options: [
      { id: 'A', text: 'in' },
      { id: 'B', text: 'to' },
      { id: 'C', text: 'for' },
      { id: 'D', text: 'with' }
    ],
    correctAnswer: 'B',
    explanation: 'The phrasal verb/idiom is "attribute something TO something".'
  },
  {
    id: 'biq-15',
    subjectId: 'bahasa_inggris',
    topicTag: 'Conjunctions',
    difficulty: 'Mudah',
    question: 'Complete the sentence: "____ graduating top of her class, she received numerous fellowship offers."',
    options: [
      { id: 'A', text: 'Because of' },
      { id: 'B', text: 'Although' },
      { id: 'C', text: 'Upon' },
      { id: 'D', text: 'Unless' }
    ],
    correctAnswer: 'C',
    explanation: '"Upon graduating" means immediately after graduating, acting as a temporal prepositional phrase.'
  },
  {
    id: 'biq-16',
    subjectId: 'bahasa_inggris',
    topicTag: 'Vocabulary',
    difficulty: 'Sulit',
    question: 'Choose the antonym for "ephemeral":',
    options: [
      { id: 'A', text: 'Transient' },
      { id: 'B', text: 'Permanent' },
      { id: 'C', text: 'Fleeting' },
      { id: 'D', text: 'Momentary' }
    ],
    correctAnswer: 'B',
    explanation: '"Ephemeral" means lasting for a very short time (fleeting, transient). Its antonym is "permanent".'
  },
  {
    id: 'biq-17',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Choose the correct sentence structure:',
    options: [
      { id: 'A', text: 'Not only did he complete the report, but he also presented it.' },
      { id: 'B', text: 'Not only he completed the report, but he also presented it.' },
      { id: 'C', text: 'Not only did he completed the report, but also presented.' },
      { id: 'D', text: 'Not only he did complete the report, and presented it.' }
    ],
    correctAnswer: 'A',
    explanation: '"Not only" at the beginning of the clause requires auxiliary inversion ("did he complete"), followed by "but also".'
  },
  {
    id: 'biq-18',
    subjectId: 'bahasa_inggris',
    topicTag: 'Reading',
    difficulty: 'Sedang',
    question: 'Contextual Vocabulary: "The ambassador maintained an amicable demeanor throughout the tense negotiations."',
    contextSnippet: 'What does "amicable" mean?',
    options: [
      { id: 'A', text: 'Hostile and aggressive' },
      { id: 'B', text: 'Friendly and peaceful' },
      { id: 'C', text: 'Indifferent and cold' },
      { id: 'D', text: 'Suspicious and guarded' }
    ],
    correctAnswer: 'B',
    explanation: '"Amicable" means characterized by friendliness and absence of animosity.'
  },
  {
    id: 'biq-19',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Complete the sentence: "It is crucial that every employee ____ safety protocols strictly."',
    options: [
      { id: 'A', text: 'follows' },
      { id: 'B', text: 'follow' },
      { id: 'C', text: 'followed' },
      { id: 'D', text: 'is following' }
    ],
    correctAnswer: 'B',
    explanation: 'Subjunctive mood after impersonal expression ("It is crucial that...") requires the base form of the verb ("follow").'
  },
  {
    id: 'biq-20',
    subjectId: 'bahasa_inggris',
    topicTag: 'Structure',
    difficulty: 'Sulit',
    question: 'Identify the error in: "Scarcely had we stepped outside when the torrential rain began falling."',
    options: [
      { id: 'A', text: 'Change "Scarcely" to "No sooner"' },
      { id: 'B', text: 'Change "when" to "than"' },
      { id: 'C', text: 'Change "began" to "had begun"' },
      { id: 'D', text: 'No error' }
    ],
    correctAnswer: 'D',
    explanation: 'The sentence is entirely correct: "Scarcely had [subject] [past participle] when [subject] [simple past]".'
  },
  {
    id: 'biq-21',
    subjectId: 'bahasa_inggris',
    topicTag: 'Vocabulary',
    difficulty: 'Mudah',
    question: 'Choose the word that best fits: "The scientist offered a plausible explanation supported by empirical data."',
    options: [
      { id: 'A', text: 'Credible and believable' },
      { id: 'B', text: 'Fictional and imaginary' },
      { id: 'C', text: 'Absurd and ridiculous' },
      { id: 'D', text: 'Ambiguous and vague' }
    ],
    correctAnswer: 'A',
    explanation: '"Plausible" means seeming reasonable or probable (credible).'
  },
  {
    id: 'biq-22',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Choose the correct form: "Had I known about the delay, I ____ alternative arrangements."',
    options: [
      { id: 'A', text: 'will make' },
      { id: 'B', text: 'would make' },
      { id: 'C', text: 'would have made' },
      { id: 'D', text: 'had made' }
    ],
    correctAnswer: 'C',
    explanation: 'Inverted third conditional ("Had I known" = "If I had known"), main clause requires "would have made".'
  },
  {
    id: 'biq-23',
    subjectId: 'bahasa_inggris',
    topicTag: 'Error Recognition',
    difficulty: 'Sedang',
    question: 'Identify the error in: "Despite of the adverse weather conditions, the flight arrived on schedule."',
    options: [
      { id: 'A', text: 'Change "Despite of" to "Despite" or "In spite of"' },
      { id: 'B', text: 'Change "adverse" to "averse"' },
      { id: 'C', text: 'Change "arrived" to "has arrived"' },
      { id: 'D', text: 'No error' }
    ],
    correctAnswer: 'A',
    explanation: '"Despite" does not take "of" (unlike "in spite of"). Therefore, "Despite of" is incorrect.'
  },
  {
    id: 'biq-24',
    subjectId: 'bahasa_inggris',
    topicTag: 'Reading',
    difficulty: 'Sedang',
    question: 'Contextual Inference: "The novel’s ambiguous ending left readers debating the protagonist’s true fate."',
    contextSnippet: 'What does "ambiguous" mean?',
    options: [
      { id: 'A', text: 'Clear and definitive' },
      { id: 'B', text: 'Open to multiple interpretations' },
      { id: 'C', text: 'Tragic and depressing' },
      { id: 'D', text: 'Predictable and dull' }
    ],
    correctAnswer: 'B',
    explanation: '"Ambiguous" means having more than one possible meaning or interpretation.'
  },
  {
    id: 'biq-25',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Complete the sentence: "She is one of those managers who always ____ their team during crises."',
    options: [
      { id: 'A', text: 'supports' },
      { id: 'B', text: 'support' },
      { id: 'C', text: 'supporting' },
      { id: 'D', text: 'is supporting' }
    ],
    correctAnswer: 'B',
    explanation: 'In the structure "one of those [plural noun] who...", the relative pronoun "who" refers to the plural noun "managers", so the verb must be plural ("support").'
  },
  {
    id: 'biq-26',
    subjectId: 'bahasa_inggris',
    topicTag: 'Vocabulary',
    difficulty: 'Mudah',
    question: 'Choose the synonym for "ubiquitous":',
    options: [
      { id: 'A', text: 'Rare' },
      { id: 'B', text: 'Omnipresent / Found everywhere' },
      { id: 'C', text: 'Hidden' },
      { id: 'D', text: 'Ancient' }
    ],
    correctAnswer: 'B',
    explanation: '"Ubiquitous" means present, appearing, or found everywhere.'
  },
  {
    id: 'biq-27',
    subjectId: 'bahasa_inggris',
    topicTag: 'Structure',
    difficulty: 'Sulit',
    question: 'Choose the correct sentence:',
    options: [
      { id: 'A', text: 'No sooner had we arrived at the station than the train departed.' },
      { id: 'B', text: 'No sooner had we arrived at the station when the train departed.' },
      { id: 'C', text: 'No sooner we arrived at the station than the train departed.' },
      { id: 'D', text: 'No sooner did we arrived than the train departed.' }
    ],
    correctAnswer: 'A',
    explanation: '"No sooner" requires past perfect inversion ("had we arrived") and is paired with "than".'
  },
  {
    id: 'biq-28',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Complete the sentence: "Neither the supervisor nor the technicians ____ responsible for the equipment failure."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'has been' }
    ],
    correctAnswer: 'B',
    explanation: 'With neither/nor, the verb agrees with the closer subject ("technicians", plural). Therefore, past tense plural "were" is correct.'
  },
  {
    id: 'biq-29',
    subjectId: 'bahasa_inggris',
    topicTag: 'Reading',
    difficulty: 'Sedang',
    question: 'Contextual Vocabulary: "The startup’s innovative business model proved resilient against market volatility."',
    contextSnippet: 'What does "resilient" mean?',
    options: [
      { id: 'A', text: 'Fragile and easily broken' },
      { id: 'B', text: 'Able to recover quickly from tough conditions' },
      { id: 'C', text: 'Stagnant and unchanging' },
      { id: 'D', text: 'Overpriced' }
    ],
    correctAnswer: 'B',
    explanation: '"Resilient" means able to withstand or recover quickly from difficult situations.'
  },
  {
    id: 'biq-30',
    subjectId: 'bahasa_inggris',
    topicTag: 'Grammar',
    difficulty: 'Sedang',
    question: 'Choose the correct adjective form: "The presentation was far ____ than anyone had anticipated."',
    options: [
      { id: 'A', text: 'engaging' },
      { id: 'B', text: 'more engaging' },
      { id: 'C', text: 'most engaging' },
      { id: 'D', text: 'as engaging' }
    ],
    correctAnswer: 'B',
    explanation: 'Comparative degree for a multi-syllable adjective ("engaging") preceded by intensifier "far" requires "more engaging".'
  }
];
