const getStoreReadList=()=>{
const storedListStr = localStorage.getItem('readlist');
if(storedListStr){
const storedList=JSON.parse(storedListStr)
return storedList ;
}
else{
return [];
}
}
const addToStoredReadList =(id)=>{
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        console.log(id,'alredy exits in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);

        localStorage.setItem('readlist',storedListStr)

    }
}

const getStoreWishedList=()=>{
    const storedListStr = localStorage.getItem('wished-list');
    if(storedListStr){
    const storedList=JSON.parse(storedListStr)
    return storedList ;
    }
    else{
    return [];
    }
    }
const addToStoredWishedList =(id)=>{
    const storedList = getStoreWishedList();
    if(storedList.includes(id)){
        console.log(id,'alredy exits in the wished list')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);

        localStorage.setItem('wished-list',storedListStr)

    }
}

export {addToStoredReadList ,addToStoredWishedList}