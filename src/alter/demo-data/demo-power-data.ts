// 动态路由的模拟数据

export default {
  code: 0,
  msg: '操作成功',
  data: {
    userId: 5513,
    navTreeVOList: [
      {
        navId: 208,
        navCode: 'xxx',
        navName: '指标平台',
        navDesc: 'A',
        navSeq: 0,
        sysId: 10000043,
        parentNavId: 0,
        linkUrl: 'http://10.255.144.70/indicator_platform_web/#/',
        childList: [
          {
            navId: 328,
            navCode: 'demo',
            navName: '多级路由示例',
            navDesc: 'D',
            navSeq: 0,
            sysId: 10000043,
            parentNavId: 208,
            linkUrl: '/demo',
            childList: [
              {
                navId: 329,
                navCode: 'searchListPage',
                navName: '列表demo4',
                navDesc: 'M',
                navSeq: 0,
                sysId: 10000043,
                parentNavId: 328,
                linkUrl: '/demo/search-list-page',
                childList: [
                  {
                    navId: 330,
                    navCode: 'listDetail',
                    navName: '详情页面',
                    navDesc: 'M',
                    navSeq: 0,
                    sysId: 10000043,
                    parentNavId: 329,
                    linkUrl: '/list-detail',
                    childList: [
                      {
                        navId: 331,
                        navCode: 'detail2',
                        navName: '详情页面2',
                        navDesc: 'M',
                        navSeq: 0,
                        sysId: 10000043,
                        parentNavId: 330,
                        linkUrl: 'detail2',
                        childList: [
                          {
                            navId: 332,
                            navCode: 'detail3',
                            navName: '详情页面3',
                            navDesc: 'M',
                            navSeq: 0,
                            sysId: 10000043,
                            parentNavId: 331,
                            linkUrl: 'detail3',
                            resCode: 'detail3'
                          }
                        ],
                        resCode: 'detail2'
                      },
                      {
                        navId: 333,
                        navCode: 'detail4',
                        navName: '详情页面4',
                        navDesc: 'M',
                        navSeq: 0,
                        sysId: 10000043,
                        parentNavId: 330,
                        linkUrl: 'detail4',
                        childList: [
                          {
                            navId: 334,
                            navCode: 'detail5',
                            navName: '详情页面5',
                            navDesc: 'M',
                            navSeq: 0,
                            sysId: 10000043,
                            parentNavId: 333,
                            linkUrl: 'detail5',
                            resCode: 'detail5'
                          }
                        ],
                        resCode: 'detail4'
                      }
                    ],
                    resCode: 'listDetail'
                  }
                ],
                resCode: 'searchListPage'
              },
              {
                navId: 335,
                navCode: 'treeSearchPage',
                navName: '左树右列表',
                navDesc: 'M',
                navSeq: 0,
                sysId: 10000043,
                parentNavId: 328,
                linkUrl: 'tree-search-page',
                resCode: 'treeSearchPage'
              }
            ],
            resCode: 'demo'
          },
          {
            navId: 336,
            navCode: 'demo2',
            navName: '左树右列表demo',
            navDesc: 'D',
            navSeq: 0,
            sysId: 10000043,
            parentNavId: 208,
            linkUrl: '/demo2',
            childList: [
              {
                navId: 337,
                navCode: 'treeSearchPage',
                navName: '左树右列表',
                navDesc: 'M',
                navSeq: 0,
                sysId: 10000043,
                parentNavId: 336,
                linkUrl: 'tree-search-page',
                resCode: 'treeSearchPage'
              }
            ],
            resCode: 'demo2'
          },
          {
            navId: 338,
            navCode: 'demo3',
            navName: '内嵌页面demo',
            navDesc: 'D',
            navSeq: 0,
            sysId: 10000043,
            parentNavId: 208,
            linkUrl: '/demo3',
            childList: [
              {
                navId: 339,
                navCode: 'iframePage',
                navName: '内嵌页面',
                navDesc: 'M',
                navSeq: 0,
                sysId: 10000043,
                parentNavId: 338,
                linkUrl: 'iframe-page',
                resCode: 'iframePage'
              }
            ],
            resCode: 'demo3'
          }
        ],
        resCode: 'indicatorPlatform'
      }
    ]
  }
}
