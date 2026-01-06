import React, { useState, useEffect } from 'react';

const vocabularyData = {
  unit1: {
    multipleChoice: [
      { word: "knowledge", definition: "Information and understanding gained through learning" },
      { word: "assignment", definition: "A task given to students to complete" },
      { word: "principal", definition: "The head administrator of a school" },
      { word: "library", definition: "A place where books are kept for reading" },
      { word: "curriculum", definition: "The subjects taught in a school" },
      { word: "examination", definition: "A formal test of knowledge" },
      { word: "comprehension", definition: "The ability to understand something" },
      { word: "collaborate", definition: "To work together with others" },
      { word: "achievement", definition: "Something accomplished successfully" },
      { word: "discipline", definition: "Training to follow rules and behave properly" },
      { word: "vocabulary", definition: "All the words used in a language" },
      { word: "participate", definition: "To take part in an activity" },
      { word: "analyze", definition: "To examine something carefully" },
      { word: "research", definition: "Careful study to discover new information" },
      { word: "certificate", definition: "An official document proving achievement" },
      { word: "concentrate", definition: "To focus attention on something" },
      { word: "discussion", definition: "A conversation about a particular topic" },
      { word: "demonstrate", definition: "To show or explain how something works" },
      { word: "summarize", definition: "To give a brief statement of main points" },
      { word: "evaluate", definition: "To judge the value or quality of something" }
    ],
    pronunciation: [
      { word: "accept", confuseWith: "except", definition: "To receive or agree to something" },
      { word: "affect", confuseWith: "effect", definition: "To influence or make a difference to" },
      { word: "desert", confuseWith: "dessert", definition: "A dry sandy region with little rain" },
      { word: "principal", confuseWith: "principle", definition: "The head of a school" },
      { word: "stationary", confuseWith: "stationery", definition: "Not moving or still" },
      { word: "weather", confuseWith: "whether", definition: "The atmospheric conditions" },
      { word: "their", confuseWith: "there", definition: "Belonging to them" },
      { word: "hear", confuseWith: "here", definition: "To perceive sound with ears" },
      { word: "right", confuseWith: "write", definition: "Correct or the opposite of left" },
      { word: "know", confuseWith: "no", definition: "To be aware of or understand" },
      { word: "our", confuseWith: "hour", definition: "Belonging to us" },
      { word: "peace", confuseWith: "piece", definition: "Freedom from war or conflict" },
      { word: "weak", confuseWith: "week", definition: "Lacking strength or power" },
      { word: "break", confuseWith: "brake", definition: "To separate into pieces" },
      { word: "bear", confuseWith: "bare", definition: "A large animal or to carry" },
      { word: "meet", confuseWith: "meat", definition: "To come together with someone" },
      { word: "sea", confuseWith: "see", definition: "A large body of salt water" },
      { word: "pair", confuseWith: "pear", definition: "Two of something" },
      { word: "flower", confuseWith: "flour", definition: "The blossom of a plant" },
      { word: "tail", confuseWith: "tale", definition: "The rear part of an animal" }
    ],
    scramble: [
      { word: "scholarship", scrambled: "holarschips", definition: "Financial aid for students" },
      { word: "graduation", scrambled: "raduationg", definition: "Completion of a course of study" },
      { word: "attendance", scrambled: "ttendancea", definition: "Being present at school" },
      { word: "homework", scrambled: "omeworkh", definition: "School work done at home" },
      { word: "textbook", scrambled: "extbookt", definition: "A book used for studying" },
      { word: "semester", scrambled: "emesterss", definition: "Half of a school year" },
      { word: "lecture", scrambled: "ecturel", definition: "An educational talk" },
      { word: "professor", scrambled: "rofessopr", definition: "A university teacher" },
      { word: "classroom", scrambled: "lassroomc", definition: "A room where lessons occur" },
      { word: "notebook", scrambled: "otebookn", definition: "A book for writing notes" },
      { word: "pencil", scrambled: "encilp", definition: "A writing instrument" },
      { word: "student", scrambled: "tudents", definition: "A person who studies" },
      { word: "teacher", scrambled: "eachert", definition: "A person who teaches" },
      { word: "learning", scrambled: "earningl", definition: "Acquiring knowledge" },
      { word: "studying", scrambled: "tudyings", definition: "Devoting time to learning" },
      { word: "lesson", scrambled: "essonl", definition: "A period of learning" },
      { word: "practice", scrambled: "racticep", definition: "Repeated exercise" },
      { word: "question", scrambled: "uestionq", definition: "A sentence asking for information" },
      { word: "answer", scrambled: "nswera", definition: "A response to a question" },
      { word: "education", scrambled: "ducatione", definition: "The process of learning" }
    ],
    fillBlanks: [
      { word: "intelligent", sentence: "She is very ___ and learns quickly.", definition: "Having good understanding" },
      { word: "difficult", sentence: "The math problem was too ___.", definition: "Hard to do or understand" },
      { word: "explain", sentence: "Can you ___ this concept to me?", definition: "To make something clear" },
      { word: "understand", sentence: "I ___ the lesson now.", definition: "To comprehend the meaning" },
      { word: "remember", sentence: "I can't ___ where I put my book.", definition: "To recall from memory" },
      { word: "improve", sentence: "Daily practice will ___ your skills.", definition: "To make better" },
      { word: "complete", sentence: "Please ___ your homework tonight.", definition: "To finish something" },
      { word: "organize", sentence: "Let's ___ our notes properly.", definition: "To arrange systematically" },
      { word: "prepare", sentence: "Students must ___ for the test.", definition: "To make ready" },
      { word: "review", sentence: "We should ___ last week's lesson.", definition: "To look at again" },
      { word: "present", sentence: "Each group will ___ their project.", definition: "To show or display" },
      { word: "compare", sentence: "Let's ___ these two stories.", definition: "To examine similarities" },
      { word: "describe", sentence: "Can you ___ what you saw?", definition: "To give details about" },
      { word: "identify", sentence: "Try to ___ the main idea.", definition: "To recognize or name" },
      { word: "conclude", sentence: "What can we ___ from this experiment?", definition: "To reach a decision" },
      { word: "predict", sentence: "Can you ___ what happens next?", definition: "To say what will happen" },
      { word: "calculate", sentence: "Please ___ the total cost.", definition: "To compute mathematically" },
      { word: "measure", sentence: "Use a ruler to ___ the length.", definition: "To find the size" },
      { word: "observe", sentence: "Scientists ___ animals in nature.", definition: "To watch carefully" },
      { word: "record", sentence: "Please ___ your results in the table.", definition: "To write down" }
    ],
    quiz: [
      { word: "academy", definition: "A school or institution for special training" },
      { word: "scholar", definition: "A learned person or student" },
      { word: "mentor", definition: "An experienced advisor or teacher" },
      { word: "tutor", definition: "A private teacher" },
      { word: "degree", definition: "An academic qualification" },
      { word: "diploma", definition: "A certificate of completion" },
      { word: "major", definition: "A main subject of study" },
      { word: "minor", definition: "A secondary subject of study" },
      { word: "credit", definition: "Unit of completed coursework" },
      { word: "grade", definition: "A level or mark of achievement" },
      { word: "report", definition: "A detailed account or document" },
      { word: "thesis", definition: "A long research essay" },
      { word: "project", definition: "A planned piece of work" },
      { word: "experiment", definition: "A scientific test" },
      { word: "laboratory", definition: "A room for scientific work" },
      { word: "reference", definition: "A source of information" },
      { word: "bibliography", definition: "A list of books referenced" },
      { word: "syllabus", definition: "An outline of course content" },
      { word: "deadline", definition: "The final time for completion" },
      { word: "transcript", definition: "An official academic record" }
    ]
  },
  unit2: {
    multipleChoice: [
      { word: "family", definition: "A group of people related by blood or marriage" },
      { word: "parents", definition: "A mother and father" },
      { word: "mother", definition: "A female parent" },
      { word: "father", definition: "A male parent" },
      { word: "sibling", definition: "A brother or sister" },
      { word: "brother", definition: "A male sibling" },
      { word: "sister", definition: "A female sibling" },
      { word: "grandmother", definition: "The mother of one's parent" },
      { word: "grandfather", definition: "The father of one's parent" },
      { word: "cousin", definition: "The child of one's aunt or uncle" },
      { word: "uncle", definition: "The brother of one's parent" },
      { word: "aunt", definition: "The sister of one's parent" },
      { word: "nephew", definition: "The son of one's sibling" },
      { word: "niece", definition: "The daughter of one's sibling" },
      { word: "spouse", definition: "A husband or wife" },
      { word: "relative", definition: "A person connected by blood or marriage" },
      { word: "ancestor", definition: "A person from whom one is descended" },
      { word: "descendant", definition: "A person who comes from an ancestor" },
      { word: "guardian", definition: "A person legally responsible for a child" },
      { word: "adoption", definition: "Legally taking another's child as one's own" }
    ],
    pronunciation: [
      { word: "son", confuseWith: "sun", definition: "A male child" },
      { word: "allowed", confuseWith: "aloud", definition: "Permitted to do something" },
      { word: "buy", confuseWith: "by", definition: "To purchase something" },
      { word: "days", confuseWith: "daze", definition: "Periods of 24 hours" },
      { word: "fare", confuseWith: "fair", definition: "The cost of a journey" },
      { word: "genes", confuseWith: "jeans", definition: "Units of heredity" },
      { word: "heal", confuseWith: "heel", definition: "To become healthy again" },
      { word: "loan", confuseWith: "lone", definition: "Something borrowed" },
      { word: "made", confuseWith: "maid", definition: "Created or produced" },
      { word: "male", confuseWith: "mail", definition: "Of the sex that can father children" },
      { word: "marry", confuseWith: "merry", definition: "To become husband and wife" },
      { word: "one", confuseWith: "won", definition: "The number 1" },
      { word: "role", confuseWith: "roll", definition: "A part played by someone" },
      { word: "sole", confuseWith: "soul", definition: "Only one, single" },
      { word: "wait", confuseWith: "weight", definition: "To stay until something happens" },
      { word: "heir", confuseWith: "air", definition: "A person who inherits" },
      { word: "sight", confuseWith: "site", definition: "The ability to see" },
      { word: "patient", confuseWith: "patients", definition: "Able to wait calmly" },
      { word: "board", confuseWith: "bored", definition: "A flat piece of wood" },
      { word: "whole", confuseWith: "hole", definition: "Complete or entire" }
    ],
    scramble: [
      { word: "relationship", scrambled: "elationshipr", definition: "Connection between people" },
      { word: "household", scrambled: "ouseholdh", definition: "People living together in a home" },
      { word: "children", scrambled: "hildrenc", definition: "Young people" },
      { word: "together", scrambled: "ogethert", definition: "With or in proximity to another" },
      { word: "celebrate", scrambled: "elebratec", definition: "To honor with festivities" },
      { word: "tradition", scrambled: "raditiont", definition: "A custom passed down" },
      { word: "reunion", scrambled: "eunionr", definition: "A gathering of separated people" },
      { word: "heritage", scrambled: "eritageh", definition: "Property or traditions inherited" },
      { word: "generation", scrambled: "enerationg", definition: "All people born around the same time" },
      { word: "nurture", scrambled: "urturen", definition: "To care for and encourage growth" },
      { word: "support", scrambled: "upports", definition: "To give assistance" },
      { word: "respect", scrambled: "espectr", definition: "Admiration for someone" },
      { word: "loyalty", scrambled: "oyaltyl", definition: "Faithful support" },
      { word: "bonding", scrambled: "ondingb", definition: "Forming a close connection" },
      { word: "kinship", scrambled: "inshipk", definition: "Family relationship" },
      { word: "upbringing", scrambled: "pbringingu", definition: "The way a child is raised" },
      { word: "caretaker", scrambled: "aretakerc", definition: "Someone who looks after another" },
      { word: "protection", scrambled: "rotectionp", definition: "Keeping safe from harm" },
      { word: "guidance", scrambled: "uidanceg", definition: "Advice or direction" },
      { word: "affection", scrambled: "ffectiona", definition: "Gentle feelings of fondness" }
    ],
    fillBlanks: [
      { word: "caring", sentence: "She is very ___ towards her younger siblings.", definition: "Showing kindness and concern" },
      { word: "loving", sentence: "They have a ___ family relationship.", definition: "Feeling or showing love" },
      { word: "helpful", sentence: "My brother is always ___ when I need assistance.", definition: "Ready to give help" },
      { word: "kind", sentence: "My grandmother is the most ___ person I know.", definition: "Having a friendly nature" },
      { word: "patient", sentence: "Parents need to be ___ with young children.", definition: "Able to wait calmly" },
      { word: "generous", sentence: "My uncle is very ___ with his time.", definition: "Willing to give freely" },
      { word: "thoughtful", sentence: "It was ___ of you to remember my birthday.", definition: "Showing consideration" },
      { word: "respectful", sentence: "Children should be ___ to their elders.", definition: "Showing respect" },
      { word: "responsible", sentence: "Older siblings must be ___ for younger ones.", definition: "Having duties to fulfill" },
      { word: "trustworthy", sentence: "She is a ___ friend who keeps secrets.", definition: "Able to be trusted" },
      { word: "reliable", sentence: "My cousin is very ___ and always on time.", definition: "Able to be depended on" },
      { word: "supportive", sentence: "Our family is very ___ of each other.", definition: "Providing encouragement" },
      { word: "understanding", sentence: "My parents are ___ when I make mistakes.", definition: "Sympathetic and tolerant" },
      { word: "protective", sentence: "Big brothers are often ___ of their sisters.", definition: "Keeping safe from harm" },
      { word: "encouraging", sentence: "Teachers should be ___ to all students.", definition: "Giving support and confidence" },
      { word: "considerate", sentence: "Be ___ of others' feelings.", definition: "Careful not to hurt others" },
      { word: "devoted", sentence: "She is ___ to taking care of her family.", definition: "Very loving and loyal" },
      { word: "faithful", sentence: "A ___ friend stands by you always.", definition: "Remaining loyal" },
      { word: "dependable", sentence: "My father is the most ___ person I know.", definition: "Trustworthy and reliable" },
      { word: "compassionate", sentence: "We should be ___ to those in need.", definition: "Showing sympathy and concern" }
    ],
    quiz: [
      { word: "matrimony", definition: "The state of being married" },
      { word: "siblings", definition: "Brothers and sisters" },
      { word: "offspring", definition: "A person's child or children" },
      { word: "lineage", definition: "Direct descent from an ancestor" },
      { word: "patriarch", definition: "The male head of a family" },
      { word: "matriarch", definition: "The female head of a family" },
      { word: "foster", definition: "To care for a child not one's own" },
      { word: "custody", definition: "Legal right to care for someone" },
      { word: "inheritance", definition: "Property received from someone who died" },
      { word: "bloodline", definition: "A line of descent through a family" },
      { word: "extended", definition: "Family beyond parents and children" },
      { word: "nuclear", definition: "Family of parents and children only" },
      { word: "blended", definition: "Family formed by remarriage" },
      { word: "domestic", definition: "Relating to the home or family" },
      { word: "kinfolk", definition: "One's family and relations" },
      { word: "clan", definition: "A group of families with common ancestor" },
      { word: "tribe", definition: "A social group with shared culture" },
      { word: "ancestry", definition: "One's family or ethnic descent" },
      { word: "progeny", definition: "A person's descendants" },
      { word: "familial", definition: "Relating to or typical of a family" }
    ]
  },

  unit3: {
    multipleChoice: [
      { word: "science", definition: "The study of the natural world" },
      { word: "nature", definition: "The physical world and living things" },
      { word: "environment", definition: "The surroundings in which something exists" },
      { word: "ecology", definition: "The study of organisms and their environment" },
      { word: "biology", definition: "The study of living organisms" },
      { word: "chemistry", definition: "The study of substances and their properties" },
      { word: "physics", definition: "The study of matter and energy" },
      { word: "astronomy", definition: "The study of celestial objects" },
      { word: "geology", definition: "The study of Earth's structure" },
      { word: "botany", definition: "The study of plants" },
      { word: "zoology", definition: "The study of animals" },
      { word: "climate", definition: "The weather conditions in an area over time" },
      { word: "ecosystem", definition: "A community of living and non-living things" },
      { word: "habitat", definition: "The natural home of an organism" },
      { word: "species", definition: "A group of similar organisms" },
      { word: "organism", definition: "An individual living thing" },
      { word: "molecule", definition: "The smallest unit of a substance" },
      { word: "atom", definition: "The smallest unit of an element" },
      { word: "energy", definition: "The capacity to do work" },
      { word: "matter", definition: "Anything that has mass and takes up space" }
    ],
    pronunciation: [
      { word: "cell", confuseWith: "sell", definition: "The basic unit of life" },
      { word: "pour", confuseWith: "pore", definition: "To flow or cause to flow" },
      { word: "rain", confuseWith: "reign", definition: "Water falling from clouds" },
      { word: "root", confuseWith: "route", definition: "The part of a plant in soil" },
      { word: "scene", confuseWith: "seen", definition: "A place where something happens" },
      { word: "scent", confuseWith: "sent", definition: "A distinctive smell" },
      { word: "serial", confuseWith: "cereal", definition: "Happening in a series" },
      { word: "soar", confuseWith: "sore", definition: "To fly high in the air" },
      { word: "steal", confuseWith: "steel", definition: "To take without permission" },
      { word: "sum", confuseWith: "some", definition: "The total amount" },
      { word: "tide", confuseWith: "tied", definition: "The rise and fall of the sea" },
      { word: "vain", confuseWith: "vane", definition: "Having too much pride" },
      { word: "wade", confuseWith: "weighed", definition: "To walk through water" },
      { word: "waste", confuseWith: "waist", definition: "To use carelessly" },
      { word: "way", confuseWith: "weigh", definition: "A method or path" },
      { word: "wood", confuseWith: "would", definition: "The hard material from trees" },
      { word: "wore", confuseWith: "war", definition: "Past tense of wear" },
      { word: "plane", confuseWith: "plain", definition: "A flat surface" },
      { word: "berry", confuseWith: "bury", definition: "A small fruit" },
      { word: "coarse", confuseWith: "course", definition: "Rough in texture" }
    ],
    scramble: [
      { word: "experiment", scrambled: "xperimente", definition: "A scientific test" },
      { word: "discovery", scrambled: "iscoveryd", definition: "Finding something new" },
      { word: "investigation", scrambled: "nvestigationi", definition: "A detailed examination" },
      { word: "hypothesis", scrambled: "ypothesish", definition: "A proposed explanation" },
      { word: "observation", scrambled: "bservationo", definition: "The action of watching carefully" },
      { word: "laboratory", scrambled: "aboratoryl", definition: "A room for scientific work" },
      { word: "microscope", scrambled: "icroscopem", definition: "Tool for viewing tiny objects" },
      { word: "telescope", scrambled: "elescopet", definition: "Tool for viewing distant objects" },
      { word: "chemical", scrambled: "hemicalc", definition: "A substance used in chemistry" },
      { word: "element", scrambled: "lemente", definition: "A pure substance" },
      { word: "compound", scrambled: "ompoundc", definition: "A substance made of two or more elements" },
      { word: "solution", scrambled: "olutions", definition: "A liquid mixture" },
      { word: "reaction", scrambled: "eactionr", definition: "A chemical change" },
      { word: "photosynthesis", scrambled: "hotosynthesisp", definition: "How plants make food" },
      { word: "evolution", scrambled: "volutione", definition: "Gradual development over time" },
      { word: "extinction", scrambled: "xtinctione", definition: "Complete disappearance of a species" },
      { word: "conservation", scrambled: "onservationc", definition: "Protection of nature" },
      { word: "pollution", scrambled: "ollutionp", definition: "Harmful substances in environment" },
      { word: "renewable", scrambled: "enewabler", definition: "Can be replenished naturally" },
      { word: "sustainable", scrambled: "ustainables", definition: "Able to be maintained" }
    ],
    fillBlanks: [
      { word: "natural", sentence: "Plants grow in their ___ environment.", definition: "Existing in nature" },
      { word: "living", sentence: "All ___ things need water to survive.", definition: "Alive" },
      { word: "growing", sentence: "The tree is ___ taller each year.", definition: "Increasing in size" },
      { word: "blooming", sentence: "The flowers are ___ in spring.", definition: "Producing flowers" },
      { word: "flowing", sentence: "The river is ___ toward the ocean.", definition: "Moving steadily" },
      { word: "changing", sentence: "The seasons are constantly ___.", definition: "Becoming different" },
      { word: "adapting", sentence: "Animals are ___ to their habitats.", definition: "Adjusting to conditions" },
      { word: "evolving", sentence: "Species are ___ over millions of years.", definition: "Developing gradually" },
      { word: "surviving", sentence: "Plants are ___ in harsh conditions.", definition: "Continuing to live" },
      { word: "thriving", sentence: "Wildlife is ___ in the protected area.", definition: "Growing vigorously" },
      { word: "breathing", sentence: "All animals are ___ oxygen.", definition: "Taking in and expelling air" },
      { word: "moving", sentence: "Clouds are ___ across the sky.", definition: "Changing position" },
      { word: "flying", sentence: "Birds are ___ south for winter.", definition: "Moving through air" },
      { word: "swimming", sentence: "Fish are ___ in the ocean.", definition: "Moving through water" },
      { word: "climbing", sentence: "The cat is ___ up the tree.", definition: "Going upward" },
      { word: "hunting", sentence: "The owl is ___ for food at night.", definition: "Searching for prey" },
      { word: "grazing", sentence: "Cows are ___ in the field.", definition: "Eating grass" },
      { word: "nesting", sentence: "The birds are ___ in the spring.", definition: "Building a nest" },
      { word: "migrating", sentence: "Whales are ___ to warmer waters.", definition: "Moving seasonally" },
      { word: "hibernating", sentence: "Bears are ___ during winter.", definition: "Sleeping through winter" }
    ],
    quiz: [
      { word: "biodiversity", definition: "Variety of life in an ecosystem" },
      { word: "specimen", definition: "An individual example for study" },
      { word: "predator", definition: "An animal that hunts other animals" },
      { word: "herbivore", definition: "An animal that eats only plants" },
      { word: "carnivore", definition: "An animal that eats only meat" },
      { word: "omnivore", definition: "An animal that eats plants and meat" },
      { word: "vertebrate", definition: "An animal with a backbone" },
      { word: "invertebrate", definition: "An animal without a backbone" },
      { word: "mammal", definition: "Warm-blooded animal with fur" },
      { word: "reptile", definition: "Cold-blooded animal with scales" },
      { word: "amphibian", definition: "Animal living on land and water" },
      { word: "mineral", definition: "Natural inorganic solid substance" },
      { word: "fossil", definition: "Preserved remains of ancient life" },
      { word: "volcano", definition: "Mountain that erupts molten rock" },
      { word: "earthquake", definition: "Sudden shaking of the ground" },
      { word: "erosion", definition: "Wearing away of rock or soil" },
      { word: "precipitation", definition: "Rain, snow, or hail falling" },
      { word: "evaporation", definition: "Liquid turning into vapor" },
      { word: "condensation", definition: "Vapor turning into liquid" },
      { word: "circulation", definition: "Continuous movement in a cycle" }
    ]
  },

  unit4: {
    multipleChoice: [
      { word: "community", definition: "A group of people living together" },
      { word: "society", definition: "People living together in an organized way" },
      { word: "culture", definition: "Beliefs and customs of a group" },
      { word: "tradition", definition: "A custom passed down over time" },
      { word: "custom", definition: "A traditional practice" },
      { word: "ceremony", definition: "A formal event for a special occasion" },
      { word: "festival", definition: "A celebration of something" },
      { word: "celebration", definition: "Joyful recognition of an event" },
      { word: "neighborhood", definition: "An area where people live near each other" },
      { word: "citizen", definition: "A legal member of a country" },
      { word: "population", definition: "All people living in an area" },
      { word: "democracy", definition: "Government by the people" },
      { word: "government", definition: "The system that rules a country" },
      { word: "law", definition: "A rule made by authority" },
      { word: "justice", definition: "Fair treatment under the law" },
      { word: "rights", definition: "Things people are allowed to do" },
      { word: "responsibility", definition: "A duty to do something" },
      { word: "diversity", definition: "A range of different things" },
      { word: "heritage", definition: "Traditions passed down" },
      { word: "identity", definition: "Who someone is" }
    ],
    pronunciation: [
      { word: "bay", confuseWith: "bey", definition: "A body of water" },
      { word: "birth", confuseWith: "berth", definition: "The act of being born" },
      { word: "boy", confuseWith: "buoy", definition: "A male child" },
      { word: "build", confuseWith: "billed", definition: "To construct something" },
      { word: "capital", confuseWith: "capitol", definition: "The main city of a country" },
      { word: "council", confuseWith: "counsel", definition: "A group making decisions" },
      { word: "current", confuseWith: "currant", definition: "Happening now" },
      { word: "dear", confuseWith: "deer", definition: "Loved or valued" },
      { word: "dual", confuseWith: "duel", definition: "Having two parts" },
      { word: "earn", confuseWith: "urn", definition: "To receive money for work" },
      { word: "fir", confuseWith: "fur", definition: "A type of evergreen tree" },
      { word: "forth", confuseWith: "fourth", definition: "Forward or onward" },
      { word: "guest", confuseWith: "guessed", definition: "A visitor" },
      { word: "hart", confuseWith: "heart", definition: "A male deer" },
      { word: "higher", confuseWith: "hire", definition: "More elevated" },
      { word: "hymn", confuseWith: "him", definition: "A religious song" },
      { word: "lead", confuseWith: "led", definition: "To guide or direct" },
      { word: "mayor", confuseWith: "major", definition: "Head of a city government" },
      { word: "peace", confuseWith: "piece", definition: "Freedom from conflict" },
      { word: "principal", confuseWith: "principle", definition: "Most important" }
    ],
    scramble: [
      { word: "volunteer", scrambled: "olunteerv", definition: "To offer services freely" },
      { word: "cooperation", scrambled: "ooperationc", definition: "Working together" },
      { word: "contribution", scrambled: "ontributionc", definition: "Something given to help" },
      { word: "participation", scrambled: "articipationnp", definition: "Taking part in something" },
      { word: "organization", scrambled: "rganizationo", definition: "An organized group" },
      { word: "leadership", scrambled: "eadershipl", definition: "The action of leading" },
      { word: "citizenship", scrambled: "itizenshipc", definition: "Being a member of a country" },
      { word: "belonging", scrambled: "elongingb", definition: "Being part of a group" },
      { word: "solidarity", scrambled: "olidaritys", definition: "Unity of purpose" },
      { word: "equality", scrambled: "qualitye", definition: "Being equal in status" },
      { word: "freedom", scrambled: "reedomf", definition: "The power to act freely" },
      { word: "independence", scrambled: "ndependencei", definition: "Freedom from control" },
      { word: "liberty", scrambled: "ibertyl", definition: "The state of being free" },
      { word: "prosperity", scrambled: "rosperityp", definition: "Success and wealth" },
      { word: "progress", scrambled: "rogressp", definition: "Forward movement" },
      { word: "development", scrambled: "evelopmentd", definition: "Growth or advancement" },
      { word: "improvement", scrambled: "mprovementi", definition: "Making something better" },
      { word: "innovation", scrambled: "nnovationi", definition: "A new idea or method" },
      { word: "achievement", scrambled: "chievementa", definition: "Something accomplished" },
      { word: "excellence", scrambled: "xcellencee", definition: "The quality of being excellent" }
    ],
    fillBlanks: [
      { word: "united", sentence: "We are stronger when we are ___.", definition: "Joined together" },
      { word: "together", sentence: "Let's work ___ to solve this problem.", definition: "With each other" },
      { word: "sharing", sentence: "We are ___ our resources with neighbors.", definition: "Giving portions to others" },
      { word: "helping", sentence: "They are ___ elderly people in the community.", definition: "Giving assistance" },
      { word: "building", sentence: "We are ___ a better future for all.", definition: "Constructing or creating" },
      { word: "creating", sentence: "Artists are ___ beautiful public art.", definition: "Bringing into existence" },
      { word: "supporting", sentence: "The community is ___ local businesses.", definition: "Giving help or encouragement" },
      { word: "serving", sentence: "She is ___ on the town council.", definition: "Performing duties" },
      { word: "contributing", sentence: "Everyone is ___ to the food drive.", definition: "Giving to a cause" },
      { word: "participating", sentence: "Citizens are ___ in the election.", definition: "Taking part" },
      { word: "celebrating", sentence: "The town is ___ its anniversary.", definition: "Recognizing joyfully" },
      { word: "honoring", sentence: "We are ___ our local heroes.", definition: "Showing respect" },
      { word: "respecting", sentence: "We must keep ___ different opinions.", definition: "Showing consideration" },
      { word: "welcoming", sentence: "The community is ___ new residents.", definition: "Greeting warmly" },
      { word: "including", sentence: "Everyone is ___ in our activities.", definition: "Making part of" },
      { word: "accepting", sentence: "We are ___ people from all backgrounds.", definition: "Receiving willingly" },
      { word: "embracing", sentence: "The city is ___ cultural diversity.", definition: "Accepting enthusiastically" },
      { word: "cooperating", sentence: "Neighbors are ___ to clean the park.", definition: "Working together" },
      { word: "collaborating", sentence: "Schools are ___ with parents.", definition: "Working jointly" },
      { word: "organizing", sentence: "Volunteers are ___ community events.", definition: "Arranging systematically" }
    ],
    quiz: [
      { word: "municipality", definition: "A city or town with its own government" },
      { word: "ordinance", definition: "A local law or regulation" },
      { word: "constituency", definition: "A group of voters in an area" },
      { word: "assembly", definition: "A group gathered for a purpose" },
      { word: "legislature", definition: "Law-making body of government" },
      { word: "judiciary", definition: "The judicial system" },
      { word: "executive", definition: "Branch that enforces laws" },
      { word: "amendment", definition: "A change to a law or document" },
      { word: "constitution", definition: "Basic laws of a nation" },
      { word: "referendum", definition: "A vote by citizens on an issue" },
      { word: "ballot", definition: "A paper used for voting" },
      { word: "suffrage", definition: "The right to vote" },
      { word: "coalition", definition: "An alliance of groups" },
      { word: "advocacy", definition: "Public support for a cause" },
      { word: "petition", definition: "A formal written request" },
      { word: "protocol", definition: "Official rules and customs" },
      { word: "delegate", definition: "A person sent to represent others" },
      { word: "embassy", definition: "Official residence of ambassador" },
      { word: "diplomacy", definition: "Managing international relations" },
      { word: "sovereignty", definition: "Supreme power or authority" }
    ]
  }
};

