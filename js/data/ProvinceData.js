/**
 * Created by WangDunWen on 2016/10/10.
 */
define(function(){
    var provinceData = function (){
    };
    provinceData.prototype.getProvinceData = function (){
        var province = [];
        province = [
            {
                id: 1,
                name: "北京",
                word: "beijing",
                value: [
                    116.4551,
                    40.2539
                ]
            },
            {
                id: 2,
                name: "上海",
                word: "shanghai",
                value: [
                    121.4648,
                    31.2891
                ]
            },
            {
                id: 3,
                name: "江苏",
                word: "jiangsu",
                value: [
                    120.0586,
                    32.915
                ]
            },
            {
                id: 4,
                name: "澳门",
                word: "aomen",
                value: [
                    113.5547,
                    22.1484
                ]
            },
            {
                id: 5,
                name: "香港",
                word: "xianggang",
                value: [
                    114.2578,
                    22.3242
                ]
            },
            {
                id: 6,
                name: "台湾",
                word: "taiwan",
                value: [
                    121.0254,
                    23.5986
                ]
            },
            {
                id: 7,
                name: "新疆",
                word: "xinjiang",
                value: [
                    84.9023,
                    41.748
                ]
            },
            {
                id: 8,
                name: "西藏",
                word: "xizang",
                value: [
                    88.7695,
                    31.6846
                ]
            },
            {
                id: 9,
                name: "内蒙古",
                word: "neimenggu",
                value: [
                    117.5977,
                    44.3408
                ]
            },
            {
                id: 10,
                name: "青海",
                word: "qinghai",
                value: [
                    96.2402,
                    35.4199
                ]
            },
            {
                id: 11,
                name: "四川",
                word: "sichuan",
                value: [
                    102.9199,
                    30.1904
                ]
            },
            {
                id: 12,
                name: "黑龙江",
                word: "heilongjiang",
                value: [
                    128.1445,
                    48.5156
                ]
            },
            {
                id: 13,
                name: "甘肃",
                word: "gansu",
                value: [
                    95.7129,
                    40.166
                ]
            },
            {
                id: 14,
                name: "云南",
                word: "yunnan",
                value: [
                    101.8652,
                    25.1807
                ]
            },
            {
                id: 15,
                name: "广西",
                word: "guangxi",
                value: [
                    108.2813,
                    23.6426
                ]
            },
            {
                id: 16,
                name: "湖南",
                word: "hunan",
                value: [
                    111.5332,
                    27.3779
                ]
            },
            {
                id: 17,
                name: "陕西",
                word: "shan3xi",
                value: [
                    109.5996,
                    35.6396
                ]
            },
            {
                id: 18,
                name: "广东",
                word: "guangdong",
                value: [
                    113.4668,
                    22.8076
                ]
            },
            {
                id: 19,
                name: "吉林",
                word: "jilin",
                value: [
                    126.4746,
                    43.5938
                ]
            },
            {
                id: 20,
                name: "河北",
                word: "hebei",
                value: [
                    115.4004,
                    37.9688
                ]
            },
            {
                id: 21,
                name: "湖北",
                word: "hubei",
                value: [
                    112.2363,
                    31.1572
                ]
            },
            {
                id: 22,
                name: "贵州",
                word: "guizhou",
                value: [
                    106.6113,
                    26.9385
                ]
            },
            {
                id: 23,
                name: "山东",
                word: "shandong",
                value: [
                    118.7402,
                    36.4307
                ]
            },
            {
                id: 24,
                name: "江西",
                word: "jiangxi",
                value: [
                    116.0156,
                    27.29
                ]
            },
            {
                id: 25,
                name: "河南",
                word: "henan",
                value: [
                    113.4668,
                    33.8818
                ]
            },
            {
                id: 26,
                name: "辽宁",
                word: "liaoning",
                value: [
                    122.3438,
                    41.0889
                ]
            },
            {
                id: 27,
                name: "山西",
                word: "shan1xi",
                value: [
                    112.4121,
                    37.6611
                ]
            },
            {
                id: 28,
                name: "安徽",
                word: "anhui",
                value: [
                    117.2461,
                    32.0361
                ]
            },
            {
                id: 29,
                name: "福建",
                word: "fujian",
                value: [
                    118.3008,
                    25.9277
                ]
            },
            {
                id: 30,
                name: "浙江",
                word: "zhejiang",
                value: [
                    120.498,
                    29.0918
                ]
            },
            {
                id: 31,
                name: "重庆",
                word: "chongqing",
                value: [
                    107.7539,
                    30.1904
                ]
            },
            {
                id: 32,
                name: "宁夏",
                word: "ningxia",
                value: [
                    105.9961,
                    37.3096
                ]
            },
            {
                id: 33,
                name: "海南",
                word: "hainan",
                value: [
                    109.9512,
                    19.2041
                ]
            },
            {
                id: 34,
                name: "天津",
                word: "tianjin",
                value: [
                    117.4219,
                    39.4189
                ]
            },
            {
                id: 35,
                name: "北京站",
                word: "beijing",
                value: [
                    116.4250,
                    39.9049
                ]
            },
            {
                id: 36,
                name: "北京南站",
                word: "beijing",
                value: [
                    116.3767,
                    39.8651
                ]
            },
            {
                id: 37,
                name: "北京西站",
                word: "beijing",
                value: [
                    116.3189,
                    39.8948
                ]
            },
            {
                id: 38,
                name: "北京北站",
                word: "beijing",
                value: [
                    116.3517,
                    39.9429
                ]
            },
            {
                id: 39,
                name: "北京动物园",
                word: "beijing",
                value: [
                    116.3373,
                    39.9387
                ]
            },
            {
                id: 40,
                name: "北京大学",
                word: "beijing",
                value: [
                    116.3036,
                    39.9869
                ]
            },
            {
                id: 41,
                name: "北京首都国际机场",
                word: "beijing",
                value: [
                    116.6009,
                    40.0798
                ]
            },
        ];
        return province;
    }
    return provinceData;
})