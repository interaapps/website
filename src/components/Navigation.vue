<template>
    <div id="navigation" :class="{small: smallNavURLs.includes($route.fullPath) || scrolled, 'dont-show-on-top': dontShowOnTop.includes($route.fullPath) && !scrolledPhone, dark: $route.meta.darkNavigation}">
        <router-link id="logo" to="/">
            <svg width="2000" height="2000" viewBox="0 0 2000 2000" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M954.5 115.6C893.7 118.8 818.3 130.9 762.4 146.5C684.2 168.3 616.8 197 546.5 238.3C481.8 276.3 411.7 332.2 361.4 385.8C288.3 463.5 235.7 543.4 193.2 641C152.4 734.6 127.6 841.8 120 956.5C119.4 965.8 118.4 979.5 117.9 986.9C117.1 996.3 117.1 1004.5 117.9 1013.9C118.5 1021.4 119.4 1034.9 120 1044C122.5 1081.6 128.7 1133.3 134.6 1164.5C154.1 1268.4 182.9 1349 234.5 1443.4C256.4 1483.6 268.3 1502.3 293 1535.5C378.7 1650.5 492.3 1743.7 618.6 1802.6C656.3 1820.2 672.8 1826.9 717.5 1842.7C765.5 1859.7 796 1867.8 843 1875.9C901.3 1886 909.2 1886.5 1000.5 1886.5C1091.6 1886.5 1101 1885.9 1160.5 1875.5C1191.9 1870 1214.2 1864.6 1235 1857.5C1243.5 1854.6 1265.1 1847.3 1283 1841.2C1300.9 1835.1 1322.9 1827.2 1331.9 1823.5C1404.5 1794.1 1470.6 1756.9 1531.6 1711.2C1581.8 1673.6 1620.1 1637.5 1667.6 1583C1746.9 1492.1 1809.8 1376.1 1843.9 1257.5C1863.5 1189.2 1874.7 1123.8 1880 1045.5C1880.6 1036.7 1881.5 1023 1882.1 1015.1C1882.9 1004.7 1882.9 996.5 1882.1 985.1C1881.4 976.5 1880.5 963 1879.9 955C1876.4 903.7 1874.9 891.7 1859.4 795C1852.8 753.5 1832.3 689.4 1808.4 635C1800.5 617.1 1779.8 574.9 1772 561C1746.4 515.2 1719 474.5 1699.4 453C1695.2 448.3 1687 438.9 1681.3 432C1623.7 363.1 1564.8 309.6 1495.1 262.6C1475.6 249.5 1462.6 241.9 1422.3 220.1C1326.7 168.4 1220.2 134.7 1111 121.5C1070.5 116.6 1057.4 115.9 1009 115.6C982.9 115.4 958.4 115.4 954.5 115.6ZM1045.5 246C1080.8 248.3 1102 251.1 1102 253.6C1102 255.1 1100.1 255.7 1077.5 261.4C1034.7 272 971 292.5 932.3 307.9C866.9 334 827.9 352.4 770.8 384.2C669.1 440.7 582.3 506.9 510.9 582.6C463.4 632.8 437.3 665.4 401.3 719.5C357.9 784.6 320.7 861 290.6 946.5C280.8 974.3 264.6 1031.9 256.4 1067.8C252.7 1084 249.5 1094 247.9 1094C247.4 1094 246.5 1092.8 246 1091.4C245.4 1089.8 245 1054.4 245 997.5C245 896.1 244.7 901.4 252 862.5C267.7 778.6 299.7 695 344.8 620C398.9 530.1 462 460.5 549.1 394.8C660.9 310.6 804 256.8 942 247.1C950.5 246.5 959.3 245.8 961.5 245.6C971.8 244.8 1031.3 245.1 1045.5 246ZM1388.6 359C1392.5 359.5 1398.2 360.9 1401.4 362C1411.5 365.8 1441.8 386.9 1473.2 411.8C1516.4 446.2 1550.7 479.8 1589.4 525.9C1614 555.2 1619.8 562.6 1631.9 580.5C1671.1 638.4 1697.3 689.8 1720.6 754.4C1726 769.4 1727.1 774.9 1724.7 776.8C1724 777.4 1712.7 781.4 1699.5 785.8C1633.3 807.9 1583 831.5 1519 870.8C1464.1 904.4 1402.6 953.4 1353.5 1002.5C1306.2 1049.8 1259.9 1108.4 1230.6 1157.9C1174.9 1252 1143.5 1342.8 1128.6 1453C1125.7 1474.2 1123.7 1495.9 1121.5 1531.5C1120.6 1545.2 1119.7 1557.6 1119.4 1558.8C1119.1 1560.1 1119.6 1570.2 1120.4 1581.3C1121.2 1592.4 1122.6 1611.4 1123.5 1623.5C1125.8 1654.9 1129.8 1687 1135 1714.5C1136.2 1720.5 1137.8 1729.2 1138.7 1733.8C1140.9 1745.5 1141.4 1745.1 1117 1748.9C1077.9 1754.9 1060.7 1756 1001 1756C953.4 1756 928.7 1755 905 1751.9C856.1 1745.7 816.3 1736.5 772.5 1721.5C725.3 1705.3 701.8 1695.6 663 1676.4C635.1 1662.6 613 1649.8 584 1630.5C519.6 1587.7 463 1537.4 416.3 1481.5C391.6 1451.9 357.2 1403.3 355 1394.9C354.3 1392.3 354 1360.1 354.3 1297.2L354.6 1203.5L357.8 1183C366.2 1128.4 376.2 1085.3 393 1030.5C413.4 964.1 446.6 889.5 480.3 834.5C502.2 798.7 522.3 770 547 739.1C568.7 712 584.5 694.5 612.5 666.4C677.6 601.3 753.4 544.8 839.5 497.5C945.4 439.3 1049.5 400.1 1157 378.1C1202 368.9 1262.2 361.5 1310.5 359.1C1333.4 358 1380.2 357.9 1388.6 359ZM1755.1 910.7C1755.7 912.4 1756 945.1 1755.7 1005.4C1755.4 1095.2 1755.4 1097.8 1753.2 1111.5C1737.3 1210.3 1702.7 1304.3 1651.7 1387C1625.2 1429.9 1602.8 1460.1 1567.5 1500.5C1516.6 1558.8 1446.5 1615.8 1376.2 1656.1C1336.3 1678.9 1272.7 1708 1262.5 1708C1257.9 1708 1256.7 1705.6 1253.6 1689.9C1247 1657.1 1247 1657.7 1247 1564.3C1247 1470.5 1246.9 1472.4 1253.5 1437.4C1267.9 1361.5 1299.1 1286.7 1346.4 1215C1356.7 1199.4 1381.4 1166.5 1395.2 1150C1432.8 1105.2 1486.6 1055.6 1540.5 1016.1C1596.1 975.3 1657.2 942 1718 919.2C1752.8 906.2 1753.3 906.1 1755.1 910.7Z" fill="#4542F4"/></svg>
            <span :style='{opacity: hideNavTitleTop ? 0 : 1 }' :class="{'hide-me-950px' : !$store.state.auth.loggedIn || $store.state.navTitle.length > 15}">{{$store.state.navTitle}}</span>
        </router-link>

        <div id="links">
            <template v-for="(url, i) of urls">
                <a v-if="url.type=='A'" :key="'nav-'+i+url.text+url.type+url.url" :class="{'link':true, 'hide-me-720px': url.hideOnMobile}" :href="url.url">{{url.text}}</a>
                <router-link v-else :key="'nav-'+i+url.text+url.type+url.url" :class="{'link':true, 'hide-me-720px': url.hideOnMobile}" :to="url.url">{{url.text}}</router-link>
            </template>

            <a v-if="showUser"
                :id="$store.state.auth.loggedIn ? 'user' : 'accounts-link'" 
                :style='{filter: $store.state.auth.loading ? "blur(2px)" : ""}'
                href="https://accounts.interaapps.de">
                <template v-if="$store.state.auth.loggedIn">
                    <span class="hide-me-720px">{{$store.state.auth.user.name}}</span>
                    <img :src="$store.state.auth.user.profile_picture" alt="">
                </template>
                <template v-else>
                    My Account
                </template>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data: ()=>({
        scrolled: false,
        scrolledPhone: false,
        smallNavURLs: [
            '/darkmode'
        ],
        dontShowOnTop: [
            "/"
        ],
        showUser: true,
        urls: [
            {
                type: 'A',
                text: 'Blog',
                url: 'https://quotysco.eu/InteraApps',
                hideOnMobile: true
            },
            {
                type: 'A',
                text: 'GitHub',
                url: 'https://github.com/interaapps',
                hideOnMobile: true
            },
            {
                type: 'router-link',
                text: 'Projects',
                url: '/projects',
                hideOnMobile: true
            },
        ],
        hideNavTitleTop: false
    }),
    watch: {
        $route(){
            this.hideNavTitleTop = this.$route.meta.hideNavTitleTop
        }
    },
    mounted(){
        this.hideNavTitleTop = this.$route.meta.hideNavTitleTop
        window.onscroll = ()=>{
            if (window.scrollY > 50 && window.innerWidth >= 720) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
            if (window.scrollY > 50) {
                this.scrolledPhone = true;
            } else {
                this.scrolledPhone = false;
            }
            if (this.$route.meta.hideNavTitleTop) {
                console.log( this.hideNavTitleTop);
                if (window.scrollY > 300) {
                    this.hideNavTitleTop = false;
                } else {
                    this.hideNavTitleTop = true;
                }
            }
        }
    },
    methods: {
        setUrls(urls){
            this.urls = urls
        }
    }
}
</script>
<style lang="scss" scoped>
    #navigation {
        position: fixed;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        z-index: 1000;
        max-width: 1320px;
        width: 100%;
        padding: 10px;
        backdrop-filter: blur(3px);
        border-radius: 10px;
        

        #logo,
        #logo:visited {
            margin-top: 3px;
            margin-bottom: 6px;
            display: inline-block;
            svg {
                width:  46px;
                height: 46px;
                vertical-align: middle;
            }

            span {
                margin-left: 14px;
                font-size: 23px;
                vertical-align: middle;
                font-weight: 500;
                transition: 0.4s;
            }
            color: #4542F4;
            text-decoration: none;

        }

        #links {
            float: right;
            font-size: 18px;
            margin-top: 5px;

            .link {
                margin-right: 20px;
                color: #434343;
                text-decoration: none;
                padding: 10px;
            }

            .link:hover {
                color: #2c2c2c;
            }

            #accounts-link {
                border-radius: 10px;
                background: #4542F4;
                padding: 8px 18px;
                color: #FFF;
                text-decoration: none;
                margin-top: 4px;
                display: inline-block;
            }            

            #accounts-link:hover {
                background: #3835c7;
            }

            #user {
                display: inline-block;
                padding: 5px 10px;
                border-radius: 10px;
                color: #989898;
                
                img {
                    display: inline-block;
                    vertical-align: middle;
                    height: 35px;
                    width:  35px;
                    object-fit: cover;
                    background-color: #FFF;
                    border-radius: 100px;
                    border: #dfdfdf solid 2px;
                }
                span {
                    margin-right: 10px;
                    vertical-align: middle;
                    display: inline-block;
                }
                &:hover {
                    background: #00000008;
                }
            }
        }

        transition: 0.3s, padding 0s;
        &.dark {
            #links {
                .link {
                    color: #ffffff;
                }

                .link:hover {
                    color: #dbdbdb;
                }
                #user {
                    color: #DDD;
                    &:hover {
                        background: #FFFFFF08;
                    }
                }
            }
        }

    }

    #navigation.small {
        padding: 10px;
        z-index: 1000;
        background: #EEEEEEBF;
        backdrop-filter: blur(7px);
        #links {
            opacity: 1;
        }

        #logo {
            background: transparent; 
            backdrop-filter: none;
            padding: 0px;
            margin-left: 0px;
            span {
                display: inline;
            }
        }
        top: 20px;

        &.dark {
            background: #00000043;
        }
    }

    #navigation.dont-show-on-top {
        background: #00000000;
    }

    @media screen and (max-width: 1280px) {
        #navigation {
            width: calc(100% - 40px);
            top: 20px;
        }
    }


    @media screen and (max-width: 720px) {
        #navigation {
            left: 0px;
            top: 0px;
            transform: translateX(0px);
            width: 100%;
            border-radius: 0px;
            background: #EEEEEEBF;
            &.dark {
                background: #00000043;
            }
        }

        #projects-button {
            display: none;
        }
    }
</style>