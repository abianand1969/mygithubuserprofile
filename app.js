const github = new Github

const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value
  if (userText !== '') {
    github.getUser(userText)
      .then(user => {
          if(user.profile.message === 'Not Found')
          {
              //show alert
          }
          else{
              //show profile
          }
      })
      .catch(err => console.log(err))
  }
  else{
      //clear search
  }
})
