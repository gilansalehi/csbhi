const email = 'gilansalehi@gmail.com';
const github = 'https://www.github.com/gilansalehi/csbhi';

function print(str) {
    return str.split('').join('&#8203;')
}

function copy(str) {
    if (navigator.clipboard) {
        navigator.clipboard.write(str);
    }
}

(function () {
    document.querySelectorAll('.email-container').forEach(el => {
        el.innerHTML = print(email);
        el.onClick = copy(email);
    })

    document.querySelectorAll('.github-container').forEach(el => {
        el.innerHTML = print(github);
        el.href = github;
    })
})();