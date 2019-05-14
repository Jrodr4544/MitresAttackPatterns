
export const fetchAttackPatterns = () => {

  return async dispatch => {
    function onSuccess(attackPatterns) {
      let filters = {};
      filters.platforms = attackPatterns.map(attack => attack.x_mitre_platforms).flat().reduce((result, nextItem) => result.includes(nextItem) ? result : result.concat(nextItem), []);
      filters.data_sources = attackPatterns.map(attack => attack.x_mitre_data_sources).flat().reduce((result, nextItem) => result.includes(nextItem) ? result : result.concat(nextItem), [])
      // debugger
      dispatch({ type: 'FETCH_ATTACK_PATTERNS', attackPatterns });
      dispatch({ type: 'SET_FILTERS', filters })
      //  debugger 
      return attackPatterns;
    }

    function onError(error) {
      dispatch({ type: 'FETCH_ERROR_GENERATED', error });
      return error;
    }

    try {
      dispatch({ type: 'LOADING_ATTACK_PATTERNS' })

      const request = await fetch('/api/attack_patterns');
      const attackPatterns = await request.json();

      return onSuccess(attackPatterns);
    } catch (error) {
      return onError(error);
    }
  }

}

export const postComment = (comment) => {
  return async dispatch => {
    function onSuccess(json) {
      debugger
      console.log(json)

      const updatedAttackPattern = json

      dispatch({ type: 'POST_ATTACK_PATTERN_COMMENT', updatedAttackPattern })

      return updatedAttackPattern
    }

    function onError(error) {
      debugger
      console.log(error)
      dispatch({ type: 'POST_ERROR_GENERATED', error });
      return error;
    }

    try {
      const request = await fetch('/api/attack_patterns/' + comment.attack_pattern_id + '/add_comment', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      });

      const json = await request.json();

      return onSuccess(json);
    } catch (error) {
      // debugger
      console.log(error)
      return onError(error);
    }
  }
}