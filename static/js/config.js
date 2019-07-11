// 项目根路径
let baseUrl = '/DisplayProject/'
// let baseUrl = '/'
// let baseUrl = 'http://114.215.188.153:8100/'

let data =
    `
{
    "companyMsg": {
        "name": "深圳五洲雅高工程设计研究院有限公司",
        "year": "26 YEARS",
        "title": "Successful Experience in Architectural Design"
    },
    "companyIntroduction": "深圳五洲雅高工程设计研究院是由与加拿大Arcop设计集团设立在香港和深圳的设计机构- 雅高（中国）设计顾问有限公司及深圳雅高联合工程设计有限公司逐步发展形成，2014年初与中国五洲工程设计集团建立紧密战略合作关系- 结合自身国际化的创意能力和中国五洲强大的技术实力和专业背景为客户提供各全面的技术服务和更高品质的建筑作品。
五洲雅高擅长高级酒店、企业总部和城市综合体、高端住宅、旅游规划及城市设计，作为一家成功的国际化设计企业，五洲雅高重要的一点在于对待业主多样的需求和发展观念，不论项目大小和性质，都会竭尽全力理解业主的需求，为业主提供量身定做的整体解决方案。作为充满激情和创造力的建筑师团队，我们重视现代生活，时尚观念和业主的价值观，以丰富的工程经验和技术特长，使我们的作品以欢欣鼓舞的全新感受，融入当今的社会。五洲雅高的愿望，就是最大限度的提高项目的价值和品牌。",
    "typeList": [
        {
            "typeName": "全部",
            "projectList": [
                {
                    "projectName": "浏阳（长沙东）碧桂园高尔夫花园方案",
                    "imageLink": "{baseUrl}/static/images/GolfGarden.jpg",
                    "link": "http://localhost:63342/GolfGardenProject//index-v2.html"
                }
            ]
        },
        {
            "typeName": "酒店设计",
            "projectList": []
        },
        {
            "typeName": "居住建筑",
            "projectList": [
                {
                    "projectName": "浏阳（长沙东）碧桂园高尔夫花园方案",
                    "imageLink": "{baseUrl}/static/images/GolfGarden.jpg",
                    "link": "http://localhost:63342/GolfGardenProject//index-v2.html"
                }
            ]
        },
        {
            "typeName": "综合体",
            "projectList": []
        },
        {
            "typeName": "城市规划",
            "projectList": []
        },
        {
            "typeName": "室内设计",
            "projectList": []
        }
    ]
}
`

data = data.format({'baseUrl': baseUrl})