const courseData = {
  units: [
    {
      id: 1,
      title: "Academic Excellence",
      page: "P. 13",
      color: "#60a5fa",
      emoji: "🎓",
      description: "Master essential academic vocabulary and school-related terms to excel in your studies.",
      learningGoals: [
        "Understand academic terminology",
        "Use educational vocabulary in context",
        "Describe school activities confidently"
      ]
    },
    {
      id: 2,
      title: "Family & Relationships",
      page: "P. 28",
      color: "#f472b6",
      emoji: "👨‍👩‍👧‍👦",
      description: "Explore family vocabulary and learn to describe relationships in modern households.",
      learningGoals: [
        "Describe family members and relationships",
        "Express family activities",
        "Understand family roles and responsibilities"
      ]
    },
    {
      id: 3,
      title: "Science & Nature",
      page: "P. 45",
      color: "#10b981",
      emoji: "🔬",
      description: "Discover scientific concepts and vocabulary related to the natural world.",
      learningGoals: [
        "Use scientific terminology correctly",
        "Describe natural phenomena",
        "Understand basic ecology and biology"
      ]
    },
    {
      id: 4,
      title: "Community & Culture",
      page: "P. 62",
      color: "#f59e0b",
      emoji: "🏘️",
      description: "Learn vocabulary for civic life, cultural practices, and community involvement.",
      learningGoals: [
        "Understand civic and cultural terms",
        "Describe community activities",
        "Express ideas about society and culture"
      ]
    }
  ]
};

