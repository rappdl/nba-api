const errors = require('./errors')

module.exports = function (nbaDB){
    if(!nbaDB) {
        throw "Invalid nbaDBAccess object"
    }



    function getAllPlayers() {
        return nbaDB.getAllPlayers()
        .then(result => {
            if (result.errno) {
                return Promise.reject(errors.SERVICES_UNAVAILABLE)
            }
            return result
        })
    }

    function getAllTeams() {
        return nbaDB.getAllTeams()
        .then(result => {
            if (result.errno) {
                return Promise.reject(errors.SERVICES_UNAVAILABLE)
            }
            return result
        })
    }

   function getASpecificTeam(teamId) {
    return nbaDB.getASpecificTeam(teamId)
    .then(result => {
        if (result.errno) {
            return Promise.reject(errors.SERVICES_UNAVAILABLE)
        }
        return result
    })
   }

   function getASpecificPlayer(playerId) {
    return nbaDB.getASpecificPlayer(playerId)
    .then(result => {
        if (result.errno) {
            return Promise.reject(errors.SERVICES_UNAVAILABLE)
        }
        return result
    })
   }


   function getAllPlayersOfASpecificTeam(teamId) {
    return nbaDB.getAllPlayersOfASpecificTeam(teamId)
    .then(result => {
        if (result.errno) {
            return Promise.reject(errors.SERVICES_UNAVAILABLE)
        }
        return result
    })
   }

    return{
        getAllTeams: getAllTeams,
        getASpecificTeam:getASpecificTeam,
        getAllPlayersOfASpecificTeam:getAllPlayersOfASpecificTeam,
        getASpecificPlayer:getASpecificPlayer,
        getAllPlayers:getAllPlayers
    }
}