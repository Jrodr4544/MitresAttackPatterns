export default (state = [], action) => {
    let idx;
    switch (action.type) {
        case "FETCH_ATTACK_PATTERNS":

            return action.attackPatterns.objects
        
        case "FILTER_ON_DATASOURCE":
        debugger
        console.log(action)

            if (action.payload.platformFilter !== 'all') {
                return state.filter( attack => 
                        attack.x_mitre_data_sources.includes(action.payload.datasourceFilter) 
                    );
            } else {
                return state
            }

        case "FILTER_ON_PLATFORM":
        debugger
        console.log(action)

            if (action.payload.datasourceFilter !== 'all') {
                return state.filter( attack => 
                        attack.x_mitre_platforms.includes(action.payload.platformFilter)
                    );
            } else {
                return state
            }

        default:
            return state
    }
}