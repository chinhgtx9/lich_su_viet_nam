//const question = document.getElementById('question');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const answer_a = document.getElementById('answer_a');
const answer_b = document.getElementById('answer_b');
const answer_c = document.getElementById('answer_c');
const answer_d = document.getElementById('answer_d');
const btn = document.getElementById('btn');
const btn_exit = document.getElementById('btn_exit');
var questionApi = 'https://6246f1afe3450d61b004d310.mockapi.io/questions';
//tai cau hoi len server
btn.onclick = () => {
    const questionObj = {
        question: question.value,
        answer: answer.value,
        options:[
            answer_a.value,
            answer_b.value,
            answer_c.value,
            answer_d.value,
        ]
    }
    if(question.value === '' ||answer.value === '' || answer_a.value === ''|| answer_b.value === ''|| answer_c.value === ''|| answer_d.value === ''){
        alert('Không được để trống các trường');
    }else{
        fetch(questionApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(questionObj)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                question.value = '';
                answer.value = '';
                answer_a.value = '';
                answer_b.value = '';
                answer_c.value = '';
                answer_d.value = '';
                window.location.reload();
    
            })
            .catch(error => {
                console.log(error)
        })
        
    }
    
}

// hien thi cau hoi tren server 
const list = document.querySelector('.list');
const list_question = document.querySelector('.list-question');
fetch(questionApi).then(function(response){
    response.json().then(function(questions) {
        var arrList = [];
        for(value of questions){
             arrList.push(value.question);
        }
        for(let i = arrList.length - 1; i >= 0; i--){
            list_tag = `<div class="list"><span>${arrList[arrList.length -1]}</span></div>
                        <div class="list"><span>${arrList[arrList.length -2]}</span></div>
                        <div class="list"><span>${arrList[arrList.length -3]}</span></div>
                        <div class="list"><span>${arrList[arrList.length -4]}</span></div>
                        <div class="list"><span>${arrList[arrList.length -5]}</span></div>`;
            list.innerHTML = list_tag;
        }
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});

btn_exit.onclick = () => {
    
}