module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;

        if (typeof arr !== 'object') {
            return 0;
        }

        let max = 0;
        arr.forEach(that => {
            max = Math.max(this.calculateDepth(that), max);
        });

        return max + count;
    }
};