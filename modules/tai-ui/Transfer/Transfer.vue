<template>
  <div>
    <div>
      <select @change="setTargetIndex($event.target.value)">
        <option v-for="(title, index) of options" :key="index" :value="index">
          {{ title }}
        </option>
      </select>
    </div>
    <div class="transfer">
      <div class="box left-list" @dragover.prevent @drop="removeRightListData([dragedItem])">
        <h1 class="list-title">{{ leftTitle }}</h1>
        <list-item
          :data="leftListData"
          left-or-right="left"
          @checkboxClick="setCheckedData"
          @drag-item="setDragItem"
        />
      </div>
      <button-group
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @leftButtonClick="removeRightListData(checkedData.right)"
        @rightButtonClick="addRightListData(checkedData.left)"
      />
      <div class="box right-list" @dragover.prevent @drop="addRightListData([dragedItem])">
        <h1 class="list-title">{{ rightTitle }}</h1>
        <list-item
          :data="rightListData"
          left-or-right="right"
          @checkbox-click="setCheckedData"
          @drag-item="setDragItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ListItem from "./components/ListItem.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import propsDefination from "./extends/props";
import {
  useTargetIndex,
  useCheckedData,
  useRightListData,
  useDragItem,
  useComputedData,
} from "./extends/hook";

const [targetIndex, setTargetIndex] = useTargetIndex(0);
const { checkedData, addCheckedData, removeCheckedData } = useCheckedData();
const { rightListData, addRightListData, removeRightListData } =
  useRightListData([], checkedData);
const { dragedItem, setDragItem } = useDragItem()
const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);

console.log("transferButtonDisabled0--", transferButtonDisabled);
const props = defineProps(propsDefination);
console.log("right title---", props.rightTitle, props);
const options = props.data.map(({ title }) => title);

const setCheckedData = (checked, leftOrRight, item) => {
  // console.log('e---', checked)
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
};
</script>

<style lang="scss" scoped>
.transfer {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;
  .box {
    width: 120px;
    height: 100%;
    .list-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      font-weight: normal;
      margin: 0;
      color: #666;
      border-bottom: 1px solid #ddd;
      background-color: #efefef;
      font-size: 14px;
    }
  }
}
</style>