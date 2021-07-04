const searchBar =  document.querySelector(".searchBar")
const  searchBtt = document.querySelector(".btt-search")
const   moneyBtn = document.querySelector(".btt-money")

searchBtt.addEventListener("click", function () {
    const find = searchBar.value
    window.location.href = `https://www.google.com/search?q=${ find }&client=firefox-b-d&sxsrf=ALeKk02JcWkTA3X2SJYSgihzoKt7PcvBmA%3A1625376490031&ei=6kbhYLuaAY7H4-EP9se42As&oq=${ find }&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEJECMgQIABBDMgcILhCxAxBDMgQIABBDMgcIABCxAxBDMgQIABBDMgIILjICCC4yBAgAEEMyBQguELEDOgcIABBHELADOgcIABCwAxBDOgQIIxAnOgIIADoHCCMQ6gIQJzoFCAAQsQM6CAguELEDEIMBOgQILhBDSgQIQRgAUNOaEljouRJg28ASaAJwAngEgAGZA4gBohuSAQcyLTQuNi4xmAEAoAEBqgEHZ3dzLXdperABCsgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwi7t8Gi18jxAhWO4zgGHfYjDrsQ4dUDCA0&uact=5`
})

moneyBtn.addEventListener("click", function () {
    
    window.location.href = "https://www.google.com/doodles"
})