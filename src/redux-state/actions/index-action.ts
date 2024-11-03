import { ActionType } from "../action-types/action-type-enum";



interface SearchRepositoriesAction {

    type :ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {

    type :ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload:string[]
}
interface SearchRepositoriesFailAction {

    type :ActionType.SEARCH_REPOSITORIES_ERROR;
    payload:string
}

export type Action =SearchRepositoriesAction | SearchRepositoriesSuccessAction |SearchRepositoriesFailAction;
 