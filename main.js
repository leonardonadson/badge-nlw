const linksSocialMedia = {
  github: 'leonardonadson',
  linkedin: 'in/leonardonadson',
  facebook: 'profile.php?id=100009809433630',
  instagram: 'leonardonadson',
  twitter: 'leonardonadson'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = "Olivia"
  //userName.textContent = "Marcelo"
  //i++ == i = i + 1
  //variável de escopo
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //alert(social)
    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const urlGit = `https://api.github.com/users/${linksSocialMedia.github}`
  // template string
  fetch(urlGit)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
