export enum LJTaskState {
    // 准备
    prepared = "未开启",
    // 开始
    begined = "已开始",
    // 结束
    ended = "已结束",
    // 失效
    canceled = "已失效",
}

export class LJTask {
    name: string;
    startTime: string;
    endTime: string;
    taskState: LJTaskState;
    constructor(name: string, startTime: string, endTime: string, state: LJTaskState) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.taskState = state;
    }

}

