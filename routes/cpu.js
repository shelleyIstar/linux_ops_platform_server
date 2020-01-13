var express = require('express');
var router = express.Router();
const { getList, getCount, deleteData } = require('../controller/cpu')
const { SuccessModel, ErrorModel } = require('../model/resModel')


/* GET home page. */
router.get('/list', function (req, res, next) {
    let data = {
        pageSize: parseInt(req.query.pageSize),
        pageNum: parseInt(req.query.pageNum),
    }
    // console.log("req", req.query)
    const result = getList(data)
    return result.then(listData => {
        // console.log("listData", listData)
        if (listData.length) {
            const total = getCount()
            total.then(count => {
                res.json({
                    data: {
                        items: listData,
                        pageSize: data.pageSize,
                        pageNum: data.pageNum,
                        total: count[0].total
                    },
                    meta: {
                        code: 200,
                        message: 'success'
                    }
                })
            })
        } else {
            res.json({
                data: {
                    items: listData,
                    pageSize: data.pageSize,
                    pageNum: data.pageSize,
                    total: 0
                },
                meta: {
                    code: 200,
                    message: 'success'
                }
            })
        }
    })

});

router.delete('/list', function (req, res, next) {
    let ip = req.body.ip
    // console.log("delete req", req.body)
    const result = deleteData(ip)
    return result.then(data => {
        // console.log("delete list", data)
        res.json({
            data: {
                items: [],
            },
            meta: {
                code: 200,
                message: 'success'
            }
        })
    })
})

module.exports = router;
