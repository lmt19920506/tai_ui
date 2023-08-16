<template>
  <div>
      <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="main_container">
          <div ref="scrollContainer" class="scroll_container">
              <div v-for="item in listData" :key="item.id" class="scroll_item">
                  <span>{{ item.name }}</span>
              </div>
          </div>
      </div>
  </div>
</template>


<script setup>
    import {reactive, ref, onMounted, onBeforeUnmount, onUnmounted, nextTick} from 'vue'

    let timer = ref(null)
    let scrollContainer = ref(null)
    let listData = reactive([
        {name: 'dom第一个'},
        {name: 'dom第二个'},
        {name: 'dom第三个'},
        {name: 'dom第四个'},
        {name: 'dom第五个'},
        {name: 'dom第六个'},
        {name: 'dom第七个'},
        {name: 'dom第八个'},
        {name: 'dom第九个'},
        {name: 'dom第十个'},
    ])
    start()
    // 注：示例中的 listData 写的是静态数据，可以直接调用 start()
    // 如果是接口获取 listData 列表时，需要在 nextTick 中调用 start()
    // 否则，进入页面不会滚动。必须鼠标移入移出才会滚动
    // 用 nextTick 的原因是需要等 dom 元素加载完毕后再执行方法
    
    // let chartData = reactive({
    //     data: []
    // })
    // function getSensorData() {
    //     GetSensorData().then(res=> {
    //         chartData.data = res.data.data
    //         nextTick(()=>{
    //             start()
    //         })
    //     })
    // }
    
    // onMounted(()=> {
    //     getSensorData()
    // })

    onBeforeUnmount(()=>{
        clearTimeout(timer.value)
    })
    onUnmounted(()=>{
        clearTimeout(timer.value)
    })

    function handleMouseEnter() {
        clearTimeout(timer.value)
    }
    function handleMouseLeave() {
        start()
    }
    // 开启定时器
    function start() {
        clearTimeout(timer.value)
        // 定时器触发周期
        let speed = ref(25)
        timer.value = setInterval(ListScroll, speed.value)
    }
    function ListScroll() {
        let scrollDom = scrollContainer.value
        // console.log('scroll dom---', scrollDom)
        // 判读组件是否渲染完成
        if(scrollDom.offsetHeight == 0) {
            scrollDom = scrollContainer.value
        }else {
            // 如果列表数量过少不进行滚动
            if(scrollDom.children.length < 4) {
                clearTimeout(timer.value)
                return
            }
            // 组件进行滚动
            scrollDom.scrollTop += 1
            // 判断是否滚动到底部
            if(scrollDom.scrollTop == (scrollDom.scrollHeight - scrollDom.clientHeight)) {
                // 获取组件第一个节点
                let first = scrollDom.children[0]
                // 删除节点
                scrollDom.removeChild(first)
                // 将该节点拼接到组件最后
                scrollDom.append(first)
            }
        }
    }  
</script>


<style lang="scss" scoped>
    .main_container {
        width: 700px;
        height: 500px;
        margin-left: 500px;
        margin-top: 200px;
        background-color: #fff;
        padding: 20px;
        .scroll_container {
            width: 100%;
            height: 100%;
            overflow: hidden;
            overflow-y: scroll;
            .scroll_item {
                height: 90px;
                margin-bottom: 10px;
                background-color: skyblue;
            }
        }
    }
</style>

