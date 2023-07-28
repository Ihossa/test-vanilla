export enum TODO_STATUS {
  PLAN = "plan",
  DONE = "done",
  PROCESS = "process",
}

export const STATUS_OPTION = [
  {
    label: "Plan",
    value: TODO_STATUS.PLAN,
  },
  {
    label: "Done",
    value: TODO_STATUS.DONE,
  },
  {
    label: "Process",
    value: TODO_STATUS.PROCESS,
  },
];
