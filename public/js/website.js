

module.exports = function (services, express){
    if(!services) {
        throw "Invalid API object"
    }

    const router = express.Router();
    router.get('/teams', getAllTeams)
    router.get('/teams/:id/players', getAllPlayersOfASpecificTeam)
    
    return router
    

    function getAllTeams(req, res) {
        services.getAllTeams()
        .then(teams => {
            return res.status(200).render('teams', 
            {
               teams: teams
            })
        })
        .catch( err => error(err, res))
    }

    function getAllPlayersOfASpecificTeam(req, res){
        const teamId = req.params.id
        services.getAllPlayersOfASpecificTeam(teamId)
        .then(players => {
            return res.status(200).render( 'teamPlayers', {players: players})
        })
        .catch( err => 
            error(err, res))
    }

    
    function error(err, res) {
        res.status(err.statusCode);
    }
}
