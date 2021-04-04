const errors = require('./errors')

module.exports = function (nbaDB){
    if(!nbaDB) {
        throw "Invalid nbaDBAccess object"
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
        getAllPlayersOfASpecificTeam:getAllPlayersOfASpecificTeam
    }
}