const welcomeMessages = [
  "Ready to expand your vocabulary today?",
  "Let's make learning an adventure!",
  "Your brain is amazing - let's exercise it!",
  "Every word you learn opens new doors!",
  "Knowledge is power - let's grow together!"
];

const getBadge = (unitsCompleted) => {
  if (unitsCompleted >= 4) return { emoji: "👑", name: "Vocabulary Master", color: "#fbbf24" };
  if (unitsCompleted >= 3) return { emoji: "🥇", name: "Gold Achiever", color: "#f59e0b" };
  if (unitsCompleted >= 2) return { emoji: "🥈", name: "Silver Learner", color: "#9ca3af" };
  if (unitsCompleted >= 1) return { emoji: "🥉", name: "Bronze Starter", color: "#d97706" };
  return { emoji: "🌟", name: "Beginner", color: "#8b5cf6" };
};

const congratulationMessages = [
  "Outstanding work! You're becoming a vocabulary expert!",
  "Phenomenal achievement! Your dedication is impressive!",
  "Bravo! You've mastered another unit brilliantly!",
  "Magnificent! Your vocabulary skills are growing rapidly!",
  "Superb performance! Keep up the excellent work!",
  "Exceptional! You're on the path to vocabulary mastery!",
  "Incredible job! Your hard work is paying off!",
  "Remarkable! You've proven your dedication to learning!"
];

