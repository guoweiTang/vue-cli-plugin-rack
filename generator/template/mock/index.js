const userinfo = {
  avatarUrl: '',
  name: 'ice',
  gender: '男',
  summary: '如何促进关系升级？教你省时高效的最佳方法！',
  description: '佛曰：命由己造，相由心生，世间万物皆是化相；心不动，万物皆不动，心不变，万物皆不变',
  role: '普通用户',
};
const allUsers = [{
  email: 'admin@vuerack.com',
  password: 'vuerack',
}];
const allGoods = [
  {
    id: '01-01',
    imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、零食',
    spec: '50g/包',
    saleDate: '2001-12-18',
    description: '荷兰优质淡奶，奶香浓而不腻',
  }, {
    id: '01-02',
    imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    name: '新疆大油条',
    category: '西北特色、主食',
    spec: '100g/根',
    saleDate: '1913-08-18',
    description: '套马的汉子，新疆的棉花',
  }, {
    id: '01-03',
    imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    name: '湖南臭豆腐',
    category: '湘西特色',
    spec: '50g/盒',
    saleDate: '1800-04-08',
    description: '毛爷爷的故乡',
  }, {
    id: '02-01',
    imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    name: '脉动',
    category: '功能饮料、饮品',
    spec: '500ml/瓶',
    saleDate: '1921-07-01',
    description: '喝一口脉动，让你随时脉动回来',
  }, {
    id: '02-02',
    imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    name: '好迪洗发水',
    category: '洗护用品',
    spec: '200ml/瓶',
    saleDate: '1945-08-20',
    description: '大家好，才是真的好，广州好迪',
  }, {
    id: '02-03',
    imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    name: '脑白金',
    category: '养生药品',
    spec: '800g/箱',
    saleDate: '2020-08-20',
    description: '今年过节不收礼，收礼只收脑白金',
  }, {
    id: '02-04',
    imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    name: '雀氏纸尿裤',
    category: '母婴用品',
    spec: '18片/包',
    saleDate: '2008-08-08',
    description: '天才第一步，雀氏纸尿裤',
  }, {
    id: '02-05',
    imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    name: '五粮液',
    category: '酒水',
    spec: '500ml*4/箱',
    saleDate: '2018-05-22',
    description: '国酒五粮液,你一生的选择',
  }, {
    id: '02-06',
    imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    name: '飞天茅台',
    category: '酒水',
    spec: '550ml*2/箱',
    saleDate: '1999-11-05',
    description: '国宴茅台,家宴茅台醇,福到茅台到',
  }, {
    id: '02-07',
    imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    name: '青松林果茶',
    category: '功能饮料、饮品',
    spec: '500ml/瓶',
    saleDate: '2000-05-01',
    description: '品质高贵，情真意浓',
  }, {
    id: '02-08',
    imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    name: '斯莱德麦片',
    category: '代餐',
    spec: '200g/包',
    saleDate: '2008-04-16',
    description: '最方便的早餐',
  }, {
    id: '02-09',
    imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    name: '伊利雪糕',
    category: '冷冻食品、冰淇淋',
    spec: '30g*6/盒',
    saleDate: '2012-02-01',
    description: '苦苦的追求，甜甜的享受',
  }, {
    id: '02-10',
    imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    name: '喜之郎果冻',
    category: '休闲零食',
    spec: '10g*12/包',
    saleDate: '2008-06-02',
    description: '水晶之恋，一生不变',
  }
];

export default {
  'POST /api/auth/login': function (req, res) {
    let result;
    const targetIndex = allUsers.findIndex(item => item.email === req.body.email && item.password === req.body.password);
    if (targetIndex > -1) {
      result = res.json({
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBwb2V0aWNsb3VkLmNvbSIsImV4cCI6MTYxNzE4MjY5NSwidHlwIjoiYWNjZXNzIn0.HGO39CFJCJKCsp2gvsxRba4zj3WwV1fHPk8-90Jzv7A',
        refreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBwb2V0aWNsb3VkLmNvbSIsImV4cCI6MTYyMjM1OTQ5NSwidHlwIjoicmVmcmVzaCJ9.He1tC8KYNzNCCZfeJIIGgSlTkT2WZ9mKjbw2VPUkDRg',
      })
    } else {
      result = res.status(400).json({
        message: '账户或密码错误',
      })
    }
    return result;
  },
  'POST /api/auth/register': function (req, res) {
    let result;
    const targetIndex = allUsers.findIndex(item => item.email === req.body.email);
    if (targetIndex > -1) {
      result = res.status(400).json({
        message: '账户已存在，可直接登录',
      })
    } else {
      allUsers.push({
        email: req.body.email,
        password: req.body.password,
      })
      result = res.json({
        message: 'OK',
      })
    }
    return result;
  },
  'POST /api/auth/reset-password': function (req, res) {
    let result;
    const targetIndex = allUsers.findIndex(item => item.email === req.body.email && item.password === req.body.oldPassword);
    if (targetIndex > -1) {
      if (allUsers[targetIndex].password === req.body.newPassword) {
        result = res.status(400).json({
          message: '新密码不能与原密码相同',
        })
      } else {
        allUsers[targetIndex].password = req.body.newPassword;
        result = res.json({
          message: 'OK',
        });
      }
    } else {
      result = res.status(400).json({
        message: '账户或密码错误，请重新输入',
      });
    }
    return result;
  },
  'POST /api/account/uploadAvatar': function (req, res) {
    return res.json({
      avatarUrl: '/1.jpg'
    })
  },
  'GET /api/account/userinfo': userinfo,
  'PUT /api/account/userinfo': function (req, res) {
    for (let item of Object.getOwnPropertyNames(userinfo)) {
      if (req.body[item]) {
        userinfo[item] = req.body[item]
      }
    }
    return res.json(userinfo)
  },
  'GET /api/goods': function (req, res) {
    const { page = 1, size = 10 } = req.query || {};
    return res.json({
      total: allGoods.length,
      results: allGoods.slice(size * (page - 1), size * page),
    });
  },
  'GET /api/goods/:goodsId': function (req, res) {
    let result = allGoods.find(item => item.id === req.params.goodsId);
    if (!result) {
      return res.status(400).json({
        message: '该商品不存在',
      })
    } else {
      return res.json(result);
    }
  },
  'DELETE /api/goods/:goodsId': function (req, res) {
    const targetIndex = allGoods.findIndex(item => item.id === req.params.goodsId);
    if (targetIndex === -1) {
      return res.status(400).json({
        message: '该商品不存在',
      })
    } else {
      allGoods.splice(targetIndex, 1);
      return res.json(allGoods);
    }
  },
  'PUT /api/goods/:goodsId': function (req, res) {
    const targetIndex = allGoods.findIndex(item => item.id === req.params.goodsId);
    if (targetIndex === -1) {
      return res.status(400).json({
        message: '该商品不存在',
      })
    } else {
      allGoods[targetIndex] = {
        ...allGoods[targetIndex],
        ...req.body,
      }
      return res.json(allGoods);
    }
  },
}
