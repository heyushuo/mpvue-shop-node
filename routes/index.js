/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/heyushuo'
})
const controllers = require('../controllers')

//================================================================自己的接口

//首页数据
//1.首页
router.get('/index/index', controllers.home.index)
//2.首页品牌制造商直供的详情内的列表数据
router.get('/brand/listaction', controllers.brand.index.listAction)
//3.首页品牌制造商直供的详情数据
router.get('/brand/detailaction', controllers.brand.index.detailAction)


/**
 *  分类
 */
//1.分类和子类
router.get('/category/indexaction', controllers.category.index.indexAction)
//2.通过分类的id来查询子类接口
router.get('/category/currentaction', controllers.category.index.currentAction)
//3.获取导航数据
router.get('/category/categoryNav', controllers.category.index.categoryNav)


/**
 *  商品相关接口
 */
//1.商品详情接口
router.get('/goods/detailaction', controllers.goods.index.detailAction)
//2.获取商品列表
router.get('/goods/goodsList', controllers.goods.index.goodsList)


/**
 *  专题接口
 */
//1.列表
router.get('/topic/listaction', controllers.topic.index.listAction)
//2.详情加下方四个专题推荐
router.get('/topic/detailaction', controllers.topic.index.detailAction)


/**
 * 搜索相关接口
 */
//1.关键词和搜索历史接口
router.get('/search/indexaction', controllers.search.index.indexAction)
//2.搜索提示接口
router.get('/search/helperaction', controllers.search.index.helperAction)
//3.搜索的关键词添加到数据库
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
//4.清空搜索历史
router.post('/search/clearhistoryAction', controllers.search.index.clearhistoryAction)


/**
 *  收藏相关接口
 */
//1.添加收藏
router.post('/collect/addcollect', controllers.collect.index.addCollect)
//2.获取收藏列表
router.get('/collect/listAction', controllers.collect.index.listAction)
//2.获取收藏列表
router.get('/collect/deleteCollect', controllers.collect.index.deleteCollect)

/**
 *  购物车相关接口
 */
//1.添加购物车
router.post('/cart/addCart', controllers.cart.index.addCart)
//2.购物车列表
router.get('/cart/cartList', controllers.cart.index.cartList)
//3.删除商品
router.get('/cart/deleteAction', controllers.cart.index.deleteAction)


/**
 *  订单相关
 */
router.post('/order/submitAction', controllers.order.index.submitAction)

router.get('/order/detailAction', controllers.order.index.detailAction)
/**
 *  收货地址相关接口
 */
//1.保存和跟新收货地址
router.post('/address/saveAction', controllers.address.index.saveAction)
//2.获取收货地址列表
router.get('/address/getListAction', controllers.address.index.getListAction)
//3.获取收货地址详情
router.get('/address/detailAction', controllers.address.index.detailAction)
//4.删除收货地址
router.get('/address/deleteAction', controllers.address.index.deleteAction)


/**
 *  意见反馈
 */
router.post('/feedback/submitAction', controllers.feedback.index.submitAction)

module.exports = router