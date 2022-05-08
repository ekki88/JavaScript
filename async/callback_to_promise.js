class UserStorage{
    loginUser(id, password) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => 
            if(
                (id === 'semi' && password === 'mi') ||
                (id === 'bomi' && password === 'bin')
            ) {
                resolve(id);
            } else{
                reject(new Error('nor found'));
            }
        }, 2000);
    });
}

    getRoles(user) {
        return new Promise((resovle,reject)=>{
        setTimeout(() => {
            if (user === 'semi') {
                resovle ({name : 'semi', role: 'admin'});
        }   else{
                reject (new Error('no access'));
            }
        }, 1000);
    });
}    


const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter tour password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(uesr => alert(`hello ${userWithRole.neme}, you have a ${userWithRole.role} role`);
.catch(console.log);    



