const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onload = () => {
    const request = JSON.parse(xhr.responseText);
    getTitle(request)
    getAnswers(request)
    console.log(request)
}



xhr.send()

function getTitle(request) {
    const poolTitle = document.querySelector('.poll__title');
    const title = request['data']['title'];
    poolTitle.textContent = title;
}

function getAnswers(request) {
    const poolAnswers = document.querySelector('.poll__answers');

    const answers = request['data']['answers'];
    for (let i in answers) {
        let btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.textContent = answers[i];
        btn.onclick = () => {
            alert('Спасибо, ваш голос засчитан!');

            const xhr = new XMLHttpRequest();
            xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
            xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhr.onload = () => {
                poolAnswers.innerHTML = '';
                let parseStat = JSON.parse(xhr.responseText)['stat'];

                for (let k in parseStat) {
                    let vote = document.createElement('div');
                    vote.classList.add('vote')
                    vote.style.display = 'flex';

                    let answer = document.createElement('div');
                    answer.classList.add('answer_stat__title');
                    answer.textContent = parseStat[k]['answer']
                    vote.append(answer)

                    let votes = document.createElement('div');
                    votes.classList.add('answer_stat__votes');
                    votes.style.fontWeight = '600';
                    votes.style.marginLeft = '20px';
                    votes.textContent = parseStat[k]['votes']
                    vote.append(votes)

                    poolAnswers.append(vote)
                }
                console.log(parseStat)
            }
            xhr.send(`vote=${request['id']}&answer=${[i]}`)

        }
        poolAnswers.append(btn)
    }


}

