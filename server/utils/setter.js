const connectDB = require('./db');
// const PO = require('../models/PO')
const Course = require('../models/Course')

connectDB();
poNames = [
    "Engineering Knowledge",
    "Problem Analysis",
    "Design/ development of solutions",
    "Investigation",
    "Modern Tool Usage",
    "The Engineer and Society",
    "Environment and Sustainability",
    "Ethics",
    "Individual and Team work",
    "Communication",
    "Project Management and Finance",
    "Lifelong learning"
  ];
  
  courseID =
  [
      "CSE101",    
      "CSE103",    
      "CSE205",    
      "CSE215",    
      "CSE301",    
      "CSE325",    
      "CSE408",    
      "CSE425",    
  ];
  

  Topics=[
    ["Introduction", "Array" ,"I/O" ],
    ["Introduction", "Logic", "Inclusion & Exclusion"],
    ["AVL tree", "BFS Algo" , "Heap"],
    ["Triggers", "Functions" ,"NoSQL"],
    ["Combinatorics", "Probabilty", "Recurrence Relations"],
    ["Class Diagram", "Data Flow Diagram"],
    ["Overview", "ERD presentation"],
    ["Principles", "Interactive System Design"]
  ]
  

  comnam =['North','East', 'West','South'];
  coTop = [
    [[1,2],[3],[1,3]],
    [[1],[1],[1]],
    [[1,2],[2],[1]],
    [[1,2],[1,2,3],[1,4]],
    [[1,2],[2],[1]],
    [[1,2],[1]],
    [[1,2],[2]],
    [[1],[2]]
  ];

  COlist = [
    ['North','East', 'West'],
    ['North'],
    ['North','East'],
    ['North','East', 'West','South'],
    ['North','East'],
    ['North','East'],
    ['North','East'],
    ['North','East']
  ];


  passwords = 
  [
    '012',
    '123',
    '234',
    '345',
    '456',
    '567',
    '678',
    '789',
    '890',
    '901'
  ];



  /*


  (async ()=>{
    const co = await CO.findAll({
      where :
      {
        name : 'North_CSE103'
      }
    });

    //console.log(co)
  })().catch((e)=>{console.log(e)});  
  */


  
  
  TeachNames =
  [
      "Dr. M. Sohel Rahman",    
      "Dr. Mohammed Eunus Ali",    
      "Dr. Mahmuda Naznin",    
      "Dr. Anindya Iqbal",    
      "Dr. Muhammad Abdullah Adnan",    
      "Sukarna Barua",    
      "Dr. Sadia Sharmin"    
  ];
  
  
  
  
  
  coNames = [
    "Engineering Knowledge",
    "Problem Analysis",
    "Design/ development of solutions",
    "Investigation",
    "Modern Tool Usage",
    "The Engineer and Society",
    "Environment and Sustainability",
    "Ethics",
    "Individual and Team work",
    "Communication",
    "Project Management and Finance",
    "Lifelong learning"
  ];
  
  
  
  
  COPO = [
    [[1,2],[4], [3,6]],
    [[1,2]],
    [[1,2],[4]],
    [[1,2],[4],[3,6],[12]],
    [[1,2],[4]],
    [[1,2],[4]],
    [[1,2],[4]],
    [[1,2],[4]]

  ]
  TeCour = [
    [[20, courseID[6]],[19, courseID[1]],[18, courseID[1]],[20, courseID[4]]],//Sohel Sir
    [[20, courseID[6]],[18, courseID[3]]],//Eunus Sir
    [[20, courseID[6]],[17, courseID[1]],[19, courseID[4]]],//Mahmuda Ma'am
    [[20, courseID[6]],[19, courseID[5]]],//Anindya Sir
    [[20, courseID[6]],[19, courseID[4]]],//Adnan Sir
    [[20, courseID[6]],[17, courseID[0]],[18, courseID[2]]],//Sukarna Sir
    [[20, courseID[6]],[20, courseID[7]]]//Sadia mam 
  ]
  //console.log(TeCour[0].length)
  ModCour = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ]
  SetQu = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ]
  ModQu = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
  ]
  
  
  
  courseNames =
  [
    "Structured Programming Language",    
    "Discrete Mathematics",    
    "Data Stuctures and Algorithms-I",    
    "Database",    
    "Concrete Mathematics",    
    "Information System and Desingn",    
    "Software Project Development",    
    "Human Computer Interaction",    
  ]
  TeachDes =
  [
    "Professor",   
    "Professor",   
    "Professor",   
    "Assoc. Professor",   
    "Assoc. Professor",   
    "Assist. Professor",   
    "Assist. Professor"   
  ]

  
  credHours =[
    3.00,
    4.00,
    3.00,
    3.00,
    3.00,
    2.00,
    1.50,
    3.00
  ]
  stdNames =[
    "Ashraful",
    "Zawad",
    "Bishwa",
    "Redwan",
    "Navid",
    "Avijit",
    "Shahrar",
    "Fardin",
    "Hisham",
    "Rakib"
  ];


  
// for(let i=0;i<poNames.length && i>=0;i++){
//     //let po ; 
//     (async () => {
        
//         //await sequelize.sync({ force: true });
//         await PO.create({name: poNames[i]});
//         // Code here
//     })().catch((e)=>{
//         console.log(e)
//     });
// //pos.push(po.toJSON())
// }


// for (let i=1; i<=4; i++)
// {
//   for(let j=1; j<=i*2; j++)
//   {
    
//     (async () => {
      
//       //await sequelize.sync({ force: true });
//       await Course.create({name: courseNames[j-1], title : courseID[j-1], year : 2016+i, credit_hours : credHours[j-1]});
//       //console.log("Anjum : ", j);
//       // Code here
//     })().catch((e)=>{
//       console.log(e)
//     });
//   }
// }