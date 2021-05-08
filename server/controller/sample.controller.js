/* 
    sample routing
*/

const hello = (req, res) => {
    res.status(200).json({ msg: "hello world" });
};

module.exports = {
    hello,
};
