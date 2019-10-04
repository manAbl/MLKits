const k = 3
const outputs = []
const predictionPoint = 300
const distance = point => Math.abs(point - predictionPoint)

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
    outputs.push([dropPosition, bounciness, size, bucketLabel])
}

function runAnalysis() {
    const bucket = _.chain(outputs)
        .map(row => [distance(row[0]), row[3]])
        .sortBy(row => row[0])
        .slice(0, k)
        .countBy(row => row[1])
        .toPairs()
        .sortBy(row => row[1])
        .last()
        .first()
        .parseInt()
        .value()

    console.info(`Your bucket will fall more probably into: ${bucket}`)
}

function distance(point) {
    return Math.abs(point - predictionPoint)
}

function splitDataSet(data, testCount) {

}