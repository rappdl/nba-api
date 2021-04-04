const errors = require('./errors')

module.exports = function (services, express){

    if(!services) {
        throw "Invalid services object"
    }
    const router = express.Router();
    
    router.get('/teams', getAllTeams)
    router.get('/teams/:id', getASpecificTeam)
    router.get('/teams/:id/players', getAllPlayersOfASpecificTeam)
    return router

    function getAllTeams(req, res) {
        services.getAllTeams()
        .then(teams => {
            return res.status(200).json( {'teams': teams})
        })
        .catch( err => error(err, res))
    }

    function getASpecificTeam(req, res) {
        const teamId = req.params.id
        services.getASpecificTeam(teamId)
        .then(team => {
            return res.status(200).json({ 'team': team })
        })
        .catch( err => error(err, res))
    }

    function getAllPlayersOfASpecificTeam(req, res){
        const teamId = req.params.id
        services.getAllPlayersOfASpecificTeam(teamId)
        .then(team => {
            return res.status(200).json({ 'team': team })
        })
        .catch( err => error(err, res))
    }


    function error(err, res){
        switch (err) {
            case errors.MISSING_ARGUMENT:
                res.status(400).json({ cause: err })
                break;
            case errors.MIN_GREATER_THAN_MAX:
                res.status(400).json({ cause: err })
                break;
            case errors.UNAUTHORIZED:
                res.status(401).json({ cause: err })
                break;
            case errors.NOT_MODIFIED:
                res.status(403).json({ cause: err })
                break;
            case errors.RESOURCE_NOT_FOUND:
                res.status(404).json({ cause: err })
                break;
            case errors.BAD_GATEWAY:
                res.status(502).json({ cause: err })
                break;
            default:
                res.status(500).json({ cause: err })
                break;
        }
    }

}