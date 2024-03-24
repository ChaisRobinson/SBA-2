// const courseInfo = {
//     id: 451,
//     name: "Introduction to JavaScript"
//   };

//   const assignmentGroup = {
//     id: 12345,
//     name: "Fundamentals of JavaScript",
//     course_id: 451,
//     group_weight: 25,
//     assignments: [
//       {
//         id: 1,
//         name: "Declare a Variable",
//         due_at: "2023-01-25",
//         points_possible: 50
//       },
//       {
//         id: 2,
//         name: "Write a Function",
//         due_at: "2023-02-27",
//         points_possible: 150
//       },
//       {
//         id: 3,
//         name: "Code the World",
//         due_at: "3156-11-15",
//         points_possible: 500
//       }
//     ]
//   };

//   const learnerSubmissions = [
//     {
//       learner_id: 125,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-25",
//         score: 47
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-02-12",
//         score: 150
//       }
//     },
//     {
//       learner_id: 125,
//       assignment_id: 3,
//       submission: {
//         submitted_at: "2023-01-25",
//         score: 400
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 1,
//       submission: {
//         submitted_at: "2023-01-24",
//         score: 39
//       }
//     },
//     {
//       learner_id: 132,
//       assignment_id: 2,
//       submission: {
//         submitted_at: "2023-03-07",
//         score: 140
//       }
//     }
//   ];

// Accessing data inside of objects using dot notation
// console.log(courseInfo.id)
// console.log(courseInfo.name)
//console.log(courseInfo["id"])

// Accessing data inside of objects using dot notation and indexing inside of arrays nested within objects
// console.log(assignmentGroup.course_id)
// console.log(assignmentGroup.assignments)
// console.log(assignmentGroup.assignments[1])
// console.log(assignmentGroup.assignments[2].due_at)

// Performing a math calculation using two pieces of data nested inside of an array and multiple objects
// console.log(learnerSubmissions[0].submission.score + learnerSubmissions[1].submission.score)

///////////////////////////////////////////Class Examples ///////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////SBA 308//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

//////Logic to get answers/////////////////////////////////
const topOne =
  LearnerSubmissions[0].submission.score +
  AssignmentGroup.assignments[1].points_possible;
const topTwo = LearnerSubmissions[3].submission.score + 125;
const bottumOne =
  AssignmentGroup.assignments[0].points_possible +
  AssignmentGroup.assignments[1].points_possible;
const bottumTwo =
  AssignmentGroup.assignments[0].points_possible +
  AssignmentGroup.assignments[1].points_possible;
const averageOne = topOne / bottumOne;
const averageTwo = topTwo / bottumTwo;
const user125_1 =
  LearnerSubmissions[0].submission.score /
  AssignmentGroup.assignments[0].points_possible;
const user125_2 =
  LearnerSubmissions[1].submission.score /
  AssignmentGroup.assignments[1].points_possible;
const user132_1 =
  LearnerSubmissions[3].submission.score /
  AssignmentGroup.assignments[0].points_possible;
const user132_2 =
  (LearnerSubmissions[4].submission.score - 15) /
  AssignmentGroup.assignments[1].points_possible;

console.log(`const result = [`);
console.log(`  {`);
console.log("    id: ", LearnerSubmissions[0].learner_id);
console.log("    avg: ", averageOne);
console.log("    1: ", user125_1);
console.log("    2: ", user125_2);
console.log(`  },`);
console.log(`  }`);
console.log("    id: ", LearnerSubmissions[3].learner_id);
console.log("    avg: ", averageTwo);
console.log("    1: ", user132_1);
console.log("    2: ", user132_2);
console.log(`  }`);
console.log(` };`);
///////////////////////////////////////////////////////////////




function getLearnerData(course, ag, submissions) {
  // open arrary to fill in
  const learnerData = [];
  //function/loop to iterate over each learner
  for (const learnerSubmissions of submissions){
    const learnerId = learnerSubmissions.learner_id;
    const learnerSubmissions = submissions.filter( 
      (submissions) => submissions.learner_id === learner_Id
      );
  //create first part of array-object and set avg to 0
      const learnerDetails = {
        id: learnerId,
        avg: 0,
      };
  }
  //create and set score and possibleScore to 0 
  let totalScore = 0;
  let totalPossibleScore=0;


  //function/loop to calculate total score and total posible score for the learner
  

  //statement to calculate avaerage score

  //loop to assign scorecs for each assignment 



  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);








///////////////////Answer//////////////////////////////
//     const result = [                              //
//       {                                           //
//         id: 125,                                  //
//         avg: 0.985, // (47 + 150) / (50 + 150)    //
//         1: 0.94, // 47 / 50                       //
//         2: 1.0 // 150 / 150                       //
//       },                                          //
//       {                                           //
//         id: 132,                                  //
//         avg: 0.82, // (39 + 125) / (50 + 150)     //
//         1: 0.78, // 39 / 50                       //
//         2: 0.833 // late: (140 - 15) / 150        //
//       }                                           //
//     ];                                            //
///////////////////////////////////////////////////////