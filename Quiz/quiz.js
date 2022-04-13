if(!localStorage.getItem("info")){
    alert("Bạn cần đăng nhập để có thể chơi được trò chơi");
    window.location.href = "../index.html";
}
        const start_btn = document.querySelector(".start_btn button");
        const info_box = document.querySelector(".info_box");
        const quiz_box = document.querySelector(".quiz_box");
        const result_box = document.querySelector(".result_box");
        const exit_btn = document.querySelector(".buttons .quit");
        const continue_btn = document.querySelector(".buttons .restart");
        const options_list  = document.querySelector(".quiz_box .option_list");
        const time_count = document.querySelector(".time_sec");
        const restart_quiz = result_box.querySelector(".restart");
        const quit_quiz = result_box.querySelector(".quit");
        const next_btn = document.querySelector(".next_btn");
    
    
    
        let userScore = 0;
        let que_count = 0;
        let que_num = 1;
        let counter;
        let arr_random = [];
        const listQuestion = [];
    
        continue_btn.onclick = ()=>{
            quiz_box.style.opacity = 1;
            quiz_box.style.pointerEvents = "auto";
            startTime(15);
        }
    
        for(let i = 0; i < 10; i++){
            let number = Math.floor(Math.random()* questions.length);
            if(checkExistElement(arr_random, number)){
                arr_random.push(number)
            }
            if(arr_random.length ===5){
                break;
            }
        }
        
        for(let value of arr_random){
            listQuestion.push(questions[value]);
        }
        
        function checkExistElement(arrayNumber, numberRandom){
            for(let number of arrayNumber){
                if(number === numberRandom){
                    return false;
                }
            }
            return true;
        }
        
        start_btn.onclick = ()=> {
            info_box.style.opacity = 1;
            info_box.style.pointerEvents = "auto";
            showQuetions(0);
        }
        
        exit_btn.onclick = () =>{
            info_box.style.opacity = 0;
            info_box.style.pointerEvents = "none";
        }
        
        function queCount(index){
            const bottom_count = document.querySelector('.total_que');
            totalCountTag = '<span><p>'+index+'</p>trên<p>'+5+'</p>câu hỏi</span>';
            bottom_count.innerHTML = totalCountTag;
        }
        next_btn.onclick = () =>{
            if(que_count < 4){
                que_count ++;
                que_num ++;
                showQuetions(que_count);
                queCount(que_num);
                clearInterval(counter);
                startTime(15);
            }else{
                showResultBox();
            }
        }
        
        function optionSelected(answer){
            let useAns = answer.textContent;
            let correctAns = listQuestion[que_count].answer;
            let allOptions = options_list.children.length;
            if(useAns == correctAns){
                userScore += 1;
                answer.style.backgroundColor ='#bff48d';
            }else{
                answer.style.backgroundColor = '#f2a9a9';
            }
            for(let i = 0; i < allOptions; i++){
                options_list.children[i].classList.add('disabled');
            }
        }
        
        function showQuetions(index){
            const que_text = document.querySelector(".que_text");
        
            for(value of listQuestion ){
            let que_tag = '<span>' + listQuestion[index].question + '</span>';
            que_text.innerHTML = que_tag;
            let option_tag =`<div class="option"><span>${listQuestion[index].options[0]}</span></div>
                            <div class="option"><span>${listQuestion[index].options[1]}</span></div>
                            <div class="option"><span>${listQuestion[index].options[2]}</span></div>
                            <div class="option"><span>${listQuestion[index].options[3]}</span></div>`;
            options_list.innerHTML = option_tag;
            }
            const option = document.querySelectorAll(".option");
            for(let i = 0; i < option.length; i++) {
                option[i].setAttribute('onclick','optionSelected(this)');
            }
        }
        
        function startTime(time){
            counter = setInterval(timer, 1000);
            function timer() {
                time_count.textContent = time;
            if(time>0){
                time--;
            }
            if(time == 0){
                let allOptions = options_list.children.length;
                for(let i = 0; i < allOptions; i++){
                    options_list.children[i].classList.add('disabled');
                }
            }
            }
        }
        function showResultBox(){
            quiz_box.style.opacity = 0;
            quiz_box.style.pointerEvents = "none";
            info_box.style.opacity = 0;
            info_box.style.pointerEvents = "none";
            result_box.style.opacity = 1;
            result_box.style.pointerEvents = "auto";
        
            const score = document.querySelector('.quiz_true');
            score.textContent = userScore;
        }
        
        restart_quiz.onclick = ()=>{
            location.reload();
        }
