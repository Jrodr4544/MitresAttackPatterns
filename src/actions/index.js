
export const fetchAttackPatterns = () => {

    return async dispatch => {
        function onSuccess(attackPatterns) {
          let filters = {};
            filters.platforms = attackPatterns.map( attack => attack.x_mitre_platforms ).flat().reduce((result,nextItem) => result.includes(nextItem) ? result : result.concat(nextItem),[]);
            filters.data_sources = attackPatterns.map( attack => attack.x_mitre_data_sources ).flat().reduce((result,nextItem) => result.includes(nextItem) ? result : result.concat(nextItem),[])

          dispatch({ type: 'FETCH_ATTACK_PATTERNS', attackPatterns });
          dispatch({ type: 'SET_FILTERS', filters })

          return attackPatterns;
        }

        function onError(error) {
          dispatch({ type: 'FETCH_ERROR_GENERATED', error });
          return error;
        }

        try {
          dispatch({ type: 'LOADING_ATTACK_PATTERNS' })

          const response = await fetch('http://localhost:3000/api/attack_patterns');
          const attackPatterns = await response.json();

          return onSuccess(attackPatterns);
        } catch (error) {
          return onError(error);
        }
    }

}