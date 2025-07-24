const questions = document.querySelectorAll('li');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer) {
            answer.classList.add('visible');
            question.classList.add('active');
        }
        questions.forEach(q => {
            if (q !== question) {
                const otherAnswer = q.nextElementSibling;
                if (otherAnswer) {
                    otherAnswer.classList.remove('visible');
                    q.classList.remove('active');
                }
            }
        });
    });
});

