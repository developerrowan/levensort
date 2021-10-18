'use strict'
module.exports = {
    levenshtein: function(a, b) {
        if(a === b) return 0;

        if(!(a.length && b.length)) return (a || b).length;

        let i = 0, j = 0, d = [], min = Math.min;

        for(; i <= b.length; d[i] = [i++]);
        for(; j <= a.length; d[0][j] = j++);

        for(i = 1; i <= b.length; i++) {
            for(j = 1; j <= a.length; j++) {
                
                d[i][j] = b.charCodeAt(i-1) === a.charCodeAt(j-1)
                    ? d[i-1][j-1]
                        : min(d[i-1][j-1]+1, d[i][j-1]+1, d[i-1][j]+1);
            }
        }
        return d[b.length][a.length];
    },

    levensearch: function(arr, source, limit=100, maxTolerance=6) {
        let result = [];
        for(let i = 0; i < arr.length; i++) {
            let score = module.exports.levenshtein(arr[i], source);
            if(score <= maxTolerance && result.length < limit) {
                result.push({
                    value: arr[i],
                    score
                });
            }
        }

        if(result) {
            result.sort((a, b) => a.score - b.score);
        }

        return result;
    }
};