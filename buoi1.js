// câu 1: đảo ngược vị trí các chữ cái
const arr = 'abcdef'
var stringToArray = arr.split('').reverse()
var arrayToString = stringToArray.join('')
{
    const htmls = document.createElement('h1')
    var html = document.querySelector('body').appendChild(htmls)
    htmls.innerText = `Câu 1: ${arrayToString}`
}
//  câu 2: xóa các phần tử trùng lặp
const arr1 = [1, 2, 3, 5, 4, 2, 6, 4]
const del = arr1.filter((item, index) => {
    return arr1.indexOf(item) === index
})
{
    const htmls = document.createElement('h1')
    var html = document.querySelector('body').appendChild(htmls)
    htmls.innerText = `Câu 2: ${del}`
}

//  câu 3 Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
const num = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3, 5]
function num_unique(num) {
    // sắp xếp lại mảng theo thứ tự tăng dần
    num.sort()
    // tạo array chứa phần tử và số lần lặp lại
    let max = [0, 0]
    let count = 1
    for (let i = 0; i < num.length; i++) {
        if (num[i] == num[i + 1]) {
            count++;
        }
        else {
            if (max[1] < count) {
                max[0] = num[i]
                max[1] = count
            }
            count = 1
        }
    }

    {
        const htmls = document.createElement('h1')
        var html = document.querySelector('body').appendChild(htmls)
        htmls.innerText = `Câu 3: Số ${max[0]} lặp lại nhiều nhất với số lần là: ${max[1]}`
    }

}
num_unique(num)

//  câu 4
// delete
const ul = document.querySelector('.numPhoneInfo__list');
ul.addEventListener('click', (e) => {
    if (e.target.className == 'numPhoneInfo-num') {
        const li = e.target.parentElement;
        console.log(li)
        li.parentNode.removeChild(li)
    }
})

// search
const searchPhoneNum = document.querySelector('.searchPhoneInfo-search')
searchPhoneNum.addEventListener('click', (e) => {
    e.preventDefault()

    const input = document.querySelector('.searchPhoneInfo-input input');
    const convert = input.value.toUpperCase();
    const person = document.querySelectorAll('.numPhoneInfo-text');
    for (let i = 0; i < person.length; i++) {
        const name = person[i].textContent.toUpperCase();
        if (name.indexOf(convert) > -1) {
            person[i].parentNode.style.display = 'flex'
        } else {
            person[i].parentNode.style.display = 'none'
        }

    }
})

// delete duplicate
const delPhoneNum = document.querySelector('.searchPhoneInfo-duplicate input')
delPhoneNum.addEventListener('click', (e) => {
    e.preventDefault()
    var arr = []
    const numPhone = document.querySelectorAll('.numPhoneInfo-num');
    for (i = 0; i < numPhone.length; i++) {
        arr.push(numPhone[i].innerText)
        const del = arr.filter((item, index) => {
            if (arr.indexOf(item) === index) {
                const li = numPhone[i].parentElement
                li.parentNode.removeChild(li)
            }
        })

        //     function unique(arr) {
        //         var newArr = []
        //         for (var i = 0; i < arr.length; i++) {
        //             if (newArr.indexOf(arr[i]) === -1) {
        //                 newArr.push(arr[i])
        //             }
        //         }
        //         return newArr
        //     }
        //     unique(arr)
    }

})

// add phone number
    const numPhoneList = []
    const addPhoneBtn = document.querySelector('.cursor');
    addPhoneBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const addName = document.getElementById('name');
        const addPhone = document.getElementById('numberPhone');
        const html = document.querySelector('.numPhoneInfo')

        numPhoneList.push({
            'name': addName.value,
            'numberPhone': addPhone.value
        })
        localStorage.setItem('key', JSON.stringify(numPhoneList))
        const ListPhoneNumber = JSON.parse(localStorage.getItem('key'))

        if (ListPhoneNumber) {
            let a = ListPhoneNumber.map(x => {
                return `<div class="numPhoneInfo__list">
                        <h2 class="numPhoneInfo-text">${x.name}</h2>
                        <h2 class="numPhoneInfo-num">${x.numberPhone}</h2>
                        </div>`
            })
            console.log(a)
            html.innerHTML = a.join()
        }
})


