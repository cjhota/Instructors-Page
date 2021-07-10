
function age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    // 2021-1984 = 37
    let age = today.getFullYear() - birthDate.getFullYear()

    const month = today.getMonth() - birthDate.getMonth()


    //11-12 = -1
    //11-11 = 0
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
        age = age - 1
    }

    return age
}


//11-10 = 1
//01-12 = -11
//12-12 = 0
//13-12 = 1

