const LinksSocialMedia = {
  github: 'CristhianWS',
  youtube: 'jakelinygracielly',
  facebook: 'cristhian.alves.5245',
  instagram: 'cristhian_ws/',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  userName.textContent = 'Cristhian Alves'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
      userFoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
