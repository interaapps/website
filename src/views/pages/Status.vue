<template>
    <div class="contents">
        <div id="big-title">
            <h1>
                Status
            </h1>
        </div>
        <div v-if="incident" id="incident" :class="{[incident.style]: true}">
            <h3>{{incident.lastUpdatedDate}} • {{incident.style.toUpperCase()}}</h3>
            <h1>{{incident.title}}</h1>
            <p>
                {{incident.content}}
            </p>
        </div>
        <br><br><br>
        <div id="status-list">
            <div v-for="(monitor, i) of monitorList" :key="'monitor-'+i">
                <h1 style="margin-bottom: 20px; color: #545454; margin-left: 10px; margin-top: 50px;" v-if="monitor.name != 'Services'">{{monitor.name}}</h1>
                
                <div>
                    <div class="entry" v-for="(l, i) of monitor.monitorList" :key="'m-'+i">
                        <h1>
                            <span 
                                class="uptime-badge" 
                                v-if="uptimeList[l.id+'_24'] !== undefined"

                                :style="{'background-color': heartsbeats[l.id][heartsbeats[l.id].length-1].status == 1 ? '#5cdd8b32' : '#dc354532', color:  heartsbeats[l.id][heartsbeats[l.id].length-1].status == 1 ? '#5cdd8b' : '#dc3545'}"
                            >{{(uptimeList[l.id+"_24"]*100).toFixed(0)}}%</span>
                            <span>{{l.name}}</span>
                        </h1>

                        <div class="beats" v-if="heartsbeats[l.id]">
                            <div class="beat" v-for="(i) of heartsbeats[l.id] ? (new Array(heartsbeats[l.id].length > 30 ? 0 : 30 - heartsbeats[l.id].length)) : []" :key="i">
                                <span class="tooltip">no data</span>
                            </div>
                            <div class="beat" v-for="(beat, i) of max30rev(heartsbeats[l.id])" :key="i" :style="{'background-color': beat.status == 1 ? '#5cdd8b' : '#dc3545'}">
                                <span v-if="beat.status == 1" class="tooltip success">{{beat.ping}}ms</span>
                                <span v-else class="tooltip danger">{{beat.msg ? beat.msg : 'unavailable'}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Cajax } from 'cajaxjs'
const statusClient = new Cajax('https://api.status.interaapps.de/api/status-page')
export default {
    data: ()=>({
        monitorList: [],
        beats: [],
        heartsbeats: {},
        uptimeList: {},
        incident: null,
        timerId: 0
    }),
    async mounted(){
        for (let i = 30; i > 0; i--) {
            this.beats.push(i-1)
        }
        this.loadList()
        this.timerId = setInterval(()=>{
            this.heartbeat()
        }, 1000*60)
        this.heartbeat()
        statusClient.get("/incident")
            .then(res=>res.json())
            .then(res=>{
                this.incident = res.incident
            })
    },
    destroyed(){
        clearInterval(this.timerId)
    },
    methods: {
        loadList(){
            statusClient.get("/monitor-list")
                .then(res=>res.json())
                .then(res=>{
                    this.monitorList = res
                })
        },
        heartbeat(){
            statusClient.get("/heartbeat")
                .then(res=>res.json())
                .then(res=>{
                    this.heartsbeats = res.heartbeatList
                    this.uptimeList = res.uptimeList
                })
        },
        max30rev(arr){
            return arr.slice(arr.length-30, arr.length)
        }
    }
}
</script>
<style lang="scss" scoped>
#status-list {
    margin: -10px;
    .entry {
        cursor: default;
        position: relative;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 10px;
        h1 {
            font-size: 24px;
            color: #656565;
            display: inline-block;
            vertical-align: middle;
            span {
                vertical-align: middle;
                display: inline-block;
            }
            .uptime-badge {
                font-size: 20px;
                padding: 5px 10px;
                border-radius: 10px;
                background-color: #5cdd8b54;
                margin-right: 20px;
                text-align: center;
                width: 80px;
            }
        }
        .beats {
            position: absolute;
            text-align: right;
            display: inline-block;
            right: 10px;
            vertical-align: middle;
            margin-top: 7px;
            .beat {
                position: relative;
                display: inline-block;
                width: 5px;
                height: 18px;
                margin: 2px;
                border-radius: 10px;

                background-color: #AAA;

                .tooltip {
                    white-space: pre;
                    opacity: 0;
                    transition: 0.1s;
                    position: absolute;
                    bottom: 23px;
                    padding: 2px 4px;
                    min-width: 30px;
                    text-align: center;
                    background: #616161;
                    border-radius: 6px;
                    color: #FFF;
                    right: 50%;
                    transform: translateX(50%);
                    &.danger {
                        background: #dc3545;
                    }
                    &.success {
                        background: #5cdd8b;
                    }
                }
                &:hover {
                    .tooltip {
                        opacity: 1;
                        display: inline-block;
                    }
                }
                .tooltip:hover {
                    opacity: 0;
                }
            }
            @media screen and (max-width: 1020px) {
                position: initial;
                right: initial;
                display: block;
                margin-top: 20px;
                .beat {
                    width: calc((100% / 30) - 4px);
                    width: calc((100% / 30) - 4px);
                }
            }
        }
        &:hover {
            background-color: #00000006;
        }
    }
}

#incident {
    background-color: #00000009;
    border: #00000009 2px solid;
    padding: 15px;
    margin-top: 20px;
    border-radius: 10px;
    color: #323232;
    h3 {

    }
    h1 {
        font-size: 26px;
        font-weight: 600;
    }
    h3 {
        font-size: 17px;
        font-weight: 1000;
        margin-bottom: 4px;
        opacity: 0.5;
        float: right;
    }
    p {
        margin-top: 7px;
        font-size: 22px;
        opacity: 0.9;
    }
    &.danger {
        border-color: #dc354511;
        background-color: #dc354522;
        color: #dc3545
    }
    &.warning {
        border-color: #e9662a11;
        background-color: #e9662a22;
        color: #e9662a
    }
    &.info {
        border-color: #e9ad2a11;
        background-color: #e9ad2a22;
        color: #e9ad2a
    }
}

</style>