(() => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('signin').addEventListener('click', async () => {
            try
            {
                const result = await axios.post('/signin', { 
                    user     : document.getElementById('user'), 
                    password : document.getElementById('password') 
                })
                console.log(result);
            }
            catch (error)
            {
                console.log(error);
            }
        })
    })
})()