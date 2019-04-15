(() => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('signin').addEventListener('click', async () => {
            try
            {
                const result = await axios.post('/signin', { 
                    user     : document.getElementById('user'),value,
                    password : document.getElementById('password').value
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