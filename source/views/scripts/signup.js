(() => {
    delay = ms => new Promise( resolve => setTimeout(resolve, ms) );

    async function signUp() {
        function verifyConsistency() {
            const password = document.getElementById('password').value;
            if (!password) {
                throw new Error('Password is empty');
            }

            const confirmation = document.getElementById('repeat-password').value;
            if (confirmation !== password) {
                throw new Error('The confirmation doesn\'t match with password');
            }
        }

        const button = document.getElementById('signup')
        try
        {
            button.disabled = true;
            verifyConsistency();
            const result = await axios.post({ 
                username : document.getElementById('username').value,
                password : document.getElementById('password').value
            })
        }
        catch (error)
        {
            alert(error.message)
        }
        finally
        {
            button.disabled = false;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('signup').addEventListener('click', (e) => {
            signUp()
        })
    })
})()
