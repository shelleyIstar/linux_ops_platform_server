const xss = require('xss')
const { exec } = require('../src/db/mysql')

const getList = (pagination, ip) => {
    const { pageSize, pageNum } = pagination
    let sql = `select * from linux_cpumem where 1=1 `
    if (ip) {
        sql += `and ip='${ip}' `
    }
    if (pageSize && pageNum) {
        sql += `limit ${pageSize} offset ${pageSize * (pageNum - 1)}`
    }
    // sql += `order by gmt_created desc;`

    return exec(sql)
}

const deleteData = (ip) => {
    let sql = `delete from linux_cpumem where ip='${ip}';`
    return exec(sql)
}

const getCount = () => {
    let sql = 'select count(*) as total from linux_cpumem;'
    return exec(sql)
}




// const getDetail = (id) => {
//     const sql = `select * from blogs where id='${id}'`
//     return exec(sql).then(rows => {
//         return rows[0]
//     })
// }

// const newBlog = (blogData = {}) => {
//     // blogData 是一个对象，包含 title content author 属性
//     const title = xss(blogData.title)
//     // console.log('title is', title)
//     const content = xss(blogData.content)
//     const author = blogData.author
//     const createTime = Date.now()

//     const sql = `
//         insert into blogs (title, content, createtime, author)
//         values ('${title}', '${content}', ${createTime}, '${author}');
//     `

//     return exec(sql).then(insertData => {
//         // console.log('insertData is ', insertData)
//         return {
//             id: insertData.insertId
//         }
//     })
// }

// const updateBlog = (id, blogData = {}) => {
//     // id 就是要更新 id
//     // blogData 是一个对象，包含 title content 属性

//     const title = xss(blogData.title)
//     const content = xss(blogData.content)

//     const sql = `
//         update blogs set title='${title}', content='${content}' where id=${id}
//     `

//     return exec(sql).then(updateData => {
//         // console.log('updateData is ', updateData)
//         if (updateData.affectedRows > 0) {
//             return true
//         }
//         return false
//     })
// }

// const delBlog = (id, author) => {
//     // id 就是要删除的 id
//     const sql = `delete from blogs where id='${id}' and author='${author}';`
//     return exec(sql).then(delData => {
//         // console.log('delData is ', delData)
//         if (delData.affectedRows > 0) {
//             return true
//         }
//         return false
//     })
// }

module.exports = {
    getList,
    getCount,
    deleteData,
    // getDetail,
    // newBlog,
    // updateBlog,
    // delBlog
}