function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  let average = 0;
  
  function studentMsg(totalScores, studentScore) {
    
    average = getAverage(totalScores);
    let grade = getGrade(studentScore)
    if (grade == "F") {
      return "Class average: " + average + ". Your grade: " + grade + ". You failed the course."
    }
    else {
      return "Class average: " + average + ". Your grade: " + grade + ". You passed the course."
    }
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
  
  