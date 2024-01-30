let answer = document.querySelectorAll('.answer')



    answer.forEach(el => {
        el.addEventListener('click', () => {

            let btn = el.childNodes[3]
            let span = el.childNodes[5]
            let answer = el
            console.log(el.childNodes)

            if (span.style.maxHeight === '0px') {
                span.style.maxHeight = span.scrollHeight + 'px';
                answer.style.background = '#fff'
                btn.style.transform = 'rotate(180deg)'
            } else {
                span.style.maxHeight = 0
                answer.style.background = '#fff'
                btn.style.transform = 'rotate(0deg)'
            }
        })
    })