const sql = {
//  insert(Collectionname,insertdate){
  //  try{
  //   await Collectionname.insertMany(insertdate,(err)=> {
  //     if(err) {
  //       throw err
  //     }
  //   })
  //  } catch(err){
  //    throw(err)
  //  }
  // }

  //获取总数量
  count (CollectionName) {
    return new Promise((resolve,reject) => {
      CollectionName.count((err,count) => {
        if(err) {
          reject(e)
        }
        resolve(count)
      })
    })
  },

  insert(Collectionname,insertDate) {
    return new Promise((resolve,reject) => {
      // console.log(insertDate)
      Collectionname.insertMany(insertDate,err => {
        if (err) throw err
        resolve(1)
      })
    })
  },
  delete(Collectionname,deleteDate,deleteType) {
    deleteType = deleteType || 'deleteOne'
    return new Promise((resolve,reject) => {
      Collectionname[deleteType](deleteDate,err => {
        if(err) throw err
        resolve()
      })
    })
  },
  update(Collectionname,whereObj,updateObj,updateType) {
    updateType = updateType || 'updateOne'
    return new Promise((resolve,reject) => {
      Collectionname[updateType](whereObj,updateObj,err => {
        if (err) throw err
        resolve()
      })
    })
  },
  find(Collectionname,whereObj,showObj){
    return new Promise((resolve,reject) => {
      Collectionname.find(whereObj,showObj).exec((err,data) => {
        if(err) throw err
        resolve(data)
      })
    })
  },
  paging (CollectionName, whereObj, showObj, limitNum, pageCode) {
    return new Promise((resolve, reject) => {
      // limit(limitNum) 每页显示个数
      // skip(limitNum * pageCode) // 每页从哪一个开始
      CollectionName.find(whereObj, showObj).limit(limitNum).skip(limitNum * pageCode).exec((err, data) => {
        if (err) throw err;
        resolve(data)
      })
    })
  },
}
module.exports = sql