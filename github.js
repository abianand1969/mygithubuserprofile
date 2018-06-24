class Github {

    conststructor(){
        this.client_id = 'a23687604b10c925dd86'
        this.client_secret = '0f982eafa5345120f260f410ee3037611b30de3c'
    }

    async getUser(username){
        const profileRes = await fetch(`https://api.github.com/users/${username}?
        client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileRes.json()

        return {profile}

    }
}