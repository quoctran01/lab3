const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

 const geography = [
  {
    question: "Câu 1: Ai là nhà triết học đã viết 'Chủ nghĩa Mac-Lenin'?",
    answerA:
      "A. Karl Marx.",
    answerB:
      "B. Friedrich Engels.",
    answerC:
      "C. V.I. Lenin.",
    answerD:
      "D. Karl Popper.",
  },
  {
    question: "Câu 2: Sự kiện nào kết thúc Chiến tranh thế giới thứ hai?",
    answerA:
      "A. Sự kiện Pearl Harbor.",
    answerB:
      "B. Nạn đói ở Biafra.",
    answerC:
      "C. Nổ bom nguyên tử ở Hiroshima và Nagasaki.",
    answerD:
      "D. Ký hiệp định Paris.",
  },
];


const history = [
  {
    question: "Câu 1: Đại biểu xuất sắc cho nền bi kịch cổ điển Pháp ở buổi đầu thời cận đại là",
    answerA:
      "A. La Phông-ten.",
    answerB:
      "B. Mô-li-e.",
    answerC:
      "C. Coóc-nây.",
    answerD:
      "D. Sếch-xpia.",
  },
  {
    question: "Câu 2: Cuộc Duy tân Minh Trị của Nhật Bản được tiến hành từ năm",
    answerA:
      "A. 1868.",
    answerB:
      "B. 1889.",
    answerC:
      "C. 1886.",
    answerD:
      "D. 1898.",
  },
];

const render = (exams) => {
  const content = exams.map((exam, index) => { 
    return `
            <div class="question">${exam.question}</div>
            <div class="row">
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerA"></input>
                    <label for="answerA">${exam.answerA}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerB"></input>
                    <label for="answerB">${exam.answerB}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerC"></input>
                    <label for="answerC">${exam.answerC}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerD"></input>
                    <label for="answerD">${exam.answerD}</label>
                </div>
            </div>
            </div>
        `;
  });
  content.push('<button class="button">Submit</button>')
  $(".content").innerHTML = content.join("");
};

const handleExam = (examName) => {
    if(examName === 'dia') render(geography)
    if(examName === 'su') render(history)
};