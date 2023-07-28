import {STATUS_OPTION, TODO_STATUS} from "../../constants/todo";
import styles from "./select.module.scss"

export interface IOptionSelect {
    label: string;
    value: TODO_STATUS
}

export const Select = (status: TODO_STATUS = TODO_STATUS.PLAN, options:IOptionSelect[] = STATUS_OPTION) => {


    const layoutOption = options.reduce((acc, currentValue) => {
        return (
            acc += `<option ${status === currentValue.value && 'selected'} value="${currentValue.value}" >${currentValue.label}</option>`
        )}, '')


    return (
      `<select class="${styles.select}">
         ${layoutOption}
      </select>`
    )

}
