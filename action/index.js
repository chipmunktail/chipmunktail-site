/*
 * action 类型
 */

export const GET_MENU_LIST = 'GET_MENU_LIST';
export const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST'


/*
 * action 创建函数
 */

export function getMenuList() {
    return {type: GET_MENU_LIST}
}

export function getArticleList() {
    return {type: GET_ARTICLE_LIST}
}