const activityCompletionMessages = {
  excellent: [
    { emoji: "🌟", message: "Brilliant! You're a vocabulary superstar!", color: "#fbbf24" },
    { emoji: "🏆", message: "Outstanding! You're mastering this perfectly!", color: "#f59e0b" },
    { emoji: "✨", message: "Exceptional work! You're absolutely brilliant!", color: "#a78bfa" }
  ],
  good: [
    { emoji: "👍", message: "Good job! You're doing well, keep it up!", color: "#10b981" },
    { emoji: "😊", message: "Nice work! You're making solid progress!", color: "#22c55e" }
  ],
  average: [
    { emoji: "📚", message: "Average performance. Try reviewing the words again.", color: "#f59e0b" }
  ],
  needsImprovement: [
    { emoji: "📝", message: "Keep trying! Review these words and practice more.", color: "#ef4444" }
  ]
};

function App() {
  const [screen, setScreen] = useState('welcome');
  const [student, setStudent] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [unit, setUnit] = useState(null);
  const [activity, setActivity] = useState(0);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [unlocked, setUnlocked] = useState([1]);
  const [feedback, setFeedback] = useState('');
  const [showFB, setShowFB] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [input, setInput] = useState('');
  const [hints, setHints] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const [unitScore, setUnitScore] = useState(0);
  const [showActivityComplete, setShowActivityComplete] = useState(false);
  const [activityFeedback, setActivityFeedback] = useState({ message: '', emoji: '', score: 0 });
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    setWelcomeMsg(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
  }, [student]);

  useEffect(() => {
    if (student) {
      const savedData = localStorage.getItem(`englishAdventure_${student}`);
      if (savedData) {
        const data = JSON.parse(savedData);
        setScore(data.score || 0);
        setStars(data.stars || 0);
        setCompleted(data.completed || []);
        setUnlocked(data.unlocked || [1]);
        setMaxStreak(data.maxStreak || 0);
        setHints(data.hints !== undefined ? data.hints : 5);
      }
    }
  }, [student]);

  useEffect(() => {
    if (student) {
      const dataToSave = {
        student,
        score,
        stars,
        completed,
        unlocked,
        maxStreak,
        hints,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`englishAdventure_${student}`, JSON.stringify(dataToSave));
    }
  }, [student, score, stars, completed, unlocked, maxStreak, hints]);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  const getCurrentVocabSet = () => {
    if (!unit) return [];
    const unitData = vocabularyData[`unit${unit.id}`];
    if (!unitData) return [];
    
    switch(activity) {
      case 0: return unitData.multipleChoice;
      case 1: return unitData.pronunciation;
      case 2: return unitData.scramble;
      case 3: return unitData.fillBlanks;
      case 4: return unitData.quiz;
      default: return [];
    }
  };

  const handleStart = () => {
    if (nameInput.trim()) {
      setStudent(nameInput.trim());
      setScreen('home');
    }
  };

  const selectUnit = (u) => {
    if (!unlocked.includes(u.id)) {
      alert('🔒 Complete previous units first!');
      return;
    }
    setUnit(u);
    setScreen('unitIntro');
  };

  const startUnit = () => {
    setActivity(0);
    setQuestion(0);
    setUnitScore(0);
    setCorrect(0);
    setStreak(0);
    setScreen('activity');
  };

  const handleAnswer = (ans, correctAns, isText = false) => {
    const isCorrect = isText 
      ? ans.toLowerCase().trim() === correctAns.toLowerCase() 
      : ans === correctAns;
    
    if (isCorrect) {
      const pts = 10 + (streak * 2);
      setScore(prev => prev + pts);
      setUnitScore(prev => prev + pts);
      setStars(prev => prev + 1);
      setCorrect(prev => prev + 1);
      setStreak(prev => prev + 1);
      if (streak + 1 > maxStreak) setMaxStreak(streak + 1);
      setFeedback(`⭐ Perfect! +${pts} pts! 🔥 ${streak + 1} streak!`);
    } else {
      setStreak(0);
      setFeedback(`❌ Correct answer: ${correctAns}`);
    }
    
    setShowFB(true);
    setInput('');
    
    setTimeout(() => {
      setShowFB(false);
      const nextQuestionNum = question + 1;
      const currentVocabSet = getCurrentVocabSet();
      
      if (nextQuestionNum < currentVocabSet.length) {
        setQuestion(nextQuestionNum);
      } else {
        nextActivity();
      }
    }, 1600);
  };

  const nextActivity = () => {
    if (activity < 4) {
      const accuracyPercent = Math.round((correct / ((activity + 1) * 20)) * 100);
      
      let feedbackArray;
      if (accuracyPercent >= 80) feedbackArray = activityCompletionMessages.excellent;
      else if (accuracyPercent >= 60) feedbackArray = activityCompletionMessages.good;
      else if (accuracyPercent >= 50) feedbackArray = activityCompletionMessages.average;
      else feedbackArray = activityCompletionMessages.needsImprovement;
      
      const randomFeedback = feedbackArray[Math.floor(Math.random() * feedbackArray.length)];
      
      setActivityFeedback({
        message: randomFeedback.message,
        emoji: randomFeedback.emoji,
        color: randomFeedback.color,
        accuracy: accuracyPercent
      });
      setShowActivityComplete(true);
      
      setTimeout(() => {
        setShowActivityComplete(false);
        setActivity(prev => prev + 1);
        setQuestion(0);
        setInput('');
      }, 3500);
    } else {
      if (!completed.includes(unit.id)) {
        setCompleted(prev => [...prev, unit.id]);
        if (unit.id < 4 && !unlocked.includes(unit.id + 1)) {
          setUnlocked(prev => [...prev, unit.id + 1]);
        }
      }
      setScreen('completion');
    }
  };

  const useHint = () => {
    if (hints > 0) {
      setHints(prev => prev - 1);
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    }
  };

  // SCREENS START HERE - I'll continue in next message due to length...
  
  return <div>App content goes here</div>;
}

export default App;


