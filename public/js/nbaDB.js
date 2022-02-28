module.exports = function (fetch){
     
    function getAllPlayers(){
        return fetch('https://data.nba.net/data/10s/prod/v1/2021/players.json')
            .then(result => {
                return result.json()
            })
            .then(players => {
               players.league.standard.map(player => {
                   var playerId = player.personId
                    player["img"] = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`
                })
                return players.league.standard
            }).catch(error => {return error})
    }


    function getAllTeams(){
        return fetch('https://data.nba.net/data/10s/prod/v1/2019/teams.json')
            .then(result => {
                return result.json()
            })
            .then(response => {
                var teams = response.league.vegas.filter(team => team.isNBAFranchise == true)
                teams.map(team => {
                    var teamId = team.teamId
                    team["img"] = `https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`
                 })
                 return teams
            }).catch(error => {return error})
    }
 
    function getASpecificTeam(teamId){
        return fetch('https://data.nba.net/data/10s/prod/v1/2019/teams.json')
            .then(result => {
                return result.json()
            })
            .then(response => {
                var team = response.league.vegas.filter(team => team.teamId == teamId)
                team[0].img = `https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`
                return team
               
            }).catch(error => {return error})
    }
    
    function getAllPlayersOfASpecificTeam(teamId){
        return fetch('https://data.nba.net/data/10s/prod/v1/2021/players.json')
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
   
    function getASpecificPlayer(playerId){
        return fetch('https://data.nba.net/data/10s/prod/v1/2021/players.json')
            .then(result => {
                return result.json()
            })
            .then(response => {
                var player = response.league.standard.filter(player => player.personId == playerId)
                player[0].img = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`
                return player
               
            }).catch(error => {return error})
    }

    return{
        getAllTeams: getAllTeams,
        getASpecificTeam:getASpecificTeam,
        getAllPlayersOfASpecificTeam:getAllPlayersOfASpecificTeam,
        getASpecificPlayer:getASpecificPlayer,
        getAllPlayers:getAllPlayers
    }
}
