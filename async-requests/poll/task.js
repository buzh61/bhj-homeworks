const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
const xhr = openRequest('GET', url)

xhr.onload = () => {
    getTitle(xhr)
    getAnswers(xhr)
    console.log(xhr)
}
xhr.send();


function openRequest(method, url) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';

    return xhr;
}

function getTitle(request) {
    const poolTitle = document.querySelector('.poll__title');
    poolTitle.textContent = request['response']['data']['title'];
}

function getAnswers(request) {
    const poolAnswers = document.querySelector('.poll__answers');

    const answers = request['response']['data']['answers'];
    for (let i in answers) {
        let btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.textContent = answers[i];
        btn.onclick = () => {
            alert('Спасибо, ваш голос засчитан!');

            const xhr = openRequest('POST', url)
            xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhr.onload = () => {
                poolAnswers.innerHTML = '';

                for (let k in xhr['response']['stat']) {
                    let vote = document.createElement('div');
                    vote.classList.add('vote')
                    vote.style.display = 'flex';

                    let answer = document.createElement('div');
                    answer.classList.add('answer_stat__title');
                    answer.textContent = xhr['response']['stat'][k]['answer']
                    vote.append(answer)

                    let votes = document.createElement('div');
                    votes.classList.add('answer_stat__votes');
                    votes.style.fontWeight = '600';
                    votes.style.marginLeft = '20px';
                    votes.textContent = xhr['response']['stat'][k]['votes']
                    vote.append(votes)

                    poolAnswers.append(vote)
                }
            }
            xhr.send(`vote=${request['id']}&answer=${[i]}`)

        }
        poolAnswers.append(btn)
    }
}

