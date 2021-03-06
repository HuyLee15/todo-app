//https://stackoverflow.com/questions/51391080/handling-errors-in-express-async-middleware
const asyncHandle = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

module.exports = asyncHandle;