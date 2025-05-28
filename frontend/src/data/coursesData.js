export const coursesData = {
  'thinking-in-code': {
    id: 'thinking-in-code',
    title: 'Thinking in Code',
    description: 'Build solid foundations for computational problem solving.',
    level: 1,
    lessons: 46,
    practice: 125,
    category: 'Computer Science',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    chapters: [
      {
        id: 'taking-first-steps',
        title: 'Taking the First Steps',
        lessons: [
          {
            id: 'sequencing-commands',
            title: 'Sequencing Commands',
            description: 'Learn how to write step-by-step instructions for a computer.',
            completed: false,
            content: {
              theory: `
                <h2>Sequencing Commands</h2>
                <p>Programming is fundamentally about giving computers a sequence of instructions to follow. Just like following a recipe or assembling furniture from IKEA, computers need clear, step-by-step directions.</p>
                
                <h3>What is a Sequence?</h3>
                <p>A sequence is an ordered list of instructions that the computer executes one after another. The order matters!</p>
                
                <div class="example-box">
                  <h4>Example: Making a Sandwich</h4>
                  <ol>
                    <li>Get two slices of bread</li>
                    <li>Spread peanut butter on one slice</li>
                    <li>Spread jelly on the other slice</li>
                    <li>Put the slices together</li>
                  </ol>
                  <p>If you change the order (like putting slices together first), you get a very different result!</p>
                </div>
                
                <h3>In Programming</h3>
                <p>When we write code, each line is typically executed in order from top to bottom. Here's a simple example in Python:</p>
                
                <pre><code>
print("Hello")
print("World")
print("!")
                </code></pre>
                
                <p>This will output:</p>
                <pre><code>
Hello
World
!
                </code></pre>
              `,
              practice: [
                {
                  id: 1,
                  question: "Which sequence correctly makes a paper airplane?",
                  options: [
                    "Fold, Cut, Throw, Fold",
                    "Cut, Fold, Fold, Throw", 
                    "Fold, Fold, Cut, Throw",
                    "Fold, Fold, Throw, Cut"
                  ],
                  correct: 1,
                  explanation: "You need to fold the paper first to create the airplane shape, then you can throw it. Cutting comes after the basic folds are made."
                },
                {
                  id: 2,
                  question: "What will this code output?\n\nprint('A')\nprint('B')\nprint('C')",
                  options: [
                    "ABC",
                    "A\nB\nC",
                    "CBA", 
                    "B\nA\nC"
                  ],
                  correct: 1,
                  explanation: "Each print statement outputs its text on a new line, so A, B, and C will be printed on separate lines."
                }
              ]
            }
          },
          {
            id: 'debugging-basics',
            title: 'Debugging Basics',
            description: 'Learn to identify and fix errors in your code.',
            completed: false,
            content: {
              theory: `
                <h2>Debugging Basics</h2>
                <p>Debugging is the process of finding and fixing errors (bugs) in your code. Even experienced programmers spend a lot of time debugging!</p>
                
                <h3>Common Types of Bugs</h3>
                <ul>
                  <li><strong>Syntax Errors:</strong> Typos or incorrect grammar in your code</li>
                  <li><strong>Logic Errors:</strong> Code runs but produces wrong results</li>
                  <li><strong>Runtime Errors:</strong> Code crashes while running</li>
                </ul>
                
                <h3>Debugging Strategies</h3>
                <ol>
                  <li><strong>Read error messages carefully</strong> - they often tell you exactly what's wrong</li>
                  <li><strong>Check your syntax</strong> - missing punctuation, brackets, or quotes</li>
                  <li><strong>Trace through your logic</strong> - step through each line mentally</li>
                  <li><strong>Use print statements</strong> - see what values your variables have</li>
                </ol>
                
                <div class="example-box">
                  <h4>Example: Finding a Bug</h4>
                  <p>Buggy code:</p>
                  <pre><code>
name = "Alice"
age = 25
print("Hello, " + name + "! You are " + age + " years old.")
                  </code></pre>
                  <p>Error: Cannot concatenate string and integer</p>
                  <p>Fix: Convert age to string</p>
                  <pre><code>
print("Hello, " + name + "! You are " + str(age) + " years old.")
                  </code></pre>
                </div>
              `,
              practice: [
                {
                  id: 1,
                  question: "What's wrong with this code?\n\nprint('Hello World'",
                  options: [
                    "Missing closing parenthesis",
                    "Wrong quotes",
                    "Misspelled 'print'",
                    "Nothing is wrong"
                  ],
                  correct: 0,
                  explanation: "The print statement is missing a closing parenthesis ')' at the end."
                }
              ]
            }
          }
        ]
      },
      {
        id: 'conditional-logic',
        title: 'Conditional Logic',
        lessons: [
          {
            id: 'if-statements',
            title: 'If Statements',
            description: 'Make your programs smart with conditional logic.',
            completed: false,
            content: {
              theory: `
                <h2>If Statements</h2>
                <p>If statements allow your program to make decisions and execute different code based on conditions.</p>
                
                <h3>Basic If Statement</h3>
                <pre><code>
if condition:
    # do something
                </code></pre>
                
                <h3>If-Else Statement</h3>
                <pre><code>
if condition:
    # do something
else:
    # do something else
                </code></pre>
                
                <div class="example-box">
                  <h4>Example: Age Checker</h4>
                  <pre><code>
age = 18
if age >= 18:
    print("You can vote!")
else:
    print("You're too young to vote.")
                  </code></pre>
                </div>
              `,
              practice: [
                {
                  id: 1,
                  question: "What will this code print if temperature = 75?\n\nif temperature > 80:\n    print('Hot')\nelse:\n    print('Cool')",
                  options: [
                    "Hot",
                    "Cool",
                    "Nothing",
                    "Error"
                  ],
                  correct: 1,
                  explanation: "Since 75 is not greater than 80, the condition is false, so 'Cool' will be printed."
                }
              ]
            }
          }
        ]
      },
      {
        id: 'loops-iteration',
        title: 'Loops and Iteration',
        lessons: [
          {
            id: 'for-loops',
            title: 'For Loops',
            description: 'Repeat actions efficiently with for loops.',
            completed: false,
            content: {
              theory: `
                <h2>For Loops</h2>
                <p>For loops let you repeat code a specific number of times or iterate through a collection of items.</p>
                
                <h3>Basic For Loop</h3>
                <pre><code>
for i in range(5):
    print(i)
                </code></pre>
                <p>This prints numbers 0 through 4.</p>
                
                <h3>Looping Through Lists</h3>
                <pre><code>
fruits = ['apple', 'banana', 'orange']
for fruit in fruits:
    print(fruit)
                </code></pre>
              `,
              practice: [
                {
                  id: 1,
                  question: "How many times will 'Hello' be printed?\n\nfor i in range(3):\n    print('Hello')",
                  options: [
                    "2 times",
                    "3 times", 
                    "4 times",
                    "Infinite times"
                  ],
                  correct: 1,
                  explanation: "range(3) creates a sequence from 0 to 2 (3 numbers total), so the loop runs 3 times."
                }
              ]
            }
          }
        ]
      }
    ]
  },
  
  'mathematical-thinking': {
    id: 'mathematical-thinking',
    title: 'Mathematical Thinking',
    description: 'Develop logical reasoning and problem-solving skills.',
    level: 1,
    lessons: 35,
    practice: 89,
    category: 'Math',
    image: 'https://images.pexels.com/photos/159746/notebook-pen-pencil-education-159746.jpeg',
    chapters: [
      {
        id: 'logic-puzzles',
        title: 'Logic Puzzles',
        lessons: [
          {
            id: 'deductive-reasoning',
            title: 'Deductive Reasoning',
            description: 'Learn to draw logical conclusions from given information.',
            completed: false,
            content: {
              theory: `
                <h2>Deductive Reasoning</h2>
                <p>Deductive reasoning starts with general principles and applies them to specific cases to reach logical conclusions.</p>
                
                <h3>Structure of Deductive Arguments</h3>
                <ul>
                  <li><strong>Premise 1:</strong> A general statement</li>
                  <li><strong>Premise 2:</strong> A specific case</li>
                  <li><strong>Conclusion:</strong> Logical result</li>
                </ul>
                
                <div class="example-box">
                  <h4>Classic Example</h4>
                  <p><strong>Premise 1:</strong> All humans are mortal.</p>
                  <p><strong>Premise 2:</strong> Socrates is human.</p>
                  <p><strong>Conclusion:</strong> Therefore, Socrates is mortal.</p>
                </div>
                
                <h3>Mathematical Deduction</h3>
                <p>In mathematics, we use deductive reasoning constantly:</p>
                <ul>
                  <li>If a = b and b = c, then a = c (transitivity)</li>
                  <li>If all angles in a triangle sum to 180°, and this is a triangle, then its angles sum to 180°</li>
                </ul>
              `,
              practice: [
                {
                  id: 1,
                  question: "Given:\n• All birds can fly\n• Penguins are birds\n\nWhat can we conclude?",
                  options: [
                    "Penguins can fly",
                    "Penguins cannot fly",
                    "Some birds cannot fly",
                    "The premises are contradictory"
                  ],
                  correct: 0,
                  explanation: "Based on deductive reasoning from the given premises, we must conclude penguins can fly. However, this shows why premises must be accurate - in reality, not all birds can fly!"
                }
              ]
            }
          }
        ]
      }
    ]
  },

  'data-analysis': {
    id: 'data-analysis',
    title: 'Introduction to Data Analysis',
    description: 'Learn to analyze and interpret data effectively.',
    level: 2,
    lessons: 28,
    practice: 67,
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab',
    chapters: [
      {
        id: 'data-basics',
        title: 'Data Fundamentals',
        lessons: [
          {
            id: 'types-of-data',
            title: 'Types of Data',
            description: 'Understand different categories and types of data.',
            completed: false,
            content: {
              theory: `
                <h2>Types of Data</h2>
                <p>Understanding different types of data is crucial for choosing the right analysis methods.</p>
                
                <h3>Categorical vs Numerical Data</h3>
                <ul>
                  <li><strong>Categorical (Qualitative):</strong> Describes qualities or characteristics</li>
                  <li><strong>Numerical (Quantitative):</strong> Represents quantities or amounts</li>
                </ul>
                
                <h3>Categorical Data Types</h3>
                <ul>
                  <li><strong>Nominal:</strong> Categories with no natural order (colors, names)</li>
                  <li><strong>Ordinal:</strong> Categories with natural order (grades: A, B, C, D, F)</li>
                </ul>
                
                <h3>Numerical Data Types</h3>
                <ul>
                  <li><strong>Discrete:</strong> Countable values (number of students)</li>
                  <li><strong>Continuous:</strong> Measurable values (height, weight)</li>
                </ul>
                
                <div class="example-box">
                  <h4>Examples</h4>
                  <p><strong>Categorical:</strong> Gender, favorite color, education level</p>
                  <p><strong>Numerical:</strong> Age, income, test scores</p>
                </div>
              `,
              practice: [
                {
                  id: 1,
                  question: "What type of data is 'Customer satisfaction rating (1-5 stars)'?",
                  options: [
                    "Nominal categorical",
                    "Ordinal categorical", 
                    "Discrete numerical",
                    "Continuous numerical"
                  ],
                  correct: 1,
                  explanation: "Star ratings are categorical data with a natural order (1 star < 2 stars < ... < 5 stars), making them ordinal categorical data."
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

export const getAllCourses = () => {
  return Object.values(coursesData);
};

export const getCourse = (courseId) => {
  return coursesData[courseId];
};

export const getLesson = (courseId, lessonId) => {
  const course = getCourse(courseId);
  if (!course) return null;
  
  for (const chapter of course.chapters) {
    const lesson = chapter.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
};