const service = require('./service')

async function main() {
    const result = await service.getUsers()
    const users = []

    // FOR ========================================================================
    console.time('FOR')
    for(let i=0; i< result.length; i++){
        users.push(result[i].name)
    }
    console.timeEnd('FOR')
    // FOR ========================================================================


    // FOR IN =====================================================================
    console.time('FOR IN')
    for(let i in result){
        users.push(result[i].name)
    }
    console.timeEnd('FOR IN')
    // FOR IN =====================================================================


    // FOR OF =====================================================================
    console.time('FOR OF')
    for(let user of result){
        users.push(user.nameclear)
    }
    console.timeEnd('FOR OF')
    // FOR OF =====================================================================
    

    console.log('USERS: ', users)
}

main()
