module.exports = function (fetch){
     
    function getAllTeams(){
        return fetch('https://data.nba.net/data/10s/prod/v1/2020/teams.json')
            .then(result => {
                return result.json()
            })
            .then(response => {
                var teams = response.league.standard
                teams.map(team => {
                    var teamId = team.teamId
                     team["img"] = `https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`
                 })
                 return teams
            }).catch(error => {return error})
    }
 
    function getASpecificTeam(teamId){
        return fetch('https://data.nba.net/data/10s/prod/v1/2020/teams.json')
            .then(result => {
                return result.json()
            })
            .then(response => {
                response.league.standard.filter(team => team.teamId == teamId)
               
            }).catch(error => {return error})
    }

    function getAllPlayersOfASpecificTeam(teamId){
        return fetch('https://data.nba.net/data/10s/prod/v1/2020/players.json')
            .then(result => {
                return result.json()
            })
            .then(response => {
               var players = response.league.standard.filter(team => team.teamId == teamId)
               players.map(player => {
                   var playerId = player.personId
                    player["img"] = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`
                })
                return players
            }).catch(error => {return error})
    }

    return{
        getAllTeams: getAllTeams,
        getASpecificTeam:getASpecificTeam,
        getAllPlayersOfASpecificTeam:getAllPlayersOfASpecificTeam
    }
}
