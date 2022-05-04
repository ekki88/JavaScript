// Q1. make a string out of an array 주어진 배열을 스트링으로 변환하라
{
    const fruits = ['apple', 'banana', 'orange'];
    const. result =fruits.Join(|);
    console.log(result);
// 구분자 원하는 방식으로 가능
}

  // Q2. make an array out of a string 스트링을 배열로 변환 
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const resuit = fruits.split(',', 2);
    console.log(result);
    // 구분자는 필수로 리밋은 맘대로 어디까지 받을수있는지 
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{   
    const array = [1, 2, 3, 4, 5];
    const resuit = array.reverse();
    console.log(result);
    console.log(array);
    //배열자체를 변환시켜서 리턴값도 변환
}

  // Q4. make new array without the first two elements 일부분만 남기고 리턴해서 받아와라
{
    const array = [1, 2, 3, 4, 5];
    const result = array.silce(0,2);
    console.log(result);
    console.log(array);
}

    class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90 // 학생이 점수가 90인 
{  
    const result = students.find((student,) => return student.score === 90)
    console.log (result);
}


  // Q6. make an array of enrolled students
{   const result = students.filter((student) => student.enrolled);
    console.log(result);
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{   const result =  students.map((student) => student.score);
    console.log(result);
}

  // Q8. check if there is a student with the score lower than 50
{   const result = students.some((students) => students.score < 50);
    console.log(result);
    // 어떤조건이 부합할때

    const recsult2 = students.every((students) => students.score < 50);
    console.log(result2); 
    //모든학생이 다 조건에 부합할때
}


  // Q9. compute students' average score
{   const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length) ;    
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{   const result = students.map((students) => student.score).join();
    console.log(result);
}
